"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChangeLogsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 * Returns a list of changelogs from AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetChangeLogsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetChangeLogsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetChangeLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChangeLogsCommandInput} for command's `input` shape.
 * @see {@link GetChangeLogsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetChangeLogsCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "GetChangeLogsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.GetChangeLogsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.GetChangeLogsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1GetChangeLogsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1GetChangeLogsCommand(output, context);
  }
}
exports.GetChangeLogsCommand = GetChangeLogsCommand;
//# sourceMappingURL=GetChangeLogsCommand.js.map
