import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { DeleteAssessmentRequest, DeleteAssessmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteAssessmentCommandInput extends DeleteAssessmentRequest {}
export interface DeleteAssessmentCommandOutput extends DeleteAssessmentResponse, __MetadataBearer {}
/**
 * <p>
 *    Deletes an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAssessmentCommand extends $Command<
  DeleteAssessmentCommandInput,
  DeleteAssessmentCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: DeleteAssessmentCommandInput;
  constructor(input: DeleteAssessmentCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAssessmentCommandInput, DeleteAssessmentCommandOutput>;
  private serialize;
  private deserialize;
}
