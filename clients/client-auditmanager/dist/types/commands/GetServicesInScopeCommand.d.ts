import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { GetServicesInScopeRequest, GetServicesInScopeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface GetServicesInScopeCommandInput extends GetServicesInScopeRequest {}
export interface GetServicesInScopeCommandOutput extends GetServicesInScopeResponse, __MetadataBearer {}
/**
 * <p>
 *    Returns a list of the in-scope AWS services for the specified assessment.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetServicesInScopeCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetServicesInScopeCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetServicesInScopeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServicesInScopeCommandInput} for command's `input` shape.
 * @see {@link GetServicesInScopeCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetServicesInScopeCommand extends $Command<
  GetServicesInScopeCommandInput,
  GetServicesInScopeCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: GetServicesInScopeCommandInput;
  constructor(input: GetServicesInScopeCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput>;
  private serialize;
  private deserialize;
}
