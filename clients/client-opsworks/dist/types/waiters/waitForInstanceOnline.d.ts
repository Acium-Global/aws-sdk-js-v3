import { OpsWorksClient } from "../OpsWorksClient";
import { DescribeInstancesCommandInput } from "../commands/DescribeInstancesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until OpsWorks instance is online.
 *  @deprecated Use waitUntilInstanceOnline instead. waitForInstanceOnline does not throw error in non-success cases.
 */
export declare const waitForInstanceOnline: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
/**
 * Wait until OpsWorks instance is online.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
export declare const waitUntilInstanceOnline: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
