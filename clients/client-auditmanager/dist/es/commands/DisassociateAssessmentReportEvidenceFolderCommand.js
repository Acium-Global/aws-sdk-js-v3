import { __extends } from "tslib";
import {
  DisassociateAssessmentReportEvidenceFolderRequest,
  DisassociateAssessmentReportEvidenceFolderResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand,
  serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Disassociates an evidence folder from the specified assessment report in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DisassociateAssessmentReportEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DisassociateAssessmentReportEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DisassociateAssessmentReportEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAssessmentReportEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link DisassociateAssessmentReportEvidenceFolderCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateAssessmentReportEvidenceFolderCommand = /** @class */ (function (_super) {
  __extends(DisassociateAssessmentReportEvidenceFolderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisassociateAssessmentReportEvidenceFolderCommand(input) {
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
  DisassociateAssessmentReportEvidenceFolderCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "DisassociateAssessmentReportEvidenceFolderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisassociateAssessmentReportEvidenceFolderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateAssessmentReportEvidenceFolderResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisassociateAssessmentReportEvidenceFolderCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand(input, context);
  };
  DisassociateAssessmentReportEvidenceFolderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand(output, context);
  };
  return DisassociateAssessmentReportEvidenceFolderCommand;
})($Command);
export { DisassociateAssessmentReportEvidenceFolderCommand };
//# sourceMappingURL=DisassociateAssessmentReportEvidenceFolderCommand.js.map
