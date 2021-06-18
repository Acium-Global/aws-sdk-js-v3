import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { ListControlsRequest, ListControlsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";
export interface ListControlsCommandInput extends ListControlsRequest {}
export interface ListControlsCommandOutput extends ListControlsResponse, __MetadataBearer {}
/**
 * <p>
 * Returns a list of controls from AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListControlsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListControlsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ListControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListControlsCommandInput} for command's `input` shape.
 * @see {@link ListControlsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListControlsCommand extends $Command<
  ListControlsCommandInput,
  ListControlsCommandOutput,
  AuditManagerClientResolvedConfig
> {
  readonly input: ListControlsCommandInput;
  constructor(input: ListControlsCommandInput);
  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListControlsCommandInput, ListControlsCommandOutput>;
  private serialize;
  private deserialize;
}
