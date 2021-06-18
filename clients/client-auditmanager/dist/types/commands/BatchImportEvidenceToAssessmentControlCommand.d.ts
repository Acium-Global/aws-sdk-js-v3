import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  BatchImportEvidenceToAssessmentControlRequest,
  BatchImportEvidenceToAssessmentControlResponse,
} from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchImportEvidenceToAssessmentControlCommandInput
  extends BatchImportEvidenceToAssessmentControlRequest {}
export interface BatchImportEvidenceToAssessmentControlCommandOutput
  extends BatchImportEvidenceToAssessmentControlResponse,
    __MetadataBearer {}
/**
 * <p>
 *          Uploads one or more pieces of evidence to the specified control in the assessment in AWS Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchImportEvidenceToAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchImportEvidenceToAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchImportEvidenceToAssessmentControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchImportEvidenceToAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link BatchImportEvidenceToAssessmentControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchImportEvidenceToAssessmentControlCommand extends $Command<
  BatchImportEvidenceToAssessmentControlCommandInput,
  BatchImportEvidenceToAssessmentControlCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: BatchImportEvidenceToAssessmentControlCommandInput;
  constructor(input: BatchImportEvidenceToAssessmentControlCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchImportEvidenceToAssessmentControlCommandInput, BatchImportEvidenceToAssessmentControlCommandOutput>;
  private serialize;
  private deserialize;
}
