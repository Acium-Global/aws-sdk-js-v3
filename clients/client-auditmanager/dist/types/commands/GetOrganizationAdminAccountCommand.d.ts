import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetOrganizationAdminAccountRequest, GetOrganizationAdminAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetOrganizationAdminAccountCommandInput extends GetOrganizationAdminAccountRequest {}
export interface GetOrganizationAdminAccountCommandOutput
  extends GetOrganizationAdminAccountResponse,
    __MetadataBearer {}
/**
 * <p>
 *   Returns the name of the delegated AWS administrator account for the AWS organization.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOrganizationAdminAccountCommand extends $Command<
  GetOrganizationAdminAccountCommandInput,
  GetOrganizationAdminAccountCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetOrganizationAdminAccountCommandInput;
  constructor(input: GetOrganizationAdminAccountCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOrganizationAdminAccountCommandInput, GetOrganizationAdminAccountCommandOutput>;
  private serialize;
  private deserialize;
}
