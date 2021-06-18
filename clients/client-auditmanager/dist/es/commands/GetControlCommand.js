import { __extends } from "tslib";
import { GetControlRequest, GetControlResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetControlCommand,
  serializeAws_restJson1GetControlCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Returns a control from AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetControlCommandInput} for command's `input` shape.
 * @see {@link GetControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetControlCommand = /** @class */ (function (_super) {
  __extends(GetControlCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetControlCommand(input) {
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
  GetControlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetControlCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetControlResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetControlCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetControlCommand(input, context);
  };
  GetControlCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetControlCommand(output, context);
  };
  return GetControlCommand;
})($Command);
export { GetControlCommand };
//# sourceMappingURL=GetControlCommand.js.map
