"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSMIncidents = void 0;
const SSMIncidentsClient_1 = require("./SSMIncidentsClient");
const CreateReplicationSetCommand_1 = require("./commands/CreateReplicationSetCommand");
const CreateResponsePlanCommand_1 = require("./commands/CreateResponsePlanCommand");
const CreateTimelineEventCommand_1 = require("./commands/CreateTimelineEventCommand");
const DeleteIncidentRecordCommand_1 = require("./commands/DeleteIncidentRecordCommand");
const DeleteReplicationSetCommand_1 = require("./commands/DeleteReplicationSetCommand");
const DeleteResourcePolicyCommand_1 = require("./commands/DeleteResourcePolicyCommand");
const DeleteResponsePlanCommand_1 = require("./commands/DeleteResponsePlanCommand");
const DeleteTimelineEventCommand_1 = require("./commands/DeleteTimelineEventCommand");
const GetIncidentRecordCommand_1 = require("./commands/GetIncidentRecordCommand");
const GetReplicationSetCommand_1 = require("./commands/GetReplicationSetCommand");
const GetResourcePoliciesCommand_1 = require("./commands/GetResourcePoliciesCommand");
const GetResponsePlanCommand_1 = require("./commands/GetResponsePlanCommand");
const GetTimelineEventCommand_1 = require("./commands/GetTimelineEventCommand");
const ListIncidentRecordsCommand_1 = require("./commands/ListIncidentRecordsCommand");
const ListRelatedItemsCommand_1 = require("./commands/ListRelatedItemsCommand");
const ListReplicationSetsCommand_1 = require("./commands/ListReplicationSetsCommand");
const ListResponsePlansCommand_1 = require("./commands/ListResponsePlansCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTimelineEventsCommand_1 = require("./commands/ListTimelineEventsCommand");
const PutResourcePolicyCommand_1 = require("./commands/PutResourcePolicyCommand");
const StartIncidentCommand_1 = require("./commands/StartIncidentCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDeletionProtectionCommand_1 = require("./commands/UpdateDeletionProtectionCommand");
const UpdateIncidentRecordCommand_1 = require("./commands/UpdateIncidentRecordCommand");
const UpdateRelatedItemsCommand_1 = require("./commands/UpdateRelatedItemsCommand");
const UpdateReplicationSetCommand_1 = require("./commands/UpdateReplicationSetCommand");
const UpdateResponsePlanCommand_1 = require("./commands/UpdateResponsePlanCommand");
const UpdateTimelineEventCommand_1 = require("./commands/UpdateTimelineEventCommand");
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
class SSMIncidents extends SSMIncidentsClient_1.SSMIncidentsClient {
    createReplicationSet(args, optionsOrCb, cb) {
        const command = new CreateReplicationSetCommand_1.CreateReplicationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createResponsePlan(args, optionsOrCb, cb) {
        const command = new CreateResponsePlanCommand_1.CreateResponsePlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTimelineEvent(args, optionsOrCb, cb) {
        const command = new CreateTimelineEventCommand_1.CreateTimelineEventCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteIncidentRecord(args, optionsOrCb, cb) {
        const command = new DeleteIncidentRecordCommand_1.DeleteIncidentRecordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteReplicationSet(args, optionsOrCb, cb) {
        const command = new DeleteReplicationSetCommand_1.DeleteReplicationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResourcePolicy(args, optionsOrCb, cb) {
        const command = new DeleteResourcePolicyCommand_1.DeleteResourcePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResponsePlan(args, optionsOrCb, cb) {
        const command = new DeleteResponsePlanCommand_1.DeleteResponsePlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTimelineEvent(args, optionsOrCb, cb) {
        const command = new DeleteTimelineEventCommand_1.DeleteTimelineEventCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getIncidentRecord(args, optionsOrCb, cb) {
        const command = new GetIncidentRecordCommand_1.GetIncidentRecordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getReplicationSet(args, optionsOrCb, cb) {
        const command = new GetReplicationSetCommand_1.GetReplicationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResourcePolicies(args, optionsOrCb, cb) {
        const command = new GetResourcePoliciesCommand_1.GetResourcePoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResponsePlan(args, optionsOrCb, cb) {
        const command = new GetResponsePlanCommand_1.GetResponsePlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTimelineEvent(args, optionsOrCb, cb) {
        const command = new GetTimelineEventCommand_1.GetTimelineEventCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listIncidentRecords(args, optionsOrCb, cb) {
        const command = new ListIncidentRecordsCommand_1.ListIncidentRecordsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRelatedItems(args, optionsOrCb, cb) {
        const command = new ListRelatedItemsCommand_1.ListRelatedItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listReplicationSets(args, optionsOrCb, cb) {
        const command = new ListReplicationSetsCommand_1.ListReplicationSetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResponsePlans(args, optionsOrCb, cb) {
        const command = new ListResponsePlansCommand_1.ListResponsePlansCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTimelineEvents(args, optionsOrCb, cb) {
        const command = new ListTimelineEventsCommand_1.ListTimelineEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putResourcePolicy(args, optionsOrCb, cb) {
        const command = new PutResourcePolicyCommand_1.PutResourcePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startIncident(args, optionsOrCb, cb) {
        const command = new StartIncidentCommand_1.StartIncidentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDeletionProtection(args, optionsOrCb, cb) {
        const command = new UpdateDeletionProtectionCommand_1.UpdateDeletionProtectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateIncidentRecord(args, optionsOrCb, cb) {
        const command = new UpdateIncidentRecordCommand_1.UpdateIncidentRecordCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRelatedItems(args, optionsOrCb, cb) {
        const command = new UpdateRelatedItemsCommand_1.UpdateRelatedItemsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateReplicationSet(args, optionsOrCb, cb) {
        const command = new UpdateReplicationSetCommand_1.UpdateReplicationSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateResponsePlan(args, optionsOrCb, cb) {
        const command = new UpdateResponsePlanCommand_1.UpdateResponsePlanCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTimelineEvent(args, optionsOrCb, cb) {
        const command = new UpdateTimelineEventCommand_1.UpdateTimelineEventCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.SSMIncidents = SSMIncidents;
//# sourceMappingURL=SSMIncidents.js.map