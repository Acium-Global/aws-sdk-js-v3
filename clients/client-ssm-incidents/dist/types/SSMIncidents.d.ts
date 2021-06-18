import { SSMIncidentsClient } from "./SSMIncidentsClient";
import { CreateReplicationSetCommandInput, CreateReplicationSetCommandOutput } from "./commands/CreateReplicationSetCommand";
import { CreateResponsePlanCommandInput, CreateResponsePlanCommandOutput } from "./commands/CreateResponsePlanCommand";
import { CreateTimelineEventCommandInput, CreateTimelineEventCommandOutput } from "./commands/CreateTimelineEventCommand";
import { DeleteIncidentRecordCommandInput, DeleteIncidentRecordCommandOutput } from "./commands/DeleteIncidentRecordCommand";
import { DeleteReplicationSetCommandInput, DeleteReplicationSetCommandOutput } from "./commands/DeleteReplicationSetCommand";
import { DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput } from "./commands/DeleteResourcePolicyCommand";
import { DeleteResponsePlanCommandInput, DeleteResponsePlanCommandOutput } from "./commands/DeleteResponsePlanCommand";
import { DeleteTimelineEventCommandInput, DeleteTimelineEventCommandOutput } from "./commands/DeleteTimelineEventCommand";
import { GetIncidentRecordCommandInput, GetIncidentRecordCommandOutput } from "./commands/GetIncidentRecordCommand";
import { GetReplicationSetCommandInput, GetReplicationSetCommandOutput } from "./commands/GetReplicationSetCommand";
import { GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput } from "./commands/GetResourcePoliciesCommand";
import { GetResponsePlanCommandInput, GetResponsePlanCommandOutput } from "./commands/GetResponsePlanCommand";
import { GetTimelineEventCommandInput, GetTimelineEventCommandOutput } from "./commands/GetTimelineEventCommand";
import { ListIncidentRecordsCommandInput, ListIncidentRecordsCommandOutput } from "./commands/ListIncidentRecordsCommand";
import { ListRelatedItemsCommandInput, ListRelatedItemsCommandOutput } from "./commands/ListRelatedItemsCommand";
import { ListReplicationSetsCommandInput, ListReplicationSetsCommandOutput } from "./commands/ListReplicationSetsCommand";
import { ListResponsePlansCommandInput, ListResponsePlansCommandOutput } from "./commands/ListResponsePlansCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListTimelineEventsCommandInput, ListTimelineEventsCommandOutput } from "./commands/ListTimelineEventsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { StartIncidentCommandInput, StartIncidentCommandOutput } from "./commands/StartIncidentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDeletionProtectionCommandInput, UpdateDeletionProtectionCommandOutput } from "./commands/UpdateDeletionProtectionCommand";
import { UpdateIncidentRecordCommandInput, UpdateIncidentRecordCommandOutput } from "./commands/UpdateIncidentRecordCommand";
import { UpdateRelatedItemsCommandInput, UpdateRelatedItemsCommandOutput } from "./commands/UpdateRelatedItemsCommand";
import { UpdateReplicationSetCommandInput, UpdateReplicationSetCommandOutput } from "./commands/UpdateReplicationSetCommand";
import { UpdateResponsePlanCommandInput, UpdateResponsePlanCommandOutput } from "./commands/UpdateResponsePlanCommand";
import { UpdateTimelineEventCommandInput, UpdateTimelineEventCommandOutput } from "./commands/UpdateTimelineEventCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Systems Manager Incident Manager is an incident management console designed to help
 *       users mitigate and recover from incidents affecting their AWS-hosted applications. An incident
 *       is any unplanned interruption or reduction in quality of services. </p>
 *          <p>Incident Manager increases incident resolution by notifying responders of impact,
 *       highlighting relevant troubleshooting data, and providing collaboration tools to get services
 *       back up and running. To achieve the primary goal of reducing the time-to-resolution of
 *       critical incidents, Incident Manager automates response plans and enables responder team
 *       escalation. </p>
 */
