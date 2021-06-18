import { __extends } from "tslib";
import { RegisterAccountRequest, RegisterAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RegisterAccountCommand,
  serializeAws_restJson1RegisterAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *  Enables AWS Audit Manager for the specified AWS account.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, RegisterAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, RegisterAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new RegisterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterAccountCommand = /** @class */ (function (_super) {
  __extends(RegisterAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RegisterAccountCommand(input) {
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
  RegisterAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "RegisterAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RegisterAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RegisterAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RegisterAccountCommand(input, context);
  };
  RegisterAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RegisterAccountCommand(output, context);
  };
  return RegisterAccountCommand;
})($Command);
export { RegisterAccountCommand };
//# sourceMappingURL=RegisterAccountCommand.js.map
