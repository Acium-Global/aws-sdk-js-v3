import { __extends } from "tslib";
import { AuditManagerClient } from "./AuditManagerClient";
import { AssociateAssessmentReportEvidenceFolderCommand } from "./commands/AssociateAssessmentReportEvidenceFolderCommand";
import { BatchAssociateAssessmentReportEvidenceCommand } from "./commands/BatchAssociateAssessmentReportEvidenceCommand";
import { BatchCreateDelegationByAssessmentCommand } from "./commands/BatchCreateDelegationByAssessmentCommand";
import { BatchDeleteDelegationByAssessmentCommand } from "./commands/BatchDeleteDelegationByAssessmentCommand";
import { BatchDisassociateAssessmentReportEvidenceCommand } from "./commands/BatchDisassociateAssessmentReportEvidenceCommand";
import { BatchImportEvidenceToAssessmentControlCommand } from "./commands/BatchImportEvidenceToAssessmentControlCommand";
import { CreateAssessmentCommand } from "./commands/CreateAssessmentCommand";
import { CreateAssessmentFrameworkCommand } from "./commands/CreateAssessmentFrameworkCommand";
import { CreateAssessmentReportCommand } from "./commands/CreateAssessmentReportCommand";
import { CreateControlCommand } from "./commands/CreateControlCommand";
import { DeleteAssessmentCommand } from "./commands/DeleteAssessmentCommand";
import { DeleteAssessmentFrameworkCommand } from "./commands/DeleteAssessmentFrameworkCommand";
import { DeleteAssessmentReportCommand } from "./commands/DeleteAssessmentReportCommand";
import { DeleteControlCommand } from "./commands/DeleteControlCommand";
import { DeregisterAccountCommand } from "./commands/DeregisterAccountCommand";
import { DeregisterOrganizationAdminAccountCommand } from "./commands/DeregisterOrganizationAdminAccountCommand";
import { DisassociateAssessmentReportEvidenceFolderCommand } from "./commands/DisassociateAssessmentReportEvidenceFolderCommand";
import { GetAccountStatusCommand } from "./commands/GetAccountStatusCommand";
import { GetAssessmentCommand } from "./commands/GetAssessmentCommand";
import { GetAssessmentFrameworkCommand } from "./commands/GetAssessmentFrameworkCommand";
import { GetAssessmentReportUrlCommand } from "./commands/GetAssessmentReportUrlCommand";
import { GetChangeLogsCommand } from "./commands/GetChangeLogsCommand";
import { GetControlCommand } from "./commands/GetControlCommand";
import { GetDelegationsCommand } from "./commands/GetDelegationsCommand";
import { GetEvidenceByEvidenceFolderCommand } from "./commands/GetEvidenceByEvidenceFolderCommand";
import { GetEvidenceCommand } from "./commands/GetEvidenceCommand";
import { GetEvidenceFolderCommand } from "./commands/GetEvidenceFolderCommand";
import { GetEvidenceFoldersByAssessmentCommand } from "./commands/GetEvidenceFoldersByAssessmentCommand";
import { GetEvidenceFoldersByAssessmentControlCommand } from "./commands/GetEvidenceFoldersByAssessmentControlCommand";
import { GetOrganizationAdminAccountCommand } from "./commands/GetOrganizationAdminAccountCommand";
import { GetServicesInScopeCommand } from "./commands/GetServicesInScopeCommand";
import { GetSettingsCommand } from "./commands/GetSettingsCommand";
import { ListAssessmentFrameworksCommand } from "./commands/ListAssessmentFrameworksCommand";
import { ListAssessmentReportsCommand } from "./commands/ListAssessmentReportsCommand";
import { ListAssessmentsCommand } from "./commands/ListAssessmentsCommand";
import { ListControlsCommand } from "./commands/ListControlsCommand";
import { ListKeywordsForDataSourceCommand } from "./commands/ListKeywordsForDataSourceCommand";
import { ListNotificationsCommand } from "./commands/ListNotificationsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { RegisterAccountCommand } from "./commands/RegisterAccountCommand";
import { RegisterOrganizationAdminAccountCommand } from "./commands/RegisterOrganizationAdminAccountCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAssessmentCommand } from "./commands/UpdateAssessmentCommand";
import { UpdateAssessmentControlCommand } from "./commands/UpdateAssessmentControlCommand";
import { UpdateAssessmentControlSetStatusCommand } from "./commands/UpdateAssessmentControlSetStatusCommand";
import { UpdateAssessmentFrameworkCommand } from "./commands/UpdateAssessmentFrameworkCommand";
import { UpdateAssessmentStatusCommand } from "./commands/UpdateAssessmentStatusCommand";
import { UpdateControlCommand } from "./commands/UpdateControlCommand";
import { UpdateSettingsCommand } from "./commands/UpdateSettingsCommand";
import { ValidateAssessmentReportIntegrityCommand } from "./commands/ValidateAssessmentReportIntegrityCommand";
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
var AuditManager = /** @class */ (function (_super) {
  __extends(AuditManager, _super);
  function AuditManager() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AuditManager.prototype.associateAssessmentReportEvidenceFolder = function (args, optionsOrCb, cb) {
    var command = new AssociateAssessmentReportEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.batchAssociateAssessmentReportEvidence = function (args, optionsOrCb, cb) {
    var command = new BatchAssociateAssessmentReportEvidenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.batchCreateDelegationByAssessment = function (args, optionsOrCb, cb) {
    var command = new BatchCreateDelegationByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.batchDeleteDelegationByAssessment = function (args, optionsOrCb, cb) {
    var command = new BatchDeleteDelegationByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.batchDisassociateAssessmentReportEvidence = function (args, optionsOrCb, cb) {
    var command = new BatchDisassociateAssessmentReportEvidenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.batchImportEvidenceToAssessmentControl = function (args, optionsOrCb, cb) {
    var command = new BatchImportEvidenceToAssessmentControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.createAssessment = function (args, optionsOrCb, cb) {
    var command = new CreateAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.createAssessmentFramework = function (args, optionsOrCb, cb) {
    var command = new CreateAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.createAssessmentReport = function (args, optionsOrCb, cb) {
    var command = new CreateAssessmentReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.createControl = function (args, optionsOrCb, cb) {
    var command = new CreateControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.deleteAssessment = function (args, optionsOrCb, cb) {
    var command = new DeleteAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.deleteAssessmentFramework = function (args, optionsOrCb, cb) {
    var command = new DeleteAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.deleteAssessmentReport = function (args, optionsOrCb, cb) {
    var command = new DeleteAssessmentReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.deleteControl = function (args, optionsOrCb, cb) {
    var command = new DeleteControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.deregisterAccount = function (args, optionsOrCb, cb) {
    var command = new DeregisterAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.deregisterOrganizationAdminAccount = function (args, optionsOrCb, cb) {
    var command = new DeregisterOrganizationAdminAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.disassociateAssessmentReportEvidenceFolder = function (args, optionsOrCb, cb) {
    var command = new DisassociateAssessmentReportEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getAccountStatus = function (args, optionsOrCb, cb) {
    var command = new GetAccountStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getAssessment = function (args, optionsOrCb, cb) {
    var command = new GetAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getAssessmentFramework = function (args, optionsOrCb, cb) {
    var command = new GetAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getAssessmentReportUrl = function (args, optionsOrCb, cb) {
    var command = new GetAssessmentReportUrlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getChangeLogs = function (args, optionsOrCb, cb) {
    var command = new GetChangeLogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getControl = function (args, optionsOrCb, cb) {
    var command = new GetControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getDelegations = function (args, optionsOrCb, cb) {
    var command = new GetDelegationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getEvidence = function (args, optionsOrCb, cb) {
    var command = new GetEvidenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getEvidenceByEvidenceFolder = function (args, optionsOrCb, cb) {
    var command = new GetEvidenceByEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getEvidenceFolder = function (args, optionsOrCb, cb) {
    var command = new GetEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getEvidenceFoldersByAssessment = function (args, optionsOrCb, cb) {
    var command = new GetEvidenceFoldersByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getEvidenceFoldersByAssessmentControl = function (args, optionsOrCb, cb) {
    var command = new GetEvidenceFoldersByAssessmentControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getOrganizationAdminAccount = function (args, optionsOrCb, cb) {
    var command = new GetOrganizationAdminAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getServicesInScope = function (args, optionsOrCb, cb) {
    var command = new GetServicesInScopeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.getSettings = function (args, optionsOrCb, cb) {
    var command = new GetSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.listAssessmentFrameworks = function (args, optionsOrCb, cb) {
    var command = new ListAssessmentFrameworksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.listAssessmentReports = function (args, optionsOrCb, cb) {
    var command = new ListAssessmentReportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.listAssessments = function (args, optionsOrCb, cb) {
    var command = new ListAssessmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.listControls = function (args, optionsOrCb, cb) {
    var command = new ListControlsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.listKeywordsForDataSource = function (args, optionsOrCb, cb) {
    var command = new ListKeywordsForDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.listNotifications = function (args, optionsOrCb, cb) {
    var command = new ListNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
    var command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.registerAccount = function (args, optionsOrCb, cb) {
    var command = new RegisterAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.registerOrganizationAdminAccount = function (args, optionsOrCb, cb) {
    var command = new RegisterOrganizationAdminAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.updateAssessment = function (args, optionsOrCb, cb) {
    var command = new UpdateAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.updateAssessmentControl = function (args, optionsOrCb, cb) {
    var command = new UpdateAssessmentControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.updateAssessmentControlSetStatus = function (args, optionsOrCb, cb) {
    var command = new UpdateAssessmentControlSetStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.updateAssessmentFramework = function (args, optionsOrCb, cb) {
    var command = new UpdateAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.updateAssessmentStatus = function (args, optionsOrCb, cb) {
    var command = new UpdateAssessmentStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.updateControl = function (args, optionsOrCb, cb) {
    var command = new UpdateControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.updateSettings = function (args, optionsOrCb, cb) {
    var command = new UpdateSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  AuditManager.prototype.validateAssessmentReportIntegrity = function (args, optionsOrCb, cb) {
    var command = new ValidateAssessmentReportIntegrityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return AuditManager;
})(AuditManagerClient);
export { AuditManager };
//# sourceMappingURL=AuditManager.js.map
