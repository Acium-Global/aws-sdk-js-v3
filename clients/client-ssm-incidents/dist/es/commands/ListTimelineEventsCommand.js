import { __extends } from "tslib";
import { ListTimelineEventsInput, ListTimelineEventsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListTimelineEventsCommand, serializeAws_restJson1ListTimelineEventsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists timeline events of the specified incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListTimelineEventsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListTimelineEventsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListTimelineEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTimelineEventsCommandInput} for command's `input` shape.
 * @see {@link ListTimelineEventsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTimelineEventsCommand = /** @class */ (function (_super) {
    __extends(ListTimelineEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTimelineEventsCommand(input) {
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
    ListTimelineEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "ListTimelineEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTimelineEventsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListTimelineEventsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTimelineEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTimelineEventsCommand(input, context);
    };
    ListTimelineEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTimelineEventsCommand(output, context);
    };
    return ListTimelineEventsCommand;
}($Command));
export { ListTimelineEventsCommand };
//# sourceMappingURL=ListTimelineEventsCommand.js.map