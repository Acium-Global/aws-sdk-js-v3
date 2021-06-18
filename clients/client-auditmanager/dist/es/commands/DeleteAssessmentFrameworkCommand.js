import { __extends } from "tslib";
import { DeleteAssessmentFrameworkRequest, DeleteAssessmentFrameworkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAssessmentFrameworkCommand,
  serializeAws_restJson1DeleteAssessmentFrameworkCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Deletes a custom framework in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentFrameworkCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentFrameworkCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteAssessmentFrameworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentFrameworkCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentFrameworkCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssessmentFrameworkCommand = /** @class */ (function (_super) {
  __extends(DeleteAssessmentFrameworkCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAssessmentFrameworkCommand(input) {
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
  DeleteAssessmentFrameworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "DeleteAssessmentFrameworkCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAssessmentFrameworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAssessmentFrameworkResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAssessmentFrameworkCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAssessmentFrameworkCommand(input, context);
  };
  DeleteAssessmentFrameworkCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAssessmentFrameworkCommand(output, context);
  };
  return DeleteAssessmentFrameworkCommand;
})($Command);
export { DeleteAssessmentFrameworkCommand };
//# sourceMappingURL=DeleteAssessmentFrameworkCommand.js.map
