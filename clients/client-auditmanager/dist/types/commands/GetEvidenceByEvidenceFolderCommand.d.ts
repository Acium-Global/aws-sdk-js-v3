import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetEvidenceByEvidenceFolderRequest, GetEvidenceByEvidenceFolderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetEvidenceByEvidenceFolderCommandInput extends GetEvidenceByEvidenceFolderRequest {}
export interface GetEvidenceByEvidenceFolderCommandOutput
  extends GetEvidenceByEvidenceFolderResponse,
    __MetadataBearer {}
/**
 * <p>
 *    Returns all evidence from a specified evidence folder in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceByEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceByEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetEvidenceByEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvidenceByEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceByEvidenceFolderCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEvidenceByEvidenceFolderCommand extends $Command<
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetEvidenceByEvidenceFolderCommandInput;
  constructor(input: GetEvidenceByEvidenceFolderCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEvidenceByEvidenceFolderCommandInput, GetEvidenceByEvidenceFolderCommandOutput>;
  private serialize;
  private deserialize;
}
