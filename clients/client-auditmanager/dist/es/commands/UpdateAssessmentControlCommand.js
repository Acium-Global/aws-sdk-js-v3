import { __extends } from "tslib";
import { UpdateAssessmentControlRequest, UpdateAssessmentControlResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssessmentControlCommand,
  serializeAws_restJson1UpdateAssessmentControlCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Updates a control within an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssessmentControlCommand = /** @class */ (function (_super) {
  __extends(UpdateAssessmentControlCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAssessmentControlCommand(input) {
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
  UpdateAssessmentControlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "UpdateAssessmentControlCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAssessmentControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentControlResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAssessmentControlCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateAssessmentControlCommand(input, context);
  };
  UpdateAssessmentControlCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateAssessmentControlCommand(output, context);
  };
  return UpdateAssessmentControlCommand;
})($Command);
export { UpdateAssessmentControlCommand };
//# sourceMappingURL=UpdateAssessmentControlCommand.js.map
