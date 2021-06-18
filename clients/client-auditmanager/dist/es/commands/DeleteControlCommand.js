import { __extends } from "tslib";
import { DeleteControlRequest, DeleteControlResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteControlCommand,
  serializeAws_restJson1DeleteControlCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Deletes a custom control in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteControlCommandInput} for command's `input` shape.
 * @see {@link DeleteControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteControlCommand = /** @class */ (function (_super) {
  __extends(DeleteControlCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteControlCommand(input) {
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
  DeleteControlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "DeleteControlCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteControlResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteControlCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteControlCommand(input, context);
  };
  DeleteControlCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteControlCommand(output, context);
  };
  return DeleteControlCommand;
})($Command);
export { DeleteControlCommand };
//# sourceMappingURL=DeleteControlCommand.js.map
