import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetSettingsRequest, GetSettingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetSettingsCommandInput extends GetSettingsRequest {}
export interface GetSettingsCommandOutput extends GetSettingsResponse, __MetadataBearer {}
/**
 * <p>
 *    Returns the settings for the specified AWS account.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetSettingsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetSettingsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSettingsCommandInput} for command's `input` shape.
 * @see {@link GetSettingsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSettingsCommand extends $Command<
  GetSettingsCommandInput,
  GetSettingsCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetSettingsCommandInput;
  constructor(input: GetSettingsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSettingsCommandInput, GetSettingsCommandOutput>;
  private serialize;
  private deserialize;
}
