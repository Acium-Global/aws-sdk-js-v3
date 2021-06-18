import { __extends } from "tslib";
import { GetIncidentRecordInput, GetIncidentRecordOutput } from "../models/models_0";
import { deserializeAws_restJson1GetIncidentRecordCommand, serializeAws_restJson1GetIncidentRecordCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details of the specified incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetIncidentRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link GetIncidentRecordCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIncidentRecordCommand = /** @class */ (function (_super) {
    __extends(GetIncidentRecordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIncidentRecordCommand(input) {
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
    GetIncidentRecordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMIncidentsClient";
        var commandName = "GetIncidentRecordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIncidentRecordInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetIncidentRecordOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIncidentRecordCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIncidentRecordCommand(input, context);
    };
    GetIncidentRecordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIncidentRecordCommand(output, context);
    };
    return GetIncidentRecordCommand;
}($Command));
export { GetIncidentRecordCommand };
//# sourceMappingURL=GetIncidentRecordCommand.js.map