import { __extends } from "tslib";
import {
  AssociateAssessmentReportEvidenceFolderRequest,
  AssociateAssessmentReportEvidenceFolderResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand,
  serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Associates an evidence folder to the specified assessment report in AWS Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new AssociateAssessmentReportEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateAssessmentReportEvidenceFolderCommand = /** @class */ (function (_super) {
  __extends(AssociateAssessmentReportEvidenceFolderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AssociateAssessmentReportEvidenceFolderCommand(input) {
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
  AssociateAssessmentReportEvidenceFolderCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "AssociateAssessmentReportEvidenceFolderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AssociateAssessmentReportEvidenceFolderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateAssessmentReportEvidenceFolderResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AssociateAssessmentReportEvidenceFolderCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand(input, context);
  };
  AssociateAssessmentReportEvidenceFolderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand(output, context);
  };
  return AssociateAssessmentReportEvidenceFolderCommand;
})($Command);
export { AssociateAssessmentReportEvidenceFolderCommand };
//# sourceMappingURL=AssociateAssessmentReportEvidenceFolderCommand.js.map
