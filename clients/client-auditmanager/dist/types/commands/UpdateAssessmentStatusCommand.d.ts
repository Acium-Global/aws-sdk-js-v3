import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentStatusRequest, UpdateAssessmentStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateAssessmentStatusCommandInput extends UpdateAssessmentStatusRequest {}
export interface UpdateAssessmentStatusCommandOutput extends UpdateAssessmentStatusResponse, __MetadataBearer {}
/**
 * <p>
 *    Updates the status of an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentStatusCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssessmentStatusCommand extends $Command<
  UpdateAssessmentStatusCommandInput,
  UpdateAssessmentStatusCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: UpdateAssessmentStatusCommandInput;
  constructor(input: UpdateAssessmentStatusCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssessmentStatusCommandInput, UpdateAssessmentStatusCommandOutput>;
  private serialize;
  private deserialize;
}
