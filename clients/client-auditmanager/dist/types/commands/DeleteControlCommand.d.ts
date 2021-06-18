import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { DeleteControlRequest, DeleteControlResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface DeleteControlCommandInput extends DeleteControlRequest {}
export interface DeleteControlCommandOutput extends DeleteControlResponse, __MetadataBearer {}
/**
 * <p>
 *    Deletes a custom control in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeleteControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeleteControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new DeleteControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteControlCommandInput} for command's `input` shape.
 * @see {@link DeleteControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteControlCommand extends $Command<
  DeleteControlCommandInput,
  DeleteControlCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: DeleteControlCommandInput;
  constructor(input: DeleteControlCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteControlCommandInput, DeleteControlCommandOutput>;
  private serialize;
  private deserialize;
}
