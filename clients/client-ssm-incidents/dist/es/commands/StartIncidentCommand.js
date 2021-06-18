import { __extends } from "tslib";
import { StartIncidentInput, StartIncidentOutput } from "../models/models_0";
import { deserializeAws_restJson1StartIncidentCommand, serializeAws_restJson1StartIncidentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used to start an incident from CloudWatch alarms, EventBridge events, or manually. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, StartIncidentCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, StartIncidentCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new StartIncidentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartIncidentCommandInput} for command's `input` shape.
 * @see {@link StartIncidentCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartIncidentCommand = /** @class */ (function (_super) {
    __extends(StartIncidentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartIncidentCommand(input) {
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
    StartIncidentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "StartIncidentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartIncidentInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartIncidentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartIncidentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartIncidentCommand(input, context);
    };
    StartIncidentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartIncidentCommand(output, context);
    };
    return StartIncidentCommand;
}($Command));
export { StartIncidentCommand };
//# sourceMappingURL=StartIncidentCommand.js.map