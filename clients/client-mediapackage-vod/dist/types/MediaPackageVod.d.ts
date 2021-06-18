import { MediaPackageVodClient } from "./MediaPackageVodClient";
import { ConfigureLogsCommandInput, ConfigureLogsCommandOutput } from "./commands/ConfigureLogsCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import { CreatePackagingConfigurationCommandInput, CreatePackagingConfigurationCommandOutput } from "./commands/CreatePackagingConfigurationCommand";
import { CreatePackagingGroupCommandInput, CreatePackagingGroupCommandOutput } from "./commands/CreatePackagingGroupCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeletePackagingConfigurationCommandInput, DeletePackagingConfigurationCommandOutput } from "./commands/DeletePackagingConfigurationCommand";
import { DeletePackagingGroupCommandInput, DeletePackagingGroupCommandOutput } from "./commands/DeletePackagingGroupCommand";
import { DescribeAssetCommandInput, DescribeAssetCommandOutput } from "./commands/DescribeAssetCommand";
import { DescribePackagingConfigurationCommandInput, DescribePackagingConfigurationCommandOutput } from "./commands/DescribePackagingConfigurationCommand";
import { DescribePackagingGroupCommandInput, DescribePackagingGroupCommandOutput } from "./commands/DescribePackagingGroupCommand";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import { ListPackagingConfigurationsCommandInput, ListPackagingConfigurationsCommandOutput } from "./commands/ListPackagingConfigurationsCommand";
import { ListPackagingGroupsCommandInput, ListPackagingGroupsCommandOutput } from "./commands/ListPackagingGroupsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdatePackagingGroupCommandInput, UpdatePackagingGroupCommandOutput } from "./commands/UpdatePackagingGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * AWS Elemental MediaPackage VOD
 */
