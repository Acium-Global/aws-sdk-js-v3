"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1StartIncidentCommand = exports.deserializeAws_restJson1PutResourcePolicyCommand = exports.deserializeAws_restJson1ListTimelineEventsCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListResponsePlansCommand = exports.deserializeAws_restJson1ListReplicationSetsCommand = exports.deserializeAws_restJson1ListRelatedItemsCommand = exports.deserializeAws_restJson1ListIncidentRecordsCommand = exports.deserializeAws_restJson1GetTimelineEventCommand = exports.deserializeAws_restJson1GetResponsePlanCommand = exports.deserializeAws_restJson1GetResourcePoliciesCommand = exports.deserializeAws_restJson1GetReplicationSetCommand = exports.deserializeAws_restJson1GetIncidentRecordCommand = exports.deserializeAws_restJson1DeleteTimelineEventCommand = exports.deserializeAws_restJson1DeleteResponsePlanCommand = exports.deserializeAws_restJson1DeleteResourcePolicyCommand = exports.deserializeAws_restJson1DeleteReplicationSetCommand = exports.deserializeAws_restJson1DeleteIncidentRecordCommand = exports.deserializeAws_restJson1CreateTimelineEventCommand = exports.deserializeAws_restJson1CreateResponsePlanCommand = exports.deserializeAws_restJson1CreateReplicationSetCommand = exports.serializeAws_restJson1UpdateTimelineEventCommand = exports.serializeAws_restJson1UpdateResponsePlanCommand = exports.serializeAws_restJson1UpdateReplicationSetCommand = exports.serializeAws_restJson1UpdateRelatedItemsCommand = exports.serializeAws_restJson1UpdateIncidentRecordCommand = exports.serializeAws_restJson1UpdateDeletionProtectionCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartIncidentCommand = exports.serializeAws_restJson1PutResourcePolicyCommand = exports.serializeAws_restJson1ListTimelineEventsCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListResponsePlansCommand = exports.serializeAws_restJson1ListReplicationSetsCommand = exports.serializeAws_restJson1ListRelatedItemsCommand = exports.serializeAws_restJson1ListIncidentRecordsCommand = exports.serializeAws_restJson1GetTimelineEventCommand = exports.serializeAws_restJson1GetResponsePlanCommand = exports.serializeAws_restJson1GetResourcePoliciesCommand = exports.serializeAws_restJson1GetReplicationSetCommand = exports.serializeAws_restJson1GetIncidentRecordCommand = exports.serializeAws_restJson1DeleteTimelineEventCommand = exports.serializeAws_restJson1DeleteResponsePlanCommand = exports.serializeAws_restJson1DeleteResourcePolicyCommand = exports.serializeAws_restJson1DeleteReplicationSetCommand = exports.serializeAws_restJson1DeleteIncidentRecordCommand = exports.serializeAws_restJson1CreateTimelineEventCommand = exports.serializeAws_restJson1CreateResponsePlanCommand = exports.serializeAws_restJson1CreateReplicationSetCommand = void 0;
exports.deserializeAws_restJson1UpdateTimelineEventCommand = exports.deserializeAws_restJson1UpdateResponsePlanCommand = exports.deserializeAws_restJson1UpdateReplicationSetCommand = exports.deserializeAws_restJson1UpdateRelatedItemsCommand = exports.deserializeAws_restJson1UpdateIncidentRecordCommand = exports.deserializeAws_restJson1UpdateDeletionProtectionCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CreateReplicationSetCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createReplicationSet";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.regions !== undefined &&
            input.regions !== null && { regions: serializeAws_restJson1RegionMapInput(input.regions, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateReplicationSetCommand = serializeAws_restJson1CreateReplicationSetCommand;
const serializeAws_restJson1CreateResponsePlanCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createResponsePlan";
    let body;
    body = JSON.stringify({
        ...(input.actions !== undefined &&
            input.actions !== null && { actions: serializeAws_restJson1ActionsList(input.actions, context) }),
        ...(input.chatChannel !== undefined &&
            input.chatChannel !== null && { chatChannel: serializeAws_restJson1ChatChannel(input.chatChannel, context) }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
        ...(input.engagements !== undefined &&
            input.engagements !== null && { engagements: serializeAws_restJson1EngagementSet(input.engagements, context) }),
        ...(input.incidentTemplate !== undefined &&
            input.incidentTemplate !== null && {
            incidentTemplate: serializeAws_restJson1IncidentTemplate(input.incidentTemplate, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateResponsePlanCommand = serializeAws_restJson1CreateResponsePlanCommand;
const serializeAws_restJson1CreateTimelineEventCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createTimelineEvent";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.eventData !== undefined && input.eventData !== null && { eventData: input.eventData }),
        ...(input.eventTime !== undefined &&
            input.eventTime !== null && { eventTime: Math.round(input.eventTime.getTime() / 1000) }),
        ...(input.eventType !== undefined && input.eventType !== null && { eventType: input.eventType }),
        ...(input.incidentRecordArn !== undefined &&
            input.incidentRecordArn !== null && { incidentRecordArn: input.incidentRecordArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateTimelineEventCommand = serializeAws_restJson1CreateTimelineEventCommand;
const serializeAws_restJson1DeleteIncidentRecordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteIncidentRecord";
    let body;
    body = JSON.stringify({
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteIncidentRecordCommand = serializeAws_restJson1DeleteIncidentRecordCommand;
const serializeAws_restJson1DeleteReplicationSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/deleteReplicationSet";
    const query = {
        ...(input.arn !== undefined && { arn: input.arn }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteReplicationSetCommand = serializeAws_restJson1DeleteReplicationSetCommand;
const serializeAws_restJson1DeleteResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteResourcePolicy";
    let body;
    body = JSON.stringify({
        ...(input.policyId !== undefined && input.policyId !== null && { policyId: input.policyId }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteResourcePolicyCommand = serializeAws_restJson1DeleteResourcePolicyCommand;
const serializeAws_restJson1DeleteResponsePlanCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteResponsePlan";
    let body;
    body = JSON.stringify({
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteResponsePlanCommand = serializeAws_restJson1DeleteResponsePlanCommand;
const serializeAws_restJson1DeleteTimelineEventCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/deleteTimelineEvent";
    let body;
    body = JSON.stringify({
        ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
        ...(input.incidentRecordArn !== undefined &&
            input.incidentRecordArn !== null && { incidentRecordArn: input.incidentRecordArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteTimelineEventCommand = serializeAws_restJson1DeleteTimelineEventCommand;
const serializeAws_restJson1GetIncidentRecordCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/getIncidentRecord";
    const query = {
        ...(input.arn !== undefined && { arn: input.arn }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetIncidentRecordCommand = serializeAws_restJson1GetIncidentRecordCommand;
const serializeAws_restJson1GetReplicationSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/getReplicationSet";
    const query = {
        ...(input.arn !== undefined && { arn: input.arn }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetReplicationSetCommand = serializeAws_restJson1GetReplicationSetCommand;
const serializeAws_restJson1GetResourcePoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getResourcePolicies";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetResourcePoliciesCommand = serializeAws_restJson1GetResourcePoliciesCommand;
const serializeAws_restJson1GetResponsePlanCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/getResponsePlan";
    const query = {
        ...(input.arn !== undefined && { arn: input.arn }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetResponsePlanCommand = serializeAws_restJson1GetResponsePlanCommand;
const serializeAws_restJson1GetTimelineEventCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/getTimelineEvent";
    const query = {
        ...(input.incidentRecordArn !== undefined && { incidentRecordArn: input.incidentRecordArn }),
        ...(input.eventId !== undefined && { eventId: input.eventId }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetTimelineEventCommand = serializeAws_restJson1GetTimelineEventCommand;
const serializeAws_restJson1ListIncidentRecordsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listIncidentRecords";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListIncidentRecordsCommand = serializeAws_restJson1ListIncidentRecordsCommand;
const serializeAws_restJson1ListRelatedItemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listRelatedItems";
    let body;
    body = JSON.stringify({
        ...(input.incidentRecordArn !== undefined &&
            input.incidentRecordArn !== null && { incidentRecordArn: input.incidentRecordArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListRelatedItemsCommand = serializeAws_restJson1ListRelatedItemsCommand;
const serializeAws_restJson1ListReplicationSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listReplicationSets";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListReplicationSetsCommand = serializeAws_restJson1ListReplicationSetsCommand;
const serializeAws_restJson1ListResponsePlansCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listResponsePlans";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListResponsePlansCommand = serializeAws_restJson1ListResponsePlansCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListTimelineEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listTimelineEvents";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
        ...(input.incidentRecordArn !== undefined &&
            input.incidentRecordArn !== null && { incidentRecordArn: input.incidentRecordArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTimelineEventsCommand = serializeAws_restJson1ListTimelineEventsCommand;
const serializeAws_restJson1PutResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/putResourcePolicy";
    let body;
    body = JSON.stringify({
        ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutResourcePolicyCommand = serializeAws_restJson1PutResourcePolicyCommand;
const serializeAws_restJson1StartIncidentCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/startIncident";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.impact !== undefined && input.impact !== null && { impact: input.impact }),
        ...(input.relatedItems !== undefined &&
            input.relatedItems !== null && {
            relatedItems: serializeAws_restJson1RelatedItemList(input.relatedItems, context),
        }),
        ...(input.responsePlanArn !== undefined &&
            input.responsePlanArn !== null && { responsePlanArn: input.responsePlanArn }),
        ...(input.title !== undefined && input.title !== null && { title: input.title }),
        ...(input.triggerDetails !== undefined &&
            input.triggerDetails !== null && {
            triggerDetails: serializeAws_restJson1TriggerDetails(input.triggerDetails, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1StartIncidentCommand = serializeAws_restJson1StartIncidentCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateDeletionProtectionCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateDeletionProtection";
    let body;
    body = JSON.stringify({
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.deletionProtected !== undefined &&
            input.deletionProtected !== null && { deletionProtected: input.deletionProtected }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDeletionProtectionCommand = serializeAws_restJson1UpdateDeletionProtectionCommand;
const serializeAws_restJson1UpdateIncidentRecordCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateIncidentRecord";
    let body;
    body = JSON.stringify({
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.chatChannel !== undefined &&
            input.chatChannel !== null && { chatChannel: serializeAws_restJson1ChatChannel(input.chatChannel, context) }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.impact !== undefined && input.impact !== null && { impact: input.impact }),
        ...(input.notificationTargets !== undefined &&
            input.notificationTargets !== null && {
            notificationTargets: serializeAws_restJson1NotificationTargetSet(input.notificationTargets, context),
        }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.summary !== undefined && input.summary !== null && { summary: input.summary }),
        ...(input.title !== undefined && input.title !== null && { title: input.title }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateIncidentRecordCommand = serializeAws_restJson1UpdateIncidentRecordCommand;
const serializeAws_restJson1UpdateRelatedItemsCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateRelatedItems";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.incidentRecordArn !== undefined &&
            input.incidentRecordArn !== null && { incidentRecordArn: input.incidentRecordArn }),
        ...(input.relatedItemsUpdate !== undefined &&
            input.relatedItemsUpdate !== null && {
            relatedItemsUpdate: serializeAws_restJson1RelatedItemsUpdate(input.relatedItemsUpdate, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateRelatedItemsCommand = serializeAws_restJson1UpdateRelatedItemsCommand;
const serializeAws_restJson1UpdateReplicationSetCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateReplicationSet";
    let body;
    body = JSON.stringify({
        ...(input.actions !== undefined &&
            input.actions !== null && { actions: serializeAws_restJson1UpdateActionList(input.actions, context) }),
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateReplicationSetCommand = serializeAws_restJson1UpdateReplicationSetCommand;
const serializeAws_restJson1UpdateResponsePlanCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateResponsePlan";
    let body;
    body = JSON.stringify({
        ...(input.actions !== undefined &&
            input.actions !== null && { actions: serializeAws_restJson1ActionsList(input.actions, context) }),
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.chatChannel !== undefined &&
            input.chatChannel !== null && { chatChannel: serializeAws_restJson1ChatChannel(input.chatChannel, context) }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
        ...(input.engagements !== undefined &&
            input.engagements !== null && { engagements: serializeAws_restJson1EngagementSet(input.engagements, context) }),
        ...(input.incidentTemplateDedupeString !== undefined &&
            input.incidentTemplateDedupeString !== null && {
            incidentTemplateDedupeString: input.incidentTemplateDedupeString,
        }),
        ...(input.incidentTemplateImpact !== undefined &&
            input.incidentTemplateImpact !== null && { incidentTemplateImpact: input.incidentTemplateImpact }),
        ...(input.incidentTemplateNotificationTargets !== undefined &&
            input.incidentTemplateNotificationTargets !== null && {
            incidentTemplateNotificationTargets: serializeAws_restJson1NotificationTargetSet(input.incidentTemplateNotificationTargets, context),
        }),
        ...(input.incidentTemplateSummary !== undefined &&
            input.incidentTemplateSummary !== null && { incidentTemplateSummary: input.incidentTemplateSummary }),
        ...(input.incidentTemplateTitle !== undefined &&
            input.incidentTemplateTitle !== null && { incidentTemplateTitle: input.incidentTemplateTitle }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateResponsePlanCommand = serializeAws_restJson1UpdateResponsePlanCommand;
const serializeAws_restJson1UpdateTimelineEventCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateTimelineEvent";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.eventData !== undefined && input.eventData !== null && { eventData: input.eventData }),
        ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
        ...(input.eventTime !== undefined &&
            input.eventTime !== null && { eventTime: Math.round(input.eventTime.getTime() / 1000) }),
        ...(input.eventType !== undefined && input.eventType !== null && { eventType: input.eventType }),
        ...(input.incidentRecordArn !== undefined &&
            input.incidentRecordArn !== null && { incidentRecordArn: input.incidentRecordArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateTimelineEventCommand = serializeAws_restJson1UpdateTimelineEventCommand;
const deserializeAws_restJson1CreateReplicationSetCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateReplicationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateReplicationSetCommand = deserializeAws_restJson1CreateReplicationSetCommand;
const deserializeAws_restJson1CreateReplicationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ssmincidents#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateResponsePlanCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateResponsePlanCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateResponsePlanCommand = deserializeAws_restJson1CreateResponsePlanCommand;
const deserializeAws_restJson1CreateResponsePlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateTimelineEventCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTimelineEventCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        eventId: undefined,
        incidentRecordArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.eventId !== undefined && data.eventId !== null) {
        contents.eventId = data.eventId;
    }
    if (data.incidentRecordArn !== undefined && data.incidentRecordArn !== null) {
        contents.incidentRecordArn = data.incidentRecordArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTimelineEventCommand = deserializeAws_restJson1CreateTimelineEventCommand;
const deserializeAws_restJson1CreateTimelineEventCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteIncidentRecordCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteIncidentRecordCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteIncidentRecordCommand = deserializeAws_restJson1DeleteIncidentRecordCommand;
const deserializeAws_restJson1DeleteIncidentRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteReplicationSetCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteReplicationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteReplicationSetCommand = deserializeAws_restJson1DeleteReplicationSetCommand;
const deserializeAws_restJson1DeleteReplicationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteResourcePolicyCommand = deserializeAws_restJson1DeleteResourcePolicyCommand;
const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteResponsePlanCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteResponsePlanCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteResponsePlanCommand = deserializeAws_restJson1DeleteResponsePlanCommand;
const deserializeAws_restJson1DeleteResponsePlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteTimelineEventCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteTimelineEventCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTimelineEventCommand = deserializeAws_restJson1DeleteTimelineEventCommand;
const deserializeAws_restJson1DeleteTimelineEventCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetIncidentRecordCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetIncidentRecordCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        incidentRecord: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.incidentRecord !== undefined && data.incidentRecord !== null) {
        contents.incidentRecord = deserializeAws_restJson1IncidentRecord(data.incidentRecord, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIncidentRecordCommand = deserializeAws_restJson1GetIncidentRecordCommand;
const deserializeAws_restJson1GetIncidentRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetReplicationSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetReplicationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        replicationSet: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.replicationSet !== undefined && data.replicationSet !== null) {
        contents.replicationSet = deserializeAws_restJson1ReplicationSet(data.replicationSet, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetReplicationSetCommand = deserializeAws_restJson1GetReplicationSetCommand;
const deserializeAws_restJson1GetReplicationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetResourcePoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourcePoliciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        resourcePolicies: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.resourcePolicies !== undefined && data.resourcePolicies !== null) {
        contents.resourcePolicies = deserializeAws_restJson1ResourcePolicyList(data.resourcePolicies, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourcePoliciesCommand = deserializeAws_restJson1GetResourcePoliciesCommand;
const deserializeAws_restJson1GetResourcePoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetResponsePlanCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResponsePlanCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        actions: undefined,
        arn: undefined,
        chatChannel: undefined,
        displayName: undefined,
        engagements: undefined,
        incidentTemplate: undefined,
        name: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.actions !== undefined && data.actions !== null) {
        contents.actions = deserializeAws_restJson1ActionsList(data.actions, context);
    }
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.chatChannel !== undefined && data.chatChannel !== null) {
        contents.chatChannel = deserializeAws_restJson1ChatChannel(data.chatChannel, context);
    }
    if (data.displayName !== undefined && data.displayName !== null) {
        contents.displayName = data.displayName;
    }
    if (data.engagements !== undefined && data.engagements !== null) {
        contents.engagements = deserializeAws_restJson1EngagementSet(data.engagements, context);
    }
    if (data.incidentTemplate !== undefined && data.incidentTemplate !== null) {
        contents.incidentTemplate = deserializeAws_restJson1IncidentTemplate(data.incidentTemplate, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResponsePlanCommand = deserializeAws_restJson1GetResponsePlanCommand;
const deserializeAws_restJson1GetResponsePlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetTimelineEventCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetTimelineEventCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        event: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.event !== undefined && data.event !== null) {
        contents.event = deserializeAws_restJson1TimelineEvent(data.event, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTimelineEventCommand = deserializeAws_restJson1GetTimelineEventCommand;
const deserializeAws_restJson1GetTimelineEventCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListIncidentRecordsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIncidentRecordsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        incidentRecordSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.incidentRecordSummaries !== undefined && data.incidentRecordSummaries !== null) {
        contents.incidentRecordSummaries = deserializeAws_restJson1IncidentRecordSummaryList(data.incidentRecordSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIncidentRecordsCommand = deserializeAws_restJson1ListIncidentRecordsCommand;
const deserializeAws_restJson1ListIncidentRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListRelatedItemsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRelatedItemsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        relatedItems: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.relatedItems !== undefined && data.relatedItems !== null) {
        contents.relatedItems = deserializeAws_restJson1RelatedItemList(data.relatedItems, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRelatedItemsCommand = deserializeAws_restJson1ListRelatedItemsCommand;
const deserializeAws_restJson1ListRelatedItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListReplicationSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListReplicationSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        replicationSetArns: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.replicationSetArns !== undefined && data.replicationSetArns !== null) {
        contents.replicationSetArns = deserializeAws_restJson1ReplicationSetArnList(data.replicationSetArns, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListReplicationSetsCommand = deserializeAws_restJson1ListReplicationSetsCommand;
const deserializeAws_restJson1ListReplicationSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListResponsePlansCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListResponsePlansCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        responsePlanSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.responsePlanSummaries !== undefined && data.responsePlanSummaries !== null) {
        contents.responsePlanSummaries = deserializeAws_restJson1ResponsePlanSummaryList(data.responsePlanSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListResponsePlansCommand = deserializeAws_restJson1ListResponsePlansCommand;
const deserializeAws_restJson1ListResponsePlansCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListTimelineEventsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTimelineEventsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        eventSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.eventSummaries !== undefined && data.eventSummaries !== null) {
        contents.eventSummaries = deserializeAws_restJson1EventSummaryList(data.eventSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTimelineEventsCommand = deserializeAws_restJson1ListTimelineEventsCommand;
const deserializeAws_restJson1ListTimelineEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutResourcePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutResourcePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policyId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policyId !== undefined && data.policyId !== null) {
        contents.policyId = data.policyId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutResourcePolicyCommand = deserializeAws_restJson1PutResourcePolicyCommand;
const deserializeAws_restJson1PutResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1StartIncidentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartIncidentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        incidentRecordArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.incidentRecordArn !== undefined && data.incidentRecordArn !== null) {
        contents.incidentRecordArn = data.incidentRecordArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartIncidentCommand = deserializeAws_restJson1StartIncidentCommand;
const deserializeAws_restJson1StartIncidentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.ssmincidents#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateDeletionProtectionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDeletionProtectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDeletionProtectionCommand = deserializeAws_restJson1UpdateDeletionProtectionCommand;
const deserializeAws_restJson1UpdateDeletionProtectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateIncidentRecordCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateIncidentRecordCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateIncidentRecordCommand = deserializeAws_restJson1UpdateIncidentRecordCommand;
const deserializeAws_restJson1UpdateIncidentRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateRelatedItemsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRelatedItemsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRelatedItemsCommand = deserializeAws_restJson1UpdateRelatedItemsCommand;
const deserializeAws_restJson1UpdateRelatedItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateReplicationSetCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateReplicationSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateReplicationSetCommand = deserializeAws_restJson1UpdateReplicationSetCommand;
const deserializeAws_restJson1UpdateReplicationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateResponsePlanCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateResponsePlanCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateResponsePlanCommand = deserializeAws_restJson1UpdateResponsePlanCommand;
const deserializeAws_restJson1UpdateResponsePlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateTimelineEventCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateTimelineEventCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateTimelineEventCommand = deserializeAws_restJson1UpdateTimelineEventCommand;
const deserializeAws_restJson1UpdateTimelineEventCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssmincidents#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.ssmincidents#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.ssmincidents#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ssmincidents#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.ssmincidents#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.ssmincidents#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceIdentifier: undefined,
        resourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceIdentifier !== undefined && data.resourceIdentifier !== null) {
        contents.resourceIdentifier = data.resourceIdentifier;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceIdentifier: undefined,
        resourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceIdentifier !== undefined && data.resourceIdentifier !== null) {
        contents.resourceIdentifier = data.resourceIdentifier;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        quotaCode: undefined,
        resourceIdentifier: undefined,
        resourceType: undefined,
        serviceCode: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.quotaCode !== undefined && data.quotaCode !== null) {
        contents.quotaCode = data.quotaCode;
    }
    if (data.resourceIdentifier !== undefined && data.resourceIdentifier !== null) {
        contents.resourceIdentifier = data.resourceIdentifier;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    if (data.serviceCode !== undefined && data.serviceCode !== null) {
        contents.serviceCode = data.serviceCode;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        quotaCode: undefined,
        serviceCode: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.quotaCode !== undefined && data.quotaCode !== null) {
        contents.quotaCode = data.quotaCode;
    }
    if (data.serviceCode !== undefined && data.serviceCode !== null) {
        contents.serviceCode = data.serviceCode;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1Action = (input, context) => {
    return models_0_1.Action.visit(input, {
        ssmAutomation: (value) => ({ ssmAutomation: serializeAws_restJson1SsmAutomation(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1ActionsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Action(entry, context);
    });
};
const serializeAws_restJson1AddRegionAction = (input, context) => {
    return {
        ...(input.regionName !== undefined && input.regionName !== null && { regionName: input.regionName }),
        ...(input.sseKmsKeyId !== undefined && input.sseKmsKeyId !== null && { sseKmsKeyId: input.sseKmsKeyId }),
    };
};
const serializeAws_restJson1AttributeValueList = (input, context) => {
    return models_0_1.AttributeValueList.visit(input, {
        integerValues: (value) => ({ integerValues: serializeAws_restJson1IntegerList(value, context) }),
        stringValues: (value) => ({ stringValues: serializeAws_restJson1StringList(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1ChatbotSnsConfigurationSet = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ChatChannel = (input, context) => {
    return models_0_1.ChatChannel.visit(input, {
        chatbotSns: (value) => ({ chatbotSns: serializeAws_restJson1ChatbotSnsConfigurationSet(value, context) }),
        empty: (value) => ({ empty: serializeAws_restJson1EmptyChatChannel(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1Condition = (input, context) => {
    return models_0_1.Condition.visit(input, {
        after: (value) => ({ after: Math.round(value.getTime() / 1000) }),
        before: (value) => ({ before: Math.round(value.getTime() / 1000) }),
        equals: (value) => ({ equals: serializeAws_restJson1AttributeValueList(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1DeleteRegionAction = (input, context) => {
    return {
        ...(input.regionName !== undefined && input.regionName !== null && { regionName: input.regionName }),
    };
};
const serializeAws_restJson1EmptyChatChannel = (input, context) => {
    return {};
};
const serializeAws_restJson1EngagementSet = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Filter = (input, context) => {
    return {
        ...(input.condition !== undefined &&
            input.condition !== null && { condition: serializeAws_restJson1Condition(input.condition, context) }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
    };
};
const serializeAws_restJson1FilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Filter(entry, context);
    });
};
const serializeAws_restJson1IncidentTemplate = (input, context) => {
    return {
        ...(input.dedupeString !== undefined && input.dedupeString !== null && { dedupeString: input.dedupeString }),
        ...(input.impact !== undefined && input.impact !== null && { impact: input.impact }),
        ...(input.notificationTargets !== undefined &&
            input.notificationTargets !== null && {
            notificationTargets: serializeAws_restJson1NotificationTargetSet(input.notificationTargets, context),
        }),
        ...(input.summary !== undefined && input.summary !== null && { summary: input.summary }),
        ...(input.title !== undefined && input.title !== null && { title: input.title }),
    };
};
const serializeAws_restJson1IntegerList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ItemIdentifier = (input, context) => {
    return {
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.value !== undefined &&
            input.value !== null && { value: serializeAws_restJson1ItemValue(input.value, context) }),
    };
};
const serializeAws_restJson1ItemValue = (input, context) => {
    return models_0_1.ItemValue.visit(input, {
        arn: (value) => ({ arn: value }),
        metricDefinition: (value) => ({ metricDefinition: value }),
        url: (value) => ({ url: value }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1NotificationTargetItem = (input, context) => {
    return models_0_1.NotificationTargetItem.visit(input, {
        snsTopicArn: (value) => ({ snsTopicArn: value }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1NotificationTargetSet = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1NotificationTargetItem(entry, context);
    });
};
const serializeAws_restJson1RegionMapInput = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1RegionMapInputValue(value, context),
        };
    }, {});
};
const serializeAws_restJson1RegionMapInputValue = (input, context) => {
    return {
        ...(input.sseKmsKeyId !== undefined && input.sseKmsKeyId !== null && { sseKmsKeyId: input.sseKmsKeyId }),
    };
};
const serializeAws_restJson1RelatedItem = (input, context) => {
    return {
        ...(input.identifier !== undefined &&
            input.identifier !== null && { identifier: serializeAws_restJson1ItemIdentifier(input.identifier, context) }),
        ...(input.title !== undefined && input.title !== null && { title: input.title }),
    };
};
const serializeAws_restJson1RelatedItemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RelatedItem(entry, context);
    });
};
const serializeAws_restJson1RelatedItemsUpdate = (input, context) => {
    return models_0_1.RelatedItemsUpdate.visit(input, {
        itemToAdd: (value) => ({ itemToAdd: serializeAws_restJson1RelatedItem(value, context) }),
        itemToRemove: (value) => ({ itemToRemove: serializeAws_restJson1ItemIdentifier(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1SsmAutomation = (input, context) => {
    return {
        ...(input.documentName !== undefined && input.documentName !== null && { documentName: input.documentName }),
        ...(input.documentVersion !== undefined &&
            input.documentVersion !== null && { documentVersion: input.documentVersion }),
        ...(input.parameters !== undefined &&
            input.parameters !== null && { parameters: serializeAws_restJson1SsmParameters(input.parameters, context) }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.targetAccount !== undefined && input.targetAccount !== null && { targetAccount: input.targetAccount }),
    };
};
const serializeAws_restJson1SsmParameters = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1SsmParameterValues(value, context),
        };
    }, {});
};
const serializeAws_restJson1SsmParameterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1TriggerDetails = (input, context) => {
    return {
        ...(input.rawData !== undefined && input.rawData !== null && { rawData: input.rawData }),
        ...(input.source !== undefined && input.source !== null && { source: input.source }),
        ...(input.timestamp !== undefined &&
            input.timestamp !== null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
        ...(input.triggerArn !== undefined && input.triggerArn !== null && { triggerArn: input.triggerArn }),
    };
};
const serializeAws_restJson1UpdateActionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UpdateReplicationSetAction(entry, context);
    });
};
const serializeAws_restJson1UpdateReplicationSetAction = (input, context) => {
    return models_0_1.UpdateReplicationSetAction.visit(input, {
        addRegionAction: (value) => ({ addRegionAction: serializeAws_restJson1AddRegionAction(value, context) }),
        deleteRegionAction: (value) => ({ deleteRegionAction: serializeAws_restJson1DeleteRegionAction(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const deserializeAws_restJson1Action = (output, context) => {
    if (output.ssmAutomation !== undefined && output.ssmAutomation !== null) {
        return {
            ssmAutomation: deserializeAws_restJson1SsmAutomation(output.ssmAutomation, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1ActionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Action(entry, context);
    });
};
const deserializeAws_restJson1AutomationExecution = (output, context) => {
    if (output.ssmExecutionArn !== undefined && output.ssmExecutionArn !== null) {
        return {
            ssmExecutionArn: output.ssmExecutionArn,
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1AutomationExecutionSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AutomationExecution(entry, context);
    });
};
const deserializeAws_restJson1ChatbotSnsConfigurationSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ChatChannel = (output, context) => {
    if (output.chatbotSns !== undefined && output.chatbotSns !== null) {
        return {
            chatbotSns: deserializeAws_restJson1ChatbotSnsConfigurationSet(output.chatbotSns, context),
        };
    }
    if (output.empty !== undefined && output.empty !== null) {
        return {
            empty: deserializeAws_restJson1EmptyChatChannel(output.empty, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1EmptyChatChannel = (output, context) => {
    return {};
};
const deserializeAws_restJson1EngagementSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1EventSummary = (output, context) => {
    return {
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
        eventTime: output.eventTime !== undefined && output.eventTime !== null
            ? new Date(Math.round(output.eventTime * 1000))
            : undefined,
        eventType: output.eventType !== undefined && output.eventType !== null ? output.eventType : undefined,
        eventUpdatedTime: output.eventUpdatedTime !== undefined && output.eventUpdatedTime !== null
            ? new Date(Math.round(output.eventUpdatedTime * 1000))
            : undefined,
        incidentRecordArn: output.incidentRecordArn !== undefined && output.incidentRecordArn !== null
            ? output.incidentRecordArn
            : undefined,
    };
};
const deserializeAws_restJson1EventSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EventSummary(entry, context);
    });
};
const deserializeAws_restJson1IncidentRecord = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        automationExecutions: output.automationExecutions !== undefined && output.automationExecutions !== null
            ? deserializeAws_restJson1AutomationExecutionSet(output.automationExecutions, context)
            : undefined,
        chatChannel: output.chatChannel !== undefined && output.chatChannel !== null
            ? deserializeAws_restJson1ChatChannel(output.chatChannel, context)
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        dedupeString: output.dedupeString !== undefined && output.dedupeString !== null ? output.dedupeString : undefined,
        impact: output.impact !== undefined && output.impact !== null ? output.impact : undefined,
        incidentRecordSource: output.incidentRecordSource !== undefined && output.incidentRecordSource !== null
            ? deserializeAws_restJson1IncidentRecordSource(output.incidentRecordSource, context)
            : undefined,
        lastModifiedBy: output.lastModifiedBy !== undefined && output.lastModifiedBy !== null ? output.lastModifiedBy : undefined,
        lastModifiedTime: output.lastModifiedTime !== undefined && output.lastModifiedTime !== null
            ? new Date(Math.round(output.lastModifiedTime * 1000))
            : undefined,
        notificationTargets: output.notificationTargets !== undefined && output.notificationTargets !== null
            ? deserializeAws_restJson1NotificationTargetSet(output.notificationTargets, context)
            : undefined,
        resolvedTime: output.resolvedTime !== undefined && output.resolvedTime !== null
            ? new Date(Math.round(output.resolvedTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        summary: output.summary !== undefined && output.summary !== null ? output.summary : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
const deserializeAws_restJson1IncidentRecordSource = (output, context) => {
    return {
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        invokedBy: output.invokedBy !== undefined && output.invokedBy !== null ? output.invokedBy : undefined,
        resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
        source: output.source !== undefined && output.source !== null ? output.source : undefined,
    };
};
const deserializeAws_restJson1IncidentRecordSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        impact: output.impact !== undefined && output.impact !== null ? output.impact : undefined,
        incidentRecordSource: output.incidentRecordSource !== undefined && output.incidentRecordSource !== null
            ? deserializeAws_restJson1IncidentRecordSource(output.incidentRecordSource, context)
            : undefined,
        resolvedTime: output.resolvedTime !== undefined && output.resolvedTime !== null
            ? new Date(Math.round(output.resolvedTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
const deserializeAws_restJson1IncidentRecordSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IncidentRecordSummary(entry, context);
    });
};
const deserializeAws_restJson1IncidentTemplate = (output, context) => {
    return {
        dedupeString: output.dedupeString !== undefined && output.dedupeString !== null ? output.dedupeString : undefined,
        impact: output.impact !== undefined && output.impact !== null ? output.impact : undefined,
        notificationTargets: output.notificationTargets !== undefined && output.notificationTargets !== null
            ? deserializeAws_restJson1NotificationTargetSet(output.notificationTargets, context)
            : undefined,
        summary: output.summary !== undefined && output.summary !== null ? output.summary : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
const deserializeAws_restJson1ItemIdentifier = (output, context) => {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null
            ? deserializeAws_restJson1ItemValue(output.value, context)
            : undefined,
    };
};
const deserializeAws_restJson1ItemValue = (output, context) => {
    if (output.arn !== undefined && output.arn !== null) {
        return {
            arn: output.arn,
        };
    }
    if (output.metricDefinition !== undefined && output.metricDefinition !== null) {
        return {
            metricDefinition: output.metricDefinition,
        };
    }
    if (output.url !== undefined && output.url !== null) {
        return {
            url: output.url,
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1NotificationTargetItem = (output, context) => {
    if (output.snsTopicArn !== undefined && output.snsTopicArn !== null) {
        return {
            snsTopicArn: output.snsTopicArn,
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1NotificationTargetSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NotificationTargetItem(entry, context);
    });
};
const deserializeAws_restJson1RegionInfo = (output, context) => {
    return {
        sseKmsKeyId: output.sseKmsKeyId !== undefined && output.sseKmsKeyId !== null ? output.sseKmsKeyId : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        statusUpdateDateTime: output.statusUpdateDateTime !== undefined && output.statusUpdateDateTime !== null
            ? new Date(Math.round(output.statusUpdateDateTime * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1RegionInfoMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1RegionInfo(value, context),
        };
    }, {});
};
const deserializeAws_restJson1RelatedItem = (output, context) => {
    return {
        identifier: output.identifier !== undefined && output.identifier !== null
            ? deserializeAws_restJson1ItemIdentifier(output.identifier, context)
            : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
    };
};
const deserializeAws_restJson1RelatedItemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RelatedItem(entry, context);
    });
};
const deserializeAws_restJson1ReplicationSet = (output, context) => {
    return {
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        createdTime: output.createdTime !== undefined && output.createdTime !== null
            ? new Date(Math.round(output.createdTime * 1000))
            : undefined,
        deletionProtected: output.deletionProtected !== undefined && output.deletionProtected !== null
            ? output.deletionProtected
            : undefined,
        lastModifiedBy: output.lastModifiedBy !== undefined && output.lastModifiedBy !== null ? output.lastModifiedBy : undefined,
        lastModifiedTime: output.lastModifiedTime !== undefined && output.lastModifiedTime !== null
            ? new Date(Math.round(output.lastModifiedTime * 1000))
            : undefined,
        regionMap: output.regionMap !== undefined && output.regionMap !== null
            ? deserializeAws_restJson1RegionInfoMap(output.regionMap, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1ReplicationSetArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ResourcePolicy = (output, context) => {
    return {
        policyDocument: output.policyDocument !== undefined && output.policyDocument !== null ? output.policyDocument : undefined,
        policyId: output.policyId !== undefined && output.policyId !== null ? output.policyId : undefined,
        ramResourceShareRegion: output.ramResourceShareRegion !== undefined && output.ramResourceShareRegion !== null
            ? output.ramResourceShareRegion
            : undefined,
    };
};
const deserializeAws_restJson1ResourcePolicyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourcePolicy(entry, context);
    });
};
const deserializeAws_restJson1ResponsePlanSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1ResponsePlanSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResponsePlanSummary(entry, context);
    });
};
const deserializeAws_restJson1SsmAutomation = (output, context) => {
    return {
        documentName: output.documentName !== undefined && output.documentName !== null ? output.documentName : undefined,
        documentVersion: output.documentVersion !== undefined && output.documentVersion !== null ? output.documentVersion : undefined,
        parameters: output.parameters !== undefined && output.parameters !== null
            ? deserializeAws_restJson1SsmParameters(output.parameters, context)
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        targetAccount: output.targetAccount !== undefined && output.targetAccount !== null ? output.targetAccount : undefined,
    };
};
const deserializeAws_restJson1SsmParameters = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1SsmParameterValues(value, context),
        };
    }, {});
};
const deserializeAws_restJson1SsmParameterValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TagMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1TimelineEvent = (output, context) => {
    return {
        eventData: output.eventData !== undefined && output.eventData !== null ? output.eventData : undefined,
        eventId: output.eventId !== undefined && output.eventId !== null ? output.eventId : undefined,
        eventTime: output.eventTime !== undefined && output.eventTime !== null
            ? new Date(Math.round(output.eventTime * 1000))
            : undefined,
        eventType: output.eventType !== undefined && output.eventType !== null ? output.eventType : undefined,
        eventUpdatedTime: output.eventUpdatedTime !== undefined && output.eventUpdatedTime !== null
            ? new Date(Math.round(output.eventUpdatedTime * 1000))
            : undefined,
        incidentRecordArn: output.incidentRecordArn !== undefined && output.incidentRecordArn !== null
            ? output.incidentRecordArn
            : undefined,
    };
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_restJson1.js.map