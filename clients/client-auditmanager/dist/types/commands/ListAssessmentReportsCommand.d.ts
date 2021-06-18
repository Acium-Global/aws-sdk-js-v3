import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { ListAssessmentReportsRequest, ListAssessmentReportsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListAssessmentReportsCommandInput extends ListAssessmentReportsRequest {}
export interface ListAssessmentReportsCommandOutput extends ListAssessmentReportsResponse, __MetadataBearer {}
/**
 * <p>
 * Returns a list of assessment reports created in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentReportsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentReportsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ListAssessmentReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentReportsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentReportsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssessmentReportsCommand extends $Command<
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: ListAssessmentReportsCommandInput;
  constructor(input: ListAssessmentReportsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssessmentReportsCommandInput, ListAssessmentReportsCommandOutput>;
  private serialize;
  private deserialize;
}