export declare class MediaPackageVod extends MediaPackageVodClient {
    /**
     * Changes the packaging group's properities to configure log subscription
     */
    configureLogs(args: ConfigureLogsCommandInput, options?: __HttpHandlerOptions): Promise<ConfigureLogsCommandOutput>;
    configureLogs(args: ConfigureLogsCommandInput, cb: (err: any, data?: ConfigureLogsCommandOutput) => void): void;
    configureLogs(args: ConfigureLogsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ConfigureLogsCommandOutput) => void): void;
    /**
     * Creates a new MediaPackage VOD Asset resource.
     */
    createAsset(args: CreateAssetCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssetCommandOutput>;
    createAsset(args: CreateAssetCommandInput, cb: (err: any, data?: CreateAssetCommandOutput) => void): void;
    createAsset(args: CreateAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAssetCommandOutput) => void): void;
    /**
     * Creates a new MediaPackage VOD PackagingConfiguration resource.
     */
    createPackagingConfiguration(args: CreatePackagingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreatePackagingConfigurationCommandOutput>;
    createPackagingConfiguration(args: CreatePackagingConfigurationCommandInput, cb: (err: any, data?: CreatePackagingConfigurationCommandOutput) => void): void;
    createPackagingConfiguration(args: CreatePackagingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePackagingConfigurationCommandOutput) => void): void;
    /**
     * Creates a new MediaPackage VOD PackagingGroup resource.
     */
    createPackagingGroup(args: CreatePackagingGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreatePackagingGroupCommandOutput>;
    createPackagingGroup(args: CreatePackagingGroupCommandInput, cb: (err: any, data?: CreatePackagingGroupCommandOutput) => void): void;
    createPackagingGroup(args: CreatePackagingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePackagingGroupCommandOutput) => void): void;
    /**
     * Deletes an existing MediaPackage VOD Asset resource.
     */
    deleteAsset(args: DeleteAssetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssetCommandOutput>;
    deleteAsset(args: DeleteAssetCommandInput, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
    deleteAsset(args: DeleteAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
    /**
     * Deletes a MediaPackage VOD PackagingConfiguration resource.
     */
    deletePackagingConfiguration(args: DeletePackagingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeletePackagingConfigurationCommandOutput>;
    deletePackagingConfiguration(args: DeletePackagingConfigurationCommandInput, cb: (err: any, data?: DeletePackagingConfigurationCommandOutput) => void): void;
    deletePackagingConfiguration(args: DeletePackagingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePackagingConfigurationCommandOutput) => void): void;
    /**
     * Deletes a MediaPackage VOD PackagingGroup resource.
     */
    deletePackagingGroup(args: DeletePackagingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeletePackagingGroupCommandOutput>;
    deletePackagingGroup(args: DeletePackagingGroupCommandInput, cb: (err: any, data?: DeletePackagingGroupCommandOutput) => void): void;
    deletePackagingGroup(args: DeletePackagingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePackagingGroupCommandOutput) => void): void;
    /**
     * Returns a description of a MediaPackage VOD Asset resource.
     */
    describeAsset(args: DescribeAssetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssetCommandOutput>;
    describeAsset(args: DescribeAssetCommandInput, cb: (err: any, data?: DescribeAssetCommandOutput) => void): void;
    describeAsset(args: DescribeAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssetCommandOutput) => void): void;
    /**
     * Returns a description of a MediaPackage VOD PackagingConfiguration resource.
     */
    describePackagingConfiguration(args: DescribePackagingConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribePackagingConfigurationCommandOutput>;
    describePackagingConfiguration(args: DescribePackagingConfigurationCommandInput, cb: (err: any, data?: DescribePackagingConfigurationCommandOutput) => void): void;
    describePackagingConfiguration(args: DescribePackagingConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePackagingConfigurationCommandOutput) => void): void;
    /**
     * Returns a description of a MediaPackage VOD PackagingGroup resource.
     */
    describePackagingGroup(args: DescribePackagingGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribePackagingGroupCommandOutput>;
    describePackagingGroup(args: DescribePackagingGroupCommandInput, cb: (err: any, data?: DescribePackagingGroupCommandOutput) => void): void;
    describePackagingGroup(args: DescribePackagingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePackagingGroupCommandOutput) => void): void;
    /**
     * Returns a collection of MediaPackage VOD Asset resources.
     */
    listAssets(args: ListAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssetsCommandOutput>;
    listAssets(args: ListAssetsCommandInput, cb: (err: any, data?: ListAssetsCommandOutput) => void): void;
    listAssets(args: ListAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssetsCommandOutput) => void): void;
    /**
     * Returns a collection of MediaPackage VOD PackagingConfiguration resources.
     */
    listPackagingConfigurations(args: ListPackagingConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListPackagingConfigurationsCommandOutput>;
    listPackagingConfigurations(args: ListPackagingConfigurationsCommandInput, cb: (err: any, data?: ListPackagingConfigurationsCommandOutput) => void): void;
    listPackagingConfigurations(args: ListPackagingConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPackagingConfigurationsCommandOutput) => void): void;
    /**
     * Returns a collection of MediaPackage VOD PackagingGroup resources.
     */
    listPackagingGroups(args: ListPackagingGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListPackagingGroupsCommandOutput>;
    listPackagingGroups(args: ListPackagingGroupsCommandInput, cb: (err: any, data?: ListPackagingGroupsCommandOutput) => void): void;
    listPackagingGroups(args: ListPackagingGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPackagingGroupsCommandOutput) => void): void;
    /**
     * Returns a list of the tags assigned to the specified resource.
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * Adds tags to the specified resource. You can specify one or more tags to add.
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * Removes tags from the specified resource. You can specify one or more tags to remove.
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * Updates a specific packaging group. You can't change the id attribute or any other system-generated attributes.
     */
    updatePackagingGroup(args: UpdatePackagingGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePackagingGroupCommandOutput>;
    updatePackagingGroup(args: UpdatePackagingGroupCommandInput, cb: (err: any, data?: UpdatePackagingGroupCommandOutput) => void): void;
    updatePackagingGroup(args: UpdatePackagingGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePackagingGroupCommandOutput) => void): void;
}
