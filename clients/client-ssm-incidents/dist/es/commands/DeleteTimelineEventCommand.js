import { __extends } from "tslib";
import { DeleteTimelineEventInput, DeleteTimelineEventOutput } from "../models/models_0";
import { deserializeAws_restJson1DeleteTimelineEventCommand, serializeAws_restJson1DeleteTimelineEventCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a timeline event from an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTimelineEventCommandInput} for command's `input` shape.
 * @see {@link DeleteTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTimelineEventCommand = /** @class */ (function (_super) {
    __extends(DeleteTimelineEventCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTimelineEventCommand(input) {
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
    DeleteTimelineEventCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "DeleteTimelineEventCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTimelineEventInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTimelineEventOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTimelineEventCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteTimelineEventCommand(input, context);
    };
    DeleteTimelineEventCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteTimelineEventCommand(output, context);
    };
    return DeleteTimelineEventCommand;
}($Command));
export { DeleteTimelineEventCommand };
//# sourceMappingURL=DeleteTimelineEventCommand.js.map