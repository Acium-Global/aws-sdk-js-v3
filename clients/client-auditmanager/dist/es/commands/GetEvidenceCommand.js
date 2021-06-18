import { __extends } from "tslib";
import { GetEvidenceRequest, GetEvidenceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetEvidenceCommand,
  serializeAws_restJson1GetEvidenceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var GetEvidenceCommand = /** @class */ (function (_super) {
  __extends(GetEvidenceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetEvidenceCommand(input) {
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
  GetEvidenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetEvidenceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetEvidenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEvidenceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetEvidenceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetEvidenceCommand(input, context);
  };
  GetEvidenceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetEvidenceCommand(output, context);
  };
  return GetEvidenceCommand;
})($Command);
export { GetEvidenceCommand };
//# sourceMappingURL=GetEvidenceCommand.js.map
