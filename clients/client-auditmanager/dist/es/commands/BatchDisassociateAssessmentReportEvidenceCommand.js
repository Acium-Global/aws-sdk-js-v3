import { __extends } from "tslib";
import {
  BatchDisassociateAssessmentReportEvidenceRequest,
  BatchDisassociateAssessmentReportEvidenceResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand,
  serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Disassociates a list of evidence from the specified assessment report in AWS Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchDisassociateAssessmentReportEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchDisassociateAssessmentReportEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchDisassociateAssessmentReportEvidenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateAssessmentReportEvidenceCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateAssessmentReportEvidenceCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDisassociateAssessmentReportEvidenceCommand = /** @class */ (function (_super) {
  __extends(BatchDisassociateAssessmentReportEvidenceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchDisassociateAssessmentReportEvidenceCommand(input) {
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
  BatchDisassociateAssessmentReportEvidenceCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "BatchDisassociateAssessmentReportEvidenceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchDisassociateAssessmentReportEvidenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateAssessmentReportEvidenceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchDisassociateAssessmentReportEvidenceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand(input, context);
  };
  BatchDisassociateAssessmentReportEvidenceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand(output, context);
  };
  return BatchDisassociateAssessmentReportEvidenceCommand;
})($Command);
export { BatchDisassociateAssessmentReportEvidenceCommand };
//# sourceMappingURL=BatchDisassociateAssessmentReportEvidenceCommand.js.map
