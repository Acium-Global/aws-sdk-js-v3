"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditManager = void 0;
const AuditManagerClient_1 = require("./AuditManagerClient");
const AssociateAssessmentReportEvidenceFolderCommand_1 = require("./commands/AssociateAssessmentReportEvidenceFolderCommand");
const BatchAssociateAssessmentReportEvidenceCommand_1 = require("./commands/BatchAssociateAssessmentReportEvidenceCommand");
const BatchCreateDelegationByAssessmentCommand_1 = require("./commands/BatchCreateDelegationByAssessmentCommand");
const BatchDeleteDelegationByAssessmentCommand_1 = require("./commands/BatchDeleteDelegationByAssessmentCommand");
const BatchDisassociateAssessmentReportEvidenceCommand_1 = require("./commands/BatchDisassociateAssessmentReportEvidenceCommand");
const BatchImportEvidenceToAssessmentControlCommand_1 = require("./commands/BatchImportEvidenceToAssessmentControlCommand");
const CreateAssessmentCommand_1 = require("./commands/CreateAssessmentCommand");
const CreateAssessmentFrameworkCommand_1 = require("./commands/CreateAssessmentFrameworkCommand");
const CreateAssessmentReportCommand_1 = require("./commands/CreateAssessmentReportCommand");
const CreateControlCommand_1 = require("./commands/CreateControlCommand");
const DeleteAssessmentCommand_1 = require("./commands/DeleteAssessmentCommand");
const DeleteAssessmentFrameworkCommand_1 = require("./commands/DeleteAssessmentFrameworkCommand");
const DeleteAssessmentReportCommand_1 = require("./commands/DeleteAssessmentReportCommand");
const DeleteControlCommand_1 = require("./commands/DeleteControlCommand");
const DeregisterAccountCommand_1 = require("./commands/DeregisterAccountCommand");
const DeregisterOrganizationAdminAccountCommand_1 = require("./commands/DeregisterOrganizationAdminAccountCommand");
const DisassociateAssessmentReportEvidenceFolderCommand_1 = require("./commands/DisassociateAssessmentReportEvidenceFolderCommand");
const GetAccountStatusCommand_1 = require("./commands/GetAccountStatusCommand");
const GetAssessmentCommand_1 = require("./commands/GetAssessmentCommand");
const GetAssessmentFrameworkCommand_1 = require("./commands/GetAssessmentFrameworkCommand");
const GetAssessmentReportUrlCommand_1 = require("./commands/GetAssessmentReportUrlCommand");
const GetChangeLogsCommand_1 = require("./commands/GetChangeLogsCommand");
const GetControlCommand_1 = require("./commands/GetControlCommand");
const GetDelegationsCommand_1 = require("./commands/GetDelegationsCommand");
const GetEvidenceByEvidenceFolderCommand_1 = require("./commands/GetEvidenceByEvidenceFolderCommand");
const GetEvidenceCommand_1 = require("./commands/GetEvidenceCommand");
const GetEvidenceFolderCommand_1 = require("./commands/GetEvidenceFolderCommand");
const GetEvidenceFoldersByAssessmentCommand_1 = require("./commands/GetEvidenceFoldersByAssessmentCommand");
const GetEvidenceFoldersByAssessmentControlCommand_1 = require("./commands/GetEvidenceFoldersByAssessmentControlCommand");
const GetOrganizationAdminAccountCommand_1 = require("./commands/GetOrganizationAdminAccountCommand");
const GetServicesInScopeCommand_1 = require("./commands/GetServicesInScopeCommand");
const GetSettingsCommand_1 = require("./commands/GetSettingsCommand");
const ListAssessmentFrameworksCommand_1 = require("./commands/ListAssessmentFrameworksCommand");
const ListAssessmentReportsCommand_1 = require("./commands/ListAssessmentReportsCommand");
const ListAssessmentsCommand_1 = require("./commands/ListAssessmentsCommand");
const ListControlsCommand_1 = require("./commands/ListControlsCommand");
const ListKeywordsForDataSourceCommand_1 = require("./commands/ListKeywordsForDataSourceCommand");
const ListNotificationsCommand_1 = require("./commands/ListNotificationsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const RegisterAccountCommand_1 = require("./commands/RegisterAccountCommand");
const RegisterOrganizationAdminAccountCommand_1 = require("./commands/RegisterOrganizationAdminAccountCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAssessmentCommand_1 = require("./commands/UpdateAssessmentCommand");
const UpdateAssessmentControlCommand_1 = require("./commands/UpdateAssessmentControlCommand");
const UpdateAssessmentControlSetStatusCommand_1 = require("./commands/UpdateAssessmentControlSetStatusCommand");
const UpdateAssessmentFrameworkCommand_1 = require("./commands/UpdateAssessmentFrameworkCommand");
const UpdateAssessmentStatusCommand_1 = require("./commands/UpdateAssessmentStatusCommand");
const UpdateControlCommand_1 = require("./commands/UpdateControlCommand");
const UpdateSettingsCommand_1 = require("./commands/UpdateSettingsCommand");
const ValidateAssessmentReportIntegrityCommand_1 = require("./commands/ValidateAssessmentReportIntegrityCommand");
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
class AuditManager extends AuditManagerClient_1.AuditManagerClient {
  associateAssessmentReportEvidenceFolder(args, optionsOrCb, cb) {
    const command = new AssociateAssessmentReportEvidenceFolderCommand_1.AssociateAssessmentReportEvidenceFolderCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchAssociateAssessmentReportEvidence(args, optionsOrCb, cb) {
    const command = new BatchAssociateAssessmentReportEvidenceCommand_1.BatchAssociateAssessmentReportEvidenceCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchCreateDelegationByAssessment(args, optionsOrCb, cb) {
    const command = new BatchCreateDelegationByAssessmentCommand_1.BatchCreateDelegationByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchDeleteDelegationByAssessment(args, optionsOrCb, cb) {
    const command = new BatchDeleteDelegationByAssessmentCommand_1.BatchDeleteDelegationByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchDisassociateAssessmentReportEvidence(args, optionsOrCb, cb) {
    const command =
      new BatchDisassociateAssessmentReportEvidenceCommand_1.BatchDisassociateAssessmentReportEvidenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchImportEvidenceToAssessmentControl(args, optionsOrCb, cb) {
    const command = new BatchImportEvidenceToAssessmentControlCommand_1.BatchImportEvidenceToAssessmentControlCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAssessment(args, optionsOrCb, cb) {
    const command = new CreateAssessmentCommand_1.CreateAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAssessmentFramework(args, optionsOrCb, cb) {
    const command = new CreateAssessmentFrameworkCommand_1.CreateAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAssessmentReport(args, optionsOrCb, cb) {
    const command = new CreateAssessmentReportCommand_1.CreateAssessmentReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createControl(args, optionsOrCb, cb) {
    const command = new CreateControlCommand_1.CreateControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAssessment(args, optionsOrCb, cb) {
    const command = new DeleteAssessmentCommand_1.DeleteAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAssessmentFramework(args, optionsOrCb, cb) {
    const command = new DeleteAssessmentFrameworkCommand_1.DeleteAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAssessmentReport(args, optionsOrCb, cb) {
    const command = new DeleteAssessmentReportCommand_1.DeleteAssessmentReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteControl(args, optionsOrCb, cb) {
    const command = new DeleteControlCommand_1.DeleteControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deregisterAccount(args, optionsOrCb, cb) {
    const command = new DeregisterAccountCommand_1.DeregisterAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deregisterOrganizationAdminAccount(args, optionsOrCb, cb) {
    const command = new DeregisterOrganizationAdminAccountCommand_1.DeregisterOrganizationAdminAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  disassociateAssessmentReportEvidenceFolder(args, optionsOrCb, cb) {
    const command =
      new DisassociateAssessmentReportEvidenceFolderCommand_1.DisassociateAssessmentReportEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAccountStatus(args, optionsOrCb, cb) {
    const command = new GetAccountStatusCommand_1.GetAccountStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAssessment(args, optionsOrCb, cb) {
    const command = new GetAssessmentCommand_1.GetAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAssessmentFramework(args, optionsOrCb, cb) {
    const command = new GetAssessmentFrameworkCommand_1.GetAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAssessmentReportUrl(args, optionsOrCb, cb) {
    const command = new GetAssessmentReportUrlCommand_1.GetAssessmentReportUrlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getChangeLogs(args, optionsOrCb, cb) {
    const command = new GetChangeLogsCommand_1.GetChangeLogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getControl(args, optionsOrCb, cb) {
    const command = new GetControlCommand_1.GetControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDelegations(args, optionsOrCb, cb) {
    const command = new GetDelegationsCommand_1.GetDelegationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getEvidence(args, optionsOrCb, cb) {
    const command = new GetEvidenceCommand_1.GetEvidenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getEvidenceByEvidenceFolder(args, optionsOrCb, cb) {
    const command = new GetEvidenceByEvidenceFolderCommand_1.GetEvidenceByEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getEvidenceFolder(args, optionsOrCb, cb) {
    const command = new GetEvidenceFolderCommand_1.GetEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getEvidenceFoldersByAssessment(args, optionsOrCb, cb) {
    const command = new GetEvidenceFoldersByAssessmentCommand_1.GetEvidenceFoldersByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getEvidenceFoldersByAssessmentControl(args, optionsOrCb, cb) {
    const command = new GetEvidenceFoldersByAssessmentControlCommand_1.GetEvidenceFoldersByAssessmentControlCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getOrganizationAdminAccount(args, optionsOrCb, cb) {
    const command = new GetOrganizationAdminAccountCommand_1.GetOrganizationAdminAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getServicesInScope(args, optionsOrCb, cb) {
    const command = new GetServicesInScopeCommand_1.GetServicesInScopeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getSettings(args, optionsOrCb, cb) {
    const command = new GetSettingsCommand_1.GetSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAssessmentFrameworks(args, optionsOrCb, cb) {
    const command = new ListAssessmentFrameworksCommand_1.ListAssessmentFrameworksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAssessmentReports(args, optionsOrCb, cb) {
    const command = new ListAssessmentReportsCommand_1.ListAssessmentReportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listAssessments(args, optionsOrCb, cb) {
    const command = new ListAssessmentsCommand_1.ListAssessmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listControls(args, optionsOrCb, cb) {
    const command = new ListControlsCommand_1.ListControlsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listKeywordsForDataSource(args, optionsOrCb, cb) {
    const command = new ListKeywordsForDataSourceCommand_1.ListKeywordsForDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listNotifications(args, optionsOrCb, cb) {
    const command = new ListNotificationsCommand_1.ListNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTagsForResource(args, optionsOrCb, cb) {
    const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  registerAccount(args, optionsOrCb, cb) {
    const command = new RegisterAccountCommand_1.RegisterAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  registerOrganizationAdminAccount(args, optionsOrCb, cb) {
    const command = new RegisterOrganizationAdminAccountCommand_1.RegisterOrganizationAdminAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagResource(args, optionsOrCb, cb) {
    const command = new TagResourceCommand_1.TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagResource(args, optionsOrCb, cb) {
    const command = new UntagResourceCommand_1.UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAssessment(args, optionsOrCb, cb) {
    const command = new UpdateAssessmentCommand_1.UpdateAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAssessmentControl(args, optionsOrCb, cb) {
    const command = new UpdateAssessmentControlCommand_1.UpdateAssessmentControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAssessmentControlSetStatus(args, optionsOrCb, cb) {
    const command = new UpdateAssessmentControlSetStatusCommand_1.UpdateAssessmentControlSetStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAssessmentFramework(args, optionsOrCb, cb) {
    const command = new UpdateAssessmentFrameworkCommand_1.UpdateAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAssessmentStatus(args, optionsOrCb, cb) {
    const command = new UpdateAssessmentStatusCommand_1.UpdateAssessmentStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateControl(args, optionsOrCb, cb) {
    const command = new UpdateControlCommand_1.UpdateControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateSettings(args, optionsOrCb, cb) {
    const command = new UpdateSettingsCommand_1.UpdateSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  validateAssessmentReportIntegrity(args, optionsOrCb, cb) {
    const command = new ValidateAssessmentReportIntegrityCommand_1.ValidateAssessmentReportIntegrityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.AuditManager = AuditManager;
//# sourceMappingURL=AuditManager.js.map
