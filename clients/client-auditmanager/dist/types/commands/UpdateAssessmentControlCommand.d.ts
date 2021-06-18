import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentControlRequest, UpdateAssessmentControlResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateAssessmentControlCommandInput extends UpdateAssessmentControlRequest {}
export interface UpdateAssessmentControlCommandOutput extends UpdateAssessmentControlResponse, __MetadataBearer {}
/**
 * <p>
 * Updates a control within an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentControlCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssessmentControlCommand extends $Command<
  UpdateAssessmentControlCommandInput,
  UpdateAssessmentControlCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: UpdateAssessmentControlCommandInput;
  constructor(input: UpdateAssessmentControlCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssessmentControlCommandInput, UpdateAssessmentControlCommandOutput>;
  private serialize;
  private deserialize;
}
