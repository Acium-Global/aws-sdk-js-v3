import { __extends } from "tslib";
import { ListKeywordsForDataSourceRequest, ListKeywordsForDataSourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListKeywordsForDataSourceCommand,
  serializeAws_restJson1ListKeywordsForDataSourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Returns a list of keywords that pre-mapped to the specified control data source.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListKeywordsForDataSourceCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListKeywordsForDataSourceCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new ListKeywordsForDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListKeywordsForDataSourceCommandInput} for command's `input` shape.
 * @see {@link ListKeywordsForDataSourceCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListKeywordsForDataSourceCommand = /** @class */ (function (_super) {
  __extends(ListKeywordsForDataSourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListKeywordsForDataSourceCommand(input) {
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
  ListKeywordsForDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "ListKeywordsForDataSourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListKeywordsForDataSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListKeywordsForDataSourceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListKeywordsForDataSourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListKeywordsForDataSourceCommand(input, context);
  };
  ListKeywordsForDataSourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListKeywordsForDataSourceCommand(output, context);
  };
  return ListKeywordsForDataSourceCommand;
})($Command);
export { ListKeywordsForDataSourceCommand };
//# sourceMappingURL=ListKeywordsForDataSourceCommand.js.map
