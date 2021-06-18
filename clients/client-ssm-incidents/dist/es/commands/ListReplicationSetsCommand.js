import { __extends } from "tslib";
import { ListReplicationSetsInput, ListReplicationSetsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListReplicationSetsCommand, serializeAws_restJson1ListReplicationSetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists details about the replication set configured in your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListReplicationSetsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListReplicationSetsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListReplicationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReplicationSetsCommandInput} for command's `input` shape.
 * @see {@link ListReplicationSetsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListReplicationSetsCommand = /** @class */ (function (_super) {
    __extends(ListReplicationSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListReplicationSetsCommand(input) {
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
    ListReplicationSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "ListReplicationSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListReplicationSetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListReplicationSetsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListReplicationSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListReplicationSetsCommand(input, context);
    };
    ListReplicationSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListReplicationSetsCommand(output, context);
    };
    return ListReplicationSetsCommand;
}($Command));
export { ListReplicationSetsCommand };
//# sourceMappingURL=ListReplicationSetsCommand.js.map