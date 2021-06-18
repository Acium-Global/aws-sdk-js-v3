import { __extends } from "tslib";
import { GetEvidenceByEvidenceFolderRequest, GetEvidenceByEvidenceFolderResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand,
  serializeAws_restJson1GetEvidenceByEvidenceFolderCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    Returns all evidence from a specified evidence folder in AWS Audit Manager.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetEvidenceByEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetEvidenceByEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new GetEvidenceByEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEvidenceByEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link GetEvidenceByEvidenceFolderCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEvidenceByEvidenceFolderCommand = /** @class */ (function (_super) {
  __extends(GetEvidenceByEvidenceFolderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetEvidenceByEvidenceFolderCommand(input) {
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
  GetEvidenceByEvidenceFolderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AuditManagerClient";
    var commandName = "GetEvidenceByEvidenceFolderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetEvidenceByEvidenceFolderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEvidenceByEvidenceFolderResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetEvidenceByEvidenceFolderCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetEvidenceByEvidenceFolderCommand(input, context);
  };
  GetEvidenceByEvidenceFolderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand(output, context);
  };
  return GetEvidenceByEvidenceFolderCommand;
})($Command);
export { GetEvidenceByEvidenceFolderCommand };
//# sourceMappingURL=GetEvidenceByEvidenceFolderCommand.js.map
