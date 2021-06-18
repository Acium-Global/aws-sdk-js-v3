import { __extends } from "tslib";
import { CreateReplicationSetInput, CreateReplicationSetOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateReplicationSetCommand, serializeAws_restJson1CreateReplicationSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A replication set replicates and encrypts your data to the provided Regions with the
 *             provided KMS key. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new CreateReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationSetCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReplicationSetCommand = /** @class */ (function (_super) {
    __extends(CreateReplicationSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReplicationSetCommand(input) {
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
    CreateReplicationSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "CreateReplicationSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReplicationSetInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReplicationSetOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReplicationSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateReplicationSetCommand(input, context);
    };
    CreateReplicationSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateReplicationSetCommand(output, context);
    };
    return CreateReplicationSetCommand;
}($Command));
export { CreateReplicationSetCommand };
//# sourceMappingURL=CreateReplicationSetCommand.js.map