import { __extends } from "tslib";
import {
  BatchImportEvidenceToAssessmentControlRequest,
  BatchImportEvidenceToAssessmentControlResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand,
  serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Uploads one or more pieces of evidence to the specified control in the assessment in AWS Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchImportEvidenceToAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchImportEvidenceToAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchImportEvidenceToAssessmentControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchImportEvidenceToAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link BatchImportEvidenceToAssessmentControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchImportEvidenceToAssessmentControlCommand = /** @class */ (function (_super) {
  __extends(BatchImportEvidenceToAssessmentControlCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchImportEvidenceToAssessmentControlCommand(input) {
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
  BatchImportEvidenceToAssessmentControlCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "BatchImportEvidenceToAssessmentControlCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchImportEvidenceToAssessmentControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchImportEvidenceToAssessmentControlResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchImportEvidenceToAssessmentControlCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand(input, context);
  };
  BatchImportEvidenceToAssessmentControlCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand(output, context);
  };
  return BatchImportEvidenceToAssessmentControlCommand;
})($Command);
export { BatchImportEvidenceToAssessmentControlCommand };
//# sourceMappingURL=BatchImportEvidenceToAssessmentControlCommand.js.map
