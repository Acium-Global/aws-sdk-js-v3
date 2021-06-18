import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { DeleteAssessmentFrameworkRequest, DeleteAssessmentFrameworkResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteAssessmentFrameworkCommandInput extends DeleteAssessmentFrameworkRequest {}
export interface DeleteAssessmentFrameworkCommandOutput extends DeleteAssessmentFrameworkResponse, __MetadataBearer {}
/**
 * <p>
 *    Deletes a custom framework in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentFrameworkCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentFrameworkCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteAssessmentFrameworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentFrameworkCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentFrameworkCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAssessmentFrameworkCommand extends $Command<
  DeleteAssessmentFrameworkCommandInput,
  DeleteAssessmentFrameworkCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: DeleteAssessmentFrameworkCommandInput;
  constructor(input: DeleteAssessmentFrameworkCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAssessmentFrameworkCommandInput, DeleteAssessmentFrameworkCommandOutput>;
  private serialize;
  private deserialize;
}
