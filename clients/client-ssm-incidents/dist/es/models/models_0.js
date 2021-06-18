import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var SsmTargetAccount;
(function (SsmTargetAccount) {
    SsmTargetAccount["IMPACTED_ACCOUNT"] = "IMPACTED_ACCOUNT";
    SsmTargetAccount["RESPONSE_PLAN_OWNER_ACCOUNT"] = "RESPONSE_PLAN_OWNER_ACCOUNT";
})(SsmTargetAccount || (SsmTargetAccount = {}));
export var SsmAutomation;
(function (SsmAutomation) {
    /**
     * @internal
     */
    SsmAutomation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SsmAutomation || (SsmAutomation = {}));
export var Action;
(function (Action) {
    Action.visit = function (value, visitor) {
        if (value.ssmAutomation !== undefined)
            return visitor.ssmAutomation(value.ssmAutomation);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    Action.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.ssmAutomation !== undefined)
            return { ssmAutomation: SsmAutomation.filterSensitiveLog(obj.ssmAutomation) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(Action || (Action = {}));
export var AddRegionAction;
(function (AddRegionAction) {
    /**
     * @internal
     */
    AddRegionAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddRegionAction || (AddRegionAction = {}));
export var AttributeValueList;
(function (AttributeValueList) {
    AttributeValueList.visit = function (value, visitor) {
        if (value.stringValues !== undefined)
            return visitor.stringValues(value.stringValues);
        if (value.integerValues !== undefined)
            return visitor.integerValues(value.integerValues);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AttributeValueList.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.stringValues !== undefined)
            return { stringValues: obj.stringValues };
        if (obj.integerValues !== undefined)
            return { integerValues: obj.integerValues };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(AttributeValueList || (AttributeValueList = {}));
export var AutomationExecution;
(function (AutomationExecution) {
    AutomationExecution.visit = function (value, visitor) {
        if (value.ssmExecutionArn !== undefined)
            return visitor.ssmExecutionArn(value.ssmExecutionArn);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AutomationExecution.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.ssmExecutionArn !== undefined)
            return { ssmExecutionArn: obj.ssmExecutionArn };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(AutomationExecution || (AutomationExecution = {}));
export var EmptyChatChannel;
(function (EmptyChatChannel) {
    /**
     * @internal
     */
    EmptyChatChannel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmptyChatChannel || (EmptyChatChannel = {}));
export var ChatChannel;
(function (ChatChannel) {
    ChatChannel.visit = function (value, visitor) {
        if (value.empty !== undefined)
            return visitor.empty(value.empty);
        if (value.chatbotSns !== undefined)
            return visitor.chatbotSns(value.chatbotSns);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ChatChannel.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.empty !== undefined)
            return { empty: EmptyChatChannel.filterSensitiveLog(obj.empty) };
        if (obj.chatbotSns !== undefined)
            return { chatbotSns: obj.chatbotSns };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(ChatChannel || (ChatChannel = {}));
export var Condition;
(function (Condition) {
    Condition.visit = function (value, visitor) {
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
    Condition.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.before !== undefined)
            return { before: obj.before };
        if (obj.after !== undefined)
            return { after: obj.after };
        if (obj.equals !== undefined)
            return { equals: AttributeValueList.filterSensitiveLog(obj.equals) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(Condition || (Condition = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["INCIDENT_RECORD"] = "INCIDENT_RECORD";
    ResourceType["REPLICATION_SET"] = "REPLICATION_SET";
    ResourceType["RESOURCE_POLICY"] = "RESOURCE_POLICY";
    ResourceType["RESPONSE_PLAN"] = "RESPONSE_PLAN";
    ResourceType["TIMELINE_EVENT"] = "TIMELINE_EVENT";
})(ResourceType || (ResourceType = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var RegionMapInputValue;
(function (RegionMapInputValue) {
    /**
     * @internal
     */
    RegionMapInputValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegionMapInputValue || (RegionMapInputValue = {}));
export var CreateReplicationSetInput;
(function (CreateReplicationSetInput) {
    /**
     * @internal
     */
    CreateReplicationSetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationSetInput || (CreateReplicationSetInput = {}));
export var CreateReplicationSetOutput;
(function (CreateReplicationSetOutput) {
    /**
     * @internal
     */
    CreateReplicationSetOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationSetOutput || (CreateReplicationSetOutput = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ServiceCode;
(function (ServiceCode) {
    ServiceCode["SSM_INCIDENTS"] = "ssm-incidents";
})(ServiceCode || (ServiceCode = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var NotificationTargetItem;
(function (NotificationTargetItem) {
    NotificationTargetItem.visit = function (value, visitor) {
        if (value.snsTopicArn !== undefined)
            return visitor.snsTopicArn(value.snsTopicArn);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    NotificationTargetItem.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.snsTopicArn !== undefined)
            return { snsTopicArn: obj.snsTopicArn };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(NotificationTargetItem || (NotificationTargetItem = {}));
export var IncidentTemplate;
(function (IncidentTemplate) {
    /**
     * @internal
     */
    IncidentTemplate.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.notificationTargets && {
        notificationTargets: obj.notificationTargets.map(function (item) { return NotificationTargetItem.filterSensitiveLog(item); }),
    }))); };
})(IncidentTemplate || (IncidentTemplate = {}));
export var CreateResponsePlanInput;
(function (CreateResponsePlanInput) {
    /**
     * @internal
     */
    CreateResponsePlanInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.incidentTemplate && { incidentTemplate: IncidentTemplate.filterSensitiveLog(obj.incidentTemplate) })), (obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) })), (obj.actions && { actions: obj.actions.map(function (item) { return Action.filterSensitiveLog(item); }) }))); };
})(CreateResponsePlanInput || (CreateResponsePlanInput = {}));
export var CreateResponsePlanOutput;
(function (CreateResponsePlanOutput) {
    /**
     * @internal
     */
    CreateResponsePlanOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResponsePlanOutput || (CreateResponsePlanOutput = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var CreateTimelineEventInput;
(function (CreateTimelineEventInput) {
    /**
     * @internal
     */
    CreateTimelineEventInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTimelineEventInput || (CreateTimelineEventInput = {}));
export var CreateTimelineEventOutput;
(function (CreateTimelineEventOutput) {
    /**
     * @internal
     */
    CreateTimelineEventOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTimelineEventOutput || (CreateTimelineEventOutput = {}));
export var DeleteIncidentRecordInput;
(function (DeleteIncidentRecordInput) {
    /**
     * @internal
     */
    DeleteIncidentRecordInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIncidentRecordInput || (DeleteIncidentRecordInput = {}));
export var DeleteIncidentRecordOutput;
(function (DeleteIncidentRecordOutput) {
    /**
     * @internal
     */
    DeleteIncidentRecordOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIncidentRecordOutput || (DeleteIncidentRecordOutput = {}));
export var DeleteRegionAction;
(function (DeleteRegionAction) {
    /**
     * @internal
     */
    DeleteRegionAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegionAction || (DeleteRegionAction = {}));
export var DeleteReplicationSetInput;
(function (DeleteReplicationSetInput) {
    /**
     * @internal
     */
    DeleteReplicationSetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationSetInput || (DeleteReplicationSetInput = {}));
export var DeleteReplicationSetOutput;
(function (DeleteReplicationSetOutput) {
    /**
     * @internal
     */
    DeleteReplicationSetOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationSetOutput || (DeleteReplicationSetOutput = {}));
export var DeleteResourcePolicyInput;
(function (DeleteResourcePolicyInput) {
    /**
     * @internal
     */
    DeleteResourcePolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourcePolicyInput || (DeleteResourcePolicyInput = {}));
export var DeleteResourcePolicyOutput;
(function (DeleteResourcePolicyOutput) {
    /**
     * @internal
     */
    DeleteResourcePolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourcePolicyOutput || (DeleteResourcePolicyOutput = {}));
export var DeleteResponsePlanInput;
(function (DeleteResponsePlanInput) {
    /**
     * @internal
     */
    DeleteResponsePlanInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResponsePlanInput || (DeleteResponsePlanInput = {}));
export var DeleteResponsePlanOutput;
(function (DeleteResponsePlanOutput) {
    /**
     * @internal
     */
    DeleteResponsePlanOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResponsePlanOutput || (DeleteResponsePlanOutput = {}));
export var DeleteTimelineEventInput;
(function (DeleteTimelineEventInput) {
    /**
     * @internal
     */
    DeleteTimelineEventInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTimelineEventInput || (DeleteTimelineEventInput = {}));
export var DeleteTimelineEventOutput;
(function (DeleteTimelineEventOutput) {
    /**
     * @internal
     */
    DeleteTimelineEventOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTimelineEventOutput || (DeleteTimelineEventOutput = {}));
export var EventSummary;
(function (EventSummary) {
    /**
     * @internal
     */
    EventSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventSummary || (EventSummary = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.condition && { condition: Condition.filterSensitiveLog(obj.condition) }))); };
})(Filter || (Filter = {}));
export var GetIncidentRecordInput;
(function (GetIncidentRecordInput) {
    /**
     * @internal
     */
    GetIncidentRecordInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIncidentRecordInput || (GetIncidentRecordInput = {}));
export var IncidentRecordSource;
(function (IncidentRecordSource) {
    /**
     * @internal
     */
    IncidentRecordSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncidentRecordSource || (IncidentRecordSource = {}));
export var IncidentRecordStatus;
(function (IncidentRecordStatus) {
    IncidentRecordStatus["OPEN"] = "OPEN";
    IncidentRecordStatus["RESOLVED"] = "RESOLVED";
})(IncidentRecordStatus || (IncidentRecordStatus = {}));
export var IncidentRecord;
(function (IncidentRecord) {
    /**
     * @internal
     */
    IncidentRecord.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.automationExecutions && {
        automationExecutions: obj.automationExecutions.map(function (item) { return AutomationExecution.filterSensitiveLog(item); }),
    })), (obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) })), (obj.notificationTargets && {
        notificationTargets: obj.notificationTargets.map(function (item) { return NotificationTargetItem.filterSensitiveLog(item); }),
    }))); };
})(IncidentRecord || (IncidentRecord = {}));
export var GetIncidentRecordOutput;
(function (GetIncidentRecordOutput) {
    /**
     * @internal
     */
    GetIncidentRecordOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.incidentRecord && { incidentRecord: IncidentRecord.filterSensitiveLog(obj.incidentRecord) }))); };
})(GetIncidentRecordOutput || (GetIncidentRecordOutput = {}));
export var GetReplicationSetInput;
(function (GetReplicationSetInput) {
    /**
     * @internal
     */
    GetReplicationSetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReplicationSetInput || (GetReplicationSetInput = {}));
export var RegionStatus;
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
})(RegionStatus || (RegionStatus = {}));
export var RegionInfo;
(function (RegionInfo) {
    /**
     * @internal
     */
    RegionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegionInfo || (RegionInfo = {}));
export var ReplicationSetStatus;
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
})(ReplicationSetStatus || (ReplicationSetStatus = {}));
export var ReplicationSet;
(function (ReplicationSet) {
    /**
     * @internal
     */
    ReplicationSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationSet || (ReplicationSet = {}));
export var GetReplicationSetOutput;
(function (GetReplicationSetOutput) {
    /**
     * @internal
     */
    GetReplicationSetOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReplicationSetOutput || (GetReplicationSetOutput = {}));
export var GetResourcePoliciesInput;
(function (GetResourcePoliciesInput) {
    /**
     * @internal
     */
    GetResourcePoliciesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetResourcePoliciesInput || (GetResourcePoliciesInput = {}));
export var ResourcePolicy;
(function (ResourcePolicy) {
    /**
     * @internal
     */
    ResourcePolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourcePolicy || (ResourcePolicy = {}));
export var GetResourcePoliciesOutput;
(function (GetResourcePoliciesOutput) {
    /**
     * @internal
     */
    GetResourcePoliciesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetResourcePoliciesOutput || (GetResourcePoliciesOutput = {}));
export var GetResponsePlanInput;
(function (GetResponsePlanInput) {
    /**
     * @internal
     */
    GetResponsePlanInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetResponsePlanInput || (GetResponsePlanInput = {}));
export var GetResponsePlanOutput;
(function (GetResponsePlanOutput) {
    /**
     * @internal
     */
    GetResponsePlanOutput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.incidentTemplate && { incidentTemplate: IncidentTemplate.filterSensitiveLog(obj.incidentTemplate) })), (obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) })), (obj.actions && { actions: obj.actions.map(function (item) { return Action.filterSensitiveLog(item); }) }))); };
})(GetResponsePlanOutput || (GetResponsePlanOutput = {}));
export var GetTimelineEventInput;
(function (GetTimelineEventInput) {
    /**
     * @internal
     */
    GetTimelineEventInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTimelineEventInput || (GetTimelineEventInput = {}));
export var TimelineEvent;
(function (TimelineEvent) {
    /**
     * @internal
     */
    TimelineEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimelineEvent || (TimelineEvent = {}));
export var GetTimelineEventOutput;
(function (GetTimelineEventOutput) {
    /**
     * @internal
     */
    GetTimelineEventOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTimelineEventOutput || (GetTimelineEventOutput = {}));
export var IncidentRecordSummary;
(function (IncidentRecordSummary) {
    /**
     * @internal
     */
    IncidentRecordSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncidentRecordSummary || (IncidentRecordSummary = {}));
export var ItemType;
(function (ItemType) {
    ItemType["ANALYSIS"] = "ANALYSIS";
    ItemType["ATTACHMENT"] = "ATTACHMENT";
    ItemType["INCIDENT"] = "INCIDENT";
    ItemType["METRIC"] = "METRIC";
    ItemType["OTHER"] = "OTHER";
    ItemType["PARENT"] = "PARENT";
})(ItemType || (ItemType = {}));
export var ItemValue;
(function (ItemValue) {
    ItemValue.visit = function (value, visitor) {
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
    ItemValue.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.arn !== undefined)
            return { arn: obj.arn };
        if (obj.url !== undefined)
            return { url: obj.url };
        if (obj.metricDefinition !== undefined)
            return { metricDefinition: obj.metricDefinition };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(ItemValue || (ItemValue = {}));
export var ItemIdentifier;
(function (ItemIdentifier) {
    /**
     * @internal
     */
    ItemIdentifier.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.value && { value: ItemValue.filterSensitiveLog(obj.value) }))); };
})(ItemIdentifier || (ItemIdentifier = {}));
export var ListIncidentRecordsInput;
(function (ListIncidentRecordsInput) {
    /**
     * @internal
     */
    ListIncidentRecordsInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.filters && { filters: obj.filters.map(function (item) { return Filter.filterSensitiveLog(item); }) }))); };
})(ListIncidentRecordsInput || (ListIncidentRecordsInput = {}));
export var ListIncidentRecordsOutput;
(function (ListIncidentRecordsOutput) {
    /**
     * @internal
     */
    ListIncidentRecordsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIncidentRecordsOutput || (ListIncidentRecordsOutput = {}));
export var ListRelatedItemsInput;
(function (ListRelatedItemsInput) {
    /**
     * @internal
     */
    ListRelatedItemsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRelatedItemsInput || (ListRelatedItemsInput = {}));
export var RelatedItem;
(function (RelatedItem) {
    /**
     * @internal
     */
    RelatedItem.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.identifier && { identifier: ItemIdentifier.filterSensitiveLog(obj.identifier) }))); };
})(RelatedItem || (RelatedItem = {}));
export var ListRelatedItemsOutput;
(function (ListRelatedItemsOutput) {
    /**
     * @internal
     */
    ListRelatedItemsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.relatedItems && { relatedItems: obj.relatedItems.map(function (item) { return RelatedItem.filterSensitiveLog(item); }) }))); };
})(ListRelatedItemsOutput || (ListRelatedItemsOutput = {}));
export var ListReplicationSetsInput;
(function (ListReplicationSetsInput) {
    /**
     * @internal
     */
    ListReplicationSetsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReplicationSetsInput || (ListReplicationSetsInput = {}));
export var ListReplicationSetsOutput;
(function (ListReplicationSetsOutput) {
    /**
     * @internal
     */
    ListReplicationSetsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReplicationSetsOutput || (ListReplicationSetsOutput = {}));
export var ListResponsePlansInput;
(function (ListResponsePlansInput) {
    /**
     * @internal
     */
    ListResponsePlansInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResponsePlansInput || (ListResponsePlansInput = {}));
export var ResponsePlanSummary;
(function (ResponsePlanSummary) {
    /**
     * @internal
     */
    ResponsePlanSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResponsePlanSummary || (ResponsePlanSummary = {}));
export var ListResponsePlansOutput;
(function (ListResponsePlansOutput) {
    /**
     * @internal
     */
    ListResponsePlansOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResponsePlansOutput || (ListResponsePlansOutput = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var TimelineEventSort;
(function (TimelineEventSort) {
    TimelineEventSort["EVENT_TIME"] = "EVENT_TIME";
})(TimelineEventSort || (TimelineEventSort = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "ASCENDING";
    SortOrder["DESCENDING"] = "DESCENDING";
})(SortOrder || (SortOrder = {}));
export var ListTimelineEventsInput;
(function (ListTimelineEventsInput) {
    /**
     * @internal
     */
    ListTimelineEventsInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.filters && { filters: obj.filters.map(function (item) { return Filter.filterSensitiveLog(item); }) }))); };
})(ListTimelineEventsInput || (ListTimelineEventsInput = {}));
export var ListTimelineEventsOutput;
(function (ListTimelineEventsOutput) {
    /**
     * @internal
     */
    ListTimelineEventsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTimelineEventsOutput || (ListTimelineEventsOutput = {}));
export var PutResourcePolicyInput;
(function (PutResourcePolicyInput) {
    /**
     * @internal
     */
    PutResourcePolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutResourcePolicyInput || (PutResourcePolicyInput = {}));
export var PutResourcePolicyOutput;
(function (PutResourcePolicyOutput) {
    /**
     * @internal
     */
    PutResourcePolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutResourcePolicyOutput || (PutResourcePolicyOutput = {}));
export var RelatedItemsUpdate;
(function (RelatedItemsUpdate) {
    RelatedItemsUpdate.visit = function (value, visitor) {
        if (value.itemToAdd !== undefined)
            return visitor.itemToAdd(value.itemToAdd);
        if (value.itemToRemove !== undefined)
            return visitor.itemToRemove(value.itemToRemove);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    RelatedItemsUpdate.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.itemToAdd !== undefined)
            return { itemToAdd: RelatedItem.filterSensitiveLog(obj.itemToAdd) };
        if (obj.itemToRemove !== undefined)
            return { itemToRemove: ItemIdentifier.filterSensitiveLog(obj.itemToRemove) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(RelatedItemsUpdate || (RelatedItemsUpdate = {}));
export var TriggerDetails;
(function (TriggerDetails) {
    /**
     * @internal
     */
    TriggerDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TriggerDetails || (TriggerDetails = {}));
export var StartIncidentInput;
(function (StartIncidentInput) {
    /**
     * @internal
     */
    StartIncidentInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.relatedItems && { relatedItems: obj.relatedItems.map(function (item) { return RelatedItem.filterSensitiveLog(item); }) }))); };
})(StartIncidentInput || (StartIncidentInput = {}));
export var StartIncidentOutput;
(function (StartIncidentOutput) {
    /**
     * @internal
     */
    StartIncidentOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartIncidentOutput || (StartIncidentOutput = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateDeletionProtectionInput;
(function (UpdateDeletionProtectionInput) {
    /**
     * @internal
     */
    UpdateDeletionProtectionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDeletionProtectionInput || (UpdateDeletionProtectionInput = {}));
export var UpdateDeletionProtectionOutput;
(function (UpdateDeletionProtectionOutput) {
    /**
     * @internal
     */
    UpdateDeletionProtectionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDeletionProtectionOutput || (UpdateDeletionProtectionOutput = {}));
export var UpdateIncidentRecordInput;
(function (UpdateIncidentRecordInput) {
    /**
     * @internal
     */
    UpdateIncidentRecordInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) })), (obj.notificationTargets && {
        notificationTargets: obj.notificationTargets.map(function (item) { return NotificationTargetItem.filterSensitiveLog(item); }),
    }))); };
})(UpdateIncidentRecordInput || (UpdateIncidentRecordInput = {}));
export var UpdateIncidentRecordOutput;
(function (UpdateIncidentRecordOutput) {
    /**
     * @internal
     */
    UpdateIncidentRecordOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIncidentRecordOutput || (UpdateIncidentRecordOutput = {}));
export var UpdateRelatedItemsInput;
(function (UpdateRelatedItemsInput) {
    /**
     * @internal
     */
    UpdateRelatedItemsInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.relatedItemsUpdate && {
        relatedItemsUpdate: RelatedItemsUpdate.filterSensitiveLog(obj.relatedItemsUpdate),
    }))); };
})(UpdateRelatedItemsInput || (UpdateRelatedItemsInput = {}));
export var UpdateRelatedItemsOutput;
(function (UpdateRelatedItemsOutput) {
    /**
     * @internal
     */
    UpdateRelatedItemsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRelatedItemsOutput || (UpdateRelatedItemsOutput = {}));
export var UpdateReplicationSetAction;
(function (UpdateReplicationSetAction) {
    UpdateReplicationSetAction.visit = function (value, visitor) {
        if (value.addRegionAction !== undefined)
            return visitor.addRegionAction(value.addRegionAction);
        if (value.deleteRegionAction !== undefined)
            return visitor.deleteRegionAction(value.deleteRegionAction);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    UpdateReplicationSetAction.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.addRegionAction !== undefined)
            return { addRegionAction: AddRegionAction.filterSensitiveLog(obj.addRegionAction) };
        if (obj.deleteRegionAction !== undefined)
            return { deleteRegionAction: DeleteRegionAction.filterSensitiveLog(obj.deleteRegionAction) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(UpdateReplicationSetAction || (UpdateReplicationSetAction = {}));
export var UpdateReplicationSetInput;
(function (UpdateReplicationSetInput) {
    /**
     * @internal
     */
    UpdateReplicationSetInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.actions && { actions: obj.actions.map(function (item) { return UpdateReplicationSetAction.filterSensitiveLog(item); }) }))); };
})(UpdateReplicationSetInput || (UpdateReplicationSetInput = {}));
export var UpdateReplicationSetOutput;
(function (UpdateReplicationSetOutput) {
    /**
     * @internal
     */
    UpdateReplicationSetOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateReplicationSetOutput || (UpdateReplicationSetOutput = {}));
export var UpdateResponsePlanInput;
(function (UpdateResponsePlanInput) {
    /**
     * @internal
     */
    UpdateResponsePlanInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.incidentTemplateNotificationTargets && {
        incidentTemplateNotificationTargets: obj.incidentTemplateNotificationTargets.map(function (item) {
            return NotificationTargetItem.filterSensitiveLog(item);
        }),
    })), (obj.chatChannel && { chatChannel: ChatChannel.filterSensitiveLog(obj.chatChannel) })), (obj.actions && { actions: obj.actions.map(function (item) { return Action.filterSensitiveLog(item); }) }))); };
})(UpdateResponsePlanInput || (UpdateResponsePlanInput = {}));
export var UpdateResponsePlanOutput;
(function (UpdateResponsePlanOutput) {
    /**
     * @internal
     */
    UpdateResponsePlanOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateResponsePlanOutput || (UpdateResponsePlanOutput = {}));
export var UpdateTimelineEventInput;
(function (UpdateTimelineEventInput) {
    /**
     * @internal
     */
    UpdateTimelineEventInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTimelineEventInput || (UpdateTimelineEventInput = {}));
export var UpdateTimelineEventOutput;
(function (UpdateTimelineEventOutput) {
    /**
     * @internal
     */
    UpdateTimelineEventOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTimelineEventOutput || (UpdateTimelineEventOutput = {}));
//# sourceMappingURL=models_0.js.map