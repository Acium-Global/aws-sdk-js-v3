import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  AssociateAssessmentReportEvidenceFolderRequest,
  AssociateAssessmentReportEvidenceFolderResponse,
} from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface AssociateAssessmentReportEvidenceFolderCommandInput
  extends AssociateAssessmentReportEvidenceFolderRequest {}
export interface AssociateAssessmentReportEvidenceFolderCommandOutput
  extends AssociateAssessmentReportEvidenceFolderResponse,
    __MetadataBearer {}
/**
 * <p>
 *          Associates an evidence folder to the specified assessment report in AWS Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new AssociateAssessmentReportEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateAssessmentReportEvidenceFolderCommand extends $Command<
  AssociateAssessmentReportEvidenceFolderCommandInput,
  AssociateAssessmentReportEvidenceFolderCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: AssociateAssessmentReportEvidenceFolderCommandInput;
  constructor(input: AssociateAssessmentReportEvidenceFolderCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAssessmentReportEvidenceFolderCommandInput, AssociateAssessmentReportEvidenceFolderCommandOutput>;
  private serialize;
  private deserialize;
}
