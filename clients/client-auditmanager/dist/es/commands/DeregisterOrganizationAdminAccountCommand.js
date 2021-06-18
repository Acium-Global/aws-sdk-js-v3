import { __extends } from "tslib";
import {
  DeregisterOrganizationAdminAccountRequest,
  DeregisterOrganizationAdminAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand,
  serializeAws_restJson1DeregisterOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Deregisters the delegated AWS administrator account from the AWS organization.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeregisterOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeregisterOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeregisterOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DeregisterOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterOrganizationAdminAccountCommand = /** @class */ (function (_super) {
  __extends(DeregisterOrganizationAdminAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeregisterOrganizationAdminAccountCommand(input) {
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
  DeregisterOrganizationAdminAccountCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "DeregisterOrganizationAdminAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeregisterOrganizationAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterOrganizationAdminAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeregisterOrganizationAdminAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeregisterOrganizationAdminAccountCommand(input, context);
  };
  DeregisterOrganizationAdminAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand(output, context);
  };
  return DeregisterOrganizationAdminAccountCommand;
})($Command);
export { DeregisterOrganizationAdminAccountCommand };
//# sourceMappingURL=DeregisterOrganizationAdminAccountCommand.js.map
