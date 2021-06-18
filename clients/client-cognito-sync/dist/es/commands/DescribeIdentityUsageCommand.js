import { __extends } from "tslib";
import { DescribeIdentityUsageRequest, DescribeIdentityUsageResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeIdentityUsageCommand, serializeAws_restJson1DescribeIdentityUsageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets usage information for an identity, including number of datasets and data usage.</p>
 *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
 *       <examples>
 *          <example>
 *             <name>DescribeIdentityUsage</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 33f9b4e4-a177-4aad-a3bb-6edb7980b283
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.DescribeIdentityUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T215129Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#DescribeIdentityUsage",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "IDENTITY_POOL_ID",
 *         "IdentityId": "IDENTITY_ID"
 *     }
 * }
 *                </request>
 *             <response>
 *                1.1 200 OK
 * x-amzn-requestid: 33f9b4e4-a177-4aad-a3bb-6edb7980b283
 * content-type: application/json
 * content-length: 318
 * date: Tue, 11 Nov 2014 21:51:29 GMT
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#DescribeIdentityUsageResponse",
 *         "IdentityUsage":
 *         {
 *             "DataStorage": 16,
 *             "DatasetCount": 1,
 *             "IdentityId": "IDENTITY_ID",
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.412974081336E9
 *         }
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, DescribeIdentityUsageCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, DescribeIdentityUsageCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new DescribeIdentityUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityUsageCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityUsageCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIdentityUsageCommand = /** @class */ (function (_super) {
    __extends(DescribeIdentityUsageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIdentityUsageCommand(input) {
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
    DescribeIdentityUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoSyncClient";
        var commandName = "DescribeIdentityUsageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIdentityUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIdentityUsageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIdentityUsageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeIdentityUsageCommand(input, context);
    };
    DescribeIdentityUsageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeIdentityUsageCommand(output, context);
    };
    return DescribeIdentityUsageCommand;
}($Command));
export { DescribeIdentityUsageCommand };
//# sourceMappingURL=DescribeIdentityUsageCommand.js.map