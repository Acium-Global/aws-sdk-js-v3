import {
  AssociateAssessmentReportEvidenceFolderCommandInput,
  AssociateAssessmentReportEvidenceFolderCommandOutput,
} from "../commands/AssociateAssessmentReportEvidenceFolderCommand";
import {
  BatchAssociateAssessmentReportEvidenceCommandInput,
  BatchAssociateAssessmentReportEvidenceCommandOutput,
} from "../commands/BatchAssociateAssessmentReportEvidenceCommand";
import {
  BatchCreateDelegationByAssessmentCommandInput,
  BatchCreateDelegationByAssessmentCommandOutput,
} from "../commands/BatchCreateDelegationByAssessmentCommand";
import {
  BatchDeleteDelegationByAssessmentCommandInput,
  BatchDeleteDelegationByAssessmentCommandOutput,
} from "../commands/BatchDeleteDelegationByAssessmentCommand";
import {
  BatchDisassociateAssessmentReportEvidenceCommandInput,
  BatchDisassociateAssessmentReportEvidenceCommandOutput,
} from "../commands/BatchDisassociateAssessmentReportEvidenceCommand";
import {
  BatchImportEvidenceToAssessmentControlCommandInput,
  BatchImportEvidenceToAssessmentControlCommandOutput,
} from "../commands/BatchImportEvidenceToAssessmentControlCommand";
import { CreateAssessmentCommandInput, CreateAssessmentCommandOutput } from "../commands/CreateAssessmentCommand";
import {
  CreateAssessmentFrameworkCommandInput,
  CreateAssessmentFrameworkCommandOutput,
} from "../commands/CreateAssessmentFrameworkCommand";
import {
  CreateAssessmentReportCommandInput,
  CreateAssessmentReportCommandOutput,
} from "../commands/CreateAssessmentReportCommand";
import { CreateControlCommandInput, CreateControlCommandOutput } from "../commands/CreateControlCommand";
import { DeleteAssessmentCommandInput, DeleteAssessmentCommandOutput } from "../commands/DeleteAssessmentCommand";
import {
  DeleteAssessmentFrameworkCommandInput,
  DeleteAssessmentFrameworkCommandOutput,
} from "../commands/DeleteAssessmentFrameworkCommand";
import {
  DeleteAssessmentReportCommandInput,
  DeleteAssessmentReportCommandOutput,
} from "../commands/DeleteAssessmentReportCommand";
import { DeleteControlCommandInput, DeleteControlCommandOutput } from "../commands/DeleteControlCommand";
import { DeregisterAccountCommandInput, DeregisterAccountCommandOutput } from "../commands/DeregisterAccountCommand";
import {
  DeregisterOrganizationAdminAccountCommandInput,
  DeregisterOrganizationAdminAccountCommandOutput,
} from "../commands/DeregisterOrganizationAdminAccountCommand";
import {
  DisassociateAssessmentReportEvidenceFolderCommandInput,
  DisassociateAssessmentReportEvidenceFolderCommandOutput,
} from "../commands/DisassociateAssessmentReportEvidenceFolderCommand";
import { GetAccountStatusCommandInput, GetAccountStatusCommandOutput } from "../commands/GetAccountStatusCommand";
import { GetAssessmentCommandInput, GetAssessmentCommandOutput } from "../commands/GetAssessmentCommand";
import {
  GetAssessmentFrameworkCommandInput,
  GetAssessmentFrameworkCommandOutput,
} from "../commands/GetAssessmentFrameworkCommand";
import {
  GetAssessmentReportUrlCommandInput,
  GetAssessmentReportUrlCommandOutput,
} from "../commands/GetAssessmentReportUrlCommand";
import { GetChangeLogsCommandInput, GetChangeLogsCommandOutput } from "../commands/GetChangeLogsCommand";
import { GetControlCommandInput, GetControlCommandOutput } from "../commands/GetControlCommand";
import { GetDelegationsCommandInput, GetDelegationsCommandOutput } from "../commands/GetDelegationsCommand";
import {
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
} from "../commands/GetEvidenceByEvidenceFolderCommand";
import { GetEvidenceCommandInput, GetEvidenceCommandOutput } from "../commands/GetEvidenceCommand";
import { GetEvidenceFolderCommandInput, GetEvidenceFolderCommandOutput } from "../commands/GetEvidenceFolderCommand";
import {
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentCommand";
import {
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentControlCommand";
import {
  GetOrganizationAdminAccountCommandInput,
  GetOrganizationAdminAccountCommandOutput,
} from "../commands/GetOrganizationAdminAccountCommand";
import { GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput } from "../commands/GetServicesInScopeCommand";
import { GetSettingsCommandInput, GetSettingsCommandOutput } from "../commands/GetSettingsCommand";
import {
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "../commands/ListAssessmentFrameworksCommand";
import {
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
} from "../commands/ListAssessmentReportsCommand";
import { ListAssessmentsCommandInput, ListAssessmentsCommandOutput } from "../commands/ListAssessmentsCommand";
import { ListControlsCommandInput, ListControlsCommandOutput } from "../commands/ListControlsCommand";
import {
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
} from "../commands/ListKeywordsForDataSourceCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "../commands/ListNotificationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RegisterAccountCommandInput, RegisterAccountCommandOutput } from "../commands/RegisterAccountCommand";
import {
  RegisterOrganizationAdminAccountCommandInput,
  RegisterOrganizationAdminAccountCommandOutput,
} from "../commands/RegisterOrganizationAdminAccountCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAssessmentCommandInput, UpdateAssessmentCommandOutput } from "../commands/UpdateAssessmentCommand";
import {
  UpdateAssessmentControlCommandInput,
  UpdateAssessmentControlCommandOutput,
} from "../commands/UpdateAssessmentControlCommand";
import {
  UpdateAssessmentControlSetStatusCommandInput,
  UpdateAssessmentControlSetStatusCommandOutput,
} from "../commands/UpdateAssessmentControlSetStatusCommand";
import {
  UpdateAssessmentFrameworkCommandInput,
  UpdateAssessmentFrameworkCommandOutput,
} from "../commands/UpdateAssessmentFrameworkCommand";
import {
  UpdateAssessmentStatusCommandInput,
  UpdateAssessmentStatusCommandOutput,
} from "../commands/UpdateAssessmentStatusCommand";
import { UpdateControlCommandInput, UpdateControlCommandOutput } from "../commands/UpdateControlCommand";
import { UpdateSettingsCommandInput, UpdateSettingsCommandOutput } from "../commands/UpdateSettingsCommand";
import {
  ValidateAssessmentReportIntegrityCommandInput,
  ValidateAssessmentReportIntegrityCommandOutput,
} from "../commands/ValidateAssessmentReportIntegrityCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand: (
  input: AssociateAssessmentReportEvidenceFolderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand: (
  input: BatchAssociateAssessmentReportEvidenceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchCreateDelegationByAssessmentCommand: (
  input: BatchCreateDelegationByAssessmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand: (
  input: BatchDeleteDelegationByAssessmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand: (
  input: BatchDisassociateAssessmentReportEvidenceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand: (
  input: BatchImportEvidenceToAssessmentControlCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateAssessmentCommand: (
  input: CreateAssessmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateAssessmentFrameworkCommand: (
  input: CreateAssessmentFrameworkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateAssessmentReportCommand: (
  input: CreateAssessmentReportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateControlCommand: (
  input: CreateControlCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteAssessmentCommand: (
  input: DeleteAssessmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteAssessmentFrameworkCommand: (
  input: DeleteAssessmentFrameworkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteAssessmentReportCommand: (
  input: DeleteAssessmentReportCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteControlCommand: (
  input: DeleteControlCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeregisterAccountCommand: (
  input: DeregisterAccountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeregisterOrganizationAdminAccountCommand: (
  input: DeregisterOrganizationAdminAccountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand: (
  input: DisassociateAssessmentReportEvidenceFolderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAccountStatusCommand: (
  input: GetAccountStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAssessmentCommand: (
  input: GetAssessmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAssessmentFrameworkCommand: (
  input: GetAssessmentFrameworkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAssessmentReportUrlCommand: (
  input: GetAssessmentReportUrlCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetChangeLogsCommand: (
  input: GetChangeLogsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetControlCommand: (
  input: GetControlCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDelegationsCommand: (
  input: GetDelegationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetEvidenceCommand: (
  input: GetEvidenceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetEvidenceByEvidenceFolderCommand: (
  input: GetEvidenceByEvidenceFolderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetEvidenceFolderCommand: (
  input: GetEvidenceFolderCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand: (
  input: GetEvidenceFoldersByAssessmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand: (
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetOrganizationAdminAccountCommand: (
  input: GetOrganizationAdminAccountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetServicesInScopeCommand: (
  input: GetServicesInScopeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetSettingsCommand: (
  input: GetSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAssessmentFrameworksCommand: (
  input: ListAssessmentFrameworksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAssessmentReportsCommand: (
  input: ListAssessmentReportsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAssessmentsCommand: (
  input: ListAssessmentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListControlsCommand: (
  input: ListControlsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListKeywordsForDataSourceCommand: (
  input: ListKeywordsForDataSourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListNotificationsCommand: (
  input: ListNotificationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RegisterAccountCommand: (
  input: RegisterAccountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RegisterOrganizationAdminAccountCommand: (
  input: RegisterOrganizationAdminAccountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateAssessmentCommand: (
  input: UpdateAssessmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateAssessmentControlCommand: (
  input: UpdateAssessmentControlCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateAssessmentControlSetStatusCommand: (
  input: UpdateAssessmentControlSetStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateAssessmentFrameworkCommand: (
  input: UpdateAssessmentFrameworkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateAssessmentStatusCommand: (
  input: UpdateAssessmentStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateControlCommand: (
  input: UpdateControlCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateSettingsCommand: (
  input: UpdateSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ValidateAssessmentReportIntegrityCommand: (
  input: ValidateAssessmentReportIntegrityCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateAssessmentReportEvidenceFolderCommandOutput>;
export declare const deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchAssociateAssessmentReportEvidenceCommandOutput>;
export declare const deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchCreateDelegationByAssessmentCommandOutput>;
export declare const deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchDeleteDelegationByAssessmentCommandOutput>;
export declare const deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput>;
export declare const deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<BatchImportEvidenceToAssessmentControlCommandOutput>;
export declare const deserializeAws_restJson1CreateAssessmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAssessmentCommandOutput>;
export declare const deserializeAws_restJson1CreateAssessmentFrameworkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAssessmentFrameworkCommandOutput>;
export declare const deserializeAws_restJson1CreateAssessmentReportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAssessmentReportCommandOutput>;
export declare const deserializeAws_restJson1CreateControlCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateControlCommandOutput>;
export declare const deserializeAws_restJson1DeleteAssessmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAssessmentCommandOutput>;
export declare const deserializeAws_restJson1DeleteAssessmentFrameworkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAssessmentFrameworkCommandOutput>;
export declare const deserializeAws_restJson1DeleteAssessmentReportCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAssessmentReportCommandOutput>;
export declare const deserializeAws_restJson1DeleteControlCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteControlCommandOutput>;
export declare const deserializeAws_restJson1DeregisterAccountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeregisterAccountCommandOutput>;
export declare const deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeregisterOrganizationAdminAccountCommandOutput>;
export declare const deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput>;
export declare const deserializeAws_restJson1GetAccountStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAccountStatusCommandOutput>;
export declare const deserializeAws_restJson1GetAssessmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAssessmentCommandOutput>;
export declare const deserializeAws_restJson1GetAssessmentFrameworkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAssessmentFrameworkCommandOutput>;
export declare const deserializeAws_restJson1GetAssessmentReportUrlCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAssessmentReportUrlCommandOutput>;
export declare const deserializeAws_restJson1GetChangeLogsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetChangeLogsCommandOutput>;
export declare const deserializeAws_restJson1GetControlCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetControlCommandOutput>;
export declare const deserializeAws_restJson1GetDelegationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDelegationsCommandOutput>;
export declare const deserializeAws_restJson1GetEvidenceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetEvidenceCommandOutput>;
export declare const deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetEvidenceByEvidenceFolderCommandOutput>;
export declare const deserializeAws_restJson1GetEvidenceFolderCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetEvidenceFolderCommandOutput>;
export declare const deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetEvidenceFoldersByAssessmentCommandOutput>;
export declare const deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetEvidenceFoldersByAssessmentControlCommandOutput>;
export declare const deserializeAws_restJson1GetOrganizationAdminAccountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetOrganizationAdminAccountCommandOutput>;
export declare const deserializeAws_restJson1GetServicesInScopeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetServicesInScopeCommandOutput>;
export declare const deserializeAws_restJson1GetSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetSettingsCommandOutput>;
export declare const deserializeAws_restJson1ListAssessmentFrameworksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAssessmentFrameworksCommandOutput>;
export declare const deserializeAws_restJson1ListAssessmentReportsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAssessmentReportsCommandOutput>;
export declare const deserializeAws_restJson1ListAssessmentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAssessmentsCommandOutput>;
export declare const deserializeAws_restJson1ListControlsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListControlsCommandOutput>;
export declare const deserializeAws_restJson1ListKeywordsForDataSourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListKeywordsForDataSourceCommandOutput>;
export declare const deserializeAws_restJson1ListNotificationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListNotificationsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1RegisterAccountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RegisterAccountCommandOutput>;
export declare const deserializeAws_restJson1RegisterOrganizationAdminAccountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RegisterOrganizationAdminAccountCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateAssessmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAssessmentCommandOutput>;
export declare const deserializeAws_restJson1UpdateAssessmentControlCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAssessmentControlCommandOutput>;
export declare const deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAssessmentControlSetStatusCommandOutput>;
export declare const deserializeAws_restJson1UpdateAssessmentFrameworkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAssessmentFrameworkCommandOutput>;
export declare const deserializeAws_restJson1UpdateAssessmentStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAssessmentStatusCommandOutput>;
export declare const deserializeAws_restJson1UpdateControlCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateControlCommandOutput>;
export declare const deserializeAws_restJson1UpdateSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateSettingsCommandOutput>;
export declare const deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ValidateAssessmentReportIntegrityCommandOutput>;
