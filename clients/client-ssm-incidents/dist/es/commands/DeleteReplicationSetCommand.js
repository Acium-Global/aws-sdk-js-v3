import { __extends } from "tslib";
import { DeleteReplicationSetInput, DeleteReplicationSetOutput } from "../models/models_0";
import { deserializeAws_restJson1DeleteReplicationSetCommand, serializeAws_restJson1DeleteReplicationSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all Regions in your replication set. Deleting the replication set deletes all
 *             Incident Manager data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReplicationSetCommand = /** @class */ (function (_super) {
    __extends(DeleteReplicationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteReplicationSetCommand(input) {
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
    DeleteReplicationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "DeleteReplicationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteReplicationSetInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteReplicationSetOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteReplicationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteReplicationSetCommand(input, context);
    };
    DeleteReplicationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteReplicationSetCommand(output, context);
    };
    return DeleteReplicationSetCommand;
}($Command));
export { DeleteReplicationSetCommand };
//# sourceMappingURL=DeleteReplicationSetCommand.js.map