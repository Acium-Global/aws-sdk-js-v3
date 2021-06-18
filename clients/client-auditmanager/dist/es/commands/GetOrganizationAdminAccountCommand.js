import { __extends } from "tslib";
import { GetOrganizationAdminAccountRequest, GetOrganizationAdminAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetOrganizationAdminAccountCommand,
  serializeAws_restJson1GetOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Returns the name of the delegated AWS administrator account for the AWS organization.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOrganizationAdminAccountCommand = /** @class */ (function (_super) {
  __extends(GetOrganizationAdminAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetOrganizationAdminAccountCommand(input) {
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
  GetOrganizationAdminAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetOrganizationAdminAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetOrganizationAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOrganizationAdminAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetOrganizationAdminAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetOrganizationAdminAccountCommand(input, context);
  };
  GetOrganizationAdminAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetOrganizationAdminAccountCommand(output, context);
  };
  return GetOrganizationAdminAccountCommand;
})($Command);
export { GetOrganizationAdminAccountCommand };
//# sourceMappingURL=GetOrganizationAdminAccountCommand.js.map
