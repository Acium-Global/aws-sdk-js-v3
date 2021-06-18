import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeMultiplexCommandInput } from "../commands/DescribeMultiplexCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a multiplex has been created
 *  @deprecated Use waitUntilMultiplexCreated instead. waitForMultiplexCreated does not throw error in non-success cases.
 */
export declare const waitForMultiplexCreated: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeMultiplexCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a multiplex has been created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMultiplexCommand for polling.
 */
export declare const waitUntilMultiplexCreated: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeMultiplexCommandInput) => Promise<WaiterResult>;
