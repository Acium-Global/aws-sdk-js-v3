import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetEvidenceFolderRequest, GetEvidenceFolderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetEvidenceFolderCommandInput extends GetEvidenceFolderRequest {}
export interface GetEvidenceFolderCommandOutput extends GetEvidenceFolderResponse, __MetadataBearer {}
/**
 * <p>
 * Returns an evidence folder from the specified assessment in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceFolderCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEvidenceFolderCommand extends $Command<
  GetEvidenceFolderCommandInput,
  GetEvidenceFolderCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetEvidenceFolderCommandInput;
  constructor(input: GetEvidenceFolderCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEvidenceFolderCommandInput, GetEvidenceFolderCommandOutput>;
  private serialize;
  private deserialize;
}
