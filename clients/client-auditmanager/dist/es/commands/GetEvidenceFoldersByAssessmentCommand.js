import { __extends } from "tslib";
import { GetEvidenceFoldersByAssessmentRequest, GetEvidenceFoldersByAssessmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand,
  serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Returns the evidence folders from a specified assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetEvidenceFoldersByAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvidenceFoldersByAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFoldersByAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEvidenceFoldersByAssessmentCommand = /** @class */ (function (_super) {
  __extends(GetEvidenceFoldersByAssessmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetEvidenceFoldersByAssessmentCommand(input) {
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
  GetEvidenceFoldersByAssessmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetEvidenceFoldersByAssessmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetEvidenceFoldersByAssessmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEvidenceFoldersByAssessmentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetEvidenceFoldersByAssessmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand(input, context);
  };
  GetEvidenceFoldersByAssessmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand(output, context);
  };
  return GetEvidenceFoldersByAssessmentCommand;
})($Command);
export { GetEvidenceFoldersByAssessmentCommand };
//# sourceMappingURL=GetEvidenceFoldersByAssessmentCommand.js.map
