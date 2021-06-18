import { __extends } from "tslib";
import { CreateAssessmentReportRequest, CreateAssessmentReportResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAssessmentReportCommand,
  serializeAws_restJson1CreateAssessmentReportCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Creates an assessment report for the specified assessment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, CreateAssessmentReportCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, CreateAssessmentReportCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new CreateAssessmentReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentReportCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAssessmentReportCommand = /** @class */ (function (_super) {
  __extends(CreateAssessmentReportCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAssessmentReportCommand(input) {
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
  CreateAssessmentReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "CreateAssessmentReportCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAssessmentReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAssessmentReportResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAssessmentReportCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAssessmentReportCommand(input, context);
  };
  CreateAssessmentReportCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAssessmentReportCommand(output, context);
  };
  return CreateAssessmentReportCommand;
})($Command);
export { CreateAssessmentReportCommand };
//# sourceMappingURL=CreateAssessmentReportCommand.js.map
