import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  ValidateAssessmentReportIntegrityRequest,
  ValidateAssessmentReportIntegrityResponse,
} from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ValidateAssessmentReportIntegrityCommandInput extends ValidateAssessmentReportIntegrityRequest {}
export interface ValidateAssessmentReportIntegrityCommandOutput
  extends ValidateAssessmentReportIntegrityResponse,
    __MetadataBearer {}
/**
 * <p>
 *    Validates the integrity of an assessment report in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ValidateAssessmentReportIntegrityCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ValidateAssessmentReportIntegrityCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ValidateAssessmentReportIntegrityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateAssessmentReportIntegrityCommandInput} for command's `input` shape.
 * @see {@link ValidateAssessmentReportIntegrityCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ValidateAssessmentReportIntegrityCommand extends $Command<
  ValidateAssessmentReportIntegrityCommandInput,
  ValidateAssessmentReportIntegrityCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: ValidateAssessmentReportIntegrityCommandInput;
  constructor(input: ValidateAssessmentReportIntegrityCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidateAssessmentReportIntegrityCommandInput, ValidateAssessmentReportIntegrityCommandOutput>;
  private serialize;
  private deserialize;
}
