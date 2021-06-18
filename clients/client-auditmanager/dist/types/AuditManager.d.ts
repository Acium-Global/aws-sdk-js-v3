import { AuditManagerClient } from "./AuditManagerClient";
import {
  AssociateAssessmentReportEvidenceFolderCommandInput,
  AssociateAssessmentReportEvidenceFolderCommandOutput,
} from "./commands/AssociateAssessmentReportEvidenceFolderCommand";
import {
  BatchAssociateAssessmentReportEvidenceCommandInput,
  BatchAssociateAssessmentReportEvidenceCommandOutput,
} from "./commands/BatchAssociateAssessmentReportEvidenceCommand";
import {
  BatchCreateDelegationByAssessmentCommandInput,
  BatchCreateDelegationByAssessmentCommandOutput,
} from "./commands/BatchCreateDelegationByAssessmentCommand";
import {
  BatchDeleteDelegationByAssessmentCommandInput,
  BatchDeleteDelegationByAssessmentCommandOutput,
} from "./commands/BatchDeleteDelegationByAssessmentCommand";
import {
  BatchDisassociateAssessmentReportEvidenceCommandInput,
  BatchDisassociateAssessmentReportEvidenceCommandOutput,
} from "./commands/BatchDisassociateAssessmentReportEvidenceCommand";
import {
  BatchImportEvidenceToAssessmentControlCommandInput,
  BatchImportEvidenceToAssessmentControlCommandOutput,
} from "./commands/BatchImportEvidenceToAssessmentControlCommand";
import { CreateAssessmentCommandInput, CreateAssessmentCommandOutput } from "./commands/CreateAssessmentCommand";
import {
  CreateAssessmentFrameworkCommandInput,
  CreateAssessmentFrameworkCommandOutput,
} from "./commands/CreateAssessmentFrameworkCommand";
import {
  CreateAssessmentReportCommandInput,
  CreateAssessmentReportCommandOutput,
} from "./commands/CreateAssessmentReportCommand";
import { CreateControlCommandInput, CreateControlCommandOutput } from "./commands/CreateControlCommand";
import { DeleteAssessmentCommandInput, DeleteAssessmentCommandOutput } from "./commands/DeleteAssessmentCommand";
import {
  DeleteAssessmentFrameworkCommandInput,
  DeleteAssessmentFrameworkCommandOutput,
} from "./commands/DeleteAssessmentFrameworkCommand";
import {
  DeleteAssessmentReportCommandInput,
  DeleteAssessmentReportCommandOutput,
} from "./commands/DeleteAssessmentReportCommand";
import { DeleteControlCommandInput, DeleteControlCommandOutput } from "./commands/DeleteControlCommand";
import { DeregisterAccountCommandInput, DeregisterAccountCommandOutput } from "./commands/DeregisterAccountCommand";
import {
  DeregisterOrganizationAdminAccountCommandInput,
  DeregisterOrganizationAdminAccountCommandOutput,
} from "./commands/DeregisterOrganizationAdminAccountCommand";
import {
  DisassociateAssessmentReportEvidenceFolderCommandInput,
  DisassociateAssessmentReportEvidenceFolderCommandOutput,
} from "./commands/DisassociateAssessmentReportEvidenceFolderCommand";
import { GetAccountStatusCommandInput, GetAccountStatusCommandOutput } from "./commands/GetAccountStatusCommand";
import { GetAssessmentCommandInput, GetAssessmentCommandOutput } from "./commands/GetAssessmentCommand";
import {
  GetAssessmentFrameworkCommandInput,
  GetAssessmentFrameworkCommandOutput,
} from "./commands/GetAssessmentFrameworkCommand";
import {
  GetAssessmentReportUrlCommandInput,
  GetAssessmentReportUrlCommandOutput,
} from "./commands/GetAssessmentReportUrlCommand";
import { GetChangeLogsCommandInput, GetChangeLogsCommandOutput } from "./commands/GetChangeLogsCommand";
import { GetControlCommandInput, GetControlCommandOutput } from "./commands/GetControlCommand";
import { GetDelegationsCommandInput, GetDelegationsCommandOutput } from "./commands/GetDelegationsCommand";
import {
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
} from "./commands/GetEvidenceByEvidenceFolderCommand";
import { GetEvidenceCommandInput, GetEvidenceCommandOutput } from "./commands/GetEvidenceCommand";
import { GetEvidenceFolderCommandInput, GetEvidenceFolderCommandOutput } from "./commands/GetEvidenceFolderCommand";
import {
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
} from "./commands/GetEvidenceFoldersByAssessmentCommand";
import {
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
} from "./commands/GetEvidenceFoldersByAssessmentControlCommand";
import {
  GetOrganizationAdminAccountCommandInput,
  GetOrganizationAdminAccountCommandOutput,
} from "./commands/GetOrganizationAdminAccountCommand";
import { GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput } from "./commands/GetServicesInScopeCommand";
import { GetSettingsCommandInput, GetSettingsCommandOutput } from "./commands/GetSettingsCommand";
import {
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "./commands/ListAssessmentFrameworksCommand";
import {
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
} from "./commands/ListAssessmentReportsCommand";
import { ListAssessmentsCommandInput, ListAssessmentsCommandOutput } from "./commands/ListAssessmentsCommand";
import { ListControlsCommandInput, ListControlsCommandOutput } from "./commands/ListControlsCommand";
import {
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
} from "./commands/ListKeywordsForDataSourceCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "./commands/ListNotificationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RegisterAccountCommandInput, RegisterAccountCommandOutput } from "./commands/RegisterAccountCommand";
import {
  RegisterOrganizationAdminAccountCommandInput,
  RegisterOrganizationAdminAccountCommandOutput,
} from "./commands/RegisterOrganizationAdminAccountCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAssessmentCommandInput, UpdateAssessmentCommandOutput } from "./commands/UpdateAssessmentCommand";
import {
  UpdateAssessmentControlCommandInput,
  UpdateAssessmentControlCommandOutput,
} from "./commands/UpdateAssessmentControlCommand";
import {
  UpdateAssessmentControlSetStatusCommandInput,
  UpdateAssessmentControlSetStatusCommandOutput,
} from "./commands/UpdateAssessmentControlSetStatusCommand";
import {
  UpdateAssessmentFrameworkCommandInput,
  UpdateAssessmentFrameworkCommandOutput,
} from "./commands/UpdateAssessmentFrameworkCommand";
import {
  UpdateAssessmentStatusCommandInput,
  UpdateAssessmentStatusCommandOutput,
} from "./commands/UpdateAssessmentStatusCommand";
import { UpdateControlCommandInput, UpdateControlCommandOutput } from "./commands/UpdateControlCommand";
import { UpdateSettingsCommandInput, UpdateSettingsCommandOutput } from "./commands/UpdateSettingsCommand";
import {
  ValidateAssessmentReportIntegrityCommandInput,
  ValidateAssessmentReportIntegrityCommandOutput,
} from "./commands/ValidateAssessmentReportIntegrityCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Welcome to the AWS Audit Manager API reference. This guide is for developers who need detailed information about the AWS Audit Manager API operations, data types, and errors. </p>
 *          <p>AWS Audit Manager is a service that provides automated evidence collection so that you
 *          can continuously audit your AWS usage, and assess the effectiveness of your controls to
 *          better manage risk and simplify compliance.</p>
 *          <p>AWS Audit Manager provides pre-built frameworks that structure and automate assessments
 *          for a given compliance standard. Frameworks include a pre-built collection of controls with
 *          descriptions and testing procedures, which are grouped according to the requirements of the
 *          specified compliance standard or regulation. You can also customize frameworks and controls
 *          to support internal audits with unique requirements. </p>
 *
 *          <p>Use the following links to get started with the AWS Audit Manager API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all AWS Audit Manager API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all AWS Audit Manager data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *
 *          <p>If you're new to AWS Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html"> AWS Audit Manager User Guide</a>.</p>
 */
