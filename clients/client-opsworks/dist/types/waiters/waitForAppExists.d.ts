import { OpsWorksClient } from "../OpsWorksClient";
import { DescribeAppsCommandInput } from "../commands/DescribeAppsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilAppExists instead. waitForAppExists does not throw error in non-success cases.
 */
export declare const waitForAppExists: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeAppsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAppsCommand for polling.
 */
export declare const waitUntilAppExists: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeAppsCommandInput) => Promise<WaiterResult>;
