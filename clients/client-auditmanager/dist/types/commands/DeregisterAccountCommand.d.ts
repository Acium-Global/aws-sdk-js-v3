import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { DeregisterAccountRequest, DeregisterAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeregisterAccountCommandInput extends DeregisterAccountRequest {}
export interface DeregisterAccountCommandOutput extends DeregisterAccountResponse, __MetadataBearer {}
/**
 * <p>
 * Deregisters an account in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeregisterAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeregisterAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeregisterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterAccountCommandInput} for command's `input` shape.
 * @see {@link DeregisterAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterAccountCommand extends $Command<
  DeregisterAccountCommandInput,
  DeregisterAccountCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: DeregisterAccountCommandInput;
  constructor(input: DeregisterAccountCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterAccountCommandInput, DeregisterAccountCommandOutput>;
  private serialize;
  private deserialize;
}
