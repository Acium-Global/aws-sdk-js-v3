import { MediaLiveClient } from "../MediaLiveClient";
import { DescribeMultiplexCommandInput } from "../commands/DescribeMultiplexCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a multiplex has is stopped
 *  @deprecated Use waitUntilMultiplexStopped instead. waitForMultiplexStopped does not throw error in non-success cases.
 */
export declare const waitForMultiplexStopped: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeMultiplexCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a multiplex has is stopped
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMultiplexCommand for polling.
 */
export declare const waitUntilMultiplexStopped: (params: WaiterConfiguration<MediaLiveClient>, input: DescribeMultiplexCommandInput) => Promise<WaiterResult>;
