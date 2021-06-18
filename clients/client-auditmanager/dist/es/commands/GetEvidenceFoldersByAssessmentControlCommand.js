import { __extends } from "tslib";
import {
  GetEvidenceFoldersByAssessmentControlRequest,
  GetEvidenceFoldersByAssessmentControlResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand,
  serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Returns a list of evidence folders associated with a specified control of an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFoldersByAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFoldersByAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetEvidenceFoldersByAssessmentControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvidenceFoldersByAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFoldersByAssessmentControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEvidenceFoldersByAssessmentControlCommand = /** @class */ (function (_super) {
  __extends(GetEvidenceFoldersByAssessmentControlCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetEvidenceFoldersByAssessmentControlCommand(input) {
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
  GetEvidenceFoldersByAssessmentControlCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetEvidenceFoldersByAssessmentControlCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetEvidenceFoldersByAssessmentControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEvidenceFoldersByAssessmentControlResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetEvidenceFoldersByAssessmentControlCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand(input, context);
  };
  GetEvidenceFoldersByAssessmentControlCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand(output, context);
  };
  return GetEvidenceFoldersByAssessmentControlCommand;
})($Command);
export { GetEvidenceFoldersByAssessmentControlCommand };
//# sourceMappingURL=GetEvidenceFoldersByAssessmentControlCommand.js.map
