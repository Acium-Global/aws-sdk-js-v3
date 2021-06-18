import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { UpdateIncidentRecordInput, UpdateIncidentRecordOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateIncidentRecordCommandInput extends UpdateIncidentRecordInput {
}
export interface UpdateIncidentRecordCommandOutput extends UpdateIncidentRecordOutput, __MetadataBearer {
}
/**
 * <p>Update the details of an incident record. You can use this action to update an
 *             incident record from the defined chat channel. For more information about using actions
 *             in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateIncidentRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link UpdateIncidentRecordCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateIncidentRecordCommand extends $Command<UpdateIncidentRecordCommandInput, UpdateIncidentRecordCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: UpdateIncidentRecordCommandInput;
    constructor(input: UpdateIncidentRecordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIncidentRecordCommandInput, UpdateIncidentRecordCommandOutput>;
    private serialize;
    private deserialize;
}
