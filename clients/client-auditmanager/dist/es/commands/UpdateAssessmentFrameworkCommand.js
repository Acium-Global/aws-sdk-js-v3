import { __extends } from "tslib";
import { UpdateAssessmentFrameworkRequest, UpdateAssessmentFrameworkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssessmentFrameworkCommand,
  serializeAws_restJson1UpdateAssessmentFrameworkCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Updates a custom framework in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentFrameworkCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentFrameworkCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentFrameworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentFrameworkCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentFrameworkCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssessmentFrameworkCommand = /** @class */ (function (_super) {
  __extends(UpdateAssessmentFrameworkCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAssessmentFrameworkCommand(input) {
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
  UpdateAssessmentFrameworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "UpdateAssessmentFrameworkCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAssessmentFrameworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentFrameworkResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAssessmentFrameworkCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateAssessmentFrameworkCommand(input, context);
  };
  UpdateAssessmentFrameworkCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateAssessmentFrameworkCommand(output, context);
  };
  return UpdateAssessmentFrameworkCommand;
})($Command);
export { UpdateAssessmentFrameworkCommand };
//# sourceMappingURL=UpdateAssessmentFrameworkCommand.js.map
