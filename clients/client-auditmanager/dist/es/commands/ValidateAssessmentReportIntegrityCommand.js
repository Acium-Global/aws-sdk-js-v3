import { __extends } from "tslib";
import {
  ValidateAssessmentReportIntegrityRequest,
  ValidateAssessmentReportIntegrityResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand,
  serializeAws_restJson1ValidateAssessmentReportIntegrityCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Validates the integrity of an assessment report in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ValidateAssessmentReportIntegrityCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ValidateAssessmentReportIntegrityCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ValidateAssessmentReportIntegrityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateAssessmentReportIntegrityCommandInput} for command's `input` shape.
 * @see {@link ValidateAssessmentReportIntegrityCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ValidateAssessmentReportIntegrityCommand = /** @class */ (function (_super) {
  __extends(ValidateAssessmentReportIntegrityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ValidateAssessmentReportIntegrityCommand(input) {
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
  ValidateAssessmentReportIntegrityCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "ValidateAssessmentReportIntegrityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ValidateAssessmentReportIntegrityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ValidateAssessmentReportIntegrityResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ValidateAssessmentReportIntegrityCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ValidateAssessmentReportIntegrityCommand(input, context);
  };
  ValidateAssessmentReportIntegrityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand(output, context);
  };
  return ValidateAssessmentReportIntegrityCommand;
})($Command);
export { ValidateAssessmentReportIntegrityCommand };
//# sourceMappingURL=ValidateAssessmentReportIntegrityCommand.js.map
