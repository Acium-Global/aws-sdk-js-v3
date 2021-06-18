import { __extends } from "tslib";
import { DeleteAssessmentReportRequest, DeleteAssessmentReportResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAssessmentReportCommand,
  serializeAws_restJson1DeleteAssessmentReportCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Deletes an assessment report from an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentReportCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentReportCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteAssessmentReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentReportCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssessmentReportCommand = /** @class */ (function (_super) {
  __extends(DeleteAssessmentReportCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAssessmentReportCommand(input) {
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
  DeleteAssessmentReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "DeleteAssessmentReportCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAssessmentReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAssessmentReportResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAssessmentReportCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAssessmentReportCommand(input, context);
  };
  DeleteAssessmentReportCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAssessmentReportCommand(output, context);
  };
  return DeleteAssessmentReportCommand;
})($Command);
export { DeleteAssessmentReportCommand };
//# sourceMappingURL=DeleteAssessmentReportCommand.js.map
