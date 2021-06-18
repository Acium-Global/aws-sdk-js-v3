import { OpsWorksClient } from "../OpsWorksClient";
import { DescribeInstancesCommandInput } from "../commands/DescribeInstancesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until OpsWorks instance is stopped.
 *  @deprecated Use waitUntilInstanceStopped instead. waitForInstanceStopped does not throw error in non-success cases.
 */
export declare const waitForInstanceStopped: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
/**
 * Wait until OpsWorks instance is stopped.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
export declare const waitUntilInstanceStopped: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
