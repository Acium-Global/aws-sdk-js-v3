import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { DeleteAssessmentReportRequest, DeleteAssessmentReportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteAssessmentReportCommandInput extends DeleteAssessmentReportRequest {}
export interface DeleteAssessmentReportCommandOutput extends DeleteAssessmentReportResponse, __MetadataBearer {}
/**
 * <p>
 * Deletes an assessment report from an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentReportCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentReportCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteAssessmentReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentReportCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAssessmentReportCommand extends $Command<
  DeleteAssessmentReportCommandInput,
  DeleteAssessmentReportCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: DeleteAssessmentReportCommandInput;
  constructor(input: DeleteAssessmentReportCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAssessmentReportCommandInput, DeleteAssessmentReportCommandOutput>;
  private serialize;
  private deserialize;
}
