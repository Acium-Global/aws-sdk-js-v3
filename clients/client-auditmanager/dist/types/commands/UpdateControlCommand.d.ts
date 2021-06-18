import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateControlRequest, UpdateControlResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface UpdateControlCommandInput extends UpdateControlRequest {}
export interface UpdateControlCommandOutput extends UpdateControlResponse, __MetadataBearer {}
/**
 * <p>
 * Updates a custom control in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateControlCommandInput} for command's `input` shape.
 * @see {@link UpdateControlCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateControlCommand extends $Command<
  UpdateControlCommandInput,
  UpdateControlCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: UpdateControlCommandInput;
  constructor(input: UpdateControlCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateControlCommandInput, UpdateControlCommandOutput>;
  private serialize;
  private deserialize;
}
