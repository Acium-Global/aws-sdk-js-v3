import { __extends } from "tslib";
import { DeleteAssessmentRequest, DeleteAssessmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAssessmentCommand,
  serializeAws_restJson1DeleteAssessmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Deletes an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssessmentCommand = /** @class */ (function (_super) {
  __extends(DeleteAssessmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAssessmentCommand(input) {
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
  DeleteAssessmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "DeleteAssessmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAssessmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAssessmentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAssessmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAssessmentCommand(input, context);
  };
  DeleteAssessmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAssessmentCommand(output, context);
  };
  return DeleteAssessmentCommand;
})($Command);
export { DeleteAssessmentCommand };
//# sourceMappingURL=DeleteAssessmentCommand.js.map
