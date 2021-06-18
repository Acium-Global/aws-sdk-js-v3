import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { GetReplicationSetCommandInput } from "../commands/GetReplicationSetCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait for a replication set to be deleted
 *  @deprecated Use waitUntilWaitForReplicationSetDeleted instead. waitForWaitForReplicationSetDeleted does not throw error in non-success cases.
 */
export declare const waitForWaitForReplicationSetDeleted: (params: WaiterConfiguration<SSMIncidentsClient>, input: GetReplicationSetCommandInput) => Promise<WaiterResult>;
/**
 * Wait for a replication set to be deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetReplicationSetCommand for polling.
 */
export declare const waitUntilWaitForReplicationSetDeleted: (params: WaiterConfiguration<SSMIncidentsClient>, input: GetReplicationSetCommandInput) => Promise<WaiterResult>;
