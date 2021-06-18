import { __extends } from "tslib";
import { GetServicesInScopeRequest, GetServicesInScopeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetServicesInScopeCommand,
  serializeAws_restJson1GetServicesInScopeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Returns a list of the in-scope AWS services for the specified assessment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetServicesInScopeCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetServicesInScopeCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetServicesInScopeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServicesInScopeCommandInput} for command's `input` shape.
 * @see {@link GetServicesInScopeCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetServicesInScopeCommand = /** @class */ (function (_super) {
  __extends(GetServicesInScopeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetServicesInScopeCommand(input) {
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
  GetServicesInScopeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetServicesInScopeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetServicesInScopeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServicesInScopeResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetServicesInScopeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetServicesInScopeCommand(input, context);
  };
  GetServicesInScopeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetServicesInScopeCommand(output, context);
  };
  return GetServicesInScopeCommand;
})($Command);
export { GetServicesInScopeCommand };
//# sourceMappingURL=GetServicesInScopeCommand.js.map
