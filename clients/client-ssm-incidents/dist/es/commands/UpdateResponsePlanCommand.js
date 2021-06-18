import { __extends } from "tslib";
import { UpdateResponsePlanInput, UpdateResponsePlanOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateResponsePlanCommand, serializeAws_restJson1UpdateResponsePlanCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResponsePlanCommandInput} for command's `input` shape.
 * @see {@link UpdateResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResponsePlanCommand = /** @class */ (function (_super) {
    __extends(UpdateResponsePlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResponsePlanCommand(input) {
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
    UpdateResponsePlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "UpdateResponsePlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResponsePlanInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResponsePlanOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResponsePlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateResponsePlanCommand(input, context);
    };
    UpdateResponsePlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateResponsePlanCommand(output, context);
    };
    return UpdateResponsePlanCommand;
}($Command));
export { UpdateResponsePlanCommand };
//# sourceMappingURL=UpdateResponsePlanCommand.js.map