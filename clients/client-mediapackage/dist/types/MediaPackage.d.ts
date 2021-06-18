import { MediaPackageClient } from "./MediaPackageClient";
import { ConfigureLogsCommandInput, ConfigureLogsCommandOutput } from "./commands/ConfigureLogsCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateHarvestJobCommandInput, CreateHarvestJobCommandOutput } from "./commands/CreateHarvestJobCommand";
import { CreateOriginEndpointCommandInput, CreateOriginEndpointCommandOutput } from "./commands/CreateOriginEndpointCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import { DeleteOriginEndpointCommandInput, DeleteOriginEndpointCommandOutput } from "./commands/DeleteOriginEndpointCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import { DescribeHarvestJobCommandInput, DescribeHarvestJobCommandOutput } from "./commands/DescribeHarvestJobCommand";
import { DescribeOriginEndpointCommandInput, DescribeOriginEndpointCommandOutput } from "./commands/DescribeOriginEndpointCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput } from "./commands/ListHarvestJobsCommand";
import { ListOriginEndpointsCommandInput, ListOriginEndpointsCommandOutput } from "./commands/ListOriginEndpointsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { RotateChannelCredentialsCommandInput, RotateChannelCredentialsCommandOutput } from "./commands/RotateChannelCredentialsCommand";
import { RotateIngestEndpointCredentialsCommandInput, RotateIngestEndpointCredentialsCommandOutput } from "./commands/RotateIngestEndpointCredentialsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateOriginEndpointCommandInput, UpdateOriginEndpointCommandOutput } from "./commands/UpdateOriginEndpointCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * AWS Elemental MediaPackage
 */
export declare class MediaPackage extends MediaPackageClient {
    /**
     * Changes the Channel's properities to configure log subscription
     */
    configureLogs(args: ConfigureLogsCommandInput, options?: __HttpHandlerOptions): Promise<ConfigureLogsCommandOutput>;
    configureLogs(args: ConfigureLogsCommandInput, cb: (err: any, data?: ConfigureLogsCommandOutput) => void): void;
    configureLogs(args: ConfigureLogsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfigureLogsCommandOutput) => void): void;
    /**
     * Creates a new Channel.
     */
    createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
    createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
    createChannel(args: CreateChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
    /**
     * Creates a new HarvestJob record.
     */
    createHarvestJob(args: CreateHarvestJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateHarvestJobCommandOutput>;
    createHarvestJob(args: CreateHarvestJobCommandInput, cb: (err: any, data?: CreateHarvestJobCommandOutput) => void): void;
    createHarvestJob(args: CreateHarvestJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHarvestJobCommandOutput) => void): void;
    /**
     * Creates a new OriginEndpoint record.
     */
    createOriginEndpoint(args: CreateOriginEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateOriginEndpointCommandOutput>;
    createOriginEndpoint(args: CreateOriginEndpointCommandInput, cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void): void;
    createOriginEndpoint(args: CreateOriginEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void): void;
    /**
     * Deletes an existing Channel.
     */
    deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
    deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
    deleteChannel(args: DeleteChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
    /**
     * Deletes an existing OriginEndpoint.
     */
    deleteOriginEndpoint(args: DeleteOriginEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteOriginEndpointCommandOutput>;
    deleteOriginEndpoint(args: DeleteOriginEndpointCommandInput, cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void): void;
    deleteOriginEndpoint(args: DeleteOriginEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void): void;
    /**
     * Gets details about a Channel.
     */
    describeChannel(args: DescribeChannelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeChannelCommandOutput>;
    describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
    describeChannel(args: DescribeChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
    /**
     * Gets details about an existing HarvestJob.
     */
    describeHarvestJob(args: DescribeHarvestJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHarvestJobCommandOutput>;
    describeHarvestJob(args: DescribeHarvestJobCommandInput, cb: (err: any, data?: DescribeHarvestJobCommandOutput) => void): void;
    describeHarvestJob(args: DescribeHarvestJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHarvestJobCommandOutput) => void): void;
    /**
     * Gets details about an existing OriginEndpoint.
     */
    describeOriginEndpoint(args: DescribeOriginEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DescribeOriginEndpointCommandOutput>;
    describeOriginEndpoint(args: DescribeOriginEndpointCommandInput, cb: (err: any, data?: DescribeOriginEndpointCommandOutput) => void): void;
    describeOriginEndpoint(args: DescribeOriginEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeOriginEndpointCommandOutput) => void): void;
    /**
     * Returns a collection of Channels.
     */
    listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
    listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
    listChannels(args: ListChannelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
    /**
     * Returns a collection of HarvestJob records.
     */
    listHarvestJobs(args: ListHarvestJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListHarvestJobsCommandOutput>;
    listHarvestJobs(args: ListHarvestJobsCommandInput, cb: (err: any, data?: ListHarvestJobsCommandOutput) => void): void;
    listHarvestJobs(args: ListHarvestJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHarvestJobsCommandOutput) => void): void;
    /**
     * Returns a collection of OriginEndpoint records.
     */
    listOriginEndpoints(args: ListOriginEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListOriginEndpointsCommandOutput>;
    listOriginEndpoints(args: ListOriginEndpointsCommandInput, cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void): void;
    listOriginEndpoints(args: ListOriginEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead
     */
    rotateChannelCredentials(args: RotateChannelCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<RotateChannelCredentialsCommandOutput>;
    rotateChannelCredentials(args: RotateChannelCredentialsCommandInput, cb: (err: any, data?: RotateChannelCredentialsCommandOutput) => void): void;
    rotateChannelCredentials(args: RotateChannelCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RotateChannelCredentialsCommandOutput) => void): void;
    /**
     * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
     */
    rotateIngestEndpointCredentials(args: RotateIngestEndpointCredentialsCommandInput, options?: __HttpHandlerOptions): Promise<RotateIngestEndpointCredentialsCommandOutput>;
    rotateIngestEndpointCredentials(args: RotateIngestEndpointCredentialsCommandInput, cb: (err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void): void;
    rotateIngestEndpointCredentials(args: RotateIngestEndpointCredentialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * Updates an existing Channel.
     */
    updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
    updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
    updateChannel(args: UpdateChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
    /**
     * Updates an existing OriginEndpoint.
     */
    updateOriginEndpoint(args: UpdateOriginEndpointCommandInput, options?: __HttpHandlerOptions): Promise<UpdateOriginEndpointCommandOutput>;
    updateOriginEndpoint(args: UpdateOriginEndpointCommandInput, cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void): void;
    updateOriginEndpoint(args: UpdateOriginEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void): void;
}
