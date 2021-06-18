import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { CreateAssessmentReportRequest, CreateAssessmentReportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateAssessmentReportCommandInput extends CreateAssessmentReportRequest {}
export interface CreateAssessmentReportCommandOutput extends CreateAssessmentReportResponse, __MetadataBearer {}
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
export declare class CreateAssessmentReportCommand extends $Command<
  CreateAssessmentReportCommandInput,
  CreateAssessmentReportCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: CreateAssessmentReportCommandInput;
  constructor(input: CreateAssessmentReportCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAssessmentReportCommandInput, CreateAssessmentReportCommandOutput>;
  private serialize;
  private deserialize;
}
