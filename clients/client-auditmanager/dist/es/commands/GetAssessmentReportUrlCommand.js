import { __extends } from "tslib";
import { GetAssessmentReportUrlRequest, GetAssessmentReportUrlResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAssessmentReportUrlCommand,
  serializeAws_restJson1GetAssessmentReportUrlCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Returns the URL of a specified assessment report in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAssessmentReportUrlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAssessmentReportUrlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetAssessmentReportUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssessmentReportUrlCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentReportUrlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssessmentReportUrlCommand = /** @class */ (function (_super) {
  __extends(GetAssessmentReportUrlCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAssessmentReportUrlCommand(input) {
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
  GetAssessmentReportUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetAssessmentReportUrlCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAssessmentReportUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssessmentReportUrlResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAssessmentReportUrlCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAssessmentReportUrlCommand(input, context);
  };
  GetAssessmentReportUrlCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAssessmentReportUrlCommand(output, context);
  };
  return GetAssessmentReportUrlCommand;
})($Command);
export { GetAssessmentReportUrlCommand };
//# sourceMappingURL=GetAssessmentReportUrlCommand.js.map
