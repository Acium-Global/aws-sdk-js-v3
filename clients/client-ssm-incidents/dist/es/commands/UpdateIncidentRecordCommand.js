import { __extends } from "tslib";
import { UpdateIncidentRecordInput, UpdateIncidentRecordOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateIncidentRecordCommand, serializeAws_restJson1UpdateIncidentRecordCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update the details of an incident record. You can use this action to update an
 *             incident record from the defined chat channel. For more information about using actions
 *             in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateIncidentRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link UpdateIncidentRecordCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIncidentRecordCommand = /** @class */ (function (_super) {
    __extends(UpdateIncidentRecordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIncidentRecordCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    UpdateIncidentRecordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "UpdateIncidentRecordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIncidentRecordInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIncidentRecordOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIncidentRecordCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateIncidentRecordCommand(input, context);
    };
    UpdateIncidentRecordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateIncidentRecordCommand(output, context);
    };
    return UpdateIncidentRecordCommand;
}($Command));
export { UpdateIncidentRecordCommand };
//# sourceMappingURL=UpdateIncidentRecordCommand.js.map