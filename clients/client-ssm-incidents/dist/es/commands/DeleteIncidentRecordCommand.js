import { __extends } from "tslib";
import { DeleteIncidentRecordInput, DeleteIncidentRecordOutput } from "../models/models_0";
import { deserializeAws_restJson1DeleteIncidentRecordCommand, serializeAws_restJson1DeleteIncidentRecordCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete an incident record from Incident Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteIncidentRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteIncidentRecordCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIncidentRecordCommand = /** @class */ (function (_super) {
    __extends(DeleteIncidentRecordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIncidentRecordCommand(input) {
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
    DeleteIncidentRecordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "DeleteIncidentRecordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIncidentRecordInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteIncidentRecordOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIncidentRecordCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteIncidentRecordCommand(input, context);
    };
    DeleteIncidentRecordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteIncidentRecordCommand(output, context);
    };
    return DeleteIncidentRecordCommand;
}($Command));
export { DeleteIncidentRecordCommand };
//# sourceMappingURL=DeleteIncidentRecordCommand.js.map