import { __extends } from "tslib";
import { UpdateAssessmentRequest, UpdateAssessmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssessmentCommand,
  serializeAws_restJson1UpdateAssessmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Edits an AWS Audit Manager assessment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssessmentCommand = /** @class */ (function (_super) {
  __extends(UpdateAssessmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAssessmentCommand(input) {
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
  UpdateAssessmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "UpdateAssessmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAssessmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAssessmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateAssessmentCommand(input, context);
  };
  UpdateAssessmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateAssessmentCommand(output, context);
  };
  return UpdateAssessmentCommand;
})($Command);
export { UpdateAssessmentCommand };
//# sourceMappingURL=UpdateAssessmentCommand.js.map
