import { __extends } from "tslib";
import { CreateAssessmentRequest, CreateAssessmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAssessmentCommand,
  serializeAws_restJson1CreateAssessmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *   Creates an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, CreateAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, CreateAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new CreateAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssessmentCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAssessmentCommand = /** @class */ (function (_super) {
  __extends(CreateAssessmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAssessmentCommand(input) {
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
  CreateAssessmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "CreateAssessmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAssessmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAssessmentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAssessmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAssessmentCommand(input, context);
  };
  CreateAssessmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAssessmentCommand(output, context);
  };
  return CreateAssessmentCommand;
})($Command);
export { CreateAssessmentCommand };
//# sourceMappingURL=CreateAssessmentCommand.js.map
