import { __extends } from "tslib";
import { GetDelegationsRequest, GetDelegationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDelegationsCommand,
  serializeAws_restJson1GetDelegationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Returns a list of delegations from an audit owner to a delegate.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetDelegationsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetDelegationsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetDelegationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDelegationsCommandInput} for command's `input` shape.
 * @see {@link GetDelegationsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDelegationsCommand = /** @class */ (function (_super) {
  __extends(GetDelegationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDelegationsCommand(input) {
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
  GetDelegationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetDelegationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDelegationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDelegationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDelegationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDelegationsCommand(input, context);
  };
  GetDelegationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDelegationsCommand(output, context);
  };
  return GetDelegationsCommand;
})($Command);
export { GetDelegationsCommand };
//# sourceMappingURL=GetDelegationsCommand.js.map
