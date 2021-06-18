import { __extends } from "tslib";
import { GetResourcePoliciesInput, GetResourcePoliciesOutput } from "../models/models_0";
import { deserializeAws_restJson1GetResourcePoliciesCommand, serializeAws_restJson1GetResourcePoliciesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the resource policies attached to the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetResourcePoliciesCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourcePoliciesCommand = /** @class */ (function (_super) {
    __extends(GetResourcePoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourcePoliciesCommand(input) {
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
    GetResourcePoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "GetResourcePoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourcePoliciesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourcePoliciesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourcePoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResourcePoliciesCommand(input, context);
    };
    GetResourcePoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResourcePoliciesCommand(output, context);
    };
    return GetResourcePoliciesCommand;
}($Command));
export { GetResourcePoliciesCommand };
//# sourceMappingURL=GetResourcePoliciesCommand.js.map