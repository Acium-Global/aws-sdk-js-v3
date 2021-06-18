import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeMultiplexCommandInput } from "../commands/DescribeMultiplexCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a multiplex is running
 *  @deprecated Use waitUntilMultiplexRunning instead. waitForMultiplexRunning does not throw error in non-success cases.
 */
export declare const waitForMultiplexRunning: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeMultiplexCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a multiplex is running
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMultiplexCommand for polling.
 */
export declare const waitUntilMultiplexRunning: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeMultiplexCommandInput) => Promise<WaiterResult>;
