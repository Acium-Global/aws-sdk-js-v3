import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentRequest, UpdateAssessmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateAssessmentCommandInput extends UpdateAssessmentRequest {}
export interface UpdateAssessmentCommandOutput extends UpdateAssessmentResponse, __MetadataBearer {}
/**
 * <p>
 *    Edits an AWS Audit Manager assessment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssessmentCommand extends $Command<
  UpdateAssessmentCommandInput,
  UpdateAssessmentCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: UpdateAssessmentCommandInput;
  constructor(input: UpdateAssessmentCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssessmentCommandInput, UpdateAssessmentCommandOutput>;
  private serialize;
  private deserialize;
}
