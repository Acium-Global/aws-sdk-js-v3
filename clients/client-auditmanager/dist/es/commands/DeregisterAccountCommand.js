import { __extends } from "tslib";
import { DeregisterAccountRequest, DeregisterAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeregisterAccountCommand,
  serializeAws_restJson1DeregisterAccountCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Deregisters an account in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeregisterAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeregisterAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeregisterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterAccountCommandInput} for command's `input` shape.
 * @see {@link DeregisterAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterAccountCommand = /** @class */ (function (_super) {
  __extends(DeregisterAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeregisterAccountCommand(input) {
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
  DeregisterAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "DeregisterAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeregisterAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeregisterAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeregisterAccountCommand(input, context);
  };
  DeregisterAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeregisterAccountCommand(output, context);
  };
  return DeregisterAccountCommand;
})($Command);
export { DeregisterAccountCommand };
//# sourceMappingURL=DeregisterAccountCommand.js.map
