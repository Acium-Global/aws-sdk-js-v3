import { __extends } from "tslib";
import { GetAssessmentRequest, GetAssessmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAssessmentCommand,
  serializeAws_restJson1GetAssessmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Returns an assessment from AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetAssessmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssessmentCommand = /** @class */ (function (_super) {
  __extends(GetAssessmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAssessmentCommand(input) {
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
  GetAssessmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetAssessmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAssessmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAssessmentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAssessmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAssessmentCommand(input, context);
  };
  GetAssessmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAssessmentCommand(output, context);
  };
  return GetAssessmentCommand;
})($Command);
export { GetAssessmentCommand };
//# sourceMappingURL=GetAssessmentCommand.js.map
