import { __extends } from "tslib";
import {
  BatchCreateDelegationByAssessmentRequest,
  BatchCreateDelegationByAssessmentResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand,
  serializeAws_restJson1BatchCreateDelegationByAssessmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Create a batch of delegations for a specified assessment in AWS Audit Manager.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, BatchCreateDelegationByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, BatchCreateDelegationByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new BatchCreateDelegationByAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateDelegationByAssessmentCommandInput} for command's `input` shape.
 * @see {@link BatchCreateDelegationByAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchCreateDelegationByAssessmentCommand = /** @class */ (function (_super) {
  __extends(BatchCreateDelegationByAssessmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchCreateDelegationByAssessmentCommand(input) {
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
  BatchCreateDelegationByAssessmentCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "BatchCreateDelegationByAssessmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchCreateDelegationByAssessmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateDelegationByAssessmentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchCreateDelegationByAssessmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchCreateDelegationByAssessmentCommand(input, context);
  };
  BatchCreateDelegationByAssessmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand(output, context);
  };
  return BatchCreateDelegationByAssessmentCommand;
})($Command);
export { BatchCreateDelegationByAssessmentCommand };
//# sourceMappingURL=BatchCreateDelegationByAssessmentCommand.js.map
