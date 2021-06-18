import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeMultiplexCommandInput } from "../commands/DescribeMultiplexCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a multiplex has been deleted
 *  @deprecated Use waitUntilMultiplexDeleted instead. waitForMultiplexDeleted does not throw error in non-success cases.
 */
export declare const waitForMultiplexDeleted: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeMultiplexCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a multiplex has been deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMultiplexCommand for polling.
 */
export declare const waitUntilMultiplexDeleted: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeMultiplexCommandInput) => Promise<WaiterResult>;
