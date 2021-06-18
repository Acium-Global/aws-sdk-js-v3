import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  BatchCreateDelegationByAssessmentRequest,
  BatchCreateDelegationByAssessmentResponse,
} from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface BatchCreateDelegationByAssessmentCommandInput extends BatchCreateDelegationByAssessmentRequest {}
export interface BatchCreateDelegationByAssessmentCommandOutput
  extends BatchCreateDelegationByAssessmentResponse,
    __MetadataBearer {}
/**
 * <p>
 *    Create a batch of delegations for a specified assessment in AWS Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchCreateDelegationByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchCreateDelegationByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchCreateDelegationByAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateDelegationByAssessmentCommandInput} for command's `input` shape.
 * @see {@link BatchCreateDelegationByAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchCreateDelegationByAssessmentCommand extends $Command<
  BatchCreateDelegationByAssessmentCommandInput,
  BatchCreateDelegationByAssessmentCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: BatchCreateDelegationByAssessmentCommandInput;
  constructor(input: BatchCreateDelegationByAssessmentCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchCreateDelegationByAssessmentCommandInput, BatchCreateDelegationByAssessmentCommandOutput>;
  private serialize;
  private deserialize;
}
