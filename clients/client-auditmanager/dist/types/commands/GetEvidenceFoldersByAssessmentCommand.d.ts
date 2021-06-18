import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetEvidenceFoldersByAssessmentRequest, GetEvidenceFoldersByAssessmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetEvidenceFoldersByAssessmentCommandInput extends GetEvidenceFoldersByAssessmentRequest {}
export interface GetEvidenceFoldersByAssessmentCommandOutput
  extends GetEvidenceFoldersByAssessmentResponse,
    __MetadataBearer {}
/**
 * <p>
 *    Returns the evidence folders from a specified assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFoldersByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetEvidenceFoldersByAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvidenceFoldersByAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFoldersByAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEvidenceFoldersByAssessmentCommand extends $Command<
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetEvidenceFoldersByAssessmentCommandInput;
  constructor(input: GetEvidenceFoldersByAssessmentCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEvidenceFoldersByAssessmentCommandInput, GetEvidenceFoldersByAssessmentCommandOutput>;
  private serialize;
  private deserialize;
}
