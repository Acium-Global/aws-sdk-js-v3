"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplicationSet = exports.ReplicationSetStatus = exports.RegionInfo = exports.RegionStatus = exports.GetReplicationSetInput = exports.GetIncidentRecordOutput = exports.IncidentRecord = exports.IncidentRecordStatus = exports.IncidentRecordSource = exports.GetIncidentRecordInput = exports.Filter = exports.EventSummary = exports.DeleteTimelineEventOutput = exports.DeleteTimelineEventInput = exports.DeleteResponsePlanOutput = exports.DeleteResponsePlanInput = exports.DeleteResourcePolicyOutput = exports.DeleteResourcePolicyInput = exports.DeleteReplicationSetOutput = exports.DeleteReplicationSetInput = exports.DeleteRegionAction = exports.DeleteIncidentRecordOutput = exports.DeleteIncidentRecordInput = exports.CreateTimelineEventOutput = exports.CreateTimelineEventInput = exports.ResourceNotFoundException = exports.CreateResponsePlanOutput = exports.CreateResponsePlanInput = exports.IncidentTemplate = exports.NotificationTargetItem = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ServiceCode = exports.InternalServerException = exports.CreateReplicationSetOutput = exports.CreateReplicationSetInput = exports.RegionMapInputValue = exports.ConflictException = exports.ResourceType = exports.Condition = exports.ChatChannel = exports.EmptyChatChannel = exports.AutomationExecution = exports.AttributeValueList = exports.AddRegionAction = exports.Action = exports.SsmAutomation = exports.SsmTargetAccount = exports.AccessDeniedException = void 0;
exports.UpdateResponsePlanOutput = exports.UpdateResponsePlanInput = exports.UpdateReplicationSetOutput = exports.UpdateReplicationSetInput = exports.UpdateReplicationSetAction = exports.UpdateRelatedItemsOutput = exports.UpdateRelatedItemsInput = exports.UpdateIncidentRecordOutput = exports.UpdateIncidentRecordInput = exports.UpdateDeletionProtectionOutput = exports.UpdateDeletionProtectionInput = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartIncidentOutput = exports.StartIncidentInput = exports.TriggerDetails = exports.RelatedItemsUpdate = exports.PutResourcePolicyOutput = exports.PutResourcePolicyInput = exports.ListTimelineEventsOutput = exports.ListTimelineEventsInput = exports.SortOrder = exports.TimelineEventSort = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListResponsePlansOutput = exports.ResponsePlanSummary = exports.ListResponsePlansInput = exports.ListReplicationSetsOutput = exports.ListReplicationSetsInput = exports.ListRelatedItemsOutput = exports.RelatedItem = exports.ListRelatedItemsInput = exports.ListIncidentRecordsOutput = exports.ListIncidentRecordsInput = exports.ItemIdentifier = exports.ItemValue = exports.ItemType = exports.IncidentRecordSummary = exports.GetTimelineEventOutput = exports.TimelineEvent = exports.GetTimelineEventInput = exports.GetResponsePlanOutput = exports.GetResponsePlanInput = exports.GetResourcePoliciesOutput = exports.ResourcePolicy = exports.GetResourcePoliciesInput = exports.GetReplicationSetOutput = void 0;
exports.UpdateTimelineEventOutput = exports.UpdateTimelineEventInput = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var SsmTargetAccount;
(function (SsmTargetAccount) {
    SsmTargetAccount["IMPACTED_ACCOUNT"] = "IMPACTED_ACCOUNT";
    SsmTargetAccount["RESPONSE_PLAN_OWNER_ACCOUNT"] = "RESPONSE_PLAN_OWNER_ACCOUNT";
})(SsmTargetAccount = exports.SsmTargetAccount || (exports.SsmTargetAccount = {}));
var SsmAutomation;
(function (SsmAutomation) {
    /**
     * @internal
     */
    SsmAutomation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SsmAutomation = exports.SsmAutomation || (exports.SsmAutomation = {}));
var Action;
(function (Action) {
    Action.visit = (value, visitor) => {
        if (value.ssmAutomation !== undefined)
            return visitor.ssmAutomation(value.ssmAutomation);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    Action.filterSensitiveLog = (obj) => {
        if (obj.ssmAutomation !== undefined)
            return { ssmAutomation: SsmAutomation.filterSensitiveLog(obj.ssmAutomation) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(Action = exports.Action || (exports.Action = {}));
var AddRegionAction;
(function (AddRegionAction) {
    /**
     * @internal
     */
    AddRegionAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddRegionAction = exports.AddRegionAction || (exports.AddRegionAction = {}));
var AttributeValueList;
(function (AttributeValueList) {
    AttributeValueList.visit = (value, visitor) => {
        if (value.stringValues !== undefined)
            return visitor.stringValues(value.stringValues);
        if (value.integerValues !== undefined)
            return visitor.integerValues(value.integerValues);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AttributeValueList.filterSensitiveLog = (obj) => {
        if (obj.stringValues !== undefined)
            return { stringValues: obj.stringValues };
        if (obj.integerValues !== undefined)
            return { integerValues: obj.integerValues };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(AttributeValueList = exports.AttributeValueList || (exports.AttributeValueList = {}));
var AutomationExecution;
(function (AutomationExecution) {
    AutomationExecution.visit = (value, visitor) => {
        if (value.ssmExecutionArn !== undefined)
            return visitor.ssmExecutionArn(value.ssmExecutionArn);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AutomationExecution.filterSensitiveLog = (obj) => {
        if (obj.ssmExecutionArn !== undefined)
            return { ssmExecutionArn: obj.ssmExecutionArn };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(AutomationExecution = exports.AutomationExecution || (exports.AutomationExecution = {}));
var EmptyChatChannel;
(function (EmptyChatChannel) {
    /**
     * @internal
     */
    EmptyChatChannel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmptyChatChannel = exports.EmptyChatChannel || (exports.EmptyChatChannel = {}));
var ChatChannel;
(function (ChatChannel) {
    ChatChannel.visit = (value, visitor) => {
        if (value.empty !== undefined)
            return visitor.empty(value.empty);
        if (value.chatbotSns !== undefined)
            return visitor.chatbotSns(value.chatbotSns);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ChatChannel.filterSensitiveLog = (obj) => {
        if (obj.empty !== undefined)
            return { empty: EmptyChatChannel.filterSensitiveLog(obj.empty) };
        if (obj.chatbotSns !== undefined)
            return { chatbotSns: obj.chatbotSns };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(ChatChannel = exports.ChatChannel || (exports.ChatChannel = {}));
var Condition;
(function (Condition) {
    Condition.visit = (value, visitor) => {
        if (value.before !== undefined)
            return visitor.before(value.before);
        if (value.after !== undefined)
            return visitor.after(value.after);
        if (value.equals !== undefined)
            return visitor.equals(value.equals);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    Condition.filterSensitiveLog = (obj) => {
        if (obj.before !== undefined)
            return { before: obj.before };
        if (obj.after !== undefined)
            return { after: obj.after };
        if (obj.equals !== undefined)
            return { equals: AttributeValueList.filterSensitiveLog(obj.equals) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(Condition = exports.Condition || (exports.Condition = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["INCIDENT_RECORD"] = "INCIDENT_RECORD";
    ResourceType["REPLICATION_SET"] = "REPLICATION_SET";
    ResourceType["RESOURCE_POLICY"] = "RESOURCE_POLICY";
    ResourceType["RESPONSE_PLAN"] = "RESPONSE_PLAN";
    ResourceType["TIMELINE_EVENT"] = "TIMELINE_EVENT";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var RegionMapInputValue;
(function (RegionMapInputValue) {
    /**
     * @internal
     */
    RegionMapInputValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegionMapInputValue = exports.RegionMapInputValue || (exports.RegionMapInputValue = {}));
var CreateReplicationSetInput;
(function (CreateReplicationSetInput) {
    /**
     * @internal
     */
    CreateReplicationSetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationSetInput = exports.CreateReplicationSetInput || (exports.CreateReplicationSetInput = {}));
var CreateReplicationSetOutput;
(function (CreateReplicationSetOutput) {
    /**
     * @internal
     */
    CreateReplicationSetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationSetOutput = exports.CreateReplicationSetOutput || (exports.CreateReplicationSetOutput = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ServiceCode;
(function (ServiceCode) {
    ServiceCode["SSM_INCIDENTS"] = "ssm-incidents";
})(ServiceCode = exports.ServiceCode || (exports.ServiceCode = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var NotificationTargetItem;
(function (NotificationTargetItem) {
    NotificationTargetItem.visit = (value, visitor) => {
        if (value.snsTopicArn !== undefined)
            return visitor.snsTopicArn(value.snsTopicArn);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    NotificationTargetItem.filterSensitiveLog = (obj) => {
        if (obj.snsTopicArn !== undefined)
            return { snsTopicArn: obj.snsTopicArn };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(NotificationTargetItem = exports.NotificationTargetItem || (exports.NotificationTargetItem = {}));
var IncidentTemplate;
(function (IncidentTemplate) {
    /**
     * @internal
     */
    IncidentTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.notificationTargets && {
            notificationTargets: obj.notificationTargets.map((item) => NotificationTargetItem.filterSensitiveLog(item)),
        }),
    });
})(IncidentTemplate = exports.IncidentTemplate || (exports.IncidentTemplate = {}));
var CreateResponsePlanInput;
(function (CreateResponsePlanInput) {
    /**
     * @internal
     */
    CreateResponsePlanInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.incidentTemplate && { incidentTemplate: IncidentTemplate.filterSensitiveLog(obj.incidentTemplate) }),
        ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
        ...(obj.actions && { actions: obj.actions.map((item) => Action.filterSensitiveLog(item)) }),
    });
})(CreateResponsePlanInput = exports.CreateResponsePlanInput || (exports.CreateResponsePlanInput = {}));
var CreateResponsePlanOutput;
(function (CreateResponsePlanOutput) {
    /**
     * @internal
     */
    CreateResponsePlanOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResponsePlanOutput = exports.CreateResponsePlanOutput || (exports.CreateResponsePlanOutput = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var CreateTimelineEventInput;
(function (CreateTimelineEventInput) {
    /**
     * @internal
     */
    CreateTimelineEventInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTimelineEventInput = exports.CreateTimelineEventInput || (exports.CreateTimelineEventInput = {}));
var CreateTimelineEventOutput;
(function (CreateTimelineEventOutput) {
    /**
     * @internal
     */
    CreateTimelineEventOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTimelineEventOutput = exports.CreateTimelineEventOutput || (exports.CreateTimelineEventOutput = {}));
var DeleteIncidentRecordInput;
(function (DeleteIncidentRecordInput) {
    /**
     * @internal
     */
    DeleteIncidentRecordInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIncidentRecordInput = exports.DeleteIncidentRecordInput || (exports.DeleteIncidentRecordInput = {}));
var DeleteIncidentRecordOutput;
(function (DeleteIncidentRecordOutput) {
    /**
     * @internal
     */
    DeleteIncidentRecordOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIncidentRecordOutput = exports.DeleteIncidentRecordOutput || (exports.DeleteIncidentRecordOutput = {}));
var DeleteRegionAction;
(function (DeleteRegionAction) {
    /**
     * @internal
     */
    DeleteRegionAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegionAction = exports.DeleteRegionAction || (exports.DeleteRegionAction = {}));
var DeleteReplicationSetInput;
(function (DeleteReplicationSetInput) {
    /**
     * @internal
     */
    DeleteReplicationSetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationSetInput = exports.DeleteReplicationSetInput || (exports.DeleteReplicationSetInput = {}));
var DeleteReplicationSetOutput;
(function (DeleteReplicationSetOutput) {
    /**
     * @internal
     */
    DeleteReplicationSetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationSetOutput = exports.DeleteReplicationSetOutput || (exports.DeleteReplicationSetOutput = {}));
var DeleteResourcePolicyInput;
(function (DeleteResourcePolicyInput) {
    /**
     * @internal
     */
    DeleteResourcePolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcePolicyInput = exports.DeleteResourcePolicyInput || (exports.DeleteResourcePolicyInput = {}));
var DeleteResourcePolicyOutput;
(function (DeleteResourcePolicyOutput) {
    /**
     * @internal
     */
    DeleteResourcePolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcePolicyOutput = exports.DeleteResourcePolicyOutput || (exports.DeleteResourcePolicyOutput = {}));
var DeleteResponsePlanInput;
(function (DeleteResponsePlanInput) {
    /**
     * @internal
     */
    DeleteResponsePlanInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResponsePlanInput = exports.DeleteResponsePlanInput || (exports.DeleteResponsePlanInput = {}));
var DeleteResponsePlanOutput;
(function (DeleteResponsePlanOutput) {
    /**
     * @internal
     */
    DeleteResponsePlanOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResponsePlanOutput = exports.DeleteResponsePlanOutput || (exports.DeleteResponsePlanOutput = {}));
var DeleteTimelineEventInput;
(function (DeleteTimelineEventInput) {
    /**
     * @internal
     */
    DeleteTimelineEventInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTimelineEventInput = exports.DeleteTimelineEventInput || (exports.DeleteTimelineEventInput = {}));
var DeleteTimelineEventOutput;
(function (DeleteTimelineEventOutput) {
    /**
     * @internal
     */
    DeleteTimelineEventOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTimelineEventOutput = exports.DeleteTimelineEventOutput || (exports.DeleteTimelineEventOutput = {}));
var EventSummary;
(function (EventSummary) {
    /**
     * @internal
     */
    EventSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSummary = exports.EventSummary || (exports.EventSummary = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.condition && { condition: Condition.filterSensitiveLog(obj.condition) }),
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var GetIncidentRecordInput;
(function (GetIncidentRecordInput) {
    /**
     * @internal
     */
    GetIncidentRecordInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIncidentRecordInput = exports.GetIncidentRecordInput || (exports.GetIncidentRecordInput = {}));
var IncidentRecordSource;
(function (IncidentRecordSource) {
    /**
     * @internal
     */
    IncidentRecordSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncidentRecordSource = exports.IncidentRecordSource || (exports.IncidentRecordSource = {}));
var IncidentRecordStatus;
(function (IncidentRecordStatus) {
    IncidentRecordStatus["OPEN"] = "OPEN";
    IncidentRecordStatus["RESOLVED"] = "RESOLVED";
})(IncidentRecordStatus = exports.IncidentRecordStatus || (exports.IncidentRecordStatus = {}));
var IncidentRecord;
(function (IncidentRecord) {
    /**
     * @internal
     */
    IncidentRecord.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.automationExecutions && {
            automationExecutions: obj.automationExecutions.map((item) => AutomationExecution.filterSensitiveLog(item)),
        }),
        ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
        ...(obj.notificationTargets && {
            notificationTargets: obj.notificationTargets.map((item) => NotificationTargetItem.filterSensitiveLog(item)),
        }),
    });
})(IncidentRecord = exports.IncidentRecord || (exports.IncidentRecord = {}));
var GetIncidentRecordOutput;
(function (GetIncidentRecordOutput) {
    /**
     * @internal
     */
    GetIncidentRecordOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.incidentRecord && { incidentRecord: IncidentRecord.filterSensitiveLog(obj.incidentRecord) }),
    });
})(GetIncidentRecordOutput = exports.GetIncidentRecordOutput || (exports.GetIncidentRecordOutput = {}));
var GetReplicationSetInput;
(function (GetReplicationSetInput) {
    /**
     * @internal
     */
    GetReplicationSetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReplicationSetInput = exports.GetReplicationSetInput || (exports.GetReplicationSetInput = {}));
var RegionStatus;
(function (RegionStatus) {
    /**
     * All operations have completed successfully and the region is ready to use
     */
    RegionStatus["ACTIVE"] = "ACTIVE";
    /**
     * The region is in the process of being created.
     */
    RegionStatus["CREATING"] = "CREATING";
    /**
     * The region is in the process of being deleted.
     */
    RegionStatus["DELETING"] = "DELETING";
    /**
     * The region is not healthy and we cannot automatically fix it.
     */
    RegionStatus["FAILED"] = "FAILED";
})(RegionStatus = exports.RegionStatus || (exports.RegionStatus = {}));
var RegionInfo;
(function (RegionInfo) {
    /**
     * @internal
     */
    RegionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegionInfo = exports.RegionInfo || (exports.RegionInfo = {}));
var ReplicationSetStatus;
(function (ReplicationSetStatus) {
    /**
     * All operations have completed successfully and the replication set is ready to use
     */
    ReplicationSetStatus["ACTIVE"] = "ACTIVE";
    /**
     * Replication set is in the process of being created.
     */
    ReplicationSetStatus["CREATING"] = "CREATING";
    /**
     * Replication set is in the process of being deleted.
     */
    ReplicationSetStatus["DELETING"] = "DELETING";
    /**
     * Replication set is not healthy and we cannot fix it.
     */
    ReplicationSetStatus["FAILED"] = "FAILED";
    /**
     * Replication set is in the process of being updated.
     */
    ReplicationSetStatus["UPDATING"] = "UPDATING";
})(ReplicationSetStatus = exports.ReplicationSetStatus || (exports.ReplicationSetStatus = {}));
var ReplicationSet;
(function (ReplicationSet) {
    /**
     * @internal
     */
    ReplicationSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationSet = exports.ReplicationSet || (exports.ReplicationSet = {}));
var GetReplicationSetOutput;
(function (GetReplicationSetOutput) {
    /**
     * @internal
     */
    GetReplicationSetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReplicationSetOutput = exports.GetReplicationSetOutput || (exports.GetReplicationSetOutput = {}));
var GetResourcePoliciesInput;
(function (GetResourcePoliciesInput) {
    /**
     * @internal
     */
    GetResourcePoliciesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePoliciesInput = exports.GetResourcePoliciesInput || (exports.GetResourcePoliciesInput = {}));
var ResourcePolicy;
(function (ResourcePolicy) {
    /**
     * @internal
     */
    ResourcePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcePolicy = exports.ResourcePolicy || (exports.ResourcePolicy = {}));
var GetResourcePoliciesOutput;
(function (GetResourcePoliciesOutput) {
    /**
     * @internal
     */
    GetResourcePoliciesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePoliciesOutput = exports.GetResourcePoliciesOutput || (exports.GetResourcePoliciesOutput = {}));
var GetResponsePlanInput;
(function (GetResponsePlanInput) {
    /**
     * @internal
     */
    GetResponsePlanInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResponsePlanInput = exports.GetResponsePlanInput || (exports.GetResponsePlanInput = {}));
var GetResponsePlanOutput;
(function (GetResponsePlanOutput) {
    /**
     * @internal
     */
    GetResponsePlanOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.incidentTemplate && { incidentTemplate: IncidentTemplate.filterSensitiveLog(obj.incidentTemplate) }),
        ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
        ...(obj.actions && { actions: obj.actions.map((item) => Action.filterSensitiveLog(item)) }),
    });
})(GetResponsePlanOutput = exports.GetResponsePlanOutput || (exports.GetResponsePlanOutput = {}));
var GetTimelineEventInput;
(function (GetTimelineEventInput) {
    /**
     * @internal
     */
    GetTimelineEventInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTimelineEventInput = exports.GetTimelineEventInput || (exports.GetTimelineEventInput = {}));
var TimelineEvent;
(function (TimelineEvent) {
    /**
     * @internal
     */
    TimelineEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimelineEvent = exports.TimelineEvent || (exports.TimelineEvent = {}));
var GetTimelineEventOutput;
(function (GetTimelineEventOutput) {
    /**
     * @internal
     */
    GetTimelineEventOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTimelineEventOutput = exports.GetTimelineEventOutput || (exports.GetTimelineEventOutput = {}));
var IncidentRecordSummary;
(function (IncidentRecordSummary) {
    /**
     * @internal
     */
    IncidentRecordSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncidentRecordSummary = exports.IncidentRecordSummary || (exports.IncidentRecordSummary = {}));
var ItemType;
(function (ItemType) {
    ItemType["ANALYSIS"] = "ANALYSIS";
    ItemType["ATTACHMENT"] = "ATTACHMENT";
    ItemType["INCIDENT"] = "INCIDENT";
    ItemType["METRIC"] = "METRIC";
    ItemType["OTHER"] = "OTHER";
    ItemType["PARENT"] = "PARENT";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
var ItemValue;
(function (ItemValue) {
    ItemValue.visit = (value, visitor) => {
        if (value.arn !== undefined)
            return visitor.arn(value.arn);
        if (value.url !== undefined)
            return visitor.url(value.url);
        if (value.metricDefinition !== undefined)
            return visitor.metricDefinition(value.metricDefinition);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ItemValue.filterSensitiveLog = (obj) => {
        if (obj.arn !== undefined)
            return { arn: obj.arn };
        if (obj.url !== undefined)
            return { url: obj.url };
        if (obj.metricDefinition !== undefined)
            return { metricDefinition: obj.metricDefinition };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(ItemValue = exports.ItemValue || (exports.ItemValue = {}));
var ItemIdentifier;
(function (ItemIdentifier) {
    /**
     * @internal
     */
    ItemIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.value && { value: ItemValue.filterSensitiveLog(obj.value) }),
    });
})(ItemIdentifier = exports.ItemIdentifier || (exports.ItemIdentifier = {}));
var ListIncidentRecordsInput;
(function (ListIncidentRecordsInput) {
    /**
     * @internal
     */
    ListIncidentRecordsInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.filters && { filters: obj.filters.map((item) => Filter.filterSensitiveLog(item)) }),
    });
})(ListIncidentRecordsInput = exports.ListIncidentRecordsInput || (exports.ListIncidentRecordsInput = {}));
var ListIncidentRecordsOutput;
(function (ListIncidentRecordsOutput) {
    /**
     * @internal
     */
    ListIncidentRecordsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIncidentRecordsOutput = exports.ListIncidentRecordsOutput || (exports.ListIncidentRecordsOutput = {}));
var ListRelatedItemsInput;
(function (ListRelatedItemsInput) {
    /**
     * @internal
     */
    ListRelatedItemsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRelatedItemsInput = exports.ListRelatedItemsInput || (exports.ListRelatedItemsInput = {}));
var RelatedItem;
(function (RelatedItem) {
    /**
     * @internal
     */
    RelatedItem.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.identifier && { identifier: ItemIdentifier.filterSensitiveLog(obj.identifier) }),
    });
})(RelatedItem = exports.RelatedItem || (exports.RelatedItem = {}));
var ListRelatedItemsOutput;
(function (ListRelatedItemsOutput) {
    /**
     * @internal
     */
    ListRelatedItemsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.relatedItems && { relatedItems: obj.relatedItems.map((item) => RelatedItem.filterSensitiveLog(item)) }),
    });
})(ListRelatedItemsOutput = exports.ListRelatedItemsOutput || (exports.ListRelatedItemsOutput = {}));
var ListReplicationSetsInput;
(function (ListReplicationSetsInput) {
    /**
     * @internal
     */
    ListReplicationSetsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReplicationSetsInput = exports.ListReplicationSetsInput || (exports.ListReplicationSetsInput = {}));
var ListReplicationSetsOutput;
(function (ListReplicationSetsOutput) {
    /**
     * @internal
     */
    ListReplicationSetsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReplicationSetsOutput = exports.ListReplicationSetsOutput || (exports.ListReplicationSetsOutput = {}));
var ListResponsePlansInput;
(function (ListResponsePlansInput) {
    /**
     * @internal
     */
    ListResponsePlansInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResponsePlansInput = exports.ListResponsePlansInput || (exports.ListResponsePlansInput = {}));
var ResponsePlanSummary;
(function (ResponsePlanSummary) {
    /**
     * @internal
     */
    ResponsePlanSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponsePlanSummary = exports.ResponsePlanSummary || (exports.ResponsePlanSummary = {}));
var ListResponsePlansOutput;
(function (ListResponsePlansOutput) {
    /**
     * @internal
     */
    ListResponsePlansOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResponsePlansOutput = exports.ListResponsePlansOutput || (exports.ListResponsePlansOutput = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var TimelineEventSort;
(function (TimelineEventSort) {
    TimelineEventSort["EVENT_TIME"] = "EVENT_TIME";
})(TimelineEventSort = exports.TimelineEventSort || (exports.TimelineEventSort = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "ASCENDING";
    SortOrder["DESCENDING"] = "DESCENDING";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var ListTimelineEventsInput;
(function (ListTimelineEventsInput) {
    /**
     * @internal
     */
    ListTimelineEventsInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.filters && { filters: obj.filters.map((item) => Filter.filterSensitiveLog(item)) }),
    });
})(ListTimelineEventsInput = exports.ListTimelineEventsInput || (exports.ListTimelineEventsInput = {}));
var ListTimelineEventsOutput;
(function (ListTimelineEventsOutput) {
    /**
     * @internal
     */
    ListTimelineEventsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTimelineEventsOutput = exports.ListTimelineEventsOutput || (exports.ListTimelineEventsOutput = {}));
var PutResourcePolicyInput;
(function (PutResourcePolicyInput) {
    /**
     * @internal
     */
    PutResourcePolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyInput = exports.PutResourcePolicyInput || (exports.PutResourcePolicyInput = {}));
var PutResourcePolicyOutput;
(function (PutResourcePolicyOutput) {
    /**
     * @internal
     */
    PutResourcePolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyOutput = exports.PutResourcePolicyOutput || (exports.PutResourcePolicyOutput = {}));
var RelatedItemsUpdate;
(function (RelatedItemsUpdate) {
    RelatedItemsUpdate.visit = (value, visitor) => {
        if (value.itemToAdd !== undefined)
            return visitor.itemToAdd(value.itemToAdd);
        if (value.itemToRemove !== undefined)
            return visitor.itemToRemove(value.itemToRemove);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    RelatedItemsUpdate.filterSensitiveLog = (obj) => {
        if (obj.itemToAdd !== undefined)
            return { itemToAdd: RelatedItem.filterSensitiveLog(obj.itemToAdd) };
        if (obj.itemToRemove !== undefined)
            return { itemToRemove: ItemIdentifier.filterSensitiveLog(obj.itemToRemove) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(RelatedItemsUpdate = exports.RelatedItemsUpdate || (exports.RelatedItemsUpdate = {}));
var TriggerDetails;
(function (TriggerDetails) {
    /**
     * @internal
     */
    TriggerDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TriggerDetails = exports.TriggerDetails || (exports.TriggerDetails = {}));
var StartIncidentInput;
(function (StartIncidentInput) {
    /**
     * @internal
     */
    StartIncidentInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.relatedItems && { relatedItems: obj.relatedItems.map((item) => RelatedItem.filterSensitiveLog(item)) }),
    });
})(StartIncidentInput = exports.StartIncidentInput || (exports.StartIncidentInput = {}));
var StartIncidentOutput;
(function (StartIncidentOutput) {
    /**
     * @internal
     */
    StartIncidentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartIncidentOutput = exports.StartIncidentOutput || (exports.StartIncidentOutput = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateDeletionProtectionInput;
(function (UpdateDeletionProtectionInput) {
    /**
     * @internal
     */
    UpdateDeletionProtectionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeletionProtectionInput = exports.UpdateDeletionProtectionInput || (exports.UpdateDeletionProtectionInput = {}));
var UpdateDeletionProtectionOutput;
(function (UpdateDeletionProtectionOutput) {
    /**
     * @internal
     */
    UpdateDeletionProtectionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeletionProtectionOutput = exports.UpdateDeletionProtectionOutput || (exports.UpdateDeletionProtectionOutput = {}));
var UpdateIncidentRecordInput;
(function (UpdateIncidentRecordInput) {
    /**
     * @internal
     */
    UpdateIncidentRecordInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
        ...(obj.notificationTargets && {
            notificationTargets: obj.notificationTargets.map((item) => NotificationTargetItem.filterSensitiveLog(item)),
        }),
    });
})(UpdateIncidentRecordInput = exports.UpdateIncidentRecordInput || (exports.UpdateIncidentRecordInput = {}));
var UpdateIncidentRecordOutput;
(function (UpdateIncidentRecordOutput) {
    /**
     * @internal
     */
    UpdateIncidentRecordOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIncidentRecordOutput = exports.UpdateIncidentRecordOutput || (exports.UpdateIncidentRecordOutput = {}));
var UpdateRelatedItemsInput;
(function (UpdateRelatedItemsInput) {
    /**
     * @internal
     */
    UpdateRelatedItemsInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.relatedItemsUpdate && {
            relatedItemsUpdate: RelatedItemsUpdate.filterSensitiveLog(obj.relatedItemsUpdate),
        }),
    });
})(UpdateRelatedItemsInput = exports.UpdateRelatedItemsInput || (exports.UpdateRelatedItemsInput = {}));
var UpdateRelatedItemsOutput;
(function (UpdateRelatedItemsOutput) {
    /**
     * @internal
     */
    UpdateRelatedItemsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRelatedItemsOutput = exports.UpdateRelatedItemsOutput || (exports.UpdateRelatedItemsOutput = {}));
var UpdateReplicationSetAction;
(function (UpdateReplicationSetAction) {
    UpdateReplicationSetAction.visit = (value, visitor) => {
        if (value.addRegionAction !== undefined)
            return visitor.addRegionAction(value.addRegionAction);
        if (value.deleteRegionAction !== undefined)
            return visitor.deleteRegionAction(value.deleteRegionAction);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    UpdateReplicationSetAction.filterSensitiveLog = (obj) => {
        if (obj.addRegionAction !== undefined)
            return { addRegionAction: AddRegionAction.filterSensitiveLog(obj.addRegionAction) };
        if (obj.deleteRegionAction !== undefined)
            return { deleteRegionAction: DeleteRegionAction.filterSensitiveLog(obj.deleteRegionAction) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(UpdateReplicationSetAction = exports.UpdateReplicationSetAction || (exports.UpdateReplicationSetAction = {}));
var UpdateReplicationSetInput;
(function (UpdateReplicationSetInput) {
    /**
     * @internal
     */
    UpdateReplicationSetInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.actions && { actions: obj.actions.map((item) => UpdateReplicationSetAction.filterSensitiveLog(item)) }),
    });
})(UpdateReplicationSetInput = exports.UpdateReplicationSetInput || (exports.UpdateReplicationSetInput = {}));
var UpdateReplicationSetOutput;
(function (UpdateReplicationSetOutput) {
    /**
     * @internal
     */
    UpdateReplicationSetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateReplicationSetOutput = exports.UpdateReplicationSetOutput || (exports.UpdateReplicationSetOutput = {}));
var UpdateResponsePlanInput;
(function (UpdateResponsePlanInput) {
    /**
     * @internal
     */
    UpdateResponsePlanInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.incidentTemplateNotificationTargets && {
            incidentTemplateNotificationTargets: obj.incidentTemplateNotificationTargets.map((item) => NotificationTargetItem.filterSensitiveLog(item)),
        }),
        ...(obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) }),
        ...(obj.actions && { actions: obj.actions.map((item) => Action.filterSensitiveLog(item)) }),
    });
})(UpdateResponsePlanInput = exports.UpdateResponsePlanInput || (exports.UpdateResponsePlanInput = {}));
var UpdateResponsePlanOutput;
(function (UpdateResponsePlanOutput) {
    /**
     * @internal
     */
    UpdateResponsePlanOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResponsePlanOutput = exports.UpdateResponsePlanOutput || (exports.UpdateResponsePlanOutput = {}));
var UpdateTimelineEventInput;
(function (UpdateTimelineEventInput) {
    /**
     * @internal
     */
    UpdateTimelineEventInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTimelineEventInput = exports.UpdateTimelineEventInput || (exports.UpdateTimelineEventInput = {}));
var UpdateTimelineEventOutput;
(function (UpdateTimelineEventOutput) {
    /**
     * @internal
     */
    UpdateTimelineEventOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTimelineEventOutput = exports.UpdateTimelineEventOutput || (exports.UpdateTimelineEventOutput = {}));
//# sourceMappingURL=models_0.js.map