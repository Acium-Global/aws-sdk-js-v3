import { __extends } from "tslib";
import { ListIncidentRecordsInput, ListIncidentRecordsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListIncidentRecordsCommand, serializeAws_restJson1ListIncidentRecordsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all incident records in your account. Use this command to retrieve the Amazon
 *             Resource Name (ARN) of the incident record you want to update. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListIncidentRecordsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListIncidentRecordsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListIncidentRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIncidentRecordsCommandInput} for command's `input` shape.
 * @see {@link ListIncidentRecordsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIncidentRecordsCommand = /** @class */ (function (_super) {
    __extends(ListIncidentRecordsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIncidentRecordsCommand(input) {
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
    ListIncidentRecordsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "ListIncidentRecordsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIncidentRecordsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListIncidentRecordsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIncidentRecordsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListIncidentRecordsCommand(input, context);
    };
    ListIncidentRecordsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListIncidentRecordsCommand(output, context);
    };
    return ListIncidentRecordsCommand;
}($Command));
export { ListIncidentRecordsCommand };
//# sourceMappingURL=ListIncidentRecordsCommand.js.map