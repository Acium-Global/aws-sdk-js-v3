import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentFrameworkRequest, UpdateAssessmentFrameworkResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateAssessmentFrameworkCommandInput extends UpdateAssessmentFrameworkRequest {}
export interface UpdateAssessmentFrameworkCommandOutput extends UpdateAssessmentFrameworkResponse, __MetadataBearer {}
/**
 * <p>
 * Updates a custom framework in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentFrameworkCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentFrameworkCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentFrameworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentFrameworkCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentFrameworkCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssessmentFrameworkCommand extends $Command<
  UpdateAssessmentFrameworkCommandInput,
  UpdateAssessmentFrameworkCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: UpdateAssessmentFrameworkCommandInput;
  constructor(input: UpdateAssessmentFrameworkCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssessmentFrameworkCommandInput, UpdateAssessmentFrameworkCommandOutput>;
  private serialize;
  private deserialize;
}
