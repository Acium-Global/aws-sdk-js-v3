import { __extends } from "tslib";
import { GetAssessmentFrameworkRequest, GetAssessmentFrameworkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAssessmentFrameworkCommand,
  serializeAws_restJson1GetAssessmentFrameworkCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Returns a framework from AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAssessmentFrameworkCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAssessmentFrameworkCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetAssessmentFrameworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssessmentFrameworkCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentFrameworkCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssessmentFrameworkCommand = /** @class */ (function (_super) {
  __extends(GetAssessmentFrameworkCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAssessmentFrameworkCommand(input) {
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
  GetAssessmentFrameworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetAssessmentFrameworkCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAssessmentFrameworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssessmentFrameworkResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAssessmentFrameworkCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAssessmentFrameworkCommand(input, context);
  };
  GetAssessmentFrameworkCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAssessmentFrameworkCommand(output, context);
  };
  return GetAssessmentFrameworkCommand;
})($Command);
export { GetAssessmentFrameworkCommand };
//# sourceMappingURL=GetAssessmentFrameworkCommand.js.map
