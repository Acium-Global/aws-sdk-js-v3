import { __extends } from "tslib";
import { UpdateAssessmentStatusRequest, UpdateAssessmentStatusResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssessmentStatusCommand,
  serializeAws_restJson1UpdateAssessmentStatusCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Updates the status of an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentStatusCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssessmentStatusCommand = /** @class */ (function (_super) {
  __extends(UpdateAssessmentStatusCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAssessmentStatusCommand(input) {
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
  UpdateAssessmentStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "UpdateAssessmentStatusCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAssessmentStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentStatusResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAssessmentStatusCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateAssessmentStatusCommand(input, context);
  };
  UpdateAssessmentStatusCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateAssessmentStatusCommand(output, context);
  };
  return UpdateAssessmentStatusCommand;
})($Command);
export { UpdateAssessmentStatusCommand };
//# sourceMappingURL=UpdateAssessmentStatusCommand.js.map
