"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditManagerClient = void 0;
const runtimeConfig_1 = require("./runtimeConfig");
const config_resolver_1 = require("@aws-sdk/config-resolver");
const middleware_content_length_1 = require("@aws-sdk/middleware-content-length");
const middleware_host_header_1 = require("@aws-sdk/middleware-host-header");
const middleware_logger_1 = require("@aws-sdk/middleware-logger");
const middleware_retry_1 = require("@aws-sdk/middleware-retry");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const middleware_user_agent_1 = require("@aws-sdk/middleware-user-agent");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Welcome to the AWS Audit Manager API reference. This guide is for developers who need detailed information about the AWS Audit Manager API operations, data types, and errors. </p>
 *          <p>AWS Audit Manager is a service that provides automated evidence collection so that you
 *          can continuously audit your AWS usage, and assess the effectiveness of your controls to
 *          better manage risk and simplify compliance.</p>
 *          <p>AWS Audit Manager provides pre-built frameworks that structure and automate assessments
 *          for a given compliance standard. Frameworks include a pre-built collection of controls with
 *          descriptions and testing procedures, which are grouped according to the requirements of the
 *          specified compliance standard or regulation. You can also customize frameworks and controls
 *          to support internal audits with unique requirements. </p>
 *
 *          <p>Use the following links to get started with the AWS Audit Manager API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all AWS Audit Manager API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all AWS Audit Manager data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *
 *          <p>If you're new to AWS Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html"> AWS Audit Manager User Guide</a>.</p>
 */
class AuditManagerClient extends smithy_client_1.Client {
  constructor(configuration) {
    let _config_0 = {
      ...runtimeConfig_1.ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = config_resolver_1.resolveRegionConfig(_config_0);
    let _config_2 = config_resolver_1.resolveEndpointsConfig(_config_1);
    let _config_3 = middleware_retry_1.resolveRetryConfig(_config_2);
    let _config_4 = middleware_host_header_1.resolveHostHeaderConfig(_config_3);
    let _config_5 = middleware_signing_1.resolveAwsAuthConfig(_config_4);
    let _config_6 = middleware_user_agent_1.resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(middleware_retry_1.getRetryPlugin(this.config));
    this.middlewareStack.use(middleware_content_length_1.getContentLengthPlugin(this.config));
    this.middlewareStack.use(middleware_host_header_1.getHostHeaderPlugin(this.config));
    this.middlewareStack.use(middleware_logger_1.getLoggerPlugin(this.config));
    this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(this.config));
    this.middlewareStack.use(middleware_user_agent_1.getUserAgentPlugin(this.config));
    this.middlewareStack.use(middleware_retry_1.getOmitRetryHeadersPlugin(this.config));
  }
  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy() {
    super.destroy();
  }
}
exports.AuditManagerClient = AuditManagerClient;
//# sourceMappingURL=AuditManagerClient.js.map
