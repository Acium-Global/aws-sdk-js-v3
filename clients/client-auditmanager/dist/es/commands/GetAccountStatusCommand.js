import { __extends } from "tslib";
import { GetAccountStatusRequest, GetAccountStatusResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAccountStatusCommand,
  serializeAws_restJson1GetAccountStatusCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Returns the registration status of an account in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAccountStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAccountStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetAccountStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountStatusCommandInput} for command's `input` shape.
 * @see {@link GetAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccountStatusCommand = /** @class */ (function (_super) {
  __extends(GetAccountStatusCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAccountStatusCommand(input) {
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
  GetAccountStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetAccountStatusCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAccountStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccountStatusResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAccountStatusCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAccountStatusCommand(input, context);
  };
  GetAccountStatusCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAccountStatusCommand(output, context);
  };
  return GetAccountStatusCommand;
})($Command);
export { GetAccountStatusCommand };
//# sourceMappingURL=GetAccountStatusCommand.js.map
