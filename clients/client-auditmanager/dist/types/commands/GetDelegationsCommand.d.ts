import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetDelegationsRequest, GetDelegationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetDelegationsCommandInput extends GetDelegationsRequest {}
export interface GetDelegationsCommandOutput extends GetDelegationsResponse, __MetadataBearer {}
/**
 * <p>
 *    Returns a list of delegations from an audit owner to a delegate.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetDelegationsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetDelegationsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetDelegationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDelegationsCommandInput} for command's `input` shape.
 * @see {@link GetDelegationsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDelegationsCommand extends $Command<
  GetDelegationsCommandInput,
  GetDelegationsCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetDelegationsCommandInput;
  constructor(input: GetDelegationsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDelegationsCommandInput, GetDelegationsCommandOutput>;
  private serialize;
  private deserialize;
}
