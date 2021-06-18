import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetAssessmentRequest, GetAssessmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetAssessmentCommandInput extends GetAssessmentRequest {}
export interface GetAssessmentCommandOutput extends GetAssessmentResponse, __MetadataBearer {}
/**
 * <p>
 * Returns an assessment from AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAssessmentCommand extends $Command<
  GetAssessmentCommandInput,
  GetAssessmentCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetAssessmentCommandInput;
  constructor(input: GetAssessmentCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssessmentCommandInput, GetAssessmentCommandOutput>;
  private serialize;
  private deserialize;
}
