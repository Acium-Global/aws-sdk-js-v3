import { __extends } from "tslib";
import { GetChangeLogsRequest, GetChangeLogsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetChangeLogsCommand,
  serializeAws_restJson1GetChangeLogsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Returns a list of changelogs from AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetChangeLogsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetChangeLogsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetChangeLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChangeLogsCommandInput} for command's `input` shape.
 * @see {@link GetChangeLogsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetChangeLogsCommand = /** @class */ (function (_super) {
  __extends(GetChangeLogsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetChangeLogsCommand(input) {
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
  GetChangeLogsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetChangeLogsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetChangeLogsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetChangeLogsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetChangeLogsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetChangeLogsCommand(input, context);
  };
  GetChangeLogsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetChangeLogsCommand(output, context);
  };
  return GetChangeLogsCommand;
})($Command);
export { GetChangeLogsCommand };
//# sourceMappingURL=GetChangeLogsCommand.js.map
