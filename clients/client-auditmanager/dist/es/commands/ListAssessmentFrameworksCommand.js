import { __extends } from "tslib";
import { ListAssessmentFrameworksRequest, ListAssessmentFrameworksResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAssessmentFrameworksCommand,
  serializeAws_restJson1ListAssessmentFrameworksCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Returns a list of the frameworks available in the AWS Audit Manager framework library.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentFrameworksCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentFrameworksCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ListAssessmentFrameworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentFrameworksCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentFrameworksCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAssessmentFrameworksCommand = /** @class */ (function (_super) {
  __extends(ListAssessmentFrameworksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAssessmentFrameworksCommand(input) {
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
  ListAssessmentFrameworksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "ListAssessmentFrameworksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAssessmentFrameworksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentFrameworksResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAssessmentFrameworksCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAssessmentFrameworksCommand(input, context);
  };
  ListAssessmentFrameworksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAssessmentFrameworksCommand(output, context);
  };
  return ListAssessmentFrameworksCommand;
})($Command);
export { ListAssessmentFrameworksCommand };
//# sourceMappingURL=ListAssessmentFrameworksCommand.js.map
