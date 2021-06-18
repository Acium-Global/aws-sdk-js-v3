import { __extends } from "tslib";
import { UpdateRelatedItemsInput, UpdateRelatedItemsOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateRelatedItemsCommand, serializeAws_restJson1UpdateRelatedItemsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add or remove related items from the related items tab of an incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateRelatedItemsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateRelatedItemsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateRelatedItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link UpdateRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRelatedItemsCommand = /** @class */ (function (_super) {
    __extends(UpdateRelatedItemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRelatedItemsCommand(input) {
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
    UpdateRelatedItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "UpdateRelatedItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRelatedItemsInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRelatedItemsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRelatedItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRelatedItemsCommand(input, context);
    };
    UpdateRelatedItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRelatedItemsCommand(output, context);
    };
    return UpdateRelatedItemsCommand;
}($Command));
export { UpdateRelatedItemsCommand };
//# sourceMappingURL=UpdateRelatedItemsCommand.js.map