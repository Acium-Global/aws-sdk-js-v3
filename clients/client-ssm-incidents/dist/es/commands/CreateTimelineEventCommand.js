import { __extends } from "tslib";
import { CreateTimelineEventInput, CreateTimelineEventOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateTimelineEventCommand, serializeAws_restJson1CreateTimelineEventCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a custom timeline event on the incident details page of an incident record.
 *             Timeline events are automatically created by Incident Manager, marking key moment during an
 *             incident. You can create custom timeline events to mark important events that are
 *             automatically detected by Incident Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new CreateTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTimelineEventCommandInput} for command's `input` shape.
 * @see {@link CreateTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTimelineEventCommand = /** @class */ (function (_super) {
    __extends(CreateTimelineEventCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTimelineEventCommand(input) {
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
    CreateTimelineEventCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "CreateTimelineEventCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTimelineEventInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTimelineEventOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTimelineEventCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateTimelineEventCommand(input, context);
    };
    CreateTimelineEventCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateTimelineEventCommand(output, context);
    };
    return CreateTimelineEventCommand;
}($Command));
export { CreateTimelineEventCommand };
//# sourceMappingURL=CreateTimelineEventCommand.js.map