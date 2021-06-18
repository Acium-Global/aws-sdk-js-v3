import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentControlSetStatusRequest, UpdateAssessmentControlSetStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateAssessmentControlSetStatusCommandInput extends UpdateAssessmentControlSetStatusRequest {}
export interface UpdateAssessmentControlSetStatusCommandOutput
  extends UpdateAssessmentControlSetStatusResponse,
    __MetadataBearer {}
/**
 * <p>
 *    Updates the status of a control set in an AWS Audit Manager assessment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentControlSetStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentControlSetStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentControlSetStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentControlSetStatusCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssessmentControlSetStatusCommand extends $Command<
  UpdateAssessmentControlSetStatusCommandInput,
  UpdateAssessmentControlSetStatusCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: UpdateAssessmentControlSetStatusCommandInput;
  constructor(input: UpdateAssessmentControlSetStatusCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssessmentControlSetStatusCommandInput, UpdateAssessmentControlSetStatusCommandOutput>;
  private serialize;
  private deserialize;
}
