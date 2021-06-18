import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { RegisterOrganizationAdminAccountRequest, RegisterOrganizationAdminAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface RegisterOrganizationAdminAccountCommandInput extends RegisterOrganizationAdminAccountRequest {}
export interface RegisterOrganizationAdminAccountCommandOutput
  extends RegisterOrganizationAdminAccountResponse,
    __MetadataBearer {}
/**
 * <p>
 *    Enables an AWS account within the organization as the delegated administrator for AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, RegisterOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, RegisterOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new RegisterOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterOrganizationAdminAccountCommand extends $Command<
  RegisterOrganizationAdminAccountCommandInput,
  RegisterOrganizationAdminAccountCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: RegisterOrganizationAdminAccountCommandInput;
  constructor(input: RegisterOrganizationAdminAccountCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterOrganizationAdminAccountCommandInput, RegisterOrganizationAdminAccountCommandOutput>;
  private serialize;
  private deserialize;
}
