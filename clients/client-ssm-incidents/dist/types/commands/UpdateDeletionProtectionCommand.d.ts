import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { UpdateDeletionProtectionInput, UpdateDeletionProtectionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDeletionProtectionCommandInput extends UpdateDeletionProtectionInput {
}
export interface UpdateDeletionProtectionCommandOutput extends UpdateDeletionProtectionOutput, __MetadataBearer {
}
/**
 * <p>Update deletion protection to either allow or deny deletion of the final Region in a
 *             replication set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, UpdateDeletionProtectionCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, UpdateDeletionProtectionCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new UpdateDeletionProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeletionProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateDeletionProtectionCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDeletionProtectionCommand extends $Command<UpdateDeletionProtectionCommandInput, UpdateDeletionProtectionCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: UpdateDeletionProtectionCommandInput;
    constructor(input: UpdateDeletionProtectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeletionProtectionCommandInput, UpdateDeletionProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
