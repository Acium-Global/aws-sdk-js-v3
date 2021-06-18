import { __extends } from "tslib";
import { ListResponsePlansInput, ListResponsePlansOutput } from "../models/models_0";
import { deserializeAws_restJson1ListResponsePlansCommand, serializeAws_restJson1ListResponsePlansCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all response plans in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListResponsePlansCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListResponsePlansCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListResponsePlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResponsePlansCommandInput} for command's `input` shape.
 * @see {@link ListResponsePlansCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResponsePlansCommand = /** @class */ (function (_super) {
    __extends(ListResponsePlansCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResponsePlansCommand(input) {
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
    ListResponsePlansCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "ListResponsePlansCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResponsePlansInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListResponsePlansOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResponsePlansCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListResponsePlansCommand(input, context);
    };
    ListResponsePlansCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListResponsePlansCommand(output, context);
    };
    return ListResponsePlansCommand;
}($Command));
export { ListResponsePlansCommand };
//# sourceMappingURL=ListResponsePlansCommand.js.map