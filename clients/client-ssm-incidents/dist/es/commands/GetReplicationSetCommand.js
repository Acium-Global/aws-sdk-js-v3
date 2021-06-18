import { __extends } from "tslib";
import { GetReplicationSetInput, GetReplicationSetOutput } from "../models/models_0";
import { deserializeAws_restJson1GetReplicationSetCommand, serializeAws_restJson1GetReplicationSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve your Incident Manager replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReplicationSetCommandInput} for command's `input` shape.
 * @see {@link GetReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReplicationSetCommand = /** @class */ (function (_super) {
    __extends(GetReplicationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetReplicationSetCommand(input) {
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
    GetReplicationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "GetReplicationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetReplicationSetInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetReplicationSetOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetReplicationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetReplicationSetCommand(input, context);
    };
    GetReplicationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetReplicationSetCommand(output, context);
    };
    return GetReplicationSetCommand;
}($Command));
export { GetReplicationSetCommand };
//# sourceMappingURL=GetReplicationSetCommand.js.map