import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetEvidenceRequest, GetEvidenceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetEvidenceCommandInput extends GetEvidenceRequest {}
export interface GetEvidenceCommandOutput extends GetEvidenceResponse, __MetadataBearer {}
/**
 * <p>
 * Returns evidence from AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetEvidenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvidenceCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEvidenceCommand extends $Command<
  GetEvidenceCommandInput,
  GetEvidenceCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetEvidenceCommandInput;
  constructor(input: GetEvidenceCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEvidenceCommandInput, GetEvidenceCommandOutput>;
  private serialize;
  private deserialize;
}
