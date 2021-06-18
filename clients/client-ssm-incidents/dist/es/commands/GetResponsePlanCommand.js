import { __extends } from "tslib";
import { GetResponsePlanInput, GetResponsePlanOutput } from "../models/models_0";
import { deserializeAws_restJson1GetResponsePlanCommand, serializeAws_restJson1GetResponsePlanCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the details of the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResponsePlanCommandInput} for command's `input` shape.
 * @see {@link GetResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResponsePlanCommand = /** @class */ (function (_super) {
    __extends(GetResponsePlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResponsePlanCommand(input) {
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
    GetResponsePlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "GetResponsePlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResponsePlanInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetResponsePlanOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResponsePlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResponsePlanCommand(input, context);
    };
    GetResponsePlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResponsePlanCommand(output, context);
    };
    return GetResponsePlanCommand;
}($Command));
export { GetResponsePlanCommand };
//# sourceMappingURL=GetResponsePlanCommand.js.map