import { CreateBrokerCommandInput, CreateBrokerCommandOutput } from "./commands/CreateBrokerCommand";
import { CreateConfigurationCommandInput, CreateConfigurationCommandOutput } from "./commands/CreateConfigurationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteBrokerCommandInput, DeleteBrokerCommandOutput } from "./commands/DeleteBrokerCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeBrokerCommandInput, DescribeBrokerCommandOutput } from "./commands/DescribeBrokerCommand";
import { DescribeBrokerEngineTypesCommandInput, DescribeBrokerEngineTypesCommandOutput } from "./commands/DescribeBrokerEngineTypesCommand";
import { DescribeBrokerInstanceOptionsCommandInput, DescribeBrokerInstanceOptionsCommandOutput } from "./commands/DescribeBrokerInstanceOptionsCommand";
import { DescribeConfigurationCommandInput, DescribeConfigurationCommandOutput } from "./commands/DescribeConfigurationCommand";
import { DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput } from "./commands/DescribeConfigurationRevisionCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { ListBrokersCommandInput, ListBrokersCommandOutput } from "./commands/ListBrokersCommand";
import { ListConfigurationRevisionsCommandInput, ListConfigurationRevisionsCommandOutput } from "./commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "./commands/ListConfigurationsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "./commands/RebootBrokerCommand";
import { UpdateBrokerCommandInput, UpdateBrokerCommandOutput } from "./commands/UpdateBrokerCommand";
import { UpdateConfigurationCommandInput, UpdateConfigurationCommandOutput } from "./commands/UpdateConfigurationCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { Provider, RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@aws-sdk/types";
export declare type ServiceInputTypes = CreateBrokerCommandInput | CreateConfigurationCommandInput | CreateTagsCommandInput | CreateUserCommandInput | DeleteBrokerCommandInput | DeleteTagsCommandInput | DeleteUserCommandInput | DescribeBrokerCommandInput | DescribeBrokerEngineTypesCommandInput | DescribeBrokerInstanceOptionsCommandInput | DescribeConfigurationCommandInput | DescribeConfigurationRevisionCommandInput | DescribeUserCommandInput | ListBrokersCommandInput | ListConfigurationRevisionsCommandInput | ListConfigurationsCommandInput | ListTagsCommandInput | ListUsersCommandInput | RebootBrokerCommandInput | UpdateBrokerCommandInput | UpdateConfigurationCommandInput | UpdateUserCommandInput;
export declare type ServiceOutputTypes = CreateBrokerCommandOutput | CreateConfigurationCommandOutput | CreateTagsCommandOutput | CreateUserCommandOutput | DeleteBrokerCommandOutput | DeleteTagsCommandOutput | DeleteUserCommandOutput | DescribeBrokerCommandOutput | DescribeBrokerEngineTypesCommandOutput | DescribeBrokerInstanceOptionsCommandOutput | DescribeConfigurationCommandOutput | DescribeConfigurationRevisionCommandOutput | DescribeUserCommandOutput | ListBrokersCommandOutput | ListConfigurationRevisionsCommandOutput | ListConfigurationsCommandOutput | ListTagsCommandOutput | ListUsersCommandOutput | RebootBrokerCommandOutput | UpdateBrokerCommandOutput | UpdateConfigurationCommandOutput | UpdateUserCommandOutput;
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
    /**
     * The HTTP handler to use. Fetch in browser and Https in Nodejs.
     */
    requestHandler?: __HttpHandler;
    /**
     * A constructor for a class implementing the @aws-sdk/types.Hash interface
     * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
     * @internal
     */
    sha256?: __HashConstructor;
    /**
     * The function that will be used to convert strings into HTTP endpoints.
     * @internal
     */
    urlParser?: __UrlParser;
    /**
     * A function that can calculate the length of a request body.
     * @internal
     */
    bodyLengthChecker?: (body: any) => number | undefined;
    /**
     * A function that converts a stream into an array of bytes.
     * @internal
     */
    streamCollector?: __StreamCollector;
    /**
     * The function that will be used to convert a base64-encoded string to a byte array.
     * @internal
     */
    base64Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a base64-encoded string.
     * @internal
     */
    base64Encoder?: __Encoder;
    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array.
     * @internal
     */
    utf8Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string.
     * @internal
     */
    utf8Encoder?: __Encoder;
    /**
     * The runtime environment.
     * @internal
     */
    runtime?: string;
    /**
     * Disable dyanamically changing the endpoint of the client based on the hostPrefix
     * trait of an operation.
     */
    disableHostPrefix?: boolean;
    /**
     * Unique service identifier.
     * @internal
     */
    serviceId?: string;
    /**
     * The AWS region to which this client will send requests
     */
    region?: string | __Provider<string>;
    /**
     * Value for how many times a request will be made at most in case of retry.
     */
    maxAttempts?: number | __Provider<number>;
    /**
     * Specifies provider for retry algorithm to use.
     * @internal
     */
    retryModeProvider?: __Provider<string>;
    /**
     * Optional logger for logging debug/info/warn/error.
     */
    logger?: __Logger;
    /**
     * Default credentials provider; Not available in browser runtime.
     * @internal
     */
    credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
    /**
     * Fetch related hostname, signing name or signing region with given region.
     * @internal
     */
    regionInfoProvider?: RegionInfoProvider;
    /**
     * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
     * @internal
     */
    defaultUserAgentProvider?: Provider<__UserAgent>;
}
declare type MqClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & RetryInputConfig & HostHeaderInputConfig & AwsAuthInputConfig & UserAgentInputConfig;
/**
 * The configuration interface of MqClient class constructor that set the region, credentials and other options.
 */
export interface MqClientConfig extends MqClientConfigType {
}
declare type MqClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & RetryResolvedConfig & HostHeaderResolvedConfig & AwsAuthResolvedConfig & UserAgentResolvedConfig;
/**
 * The resolved configuration interface of MqClient class. This is resolved and normalized from the {@link MqClientConfig | constructor configuration interface}.
 */
export interface MqClientResolvedConfig extends MqClientResolvedConfigType {
}
/**
 * Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.
 */
export declare class MqClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, MqClientResolvedConfig> {
    /**
     * The resolved configuration of MqClient class. This is resolved and normalized from the {@link MqClientConfig | constructor configuration interface}.
     */
    readonly config: MqClientResolvedConfig;
    constructor(configuration: MqClientConfig);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
}
export {};
