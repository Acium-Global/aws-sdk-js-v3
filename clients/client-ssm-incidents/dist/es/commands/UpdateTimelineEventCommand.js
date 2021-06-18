import { __extends } from "tslib";
import { UpdateTimelineEventInput, UpdateTimelineEventOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateTimelineEventCommand, serializeAws_restJson1UpdateTimelineEventCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a timeline event. You can update events of type <code>Custom
 *             Event</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTimelineEventCommandInput} for command's `input` shape.
 * @see {@link UpdateTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTimelineEventCommand = /** @class */ (function (_super) {
    __extends(UpdateTimelineEventCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTimelineEventCommand(input) {
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
    UpdateTimelineEventCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "UpdateTimelineEventCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTimelineEventInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTimelineEventOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTimelineEventCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateTimelineEventCommand(input, context);
    };
    UpdateTimelineEventCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateTimelineEventCommand(output, context);
    };
    return UpdateTimelineEventCommand;
}($Command));
export { UpdateTimelineEventCommand };
//# sourceMappingURL=UpdateTimelineEventCommand.js.map