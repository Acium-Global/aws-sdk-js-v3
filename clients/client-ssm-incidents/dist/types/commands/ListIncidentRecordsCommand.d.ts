import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { ListIncidentRecordsInput, ListIncidentRecordsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIncidentRecordsCommandInput extends ListIncidentRecordsInput {
}
export interface ListIncidentRecordsCommandOutput extends ListIncidentRecordsOutput, __MetadataBearer {
}
/**
 * <p>Lists all incident records in your account. Use this command to retrieve the Amazon
 *             Resource Name (ARN) of the incident record you want to update. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListIncidentRecordsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListIncidentRecordsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new ListIncidentRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIncidentRecordsCommandInput} for command's `input` shape.
 * @see {@link ListIncidentRecordsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIncidentRecordsCommand extends $Command<ListIncidentRecordsCommandInput, ListIncidentRecordsCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: ListIncidentRecordsCommandInput;
    constructor(input: ListIncidentRecordsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIncidentRecordsCommandInput, ListIncidentRecordsCommandOutput>;
    private serialize;
    private deserialize;
}
