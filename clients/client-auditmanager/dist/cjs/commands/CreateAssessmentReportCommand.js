"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssessmentReportCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateAssessmentReportCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "CreateAssessmentReportCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CreateAssessmentReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.CreateAssessmentReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1CreateAssessmentReportCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1CreateAssessmentReportCommand(output, context);
  }
}
exports.CreateAssessmentReportCommand = CreateAssessmentReportCommand;
//# sourceMappingURL=CreateAssessmentReportCommand.js.map
