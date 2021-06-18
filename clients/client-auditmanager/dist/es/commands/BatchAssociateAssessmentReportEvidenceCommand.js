import { __extends } from "tslib";
import {
  BatchAssociateAssessmentReportEvidenceRequest,
  BatchAssociateAssessmentReportEvidenceResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand,
  serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Associates a list of evidence to an assessment report in an AWS Audit Manager assessment.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchAssociateAssessmentReportEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchAssociateAssessmentReportEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchAssociateAssessmentReportEvidenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateAssessmentReportEvidenceCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateAssessmentReportEvidenceCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchAssociateAssessmentReportEvidenceCommand = /** @class */ (function (_super) {
  __extends(BatchAssociateAssessmentReportEvidenceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchAssociateAssessmentReportEvidenceCommand(input) {
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
  BatchAssociateAssessmentReportEvidenceCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "BatchAssociateAssessmentReportEvidenceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchAssociateAssessmentReportEvidenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateAssessmentReportEvidenceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchAssociateAssessmentReportEvidenceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand(input, context);
  };
  BatchAssociateAssessmentReportEvidenceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand(output, context);
  };
  return BatchAssociateAssessmentReportEvidenceCommand;
})($Command);
export { BatchAssociateAssessmentReportEvidenceCommand };
//# sourceMappingURL=BatchAssociateAssessmentReportEvidenceCommand.js.map
