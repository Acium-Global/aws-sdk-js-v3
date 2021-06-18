import { __extends } from "tslib";
import { UpdateSettingsRequest, UpdateSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateSettingsCommand,
  serializeAws_restJson1UpdateSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Updates AWS Audit Manager settings for the current user account.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateSettingsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateSettingsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateSettingsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSettingsCommand = /** @class */ (function (_super) {
  __extends(UpdateSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateSettingsCommand(input) {
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
  UpdateSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "UpdateSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateSettingsCommand(input, context);
  };
  UpdateSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateSettingsCommand(output, context);
  };
  return UpdateSettingsCommand;
})($Command);
export { UpdateSettingsCommand };
//# sourceMappingURL=UpdateSettingsCommand.js.map
