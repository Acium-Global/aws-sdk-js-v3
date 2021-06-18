import { __extends } from "tslib";
import { GetTimelineEventInput, GetTimelineEventOutput } from "../models/models_0";
import { deserializeAws_restJson1GetTimelineEventCommand, serializeAws_restJson1GetTimelineEventCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a timeline event based on its ID and incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetTimelineEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTimelineEventCommandInput} for command's `input` shape.
 * @see {@link GetTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTimelineEventCommand = /** @class */ (function (_super) {
    __extends(GetTimelineEventCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTimelineEventCommand(input) {
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
    GetTimelineEventCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "GetTimelineEventCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTimelineEventInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetTimelineEventOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTimelineEventCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetTimelineEventCommand(input, context);
    };
    GetTimelineEventCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetTimelineEventCommand(output, context);
    };
    return GetTimelineEventCommand;
}($Command));
export { GetTimelineEventCommand };
//# sourceMappingURL=GetTimelineEventCommand.js.map