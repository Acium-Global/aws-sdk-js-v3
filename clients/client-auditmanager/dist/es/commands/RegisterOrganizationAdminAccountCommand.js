import { __extends } from "tslib";
import { RegisterOrganizationAdminAccountRequest, RegisterOrganizationAdminAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RegisterOrganizationAdminAccountCommand,
  serializeAws_restJson1RegisterOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Enables an AWS account within the organization as the delegated administrator for AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, RegisterOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, RegisterOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new RegisterOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterOrganizationAdminAccountCommand = /** @class */ (function (_super) {
  __extends(RegisterOrganizationAdminAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RegisterOrganizationAdminAccountCommand(input) {
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
  RegisterOrganizationAdminAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "RegisterOrganizationAdminAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RegisterOrganizationAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterOrganizationAdminAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RegisterOrganizationAdminAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RegisterOrganizationAdminAccountCommand(input, context);
  };
  RegisterOrganizationAdminAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RegisterOrganizationAdminAccountCommand(output, context);
  };
  return RegisterOrganizationAdminAccountCommand;
})($Command);
export { RegisterOrganizationAdminAccountCommand };
//# sourceMappingURL=RegisterOrganizationAdminAccountCommand.js.map
