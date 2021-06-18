import { __extends } from "tslib";
import { DeleteResponsePlanInput, DeleteResponsePlanOutput } from "../models/models_0";
import { deserializeAws_restJson1DeleteResponsePlanCommand, serializeAws_restJson1DeleteResponsePlanCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified response plan. Deleting a response plan stops all linked
 *             CloudWatch alarms and EventBridge events from creating an incident with this response
 *             plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResponsePlanCommandInput} for command's `input` shape.
 * @see {@link DeleteResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResponsePlanCommand = /** @class */ (function (_super) {
    __extends(DeleteResponsePlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResponsePlanCommand(input) {
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
    DeleteResponsePlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "DeleteResponsePlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResponsePlanInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResponsePlanOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResponsePlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteResponsePlanCommand(input, context);
    };
    DeleteResponsePlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteResponsePlanCommand(output, context);
    };
    return DeleteResponsePlanCommand;
}($Command));
export { DeleteResponsePlanCommand };
//# sourceMappingURL=DeleteResponsePlanCommand.js.map