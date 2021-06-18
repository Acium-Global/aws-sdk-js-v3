import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { RegisterAccountRequest, RegisterAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RegisterAccountCommandInput extends RegisterAccountRequest {}
export interface RegisterAccountCommandOutput extends RegisterAccountResponse, __MetadataBearer {}
/**
 * <p>
 *  Enables AWS Audit Manager for the specified AWS account.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, RegisterAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, RegisterAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new RegisterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterAccountCommand extends $Command<
  RegisterAccountCommandInput,
  RegisterAccountCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: RegisterAccountCommandInput;
  constructor(input: RegisterAccountCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterAccountCommandInput, RegisterAccountCommandOutput>;
  private serialize;
  private deserialize;
}
