import { __extends } from "tslib";
import { ListRelatedItemsInput, ListRelatedItemsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListRelatedItemsCommand, serializeAws_restJson1ListRelatedItemsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all related items for an incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListRelatedItemsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListRelatedItemsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListRelatedItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link ListRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRelatedItemsCommand = /** @class */ (function (_super) {
    __extends(ListRelatedItemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRelatedItemsCommand(input) {
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
    ListRelatedItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "ListRelatedItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRelatedItemsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListRelatedItemsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRelatedItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRelatedItemsCommand(input, context);
    };
    ListRelatedItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRelatedItemsCommand(output, context);
    };
    return ListRelatedItemsCommand;
}($Command));
export { ListRelatedItemsCommand };
//# sourceMappingURL=ListRelatedItemsCommand.js.map