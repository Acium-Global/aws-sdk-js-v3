import { __extends } from "tslib";
import { UpdateDeletionProtectionInput, UpdateDeletionProtectionOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateDeletionProtectionCommand, serializeAws_restJson1UpdateDeletionProtectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update deletion protection to either allow or deny deletion of the final Region in a
 *             replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateDeletionProtectionCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateDeletionProtectionCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateDeletionProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeletionProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateDeletionProtectionCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDeletionProtectionCommand = /** @class */ (function (_super) {
    __extends(UpdateDeletionProtectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDeletionProtectionCommand(input) {
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
    UpdateDeletionProtectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "UpdateDeletionProtectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDeletionProtectionInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDeletionProtectionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDeletionProtectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDeletionProtectionCommand(input, context);
    };
    UpdateDeletionProtectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDeletionProtectionCommand(output, context);
    };
    return UpdateDeletionProtectionCommand;
}($Command));
export { UpdateDeletionProtectionCommand };
//# sourceMappingURL=UpdateDeletionProtectionCommand.js.map