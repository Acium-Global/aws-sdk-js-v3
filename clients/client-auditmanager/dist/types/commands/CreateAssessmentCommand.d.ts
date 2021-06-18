import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { CreateAssessmentRequest, CreateAssessmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateAssessmentCommandInput extends CreateAssessmentRequest {}
export interface CreateAssessmentCommandOutput extends CreateAssessmentResponse, __MetadataBearer {}
/**
 * <p>
 *   Creates an assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, CreateAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, CreateAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new CreateAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssessmentCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAssessmentCommand extends $Command<
  CreateAssessmentCommandInput,
  CreateAssessmentCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: CreateAssessmentCommandInput;
  constructor(input: CreateAssessmentCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAssessmentCommandInput, CreateAssessmentCommandOutput>;
  private serialize;
  private deserialize;
}
