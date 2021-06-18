import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import {
  DeregisterOrganizationAdminAccountRequest,
  DeregisterOrganizationAdminAccountResponse,
} from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeregisterOrganizationAdminAccountCommandInput extends DeregisterOrganizationAdminAccountRequest {}
export interface DeregisterOrganizationAdminAccountCommandOutput
  extends DeregisterOrganizationAdminAccountResponse,
    __MetadataBearer {}
/**
 * <p>
 *   Deregisters the delegated AWS administrator account from the AWS organization.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeregisterOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeregisterOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeregisterOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DeregisterOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterOrganizationAdminAccountCommand extends $Command<
  DeregisterOrganizationAdminAccountCommandInput,
  DeregisterOrganizationAdminAccountCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: DeregisterOrganizationAdminAccountCommandInput;
  constructor(input: DeregisterOrganizationAdminAccountCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterOrganizationAdminAccountCommandInput, DeregisterOrganizationAdminAccountCommandOutput>;
  private serialize;
  private deserialize;
}
