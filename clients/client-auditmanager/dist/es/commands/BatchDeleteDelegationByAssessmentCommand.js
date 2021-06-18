import { __extends } from "tslib";
import {
  BatchDeleteDelegationByAssessmentRequest,
  BatchDeleteDelegationByAssessmentResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand,
  serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Deletes the delegations in the specified AWS Audit Manager assessment.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchDeleteDelegationByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchDeleteDelegationByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchDeleteDelegationByAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteDelegationByAssessmentCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDelegationByAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteDelegationByAssessmentCommand = /** @class */ (function (_super) {
  __extends(BatchDeleteDelegationByAssessmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchDeleteDelegationByAssessmentCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  BatchDeleteDelegationByAssessmentCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "BatchDeleteDelegationByAssessmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchDeleteDelegationByAssessmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteDelegationByAssessmentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchDeleteDelegationByAssessmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand(input, context);
  };
  BatchDeleteDelegationByAssessmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand(output, context);
  };
  return BatchDeleteDelegationByAssessmentCommand;
})($Command);
export { BatchDeleteDelegationByAssessmentCommand };
//# sourceMappingURL=BatchDeleteDelegationByAssessmentCommand.js.map
