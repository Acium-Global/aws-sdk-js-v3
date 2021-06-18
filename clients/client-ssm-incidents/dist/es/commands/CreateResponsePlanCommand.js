import { __extends } from "tslib";
import { CreateResponsePlanInput, CreateResponsePlanOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateResponsePlanCommand, serializeAws_restJson1CreateResponsePlanCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a response plan that automates the initial response to incidents. A response
 *             plan engages contacts, starts chat channel collaboration, and
 *             initiates
 *             runbooks at the beginning of an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new CreateResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResponsePlanCommandInput} for command's `input` shape.
 * @see {@link CreateResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResponsePlanCommand = /** @class */ (function (_super) {
    __extends(CreateResponsePlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResponsePlanCommand(input) {
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
    CreateResponsePlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "CreateResponsePlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResponsePlanInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResponsePlanOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResponsePlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateResponsePlanCommand(input, context);
    };
    CreateResponsePlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateResponsePlanCommand(output, context);
    };
    return CreateResponsePlanCommand;
}($Command));
export { CreateResponsePlanCommand };
//# sourceMappingURL=CreateResponsePlanCommand.js.map