import { __extends } from "tslib";
import { UpdateAssessmentControlSetStatusRequest, UpdateAssessmentControlSetStatusResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand,
  serializeAws_restJson1UpdateAssessmentControlSetStatusCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Updates the status of a control set in an AWS Audit Manager assessment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentControlSetStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentControlSetStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentControlSetStatusCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssessmentControlSetStatusCommand = /** @class */ (function (_super) {
  __extends(UpdateAssessmentControlSetStatusCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAssessmentControlSetStatusCommand(input) {
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
  UpdateAssessmentControlSetStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "UpdateAssessmentControlSetStatusCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAssessmentControlSetStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentControlSetStatusResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAssessmentControlSetStatusCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateAssessmentControlSetStatusCommand(input, context);
  };
  UpdateAssessmentControlSetStatusCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand(output, context);
  };
  return UpdateAssessmentControlSetStatusCommand;
})($Command);
export { UpdateAssessmentControlSetStatusCommand };
//# sourceMappingURL=UpdateAssessmentControlSetStatusCommand.js.map