export declare class AuditManager extends AuditManagerClient {
  /**
   * <p>
   *          Associates an evidence folder to the specified assessment report in AWS Audit Manager.
   *       </p>
   */
  associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput>;
  associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    cb: (err: any, data?: AssociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  /**
   * <p>
   *         Associates a list of evidence to an assessment report in an AWS Audit Manager assessment.
   *       </p>
   */
  batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput>;
  batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    cb: (err: any, data?: BatchAssociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Create a batch of delegations for a specified assessment in AWS Audit Manager.
   *       </p>
   */
  batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateDelegationByAssessmentCommandOutput>;
  batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    cb: (err: any, data?: BatchCreateDelegationByAssessmentCommandOutput) => void
  ): void;
  batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateDelegationByAssessmentCommandOutput) => void
  ): void;
  /**
   * <p>
   * Deletes the delegations in the specified AWS Audit Manager assessment.
   *       </p>
   */
  batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDelegationByAssessmentCommandOutput>;
  batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    cb: (err: any, data?: BatchDeleteDelegationByAssessmentCommandOutput) => void
  ): void;
  batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDelegationByAssessmentCommandOutput) => void
  ): void;
  /**
   * <p>
   *          Disassociates a list of evidence from the specified assessment report in AWS Audit Manager.
   *       </p>
   */
  batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput>;
  batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    cb: (err: any, data?: BatchDisassociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  /**
   * <p>
   *          Uploads one or more pieces of evidence to the specified control in the assessment in AWS Audit Manager.
   *       </p>
   */
  batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchImportEvidenceToAssessmentControlCommandOutput>;
  batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    cb: (err: any, data?: BatchImportEvidenceToAssessmentControlCommandOutput) => void
  ): void;
  batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchImportEvidenceToAssessmentControlCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Creates an assessment in AWS Audit Manager.
   * </p>
   */
  createAssessment(
    args: CreateAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentCommandOutput>;
  createAssessment(
    args: CreateAssessmentCommandInput,
    cb: (err: any, data?: CreateAssessmentCommandOutput) => void
  ): void;
  createAssessment(
    args: CreateAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentCommandOutput) => void
  ): void;
  /**
   * <p>
   * Creates a custom framework in AWS Audit Manager.
   * </p>
   */
  createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentFrameworkCommandOutput>;
  createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    cb: (err: any, data?: CreateAssessmentFrameworkCommandOutput) => void
  ): void;
  createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentFrameworkCommandOutput) => void
  ): void;
  /**
   * <p>
   * Creates an assessment report for the specified assessment.
   * </p>
   */
  createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentReportCommandOutput>;
  createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    cb: (err: any, data?: CreateAssessmentReportCommandOutput) => void
  ): void;
  createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentReportCommandOutput) => void
  ): void;
  /**
   * <p>
   * Creates a new custom control in AWS Audit Manager.
   * </p>
   */
  createControl(args: CreateControlCommandInput, options?: __HttpHandlerOptions): Promise<CreateControlCommandOutput>;
  createControl(args: CreateControlCommandInput, cb: (err: any, data?: CreateControlCommandOutput) => void): void;
  createControl(
    args: CreateControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateControlCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Deletes an assessment in AWS Audit Manager.
   * </p>
   */
  deleteAssessment(
    args: DeleteAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentCommandOutput>;
  deleteAssessment(
    args: DeleteAssessmentCommandInput,
    cb: (err: any, data?: DeleteAssessmentCommandOutput) => void
  ): void;
  deleteAssessment(
    args: DeleteAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Deletes a custom framework in AWS Audit Manager.
   * </p>
   */
  deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentFrameworkCommandOutput>;
  deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    cb: (err: any, data?: DeleteAssessmentFrameworkCommandOutput) => void
  ): void;
  deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentFrameworkCommandOutput) => void
  ): void;
  /**
   * <p>
   * Deletes an assessment report from an assessment in AWS Audit Manager.
   * </p>
   */
  deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentReportCommandOutput>;
  deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    cb: (err: any, data?: DeleteAssessmentReportCommandOutput) => void
  ): void;
  deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentReportCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Deletes a custom control in AWS Audit Manager.
   * </p>
   */
  deleteControl(args: DeleteControlCommandInput, options?: __HttpHandlerOptions): Promise<DeleteControlCommandOutput>;
  deleteControl(args: DeleteControlCommandInput, cb: (err: any, data?: DeleteControlCommandOutput) => void): void;
  deleteControl(
    args: DeleteControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteControlCommandOutput) => void
  ): void;
  /**
   * <p>
   * Deregisters an account in AWS Audit Manager.
   * </p>
   */
  deregisterAccount(
    args: DeregisterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterAccountCommandOutput>;
  deregisterAccount(
    args: DeregisterAccountCommandInput,
    cb: (err: any, data?: DeregisterAccountCommandOutput) => void
  ): void;
  deregisterAccount(
    args: DeregisterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterAccountCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Deregisters the delegated AWS administrator account from the AWS organization.
   * </p>
   */
  deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterOrganizationAdminAccountCommandOutput>;
  deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DeregisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Disassociates an evidence folder from the specified assessment report in AWS Audit Manager.
   * </p>
   */
  disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput>;
  disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    cb: (err: any, data?: DisassociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns the registration status of an account in AWS Audit Manager.
   * </p>
   */
  getAccountStatus(
    args: GetAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountStatusCommandOutput>;
  getAccountStatus(
    args: GetAccountStatusCommandInput,
    cb: (err: any, data?: GetAccountStatusCommandOutput) => void
  ): void;
  getAccountStatus(
    args: GetAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountStatusCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns an assessment from AWS Audit Manager.
   * </p>
   */
  getAssessment(args: GetAssessmentCommandInput, options?: __HttpHandlerOptions): Promise<GetAssessmentCommandOutput>;
  getAssessment(args: GetAssessmentCommandInput, cb: (err: any, data?: GetAssessmentCommandOutput) => void): void;
  getAssessment(
    args: GetAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns a framework from AWS Audit Manager.
   * </p>
   */
  getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentFrameworkCommandOutput>;
  getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    cb: (err: any, data?: GetAssessmentFrameworkCommandOutput) => void
  ): void;
  getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentFrameworkCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns the URL of a specified assessment report in AWS Audit Manager.
   * </p>
   */
  getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentReportUrlCommandOutput>;
  getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    cb: (err: any, data?: GetAssessmentReportUrlCommandOutput) => void
  ): void;
  getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentReportUrlCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns a list of changelogs from AWS Audit Manager.
   * </p>
   */
  getChangeLogs(args: GetChangeLogsCommandInput, options?: __HttpHandlerOptions): Promise<GetChangeLogsCommandOutput>;
  getChangeLogs(args: GetChangeLogsCommandInput, cb: (err: any, data?: GetChangeLogsCommandOutput) => void): void;
  getChangeLogs(
    args: GetChangeLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeLogsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns a control from AWS Audit Manager.
   * </p>
   */
  getControl(args: GetControlCommandInput, options?: __HttpHandlerOptions): Promise<GetControlCommandOutput>;
  getControl(args: GetControlCommandInput, cb: (err: any, data?: GetControlCommandOutput) => void): void;
  getControl(
    args: GetControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetControlCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Returns a list of delegations from an audit owner to a delegate.
   * </p>
   */
  getDelegations(
    args: GetDelegationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDelegationsCommandOutput>;
  getDelegations(args: GetDelegationsCommandInput, cb: (err: any, data?: GetDelegationsCommandOutput) => void): void;
  getDelegations(
    args: GetDelegationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDelegationsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns evidence from AWS Audit Manager.
   * </p>
   */
  getEvidence(args: GetEvidenceCommandInput, options?: __HttpHandlerOptions): Promise<GetEvidenceCommandOutput>;
  getEvidence(args: GetEvidenceCommandInput, cb: (err: any, data?: GetEvidenceCommandOutput) => void): void;
  getEvidence(
    args: GetEvidenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Returns all evidence from a specified evidence folder in AWS Audit Manager.
   * </p>
   */
  getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceByEvidenceFolderCommandOutput>;
  getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    cb: (err: any, data?: GetEvidenceByEvidenceFolderCommandOutput) => void
  ): void;
  getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceByEvidenceFolderCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns an evidence folder from the specified assessment in AWS Audit Manager.
   * </p>
   */
  getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFolderCommandOutput>;
  getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    cb: (err: any, data?: GetEvidenceFolderCommandOutput) => void
  ): void;
  getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFolderCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Returns the evidence folders from a specified assessment in AWS Audit Manager.
   * </p>
   */
  getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFoldersByAssessmentCommandOutput>;
  getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentCommandOutput) => void
  ): void;
  getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Returns a list of evidence folders associated with a specified control of an assessment in AWS Audit Manager.
   * </p>
   */
  getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput>;
  getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentControlCommandOutput) => void
  ): void;
  getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentControlCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Returns the name of the delegated AWS administrator account for the AWS organization.
   * </p>
   */
  getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationAdminAccountCommandOutput>;
  getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: GetOrganizationAdminAccountCommandOutput) => void
  ): void;
  getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationAdminAccountCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Returns a list of the in-scope AWS services for the specified assessment.
   * </p>
   */
  getServicesInScope(
    args: GetServicesInScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServicesInScopeCommandOutput>;
  getServicesInScope(
    args: GetServicesInScopeCommandInput,
    cb: (err: any, data?: GetServicesInScopeCommandOutput) => void
  ): void;
  getServicesInScope(
    args: GetServicesInScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServicesInScopeCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Returns the settings for the specified AWS account.
   * </p>
   */
  getSettings(args: GetSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetSettingsCommandOutput>;
  getSettings(args: GetSettingsCommandInput, cb: (err: any, data?: GetSettingsCommandOutput) => void): void;
  getSettings(
    args: GetSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSettingsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns a list of the frameworks available in the AWS Audit Manager framework library.
   * </p>
   */
  listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentFrameworksCommandOutput>;
  listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    cb: (err: any, data?: ListAssessmentFrameworksCommandOutput) => void
  ): void;
  listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentFrameworksCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns a list of assessment reports created in AWS Audit Manager.
   * </p>
   */
  listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentReportsCommandOutput>;
  listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    cb: (err: any, data?: ListAssessmentReportsCommandOutput) => void
  ): void;
  listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentReportsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns a list of current and past assessments from AWS Audit Manager.
   * </p>
   */
  listAssessments(
    args: ListAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentsCommandOutput>;
  listAssessments(args: ListAssessmentsCommandInput, cb: (err: any, data?: ListAssessmentsCommandOutput) => void): void;
  listAssessments(
    args: ListAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns a list of controls from AWS Audit Manager.
   * </p>
   */
  listControls(args: ListControlsCommandInput, options?: __HttpHandlerOptions): Promise<ListControlsCommandOutput>;
  listControls(args: ListControlsCommandInput, cb: (err: any, data?: ListControlsCommandOutput) => void): void;
  listControls(
    args: ListControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns a list of keywords that pre-mapped to the specified control data source.
   * </p>
   */
  listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeywordsForDataSourceCommandOutput>;
  listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    cb: (err: any, data?: ListKeywordsForDataSourceCommandOutput) => void
  ): void;
  listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeywordsForDataSourceCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Returns a list of all AWS Audit Manager notifications.
   * </p>
   */
  listNotifications(
    args: ListNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  listNotifications(
    args: ListNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Returns a list of tags for the specified resource in AWS Audit Manager.
   * </p>
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  /**
   * <p>
   *  Enables AWS Audit Manager for the specified AWS account.
   * </p>
   */
  registerAccount(
    args: RegisterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAccountCommandOutput>;
  registerAccount(args: RegisterAccountCommandInput, cb: (err: any, data?: RegisterAccountCommandOutput) => void): void;
  registerAccount(
    args: RegisterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAccountCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Enables an AWS account within the organization as the delegated administrator for AWS Audit Manager.
   * </p>
   */
  registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterOrganizationAdminAccountCommandOutput>;
  registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: RegisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  /**
   * <p>
   * Tags the specified resource in AWS Audit Manager.
   * </p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>
   * Removes a tag from a resource in AWS Audit Manager.
   * </p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Edits an AWS Audit Manager assessment.
   * </p>
   */
  updateAssessment(
    args: UpdateAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentCommandOutput>;
  updateAssessment(
    args: UpdateAssessmentCommandInput,
    cb: (err: any, data?: UpdateAssessmentCommandOutput) => void
  ): void;
  updateAssessment(
    args: UpdateAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentCommandOutput) => void
  ): void;
  /**
   * <p>
   * Updates a control within an assessment in AWS Audit Manager.
   * </p>
   */
  updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentControlCommandOutput>;
  updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    cb: (err: any, data?: UpdateAssessmentControlCommandOutput) => void
  ): void;
  updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentControlCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Updates the status of a control set in an AWS Audit Manager assessment.
   * </p>
   */
  updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentControlSetStatusCommandOutput>;
  updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    cb: (err: any, data?: UpdateAssessmentControlSetStatusCommandOutput) => void
  ): void;
  updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentControlSetStatusCommandOutput) => void
  ): void;
  /**
   * <p>
   * Updates a custom framework in AWS Audit Manager.
   * </p>
   */
  updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentFrameworkCommandOutput>;
  updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    cb: (err: any, data?: UpdateAssessmentFrameworkCommandOutput) => void
  ): void;
  updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentFrameworkCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Updates the status of an assessment in AWS Audit Manager.
   * </p>
   */
  updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentStatusCommandOutput>;
  updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    cb: (err: any, data?: UpdateAssessmentStatusCommandOutput) => void
  ): void;
  updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentStatusCommandOutput) => void
  ): void;
  /**
   * <p>
   * Updates a custom control in AWS Audit Manager.
   * </p>
   */
  updateControl(args: UpdateControlCommandInput, options?: __HttpHandlerOptions): Promise<UpdateControlCommandOutput>;
  updateControl(args: UpdateControlCommandInput, cb: (err: any, data?: UpdateControlCommandOutput) => void): void;
  updateControl(
    args: UpdateControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateControlCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Updates AWS Audit Manager settings for the current user account.
   * </p>
   */
  updateSettings(
    args: UpdateSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSettingsCommandOutput>;
  updateSettings(args: UpdateSettingsCommandInput, cb: (err: any, data?: UpdateSettingsCommandOutput) => void): void;
  updateSettings(
    args: UpdateSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): void;
  /**
   * <p>
   *    Validates the integrity of an assessment report in AWS Audit Manager.
   * </p>
   */
  validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateAssessmentReportIntegrityCommandOutput>;
  validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    cb: (err: any, data?: ValidateAssessmentReportIntegrityCommandOutput) => void
  ): void;
  validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateAssessmentReportIntegrityCommandOutput) => void
  ): void;
}
