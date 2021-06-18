import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { ListAssessmentFrameworksRequest, ListAssessmentFrameworksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListAssessmentFrameworksCommandInput extends ListAssessmentFrameworksRequest {}
export interface ListAssessmentFrameworksCommandOutput extends ListAssessmentFrameworksResponse, __MetadataBearer {}
/**
 * <p>
 * Returns a list of the frameworks available in the AWS Audit Manager framework library.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentFrameworksCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentFrameworksCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ListAssessmentFrameworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentFrameworksCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentFrameworksCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssessmentFrameworksCommand extends $Command<
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: ListAssessmentFrameworksCommandInput;
  constructor(input: ListAssessmentFrameworksCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssessmentFrameworksCommandInput, ListAssessmentFrameworksCommandOutput>;
  private serialize;
  private deserialize;
}
