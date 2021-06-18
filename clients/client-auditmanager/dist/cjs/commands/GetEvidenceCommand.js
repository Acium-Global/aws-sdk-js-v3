"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEvidenceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 * Returns evidence from AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetEvidenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvidenceCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetEvidenceCommand extends smithy_client_1.Command {
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
    const commandName = "GetEvidenceCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.GetEvidenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.GetEvidenceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1GetEvidenceCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1GetEvidenceCommand(output, context);
  }
}
exports.GetEvidenceCommand = GetEvidenceCommand;
//# sourceMappingURL=GetEvidenceCommand.js.map
