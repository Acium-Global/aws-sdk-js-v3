import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { CreateAssessmentFrameworkRequest, CreateAssessmentFrameworkResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface CreateAssessmentFrameworkCommandInput extends CreateAssessmentFrameworkRequest {}
export interface CreateAssessmentFrameworkCommandOutput extends CreateAssessmentFrameworkResponse, __MetadataBearer {}
/**
 * <p>
 * Creates a custom framework in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, CreateAssessmentFrameworkCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, CreateAssessmentFrameworkCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new CreateAssessmentFrameworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssessmentFrameworkCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentFrameworkCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAssessmentFrameworkCommand extends $Command<
  CreateAssessmentFrameworkCommandInput,
  CreateAssessmentFrameworkCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: CreateAssessmentFrameworkCommandInput;
  constructor(input: CreateAssessmentFrameworkCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAssessmentFrameworkCommandInput, CreateAssessmentFrameworkCommandOutput>;
  private serialize;
  private deserialize;
}
