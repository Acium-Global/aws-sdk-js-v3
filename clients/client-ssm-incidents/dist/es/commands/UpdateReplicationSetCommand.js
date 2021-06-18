import { __extends } from "tslib";
import { UpdateReplicationSetInput, UpdateReplicationSetOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateReplicationSetCommand, serializeAws_restJson1UpdateReplicationSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add or delete Regions from your replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReplicationSetCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateReplicationSetCommand = /** @class */ (function (_super) {
    __extends(UpdateReplicationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateReplicationSetCommand(input) {
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
    UpdateReplicationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "UpdateReplicationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateReplicationSetInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateReplicationSetOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateReplicationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateReplicationSetCommand(input, context);
    };
    UpdateReplicationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateReplicationSetCommand(output, context);
    };
    return UpdateReplicationSetCommand;
}($Command));
export { UpdateReplicationSetCommand };
//# sourceMappingURL=UpdateReplicationSetCommand.js.map