export declare class SSMIncidents extends SSMIncidentsClient {
    /**
     * <p>A replication set replicates and encrypts your data to the provided Regions with the
     *             provided KMS key. </p>
     */
    createReplicationSet(args: CreateReplicationSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateReplicationSetCommandOutput>;
    createReplicationSet(args: CreateReplicationSetCommandInput, cb: (err: any, data?: CreateReplicationSetCommandOutput) => void): void;
    createReplicationSet(args: CreateReplicationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateReplicationSetCommandOutput) => void): void;
    /**
     * <p>Creates a response plan that automates the initial response to incidents. A response
     *             plan engages contacts, starts chat channel collaboration, and
     *             initiates
     *             runbooks at the beginning of an incident.</p>
     */
    createResponsePlan(args: CreateResponsePlanCommandInput, options?: __HttpHandlerOptions): Promise<CreateResponsePlanCommandOutput>;
    createResponsePlan(args: CreateResponsePlanCommandInput, cb: (err: any, data?: CreateResponsePlanCommandOutput) => void): void;
    createResponsePlan(args: CreateResponsePlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResponsePlanCommandOutput) => void): void;
    /**
     * <p>Creates a custom timeline event on the incident details page of an incident record.
     *             Timeline events are automatically created by Incident Manager, marking key moment during an
     *             incident. You can create custom timeline events to mark important events that are
     *             automatically detected by Incident Manager.</p>
     */
    createTimelineEvent(args: CreateTimelineEventCommandInput, options?: __HttpHandlerOptions): Promise<CreateTimelineEventCommandOutput>;
    createTimelineEvent(args: CreateTimelineEventCommandInput, cb: (err: any, data?: CreateTimelineEventCommandOutput) => void): void;
    createTimelineEvent(args: CreateTimelineEventCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTimelineEventCommandOutput) => void): void;
    /**
     * <p>Delete an incident record from Incident Manager. </p>
     */
    deleteIncidentRecord(args: DeleteIncidentRecordCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIncidentRecordCommandOutput>;
    deleteIncidentRecord(args: DeleteIncidentRecordCommandInput, cb: (err: any, data?: DeleteIncidentRecordCommandOutput) => void): void;
    deleteIncidentRecord(args: DeleteIncidentRecordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIncidentRecordCommandOutput) => void): void;
    /**
     * <p>Deletes all Regions in your replication set. Deleting the replication set deletes all
     *             Incident Manager data.</p>
     */
    deleteReplicationSet(args: DeleteReplicationSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReplicationSetCommandOutput>;
    deleteReplicationSet(args: DeleteReplicationSetCommandInput, cb: (err: any, data?: DeleteReplicationSetCommandOutput) => void): void;
    deleteReplicationSet(args: DeleteReplicationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReplicationSetCommandOutput) => void): void;
    /**
     * <p>Deletes the resource policy that
     *             AWS
     *             Resource Access Manager uses to share your Incident Manager resource.</p>
     */
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResourcePolicyCommandOutput>;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    deleteResourcePolicy(args: DeleteResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the specified response plan. Deleting a response plan stops all linked
     *             CloudWatch alarms and EventBridge events from creating an incident with this response
     *             plan.</p>
     */
    deleteResponsePlan(args: DeleteResponsePlanCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResponsePlanCommandOutput>;
    deleteResponsePlan(args: DeleteResponsePlanCommandInput, cb: (err: any, data?: DeleteResponsePlanCommandOutput) => void): void;
    deleteResponsePlan(args: DeleteResponsePlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResponsePlanCommandOutput) => void): void;
    /**
     * <p>Deletes a timeline event from an incident.</p>
     */
    deleteTimelineEvent(args: DeleteTimelineEventCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTimelineEventCommandOutput>;
    deleteTimelineEvent(args: DeleteTimelineEventCommandInput, cb: (err: any, data?: DeleteTimelineEventCommandOutput) => void): void;
    deleteTimelineEvent(args: DeleteTimelineEventCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTimelineEventCommandOutput) => void): void;
    /**
     * <p>Returns the details of the specified incident record.</p>
     */
    getIncidentRecord(args: GetIncidentRecordCommandInput, options?: __HttpHandlerOptions): Promise<GetIncidentRecordCommandOutput>;
    getIncidentRecord(args: GetIncidentRecordCommandInput, cb: (err: any, data?: GetIncidentRecordCommandOutput) => void): void;
    getIncidentRecord(args: GetIncidentRecordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetIncidentRecordCommandOutput) => void): void;
    /**
     * <p>Retrieve your Incident Manager replication set.</p>
     */
    getReplicationSet(args: GetReplicationSetCommandInput, options?: __HttpHandlerOptions): Promise<GetReplicationSetCommandOutput>;
    getReplicationSet(args: GetReplicationSetCommandInput, cb: (err: any, data?: GetReplicationSetCommandOutput) => void): void;
    getReplicationSet(args: GetReplicationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReplicationSetCommandOutput) => void): void;
    /**
     * <p>Retrieves the resource policies attached to the specified response plan.</p>
     */
    getResourcePolicies(args: GetResourcePoliciesCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcePoliciesCommandOutput>;
    getResourcePolicies(args: GetResourcePoliciesCommandInput, cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void): void;
    getResourcePolicies(args: GetResourcePoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void): void;
    /**
     * <p>Retrieves the details of the specified response plan.</p>
     */
    getResponsePlan(args: GetResponsePlanCommandInput, options?: __HttpHandlerOptions): Promise<GetResponsePlanCommandOutput>;
    getResponsePlan(args: GetResponsePlanCommandInput, cb: (err: any, data?: GetResponsePlanCommandOutput) => void): void;
    getResponsePlan(args: GetResponsePlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResponsePlanCommandOutput) => void): void;
    /**
     * <p>Retrieves a timeline event based on its ID and incident record.</p>
     */
    getTimelineEvent(args: GetTimelineEventCommandInput, options?: __HttpHandlerOptions): Promise<GetTimelineEventCommandOutput>;
    getTimelineEvent(args: GetTimelineEventCommandInput, cb: (err: any, data?: GetTimelineEventCommandOutput) => void): void;
    getTimelineEvent(args: GetTimelineEventCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTimelineEventCommandOutput) => void): void;
    /**
     * <p>Lists all incident records in your account. Use this command to retrieve the Amazon
     *             Resource Name (ARN) of the incident record you want to update. </p>
     */
    listIncidentRecords(args: ListIncidentRecordsCommandInput, options?: __HttpHandlerOptions): Promise<ListIncidentRecordsCommandOutput>;
    listIncidentRecords(args: ListIncidentRecordsCommandInput, cb: (err: any, data?: ListIncidentRecordsCommandOutput) => void): void;
    listIncidentRecords(args: ListIncidentRecordsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIncidentRecordsCommandOutput) => void): void;
    /**
     * <p>List all related items for an incident record.</p>
     */
    listRelatedItems(args: ListRelatedItemsCommandInput, options?: __HttpHandlerOptions): Promise<ListRelatedItemsCommandOutput>;
    listRelatedItems(args: ListRelatedItemsCommandInput, cb: (err: any, data?: ListRelatedItemsCommandOutput) => void): void;
    listRelatedItems(args: ListRelatedItemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRelatedItemsCommandOutput) => void): void;
    /**
     * <p>Lists details about the replication set configured in your account. </p>
     */
    listReplicationSets(args: ListReplicationSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListReplicationSetsCommandOutput>;
    listReplicationSets(args: ListReplicationSetsCommandInput, cb: (err: any, data?: ListReplicationSetsCommandOutput) => void): void;
    listReplicationSets(args: ListReplicationSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListReplicationSetsCommandOutput) => void): void;
    /**
     * <p>Lists all response plans in your account.</p>
     */
    listResponsePlans(args: ListResponsePlansCommandInput, options?: __HttpHandlerOptions): Promise<ListResponsePlansCommandOutput>;
    listResponsePlans(args: ListResponsePlansCommandInput, cb: (err: any, data?: ListResponsePlansCommandOutput) => void): void;
    listResponsePlans(args: ListResponsePlansCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResponsePlansCommandOutput) => void): void;
    /**
     * <p>Lists the tags that are attached to the specified response plan.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists timeline events of the specified incident record.</p>
     */
    listTimelineEvents(args: ListTimelineEventsCommandInput, options?: __HttpHandlerOptions): Promise<ListTimelineEventsCommandOutput>;
    listTimelineEvents(args: ListTimelineEventsCommandInput, cb: (err: any, data?: ListTimelineEventsCommandOutput) => void): void;
    listTimelineEvents(args: ListTimelineEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTimelineEventsCommandOutput) => void): void;
    /**
     * <p>Adds a resource policy to the specified response plan.</p>
     */
    putResourcePolicy(args: PutResourcePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutResourcePolicyCommandOutput>;
    putResourcePolicy(args: PutResourcePolicyCommandInput, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    putResourcePolicy(args: PutResourcePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResourcePolicyCommandOutput) => void): void;
    /**
     * <p>Used to start an incident from CloudWatch alarms, EventBridge events, or manually. </p>
     */
    startIncident(args: StartIncidentCommandInput, options?: __HttpHandlerOptions): Promise<StartIncidentCommandOutput>;
    startIncident(args: StartIncidentCommandInput, cb: (err: any, data?: StartIncidentCommandOutput) => void): void;
    startIncident(args: StartIncidentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartIncidentCommandOutput) => void): void;
    /**
     * <p>Adds a tag to a response plan.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Update deletion protection to either allow or deny deletion of the final Region in a
     *             replication set.</p>
     */
    updateDeletionProtection(args: UpdateDeletionProtectionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeletionProtectionCommandOutput>;
    updateDeletionProtection(args: UpdateDeletionProtectionCommandInput, cb: (err: any, data?: UpdateDeletionProtectionCommandOutput) => void): void;
    updateDeletionProtection(args: UpdateDeletionProtectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDeletionProtectionCommandOutput) => void): void;
    /**
     * <p>Update the details of an incident record. You can use this action to update an
     *             incident record from the defined chat channel. For more information about using actions
     *             in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.</p>
     */
    updateIncidentRecord(args: UpdateIncidentRecordCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIncidentRecordCommandOutput>;
    updateIncidentRecord(args: UpdateIncidentRecordCommandInput, cb: (err: any, data?: UpdateIncidentRecordCommandOutput) => void): void;
    updateIncidentRecord(args: UpdateIncidentRecordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIncidentRecordCommandOutput) => void): void;
    /**
     * <p>Add or remove related items from the related items tab of an incident record.</p>
     */
    updateRelatedItems(args: UpdateRelatedItemsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRelatedItemsCommandOutput>;
    updateRelatedItems(args: UpdateRelatedItemsCommandInput, cb: (err: any, data?: UpdateRelatedItemsCommandOutput) => void): void;
    updateRelatedItems(args: UpdateRelatedItemsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRelatedItemsCommandOutput) => void): void;
    /**
     * <p>Add or delete Regions from your replication set.</p>
     */
    updateReplicationSet(args: UpdateReplicationSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateReplicationSetCommandOutput>;
    updateReplicationSet(args: UpdateReplicationSetCommandInput, cb: (err: any, data?: UpdateReplicationSetCommandOutput) => void): void;
    updateReplicationSet(args: UpdateReplicationSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateReplicationSetCommandOutput) => void): void;
    /**
     * <p>Updates the specified response plan.</p>
     */
    updateResponsePlan(args: UpdateResponsePlanCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResponsePlanCommandOutput>;
    updateResponsePlan(args: UpdateResponsePlanCommandInput, cb: (err: any, data?: UpdateResponsePlanCommandOutput) => void): void;
    updateResponsePlan(args: UpdateResponsePlanCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResponsePlanCommandOutput) => void): void;
    /**
     * <p>Updates a timeline event. You can update events of type <code>Custom
     *             Event</code>.</p>
     */
    updateTimelineEvent(args: UpdateTimelineEventCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTimelineEventCommandOutput>;
    updateTimelineEvent(args: UpdateTimelineEventCommandInput, cb: (err: any, data?: UpdateTimelineEventCommandOutput) => void): void;
    updateTimelineEvent(args: UpdateTimelineEventCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTimelineEventCommandOutput) => void): void;
}
