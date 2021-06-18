import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetAccountStatusRequest, GetAccountStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetAccountStatusCommandInput extends GetAccountStatusRequest {}
export interface GetAccountStatusCommandOutput extends GetAccountStatusResponse, __MetadataBearer {}
/**
 * <p>
 * Returns the registration status of an account in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAccountStatusCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAccountStatusCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetAccountStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountStatusCommandInput} for command's `input` shape.
 * @see {@link GetAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAccountStatusCommand extends $Command<
  GetAccountStatusCommandInput,
  GetAccountStatusCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetAccountStatusCommandInput;
  constructor(input: GetAccountStatusCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountStatusCommandInput, GetAccountStatusCommandOutput>;
  private serialize;
  private deserialize;
}
