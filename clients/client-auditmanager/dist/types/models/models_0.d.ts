import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>
 *    Your account is not registered with AWS Audit Manager. Check the delegated administrator setup on the AWS Audit Manager settings page, and try again.
 * </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}
export declare namespace AccessDeniedException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export declare enum AccountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING_ACTIVATION = "PENDING_ACTIVATION",
}
export declare enum ActionEnum {
  ACTIVE = "ACTIVE",
  CREATE = "CREATE",
  DELETE = "DELETE",
  IMPORT_EVIDENCE = "IMPORT_EVIDENCE",
  INACTIVE = "INACTIVE",
  REVIEWED = "REVIEWED",
  UNDER_REVIEW = "UNDER_REVIEW",
  UPDATE_METADATA = "UPDATE_METADATA",
}
/**
 * <p>
 *    The wrapper of AWS account details, such as account ID, email address, and so on.
 * </p>
 */
export interface AWSAccount {
  /**
   * <p>
   *    The identifier for the specified AWS account.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *    The email address associated with the specified AWS account.
   * </p>
   */
  emailAddress?: string;
  /**
   * <p>
   *    The name of the specified AWS account.
   * </p>
   */
  name?: string;
}
export declare namespace AWSAccount {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AWSAccount) => any;
}
/**
 * <p>
 *    A comment posted by a user on a control. This includes the author's name, the comment text, and a timestamp.
 * </p>
 */
export interface ControlComment {
  /**
   * <p>
   *  The name of the user who authored the comment.
   * </p>
   */
  authorName?: string;
  /**
   * <p>
   *    The body text of a control comment.
   * </p>
   */
  commentBody?: string;
  /**
   * <p>
   *  The time when the comment was posted.
   * </p>
   */
  postedDate?: Date;
}
export declare namespace ControlComment {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ControlComment) => any;
}
export declare enum ControlResponse {
  AUTOMATE = "AUTOMATE",
  DEFER = "DEFER",
  IGNORE = "IGNORE",
  MANUAL = "MANUAL",
}
export declare enum ControlStatus {
  INACTIVE = "INACTIVE",
  REVIEWED = "REVIEWED",
  UNDER_REVIEW = "UNDER_REVIEW",
}
/**
 * <p>
 *    The control entity that represents a standard or custom control used in an AWS Audit Manager assessment.
 * </p>
 */
export interface AssessmentControl {
  /**
   * <p>
   *    The identifier for the specified control.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *    The name of the specified control.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *    The description of the specified control.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *    The status of the specified control.
   * </p>
   */
  status?: ControlStatus | string;
  /**
   * <p>
   *    The response of the specified control.
   * </p>
   */
  response?: ControlResponse | string;
  /**
   * <p>
   *    The list of comments attached to the specified control.
   * </p>
   */
  comments?: ControlComment[];
  /**
   * <p>
   *    The list of data sources for the specified evidence.
   * </p>
   */
  evidenceSources?: string[];
  /**
   * <p>
   *    The amount of evidence generated for the control.
   * </p>
   */
  evidenceCount?: number;
  /**
   * <p>
   *    The amount of evidence in the assessment report.
   * </p>
   */
  assessmentReportEvidenceCount?: number;
}
export declare namespace AssessmentControl {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentControl) => any;
}
export declare enum RoleType {
  PROCESS_OWNER = "PROCESS_OWNER",
  RESOURCE_OWNER = "RESOURCE_OWNER",
}
export declare enum DelegationStatus {
  COMPLETE = "COMPLETE",
  IN_PROGRESS = "IN_PROGRESS",
  UNDER_REVIEW = "UNDER_REVIEW",
}
/**
 * <p>
 *    The assignment of a control set to a delegate for review.
 * </p>
 */
export interface Delegation {
  /**
   * <p>
   *  The unique identifier for the delegation.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *  The name of the associated assessment.
   * </p>
   */
  assessmentName?: string;
  /**
   * <p>
   *    The identifier for the associated assessment.
   * </p>
   */
  assessmentId?: string;
  /**
   * <p>
   *  The status of the delegation.
   * </p>
   */
  status?: DelegationStatus | string;
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the IAM role.
   * </p>
   */
  roleArn?: string;
  /**
   * <p>
   *    The type of customer persona.
   * </p>
   *          <note>
   *             <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType?: RoleType | string;
  /**
   * <p> Specifies when the delegation was created. </p>
   */
  creationTime?: Date;
  /**
   * <p>
   *  Specifies when the delegation was last updated.
   * </p>
   */
  lastUpdated?: Date;
  /**
   * <p>
   *    The identifier for the associated control set.
   * </p>
   */
  controlSetId?: string;
  /**
   * <p>
   *  The comment related to the delegation.
   * </p>
   */
  comment?: string;
  /**
   * <p> The IAM user or role that created the delegation. </p>
   */
  createdBy?: string;
}
export declare namespace Delegation {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Delegation) => any;
}
/**
 * <p>
 *      The wrapper that contains the AWS Audit Manager role information of the current user, such as the role type and IAM Amazon Resource Name (ARN).
 *   </p>
 */
export interface Role {
  /**
   * <p>
   *    The type of customer persona.
   * </p>
   *          <note>
   *             <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType?: RoleType | string;
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the IAM role.
   * </p>
   */
  roleArn?: string;
}
export declare namespace Role {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Role) => any;
}
export declare enum ControlSetStatus {
  ACTIVE = "ACTIVE",
  REVIEWED = "REVIEWED",
  UNDER_REVIEW = "UNDER_REVIEW",
}
/**
 * <p>
 * Represents a set of controls in an AWS Audit Manager assessment.
 * </p>
 */
export interface AssessmentControlSet {
  /**
   * <p>
   *    The identifier of the control set in the assessment. This is the control set name in a plain string format.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *    The description for the control set.
   * </p>
   */
  description?: string;
  /**
   * <p>
   * Specifies the current status of the control set.
   * </p>
   */
  status?: ControlSetStatus | string;
  /**
   * <p>
   *    The roles associated with the control set.
   * </p>
   */
  roles?: Role[];
  /**
   * <p>
   * The list of controls contained with the control set.
   * </p>
   */
  controls?: AssessmentControl[];
  /**
   * <p>
   *    The delegations associated with the control set.
   * </p>
   */
  delegations?: Delegation[];
  /**
   * <p>
   *    The total number of evidence objects retrieved automatically for the control set.
   * </p>
   */
  systemEvidenceCount?: number;
  /**
   * <p>
   *    The total number of evidence objects uploaded manually to the control set.
   * </p>
   */
  manualEvidenceCount?: number;
}
export declare namespace AssessmentControlSet {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentControlSet) => any;
}
/**
 * <p>
 *    The metadata of a framework, such as the name, ID, description, and so on.
 * </p>
 */
export interface FrameworkMetadata {
  /**
   * <p>
   *    The name of the framework.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *    The description of the framework.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *    The logo associated with the framework.
   * </p>
   */
  logo?: string;
  /**
   * <p>
   *          The compliance standard associated with the framework, such as PCI-DSS or HIPAA.
   *       </p>
   */
  complianceType?: string;
}
export declare namespace FrameworkMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: FrameworkMetadata) => any;
}
/**
 * <p>
 *    The file used to structure and automate AWS Audit Manager assessments for a given compliance standard.
 * </p>
 */
export interface AssessmentFramework {
  /**
   * <p>
   * The unique identifier for the framework.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified framework.
   * </p>
   */
  arn?: string;
  /**
   * <p>
   *    The metadata of a framework, such as the name, ID, description, and so on.
   * </p>
   */
  metadata?: FrameworkMetadata;
  /**
   * <p>
   *    The control sets associated with the framework.
   * </p>
   */
  controlSets?: AssessmentControlSet[];
}
export declare namespace AssessmentFramework {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentFramework) => any;
}
export declare enum AssessmentReportDestinationType {
  S3 = "S3",
}
/**
 * <p>
 *    The location in which AWS Audit Manager saves assessment reports for the given assessment.
 * </p>
 */
export interface AssessmentReportsDestination {
  /**
   * <p>
   *    The destination type, such as Amazon S3.
   * </p>
   */
  destinationType?: AssessmentReportDestinationType | string;
  /**
   * <p>
   *    The destination of the assessment report.
   * </p>
   */
  destination?: string;
}
export declare namespace AssessmentReportsDestination {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentReportsDestination) => any;
}
/**
 * <p>
 *    An AWS service such as Amazon S3, AWS CloudTrail, and so on.
 * </p>
 */
export interface AWSService {
  /**
   * <p>
   *    The name of the AWS service.
   * </p>
   */
  serviceName?: string;
}
export declare namespace AWSService {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AWSService) => any;
}
/**
 * <p>
 *    The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
 * </p>
 */
export interface Scope {
  /**
   * <p>
   *  The AWS accounts included in the scope of the assessment.
   * </p>
   */
  awsAccounts?: AWSAccount[];
  /**
   * <p>
   *  The AWS services included in the scope of the assessment.
   * </p>
   */
  awsServices?: AWSService[];
}
export declare namespace Scope {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Scope) => any;
}
export declare enum AssessmentStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
/**
 * <p>
 *    The metadata associated with the specified assessment.
 * </p>
 */
export interface AssessmentMetadata {
  /**
   * <p>
   *    The name of the assessment.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *    The unique identifier for the assessment.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *    The description of the assessment.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *          The name of a compliance standard related to the assessment, such as PCI-DSS.
   *       </p>
   */
  complianceType?: string;
  /**
   * <p>
   *    The overall status of the assessment.
   * </p>
   */
  status?: AssessmentStatus | string;
  /**
   * <p>
   *    The destination in which evidence reports are stored for the specified assessment.
   * </p>
   */
  assessmentReportsDestination?: AssessmentReportsDestination;
  /**
   * <p>
   *    The wrapper of AWS accounts and services in scope for the assessment.
   * </p>
   */
  scope?: Scope;
  /**
   * <p>
   *    The roles associated with the assessment.
   * </p>
   */
  roles?: Role[];
  /**
   * <p>
   *    The delegations associated with the assessment.
   * </p>
   */
  delegations?: Delegation[];
  /**
   * <p>
   *    Specifies when the assessment was created.
   * </p>
   */
  creationTime?: Date;
  /**
   * <p>
   *    The time of the most recent update.
   * </p>
   */
  lastUpdated?: Date;
}
export declare namespace AssessmentMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentMetadata) => any;
}
/**
 * <p>
 *    An entity that defines the scope of audit evidence collected by AWS Audit Manager. An AWS Audit Manager assessment is an implementation of an AWS Audit Manager framework.
 * </p>
 */
export interface Assessment {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the assessment.
   * </p>
   */
  arn?: string;
  /**
   * <p>
   *  The AWS account associated with the assessment.
   * </p>
   */
  awsAccount?: AWSAccount;
  /**
   * <p>
   *  The metadata for the specified assessment.
   * </p>
   */
  metadata?: AssessmentMetadata;
  /**
   * <p>
   *    The framework from which the assessment was created.
   * </p>
   */
  framework?: AssessmentFramework;
  /**
   * <p>
   *  The tags associated with the assessment.
   * </p>
   */
  tags?: {
    [key: string]: string;
  };
}
export declare namespace Assessment {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Assessment) => any;
}
/**
 * <p>
 * The folder in which AWS Audit Manager stores evidence for an assessment.
 * </p>
 */
export interface AssessmentEvidenceFolder {
  /**
   * <p>
   * The name of the specified evidence folder.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *          The date when the first evidence was added to the evidence folder.
   *       </p>
   */
  date?: Date;
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId?: string;
  /**
   * <p>
   *    The identifier for the control set.
   * </p>
   */
  controlSetId?: string;
  /**
   * <p>
   *
   *    The unique identifier for the specified control.
   * </p>
   */
  controlId?: string;
  /**
   * <p>
   * The identifier for the folder in which evidence is stored.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *    The AWS service from which the evidence was collected.
   * </p>
   */
  dataSource?: string;
  /**
   * <p>
   *    The name of the user who created the evidence folder.
   * </p>
   */
  author?: string;
  /**
   * <p>
   *          The total amount of evidence in the evidence folder.
   *       </p>
   */
  totalEvidence?: number;
  /**
   * <p>
   *          The total count of evidence included in the assessment report.
   *       </p>
   */
  assessmentReportSelectionCount?: number;
  /**
   * <p>
   *          The name of the control.
   *       </p>
   */
  controlName?: string;
  /**
   * <p>
   *          The amount of evidence included in the evidence folder.
   *       </p>
   */
  evidenceResourcesIncludedCount?: number;
  /**
   * <p>
   *          The number of evidence that falls under the configuration data category. This evidence is collected from configuration snapshots of other AWS services such as Amazon EC2, Amazon S3, or IAM.
   *       </p>
   */
  evidenceByTypeConfigurationDataCount?: number;
  /**
   * <p>
   *          The number of evidence that falls under the manual category. This evidence is imported manually.
   *       </p>
   */
  evidenceByTypeManualCount?: number;
  /**
   * <p>
   *          The number of evidence that falls under the compliance check category. This evidence is collected from AWS Config or AWS Security Hub.
   *       </p>
   */
  evidenceByTypeComplianceCheckCount?: number;
  /**
   * <p>
   *          The total number of issues that were reported directly from AWS Security
   *          Hub, AWS Config, or both.
   *       </p>
   */
  evidenceByTypeComplianceCheckIssuesCount?: number;
  /**
   * <p>
   *          The number of evidence that falls under the user activity category. This evidence is collected from AWS CloudTrail logs.
   *       </p>
   */
  evidenceByTypeUserActivityCount?: number;
  /**
   * <p>
   *    The total number of AWS resources assessed to generate the evidence.
   * </p>
   */
  evidenceAwsServiceSourceCount?: number;
}
export declare namespace AssessmentEvidenceFolder {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentEvidenceFolder) => any;
}
export declare enum FrameworkType {
  CUSTOM = "Custom",
  STANDARD = "Standard",
}
/**
 * <p>
 *    The metadata associated with a standard or custom framework.
 * </p>
 */
export interface AssessmentFrameworkMetadata {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the framework.
   * </p>
   */
  arn?: string;
  /**
   * <p>
   * The unique identified for the specified framework.
   * </p>
   */
  id?: string;
  /**
   * <p>
   * The framework type, such as standard or custom.
   * </p>
   */
  type?: FrameworkType | string;
  /**
   * <p>
   * The name of the specified framework.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *    The description of the specified framework.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *    The logo associated with the framework.
   * </p>
   */
  logo?: string;
  /**
   * <p>
   *    The compliance type that the new custom framework supports, such as CIS or HIPAA.
   * </p>
   */
  complianceType?: string;
  /**
   * <p>
   * The number of controls associated with the specified framework.
   * </p>
   */
  controlsCount?: number;
  /**
   * <p>
   *    The number of control sets associated with the specified framework.
   * </p>
   */
  controlSetsCount?: number;
  /**
   * <p>
   *    Specifies when the framework was created.
   * </p>
   */
  createdAt?: Date;
  /**
   * <p>
   *    Specifies when the framework was most recently updated.
   * </p>
   */
  lastUpdatedAt?: Date;
}
export declare namespace AssessmentFrameworkMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentFrameworkMetadata) => any;
}
/**
 * <p>
 * A metadata object associated with an assessment in AWS Audit Manager.
 * </p>
 */
export interface AssessmentMetadataItem {
  /**
   * <p>
   * The name of the assessment.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *    The unique identifier for the assessment.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *          The name of the compliance standard related to the assessment, such as PCI-DSS.
   *       </p>
   */
  complianceType?: string;
  /**
   * <p>
   * The current status of the assessment.
   * </p>
   */
  status?: AssessmentStatus | string;
  /**
   * <p>
   *    The roles associated with the assessment.
   * </p>
   */
  roles?: Role[];
  /**
   * <p>
   *    The delegations associated with the assessment.
   * </p>
   */
  delegations?: Delegation[];
  /**
   * <p>
   *    Specifies when the assessment was created.
   * </p>
   */
  creationTime?: Date;
  /**
   * <p>
   *    The time of the most recent update.
   * </p>
   */
  lastUpdated?: Date;
}
export declare namespace AssessmentMetadataItem {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentMetadataItem) => any;
}
export declare enum AssessmentReportStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}
/**
 * <p>
 *  A finalized document generated from an AWS Audit Manager assessment. These reports summarize the relevant evidence collected for your audit, and link to the relevant evidence folders which are named and organized according to the controls specified in your assessment.
 * </p>
 */
export interface AssessmentReport {
  /**
   * <p>
   * The unique identifier for the specified assessment report.
   * </p>
   */
  id?: string;
  /**
   * <p>
   * The name given to the assessment report.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *    The description of the specified assessment report.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *    The identifier for the specified AWS account.
   * </p>
   */
  awsAccountId?: string;
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId?: string;
  /**
   * <p>
   * The name of the associated assessment.
   * </p>
   */
  assessmentName?: string;
  /**
   * <p>
   *    The name of the user who created the assessment report.
   * </p>
   */
  author?: string;
  /**
   * <p>
   * The current status of the specified assessment report.
   * </p>
   */
  status?: AssessmentReportStatus | string;
  /**
   * <p>
   *    Specifies when the assessment report was created.
   * </p>
   */
  creationTime?: Date;
}
export declare namespace AssessmentReport {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentReport) => any;
}
/**
 * <p>
 *    An error entity for the <code>AssessmentReportEvidence</code> API. This is used to provide more meaningful errors than a simple string message.
 * </p>
 */
export interface AssessmentReportEvidenceError {
  /**
   * <p>
   *    The identifier for the evidence.
   * </p>
   */
  evidenceId?: string;
  /**
   * <p>
   *    The error code returned by the <code>AssessmentReportEvidence</code> API.
   * </p>
   */
  errorCode?: string;
  /**
   * <p>
   *    The error message returned by the <code>AssessmentReportEvidence</code> API.
   * </p>
   */
  errorMessage?: string;
}
export declare namespace AssessmentReportEvidenceError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentReportEvidenceError) => any;
}
/**
 * <p>
 *    The metadata objects associated with the specified assessment report.
 * </p>
 */
export interface AssessmentReportMetadata {
  /**
   * <p>
   * The unique identifier for the assessment report.
   * </p>
   */
  id?: string;
  /**
   * <p>
   * The name of the assessment report.
   * </p>
   */
  name?: string;
  /**
   * <p>
   * The description of the specified assessment report.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *    The unique identifier for the associated assessment.
   * </p>
   */
  assessmentId?: string;
  /**
   * <p>The name of the associated assessment.
   * </p>
   */
  assessmentName?: string;
  /**
   * <p>
   *    The name of the user who created the assessment report.
   * </p>
   */
  author?: string;
  /**
   * <p>
   * The current status of the assessment report.
   * </p>
   */
  status?: AssessmentReportStatus | string;
  /**
   * <p>
   *    Specifies when the assessment report was created.
   * </p>
   */
  creationTime?: Date;
}
export declare namespace AssessmentReportMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssessmentReportMetadata) => any;
}
export interface AssociateAssessmentReportEvidenceFolderRequest {
  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *          The identifier for the folder in which evidence is stored.
   *       </p>
   */
  evidenceFolderId: string | undefined;
}
export declare namespace AssociateAssessmentReportEvidenceFolderRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociateAssessmentReportEvidenceFolderRequest) => any;
}
export interface AssociateAssessmentReportEvidenceFolderResponse {}
export declare namespace AssociateAssessmentReportEvidenceFolderResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: AssociateAssessmentReportEvidenceFolderResponse) => any;
}
/**
 * <p>
 *   An internal service error occurred during the processing of your request. Try again later.
 * </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
}
export declare namespace InternalServerException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>
 *   The resource specified in the request cannot be found.
 * </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>
   *       The unique identifier for the specified resource.
   *       </p>
   */
  resourceId: string | undefined;
  /**
   * <p>
   *          The type of resource affected by the error.
   *       </p>
   */
  resourceType: string | undefined;
}
export declare namespace ResourceNotFoundException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>
 *    Indicates that the request has invalid or missing parameters for the specified field.
 * </p>
 */
export interface ValidationExceptionField {
  /**
   * <p>
   *  The name of the validation error.
   * </p>
   */
  name: string | undefined;
  /**
   * <p>
   *  The body of the error message.
   * </p>
   */
  message: string | undefined;
}
export declare namespace ValidationExceptionField {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ValidationExceptionField) => any;
}
export declare enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}
/**
 * <p>
 *    The request has invalid or missing parameters.
 * </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>
   *          The reason the request failed validation.
   *       </p>
   */
  reason?: ValidationExceptionReason | string;
  /**
   * <p>
   *          The fields that caused the error, if applicable.
   *       </p>
   */
  fields?: ValidationExceptionField[];
}
export declare namespace ValidationException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface BatchAssociateAssessmentReportEvidenceRequest {
  /**
   * <p>
   *     The unique identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *          The identifier for the folder in which the evidence is stored.
   *       </p>
   */
  evidenceFolderId: string | undefined;
  /**
   * <p>
   *          The list of evidence identifiers.
   *       </p>
   */
  evidenceIds: string[] | undefined;
}
export declare namespace BatchAssociateAssessmentReportEvidenceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAssociateAssessmentReportEvidenceRequest) => any;
}
export interface BatchAssociateAssessmentReportEvidenceResponse {
  /**
   * <p>
   *          The identifier for the evidence.
   *       </p>
   */
  evidenceIds?: string[];
  /**
   * <p>
   *          A list of errors returned by the <code>BatchAssociateAssessmentReportEvidence</code> API.
   *       </p>
   */
  errors?: AssessmentReportEvidenceError[];
}
export declare namespace BatchAssociateAssessmentReportEvidenceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchAssociateAssessmentReportEvidenceResponse) => any;
}
/**
 * <p>
 *   A collection of attributes used to create a delegation for an assessment in AWS Audit Manager.
 * </p>
 */
export interface CreateDelegationRequest {
  /**
   * <p>
   *    A comment related to the delegation request.
   * </p>
   */
  comment?: string;
  /**
   * <p>
   *    The unique identifier for the control set.
   * </p>
   */
  controlSetId?: string;
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the IAM role.
   * </p>
   */
  roleArn?: string;
  /**
   * <p>
   *    The type of customer persona.
   * </p>
   *          <note>
   *             <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>. </p>
   *             <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>.</p>
   *             <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be <code>RESOURCE_OWNER</code>.</p>
   *          </note>
   */
  roleType?: RoleType | string;
}
export declare namespace CreateDelegationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDelegationRequest) => any;
}
export interface BatchCreateDelegationByAssessmentRequest {
  /**
   * <p>
   *          The API request to batch create delegations in AWS Audit Manager.
   *       </p>
   */
  createDelegationRequests: CreateDelegationRequest[] | undefined;
  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;
}
export declare namespace BatchCreateDelegationByAssessmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateDelegationByAssessmentRequest) => any;
}
/**
 * <p>
 *    An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.
 * </p>
 */
export interface BatchCreateDelegationByAssessmentError {
  /**
   * <p>
   * The API request to batch create delegations in AWS Audit Manager.
   * </p>
   */
  createDelegationRequest?: CreateDelegationRequest;
  /**
   * <p>
   *    The error code returned by the <code>BatchCreateDelegationByAssessment</code> API.
   * </p>
   */
  errorCode?: string;
  /**
   * <p>
   *    The error message returned by the <code>BatchCreateDelegationByAssessment</code> API.
   * </p>
   */
  errorMessage?: string;
}
export declare namespace BatchCreateDelegationByAssessmentError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateDelegationByAssessmentError) => any;
}
export interface BatchCreateDelegationByAssessmentResponse {
  /**
   * <p>
   *          The delegations associated with the assessment.
   *       </p>
   */
  delegations?: Delegation[];
  /**
   * <p>
   *          A list of errors returned by the <code>BatchCreateDelegationByAssessment</code> API.
   *       </p>
   */
  errors?: BatchCreateDelegationByAssessmentError[];
}
export declare namespace BatchCreateDelegationByAssessmentResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchCreateDelegationByAssessmentResponse) => any;
}
export interface BatchDeleteDelegationByAssessmentRequest {
  /**
   * <p>
   *    The identifiers for the specified delegations.
   *       </p>
   */
  delegationIds: string[] | undefined;
  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;
}
export declare namespace BatchDeleteDelegationByAssessmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDeleteDelegationByAssessmentRequest) => any;
}
/**
 * <p>
 *    An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message.
 * </p>
 */
export interface BatchDeleteDelegationByAssessmentError {
  /**
   * <p>
   *    The identifier for the specified delegation.
   * </p>
   */
  delegationId?: string;
  /**
   * <p>
   *    The error code returned by the <code>BatchDeleteDelegationByAssessment</code> API.
   * </p>
   */
  errorCode?: string;
  /**
   * <p>
   *    The error message returned by the <code>BatchDeleteDelegationByAssessment</code> API.
   * </p>
   */
  errorMessage?: string;
}
export declare namespace BatchDeleteDelegationByAssessmentError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDeleteDelegationByAssessmentError) => any;
}
export interface BatchDeleteDelegationByAssessmentResponse {
  /**
   * <p>
   *          A list of errors returned by the <code>BatchDeleteDelegationByAssessment</code> API.
   *       </p>
   */
  errors?: BatchDeleteDelegationByAssessmentError[];
}
export declare namespace BatchDeleteDelegationByAssessmentResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDeleteDelegationByAssessmentResponse) => any;
}
export interface BatchDisassociateAssessmentReportEvidenceRequest {
  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *          The identifier for the folder in which evidence is stored.
   *       </p>
   */
  evidenceFolderId: string | undefined;
  /**
   * <p>
   *          The list of evidence identifiers.
   *       </p>
   */
  evidenceIds: string[] | undefined;
}
export declare namespace BatchDisassociateAssessmentReportEvidenceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDisassociateAssessmentReportEvidenceRequest) => any;
}
export interface BatchDisassociateAssessmentReportEvidenceResponse {
  /**
   * <p>
   *          The identifier for the evidence.
   *       </p>
   */
  evidenceIds?: string[];
  /**
   * <p>
   *          A list of errors returned by the <code>BatchDisassociateAssessmentReportEvidence</code> API.
   *       </p>
   */
  errors?: AssessmentReportEvidenceError[];
}
export declare namespace BatchDisassociateAssessmentReportEvidenceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchDisassociateAssessmentReportEvidenceResponse) => any;
}
/**
 * <p>
 *    Evidence that is uploaded to AWS Audit Manager manually.
 * </p>
 */
export interface ManualEvidence {
  /**
   * <p>
   *    The Amazon S3 URL that points to a manual evidence object.
   * </p>
   */
  s3ResourcePath?: string;
}
export declare namespace ManualEvidence {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ManualEvidence) => any;
}
export interface BatchImportEvidenceToAssessmentControlRequest {
  /**
   * <p>
   *          The identifier for the specified assessment.
   *       </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *          The identifier for the specified control set.
   *       </p>
   */
  controlSetId: string | undefined;
  /**
   * <p>
   *
   *                The identifier for the specified control.
   *       </p>
   */
  controlId: string | undefined;
  /**
   * <p>
   *          The list of manual evidence objects.
   *       </p>
   */
  manualEvidence: ManualEvidence[] | undefined;
}
export declare namespace BatchImportEvidenceToAssessmentControlRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchImportEvidenceToAssessmentControlRequest) => any;
}
/**
 * <p>
 *    An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message.
 * </p>
 */
export interface BatchImportEvidenceToAssessmentControlError {
  /**
   * <p>
   * Manual evidence that cannot be collected automatically by AWS Audit Manager.
   * </p>
   */
  manualEvidence?: ManualEvidence;
  /**
   * <p>
   *   The error code returned by the <code>BatchImportEvidenceToAssessmentControl</code> API.
   * </p>
   */
  errorCode?: string;
  /**
   * <p>
   *   The error message returned by the <code>BatchImportEvidenceToAssessmentControl</code> API.
   * </p>
   */
  errorMessage?: string;
}
export declare namespace BatchImportEvidenceToAssessmentControlError {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchImportEvidenceToAssessmentControlError) => any;
}
export interface BatchImportEvidenceToAssessmentControlResponse {
  /**
   * <p>
   *          A list of errors returned by the <code>BatchImportEvidenceToAssessmentControl</code> API.
   *       </p>
   */
  errors?: BatchImportEvidenceToAssessmentControlError[];
}
export declare namespace BatchImportEvidenceToAssessmentControlResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BatchImportEvidenceToAssessmentControlResponse) => any;
}
export interface CreateAssessmentRequest {
  /**
   * <p>
   *          The name of the assessment to be created.
   *       </p>
   */
  name: string | undefined;
  /**
   * <p>
   *          The optional description of the assessment to be created.
   *       </p>
   */
  description?: string;
  /**
   * <p>
   *          The assessment report storage destination for the specified assessment that is being created.
   *       </p>
   */
  assessmentReportsDestination: AssessmentReportsDestination | undefined;
  /**
   * <p>
   *    The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
   * </p>
   */
  scope: Scope | undefined;
  /**
   * <p>
   *          The list of roles for the specified assessment.
   *       </p>
   */
  roles: Role[] | undefined;
  /**
   * <p>
   *          The identifier for the specified framework.
   *       </p>
   */
  frameworkId: string | undefined;
  /**
   * <p>
   *    The tags associated with the assessment.
   * </p>
   */
  tags?: {
    [key: string]: string;
  };
}
export declare namespace CreateAssessmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAssessmentRequest) => any;
}
export interface CreateAssessmentResponse {
  /**
   * <p>
   *    An entity that defines the scope of audit evidence collected by AWS Audit Manager. An AWS Audit Manager assessment is an implementation of an AWS Audit Manager framework.
   * </p>
   */
  assessment?: Assessment;
}
export declare namespace CreateAssessmentResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAssessmentResponse) => any;
}
/**
 * <p>
 * Control entity attributes that uniquely identify an existing control to be added to a framework in AWS Audit Manager.
 * </p>
 */
export interface CreateAssessmentFrameworkControl {
  /**
   * <p>
   * The unique identifier of the control.
   * </p>
   */
  id?: string;
}
export declare namespace CreateAssessmentFrameworkControl {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAssessmentFrameworkControl) => any;
}
/**
 * <p>
 * A <code>controlSet</code> entity that represents a collection of controls in AWS Audit Manager. This does not contain the control set ID.
 * </p>
 */
export interface CreateAssessmentFrameworkControlSet {
  /**
   * <p>
   * The name of the specified control set.
   * </p>
   */
  name: string | undefined;
  /**
   * <p>
   *    The list of controls within the control set. This does not contain the control set ID.
   * </p>
   */
  controls?: CreateAssessmentFrameworkControl[];
}
export declare namespace CreateAssessmentFrameworkControlSet {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAssessmentFrameworkControlSet) => any;
}
export interface CreateAssessmentFrameworkRequest {
  /**
   * <p>
   * The name of the new custom framework.
   * </p>
   */
  name: string | undefined;
  /**
   * <p>
   * An optional description for the new custom framework.
   * </p>
   */
  description?: string;
  /**
   * <p>
   * The compliance type that the new custom framework supports, such as CIS or HIPAA.
   * </p>
   */
  complianceType?: string;
  /**
   * <p>
   *    The control sets to be associated with the framework.
   * </p>
   */
  controlSets: CreateAssessmentFrameworkControlSet[] | undefined;
  /**
   * <p>
   *    The tags associated with the framework.
   * </p>
   */
  tags?: {
    [key: string]: string;
  };
}
export declare namespace CreateAssessmentFrameworkRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAssessmentFrameworkRequest) => any;
}
export declare enum SourceFrequency {
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY",
}
export declare enum KeywordInputType {
  SELECT_FROM_LIST = "SELECT_FROM_LIST",
}
/**
 * <p>
 * The keyword to search for in AWS CloudTrail logs, AWS Config rules, AWS Security Hub checks, and AWS API names.
 * </p>
 */
export interface SourceKeyword {
  /**
   * <p>
   * The method of input for the specified keyword.
   * </p>
   */
  keywordInputType?: KeywordInputType | string;
  /**
   * <p>
   * The value of the keyword used to search AWS CloudTrail logs, AWS Config rules, AWS Security Hub checks, and AWS API names when mapping a control data source.
   * </p>
   */
  keywordValue?: string;
}
export declare namespace SourceKeyword {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: SourceKeyword) => any;
}
export declare enum SourceSetUpOption {
  PROCEDURAL_CONTROLS_MAPPING = "Procedural_Controls_Mapping",
  SYSTEM_CONTROLS_MAPPING = "System_Controls_Mapping",
}
export declare enum SourceType {
  AWS_API_CALL = "AWS_API_Call",
  AWS_CLOUDTRAIL = "AWS_Cloudtrail",
  AWS_CONFIG = "AWS_Config",
  AWS_SECURITY_HUB = "AWS_Security_Hub",
  MANUAL = "MANUAL",
}
/**
 * <p>
 *    The data source that determines from where AWS Audit Manager collects evidence for the control.
 * </p>
 */
export interface ControlMappingSource {
  /**
   * <p>
   * The unique identifier for the specified source.
   * </p>
   */
  sourceId?: string;
  /**
   * <p>
   * The name of the specified source.
   * </p>
   */
  sourceName?: string;
  /**
   * <p>
   * The description of the specified source.
   * </p>
   */
  sourceDescription?: string;
  /**
   * <p>
   *    The setup option for the data source, which reflects if the evidence collection is automated or manual.
   * </p>
   */
  sourceSetUpOption?: SourceSetUpOption | string;
  /**
   * <p>
   *    Specifies one of the five types of data sources for evidence collection.
   * </p>
   */
  sourceType?: SourceType | string;
  /**
   * <p>
   * The keyword to search for in AWS CloudTrail logs, AWS Config rules, AWS Security Hub checks, and AWS API names.
   * </p>
   */
  sourceKeyword?: SourceKeyword;
  /**
   * <p>
   *          The frequency of evidence collection for the specified control mapping source.
   *       </p>
   */
  sourceFrequency?: SourceFrequency | string;
  /**
   * <p>
   *          The instructions for troubleshooting the specified control.
   *       </p>
   */
  troubleshootingText?: string;
}
export declare namespace ControlMappingSource {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ControlMappingSource) => any;
}
export declare enum ControlType {
  CUSTOM = "Custom",
  STANDARD = "Standard",
}
/**
 * <p>
 * A control in AWS Audit Manager.
 * </p>
 */
export interface Control {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified control.
   * </p>
   */
  arn?: string;
  /**
   * <p>
   * The unique identifier for the control.
   * </p>
   */
  id?: string;
  /**
   * <p>
   * The type of control, such as custom or standard.
   * </p>
   */
  type?: ControlType | string;
  /**
   * <p>
   * The name of the specified control.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *    The description of the specified control.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *          The steps to follow to determine if the control has been satisfied.
   *       </p>
   */
  testingInformation?: string;
  /**
   * <p>
   *          The title of the action plan for remediating the control.
   *       </p>
   */
  actionPlanTitle?: string;
  /**
   * <p>
   *
   *          The recommended actions to carry out if the control is not fulfilled.
   *       </p>
   */
  actionPlanInstructions?: string;
  /**
   * <p>
   *    The data source that determines from where AWS Audit Manager collects evidence for the control.
   * </p>
   */
  controlSources?: string;
  /**
   * <p>
   *    The data mapping sources for the specified control.
   * </p>
   */
  controlMappingSources?: ControlMappingSource[];
  /**
   * <p>
   * Specifies when the control was created.
   * </p>
   */
  createdAt?: Date;
  /**
   * <p>
   * Specifies when the control was most recently updated.
   * </p>
   */
  lastUpdatedAt?: Date;
  /**
   * <p>
   *          The IAM user or role that created the control.
   *       </p>
   */
  createdBy?: string;
  /**
   * <p>
   *          The IAM user or role that most recently updated the control.
   *       </p>
   */
  lastUpdatedBy?: string;
  /**
   * <p>
   *    The tags associated with the control.
   * </p>
   */
  tags?: {
    [key: string]: string;
  };
}
export declare namespace Control {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Control) => any;
}
/**
 * <p>
 * A set of controls in AWS Audit Manager.
 * </p>
 */
export interface ControlSet {
  /**
   * <p>
   *    The identifier of the control set in the assessment. This is the control set name in a plain string format.
   * </p>
   */
  id?: string;
  /**
   * <p>
   * The name of the control set.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *    The list of controls within the control set.
   * </p>
   */
  controls?: Control[];
}
export declare namespace ControlSet {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ControlSet) => any;
}
/**
 * <p>
 *    The file used to structure and automate AWS Audit Manager assessments for a given compliance standard.
 * </p>
 */
export interface Framework {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified framework.
   * </p>
   */
  arn?: string;
  /**
   * <p>
   * The unique identifier for the specified framework.
   * </p>
   */
  id?: string;
  /**
   * <p>
   * The name of the specified framework.
   * </p>
   */
  name?: string;
  /**
   * <p>
   * The framework type, such as custom or standard.
   * </p>
   */
  type?: FrameworkType | string;
  /**
   * <p>
   *    The compliance type that the new custom framework supports, such as CIS or HIPAA.
   * </p>
   */
  complianceType?: string;
  /**
   * <p>
   *    The description of the specified framework.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *    The logo associated with the framework.
   * </p>
   */
  logo?: string;
  /**
   * <p>
   * The sources from which AWS Audit Manager collects evidence for the control.
   * </p>
   */
  controlSources?: string;
  /**
   * <p>
   *    The control sets associated with the framework.
   * </p>
   */
  controlSets?: ControlSet[];
  /**
   * <p>
   *    Specifies when the framework was created.
   * </p>
   */
  createdAt?: Date;
  /**
   * <p>
   *    Specifies when the framework was most recently updated.
   * </p>
   */
  lastUpdatedAt?: Date;
  /**
   * <p>
   *    The IAM user or role that created the framework.
   * </p>
   */
  createdBy?: string;
  /**
   * <p>
   *    The IAM user or role that most recently updated the framework.
   * </p>
   */
  lastUpdatedBy?: string;
  /**
   * <p>
   *          The tags associated with the framework.
   *       </p>
   */
  tags?: {
    [key: string]: string;
  };
}
export declare namespace Framework {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Framework) => any;
}
export interface CreateAssessmentFrameworkResponse {
  /**
   * <p>
   *    The name of the new framework returned by the <code>CreateAssessmentFramework</code> API.
   * </p>
   */
  framework?: Framework;
}
export declare namespace CreateAssessmentFrameworkResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAssessmentFrameworkResponse) => any;
}
export interface CreateAssessmentReportRequest {
  /**
   * <p>
   * The name of the new assessment report.
   * </p>
   */
  name: string | undefined;
  /**
   * <p>
   * The description of the assessment report.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
}
export declare namespace CreateAssessmentReportRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAssessmentReportRequest) => any;
}
export interface CreateAssessmentReportResponse {
  /**
   * <p>
   *    The new assessment report returned by the <code>CreateAssessmentReport</code> API.
   * </p>
   */
  assessmentReport?: AssessmentReport;
}
export declare namespace CreateAssessmentReportResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateAssessmentReportResponse) => any;
}
/**
 * <p>
 *   Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>.
 * </p>
 */
export interface CreateControlMappingSource {
  /**
   * <p>
   * The name of the control mapping data source.
   * </p>
   */
  sourceName?: string;
  /**
   * <p>
   *    The description of the data source that determines from where AWS Audit Manager collects evidence for the control.
   * </p>
   */
  sourceDescription?: string;
  /**
   * <p>
   *    The setup option for the data source, which reflects if the evidence collection is automated or manual.
   * </p>
   */
  sourceSetUpOption?: SourceSetUpOption | string;
  /**
   * <p>
   *    Specifies one of the five types of data sources for evidence collection.
   *
   * </p>
   */
  sourceType?: SourceType | string;
  /**
   * <p>
   * The keyword to search for in AWS CloudTrail logs, AWS Config rules, AWS Security Hub checks, and AWS API names.
   * </p>
   */
  sourceKeyword?: SourceKeyword;
  /**
   * <p>
   *    The frequency of evidence collection for the specified control mapping source.
   * </p>
   */
  sourceFrequency?: SourceFrequency | string;
  /**
   * <p>
   * The instructions for troubleshooting the specified control.
   * </p>
   */
  troubleshootingText?: string;
}
export declare namespace CreateControlMappingSource {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateControlMappingSource) => any;
}
export interface CreateControlRequest {
  /**
   * <p>
   * The name of the control.
   * </p>
   */
  name: string | undefined;
  /**
   * <p>
   * The description of the control.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *          The steps to follow to determine if the control has been satisfied.
   *       </p>
   */
  testingInformation?: string;
  /**
   * <p>
   *          The title of the action plan for remediating the control.
   *       </p>
   */
  actionPlanTitle?: string;
  /**
   * <p>
   *          The recommended actions to carry out if the control is not fulfilled.
   *       </p>
   */
  actionPlanInstructions?: string;
  /**
   * <p>
   *    The data mapping sources for the specified control.
   * </p>
   */
  controlMappingSources: CreateControlMappingSource[] | undefined;
  /**
   * <p>
   *    The tags associated with the control.
   * </p>
   */
  tags?: {
    [key: string]: string;
  };
}
export declare namespace CreateControlRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateControlRequest) => any;
}
export interface CreateControlResponse {
  /**
   * <p>
   *    The new control returned by the <code>CreateControl</code> API.
   * </p>
   */
  control?: Control;
}
export declare namespace CreateControlResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateControlResponse) => any;
}
export interface DeleteAssessmentRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
}
export declare namespace DeleteAssessmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAssessmentRequest) => any;
}
export interface DeleteAssessmentResponse {}
export declare namespace DeleteAssessmentResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAssessmentResponse) => any;
}
export interface DeleteAssessmentFrameworkRequest {
  /**
   * <p>
   *    The identifier for the specified framework.
   * </p>
   */
  frameworkId: string | undefined;
}
export declare namespace DeleteAssessmentFrameworkRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAssessmentFrameworkRequest) => any;
}
export interface DeleteAssessmentFrameworkResponse {}
export declare namespace DeleteAssessmentFrameworkResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAssessmentFrameworkResponse) => any;
}
export interface DeleteAssessmentReportRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   * The unique identifier for the assessment report.
   * </p>
   */
  assessmentReportId: string | undefined;
}
export declare namespace DeleteAssessmentReportRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAssessmentReportRequest) => any;
}
export interface DeleteAssessmentReportResponse {}
export declare namespace DeleteAssessmentReportResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteAssessmentReportResponse) => any;
}
export interface DeleteControlRequest {
  /**
   * <p>
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;
}
export declare namespace DeleteControlRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteControlRequest) => any;
}
export interface DeleteControlResponse {}
export declare namespace DeleteControlResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteControlResponse) => any;
}
export interface DeregisterAccountRequest {}
export declare namespace DeregisterAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeregisterAccountRequest) => any;
}
export interface DeregisterAccountResponse {
  /**
   * <p>
   * The registration status of the account.
   * </p>
   */
  status?: AccountStatus | string;
}
export declare namespace DeregisterAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeregisterAccountResponse) => any;
}
export interface DeregisterOrganizationAdminAccountRequest {
  /**
   * <p>
   *  The identifier for the specified administrator account.
   * </p>
   */
  adminAccountId?: string;
}
export declare namespace DeregisterOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeregisterOrganizationAdminAccountRequest) => any;
}
export interface DeregisterOrganizationAdminAccountResponse {}
export declare namespace DeregisterOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeregisterOrganizationAdminAccountResponse) => any;
}
export interface DisassociateAssessmentReportEvidenceFolderRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The identifier for the folder in which evidence is stored.
   * </p>
   */
  evidenceFolderId: string | undefined;
}
export declare namespace DisassociateAssessmentReportEvidenceFolderRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociateAssessmentReportEvidenceFolderRequest) => any;
}
export interface DisassociateAssessmentReportEvidenceFolderResponse {}
export declare namespace DisassociateAssessmentReportEvidenceFolderResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DisassociateAssessmentReportEvidenceFolderResponse) => any;
}
export interface GetAccountStatusRequest {}
export declare namespace GetAccountStatusRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAccountStatusRequest) => any;
}
export interface GetAccountStatusResponse {
  /**
   * <p>
   * The status of the specified AWS account.
   * </p>
   */
  status?: AccountStatus | string;
}
export declare namespace GetAccountStatusResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAccountStatusResponse) => any;
}
export interface GetAssessmentRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
}
export declare namespace GetAssessmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAssessmentRequest) => any;
}
export interface GetAssessmentResponse {
  /**
   * <p>
   *    An entity that defines the scope of audit evidence collected by AWS Audit Manager. An AWS Audit Manager assessment is an implementation of an AWS Audit Manager framework.
   * </p>
   */
  assessment?: Assessment;
  /**
   * <p>
   *      The wrapper that contains the AWS Audit Manager role information of the current user, such as the role type and IAM Amazon Resource Name (ARN).
   *   </p>
   */
  userRole?: Role;
}
export declare namespace GetAssessmentResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAssessmentResponse) => any;
}
export interface GetAssessmentFrameworkRequest {
  /**
   * <p>
   *    The identifier for the specified framework.
   * </p>
   */
  frameworkId: string | undefined;
}
export declare namespace GetAssessmentFrameworkRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAssessmentFrameworkRequest) => any;
}
export interface GetAssessmentFrameworkResponse {
  /**
   * <p>
   *    The framework returned by the <code>GetAssessmentFramework</code> API.
   * </p>
   */
  framework?: Framework;
}
export declare namespace GetAssessmentFrameworkResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAssessmentFrameworkResponse) => any;
}
export interface GetAssessmentReportUrlRequest {
  /**
   * <p>
   * The identifier for the assessment report.
   * </p>
   */
  assessmentReportId: string | undefined;
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
}
export declare namespace GetAssessmentReportUrlRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAssessmentReportUrlRequest) => any;
}
/**
 * <p>
 *    A uniform resource locator, used as a unique identifier to locate a resource on the internet.
 * </p>
 */
export interface URL {
  /**
   * <p>
   *    The name or word used as a hyperlink to the URL.
   * </p>
   */
  hyperlinkName?: string;
  /**
   * <p>
   *    The unique identifier for the internet resource.
   * </p>
   */
  link?: string;
}
export declare namespace URL {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: URL) => any;
}
export interface GetAssessmentReportUrlResponse {
  /**
   * <p>
   *    A uniform resource locator, used as a unique identifier to locate a resource on the internet.
   * </p>
   */
  preSignedUrl?: URL;
}
export declare namespace GetAssessmentReportUrlResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetAssessmentReportUrlResponse) => any;
}
export interface GetChangeLogsRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId?: string;
  /**
   * <p>
   *
   *    The identifier for the specified control.
   * </p>
   */
  controlId?: string;
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace GetChangeLogsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetChangeLogsRequest) => any;
}
export declare enum ObjectTypeEnum {
  ASSESSMENT = "ASSESSMENT",
  ASSESSMENT_REPORT = "ASSESSMENT_REPORT",
  CONTROL = "CONTROL",
  CONTROL_SET = "CONTROL_SET",
  DELEGATION = "DELEGATION",
}
/**
 * <p>
 *    The record of a change within AWS Audit Manager, such as a modified assessment, a delegated control set, and so on.
 * </p>
 */
export interface ChangeLog {
  /**
   * <p>
   *  The changelog object type, such as an assessment, control, or control set.
   * </p>
   */
  objectType?: ObjectTypeEnum | string;
  /**
   * <p>
   *  The name of the changelog object.
   * </p>
   */
  objectName?: string;
  /**
   * <p>
   *    The action performed.
   * </p>
   */
  action?: ActionEnum | string;
  /**
   * <p>
   *  The time of creation for the changelog object.
   * </p>
   */
  createdAt?: Date;
  /**
   * <p>
   *  The IAM user or role that performed the action.
   * </p>
   */
  createdBy?: string;
}
export declare namespace ChangeLog {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ChangeLog) => any;
}
export interface GetChangeLogsResponse {
  /**
   * <p>
   *          The list of user activity for the control.
   *       </p>
   */
  changeLogs?: ChangeLog[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace GetChangeLogsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetChangeLogsResponse) => any;
}
export interface GetControlRequest {
  /**
   * <p>
   *
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;
}
export declare namespace GetControlRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetControlRequest) => any;
}
export interface GetControlResponse {
  /**
   * <p>
   *    The name of the control returned by the <code>GetControl</code> API.
   * </p>
   */
  control?: Control;
}
export declare namespace GetControlResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetControlResponse) => any;
}
export interface GetDelegationsRequest {
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace GetDelegationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDelegationsRequest) => any;
}
/**
 * <p>
 *    The metadata associated with the specified delegation.
 * </p>
 */
export interface DelegationMetadata {
  /**
   * <p>
   *    The unique identifier for the delegation.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *    The name of the associated assessment.
   * </p>
   */
  assessmentName?: string;
  /**
   * <p>
   *    The unique identifier for the specified assessment.
   * </p>
   */
  assessmentId?: string;
  /**
   * <p>
   * The current status of the delgation.
   * </p>
   */
  status?: DelegationStatus | string;
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the IAM role.
   * </p>
   */
  roleArn?: string;
  /**
   * <p>
   *    Specifies when the delegation was created.
   * </p>
   */
  creationTime?: Date;
  /**
   * <p>
   * Specifies the name of the control set delegated for review.
   * </p>
   */
  controlSetName?: string;
}
export declare namespace DelegationMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DelegationMetadata) => any;
}
export interface GetDelegationsResponse {
  /**
   * <p>
   *    The list of delegations returned by the <code>GetDelegations</code> API.
   * </p>
   */
  delegations?: DelegationMetadata[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace GetDelegationsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDelegationsResponse) => any;
}
export interface GetEvidenceRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;
  /**
   * <p>
   *    The identifier for the folder in which the evidence is stored.
   * </p>
   */
  evidenceFolderId: string | undefined;
  /**
   * <p>
   *    The identifier for the evidence.
   * </p>
   */
  evidenceId: string | undefined;
}
export declare namespace GetEvidenceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceRequest) => any;
}
/**
 * <p>
 *       A system asset that is evaluated in an AWS Audit Manager assessment.
 *     </p>
 */
export interface Resource {
  /**
   * <p>
   *  The Amazon Resource Name (ARN) for the specified resource.
   *     </p>
   */
  arn?: string;
  /**
   * <p>
   *   The value of the specified resource.
   *     </p>
   */
  value?: string;
}
export declare namespace Resource {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Resource) => any;
}
/**
 * <p>
 *    A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity triggered by a user, or a system configuration snapshot.
 * </p>
 */
export interface Evidence {
  /**
   * <p>
   *          The data source from which the specified evidence was collected.
   *       </p>
   */
  dataSource?: string;
  /**
   * <p>
   *    The identifier for the specified AWS account.
   * </p>
   */
  evidenceAwsAccountId?: string;
  /**
   * <p>
   *          The timestamp that represents when the evidence was collected.
   *       </p>
   */
  time?: Date;
  /**
   * <p>
   * The AWS service from which the evidence is collected.
   * </p>
   */
  eventSource?: string;
  /**
   * <p>
   *          The name of the specified evidence event.
   *       </p>
   */
  eventName?: string;
  /**
   * <p>
   *          The type of automated evidence.
   *       </p>
   */
  evidenceByType?: string;
  /**
   * <p>
   *    The list of resources assessed to generate the evidence.
   * </p>
   */
  resourcesIncluded?: Resource[];
  /**
   * <p>
   *  The names and values used by the evidence event, including an attribute name (such as <code>allowUsersToChangePassword</code>) and value (such as <code>true</code> or <code>false</code>).
   * </p>
   */
  attributes?: {
    [key: string]: string;
  };
  /**
   * <p>
   *          The unique identifier for the IAM user or role associated with the evidence.
   *       </p>
   */
  iamId?: string;
  /**
   * <p> The evaluation status for evidence that falls under the compliance check category. For
   *          evidence collected from AWS Security Hub, a <i>Pass</i> or
   *             <i>Fail</i> result is shown. For evidence collected from AWS Config, a
   *             <i>Compliant</i> or <i>Noncompliant</i> result is shown. </p>
   */
  complianceCheck?: string;
  /**
   * <p>
   *    The AWS account from which the evidence is collected, and its AWS organization path.
   * </p>
   */
  awsOrganization?: string;
  /**
   * <p>
   *    The identifier for the specified AWS account.
   * </p>
   */
  awsAccountId?: string;
  /**
   * <p>
   *    The identifier for the folder in which the evidence is stored.
   * </p>
   */
  evidenceFolderId?: string;
  /**
   * <p> The identifier for the evidence.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *          Specifies whether the evidence is included in the assessment report.
   *       </p>
   */
  assessmentReportSelection?: string;
}
export declare namespace Evidence {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Evidence) => any;
}
export interface GetEvidenceResponse {
  /**
   * <p>
   *    The evidence returned by the <code>GetEvidenceResponse</code> API.
   * </p>
   */
  evidence?: Evidence;
}
export declare namespace GetEvidenceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceResponse) => any;
}
export interface GetEvidenceByEvidenceFolderRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The identifier for the control set.
   * </p>
   */
  controlSetId: string | undefined;
  /**
   * <p>
   *    The unique identifier for the folder in which the evidence is stored.
   * </p>
   */
  evidenceFolderId: string | undefined;
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace GetEvidenceByEvidenceFolderRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceByEvidenceFolderRequest) => any;
}
export interface GetEvidenceByEvidenceFolderResponse {
  /**
   * <p>
   *    The list of evidence returned by the <code>GetEvidenceByEvidenceFolder</code> API.
   * </p>
   */
  evidence?: Evidence[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace GetEvidenceByEvidenceFolderResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceByEvidenceFolderResponse) => any;
}
export interface GetEvidenceFolderRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;
  /**
   * <p>
   *    The identifier for the folder in which the evidence is stored.
   * </p>
   */
  evidenceFolderId: string | undefined;
}
export declare namespace GetEvidenceFolderRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceFolderRequest) => any;
}
export interface GetEvidenceFolderResponse {
  /**
   * <p>
   * The folder in which evidence is stored.
   * </p>
   */
  evidenceFolder?: AssessmentEvidenceFolder;
}
export declare namespace GetEvidenceFolderResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceFolderResponse) => any;
}
export interface GetEvidenceFoldersByAssessmentRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace GetEvidenceFoldersByAssessmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceFoldersByAssessmentRequest) => any;
}
export interface GetEvidenceFoldersByAssessmentResponse {
  /**
   * <p>
   *    The list of evidence folders returned by the <code>GetEvidenceFoldersByAssessment</code> API.
   * </p>
   */
  evidenceFolders?: AssessmentEvidenceFolder[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace GetEvidenceFoldersByAssessmentResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceFoldersByAssessmentResponse) => any;
}
export interface GetEvidenceFoldersByAssessmentControlRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;
  /**
   * <p>
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace GetEvidenceFoldersByAssessmentControlRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceFoldersByAssessmentControlRequest) => any;
}
export interface GetEvidenceFoldersByAssessmentControlResponse {
  /**
   * <p>
   *    The list of evidence folders returned by the <code>GetEvidenceFoldersByAssessmentControl</code> API.
   * </p>
   */
  evidenceFolders?: AssessmentEvidenceFolder[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace GetEvidenceFoldersByAssessmentControlResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEvidenceFoldersByAssessmentControlResponse) => any;
}
export interface GetOrganizationAdminAccountRequest {}
export declare namespace GetOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetOrganizationAdminAccountRequest) => any;
}
export interface GetOrganizationAdminAccountResponse {
  /**
   * <p>
   *    The identifier for the specified administrator account.
   * </p>
   */
  adminAccountId?: string;
  /**
   * <p>
   *    The identifier for the specified organization.
   * </p>
   */
  organizationId?: string;
}
export declare namespace GetOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetOrganizationAdminAccountResponse) => any;
}
export interface GetServicesInScopeRequest {}
export declare namespace GetServicesInScopeRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetServicesInScopeRequest) => any;
}
/**
 * <p>
 *    The metadata associated with the specified AWS service.
 * </p>
 */
export interface ServiceMetadata {
  /**
   * <p>
   * The name of the AWS service.
   * </p>
   */
  name?: string;
  /**
   * <p>
   * The display name of the AWS service.
   * </p>
   */
  displayName?: string;
  /**
   * <p>
   *    The description of the specified AWS service.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *    The category in which the AWS service belongs, such as compute, storage, database, and so on.
   * </p>
   */
  category?: string;
}
export declare namespace ServiceMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ServiceMetadata) => any;
}
export interface GetServicesInScopeResponse {
  /**
   * <p>
   *    The metadata associated with the aAWS service.
   * </p>
   */
  serviceMetadata?: ServiceMetadata[];
}
export declare namespace GetServicesInScopeResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetServicesInScopeResponse) => any;
}
export declare enum SettingAttribute {
  ALL = "ALL",
  DEFAULT_ASSESSMENT_REPORTS_DESTINATION = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION",
  DEFAULT_PROCESS_OWNERS = "DEFAULT_PROCESS_OWNERS",
  IS_AWS_ORG_ENABLED = "IS_AWS_ORG_ENABLED",
  SNS_TOPIC = "SNS_TOPIC",
}
export interface GetSettingsRequest {
  /**
   * <p>
   *    The list of <code>SettingAttribute</code> enum values.
   * </p>
   */
  attribute: SettingAttribute | string | undefined;
}
export declare namespace GetSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSettingsRequest) => any;
}
/**
 * <p>
 *    The settings object that holds all supported AWS Audit Manager settings.
 * </p>
 */
export interface Settings {
  /**
   * <p>
   *  Specifies whether AWS Organizations is enabled.
   * </p>
   */
  isAwsOrgEnabled?: boolean;
  /**
   * <p>
   *  The designated Amazon Simple Notification Service (Amazon SNS) topic.
   * </p>
   */
  snsTopic?: string;
  /**
   * <p>
   *    The default storage destination for assessment reports.
   * </p>
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;
  /**
   * <p>
   *  The designated default audit owners.
   * </p>
   */
  defaultProcessOwners?: Role[];
  /**
   * <p>
   *          The AWS KMS key details.
   *       </p>
   */
  kmsKey?: string;
}
export declare namespace Settings {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Settings) => any;
}
export interface GetSettingsResponse {
  /**
   * <p>
   *    The settings object that holds all supported AWS Audit Manager settings.
   * </p>
   */
  settings?: Settings;
}
export declare namespace GetSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetSettingsResponse) => any;
}
export interface ListAssessmentFrameworksRequest {
  /**
   * <p>
   *    The type of framework, such as standard or custom.
   * </p>
   */
  frameworkType: FrameworkType | string | undefined;
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace ListAssessmentFrameworksRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAssessmentFrameworksRequest) => any;
}
export interface ListAssessmentFrameworksResponse {
  /**
   * <p>
   * The list of metadata objects for the specified framework.
   * </p>
   */
  frameworkMetadataList?: AssessmentFrameworkMetadata[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace ListAssessmentFrameworksResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAssessmentFrameworksResponse) => any;
}
export interface ListAssessmentReportsRequest {
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace ListAssessmentReportsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAssessmentReportsRequest) => any;
}
export interface ListAssessmentReportsResponse {
  /**
   * <p>
   *    The list of assessment reports returned by the <code>ListAssessmentReports</code> API.
   * </p>
   */
  assessmentReports?: AssessmentReportMetadata[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace ListAssessmentReportsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAssessmentReportsResponse) => any;
}
export interface ListAssessmentsRequest {
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace ListAssessmentsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAssessmentsRequest) => any;
}
export interface ListAssessmentsResponse {
  /**
   * <p>
   *    The metadata associated with the assessment.
   * </p>
   */
  assessmentMetadata?: AssessmentMetadataItem[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace ListAssessmentsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListAssessmentsResponse) => any;
}
export interface ListControlsRequest {
  /**
   * <p>
   * The type of control, such as standard or custom.
   * </p>
   */
  controlType: ControlType | string | undefined;
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace ListControlsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListControlsRequest) => any;
}
/**
 * <p>
 *    The metadata associated with the specified standard or custom control.
 * </p>
 */
export interface ControlMetadata {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified control.
   * </p>
   */
  arn?: string;
  /**
   * <p>
   * The unique identifier for the specified control.
   * </p>
   */
  id?: string;
  /**
   * <p>
   * The name of the specified control.
   * </p>
   */
  name?: string;
  /**
   * <p>
   *    The data source that determines from where AWS Audit Manager collects evidence for the control.
   * </p>
   */
  controlSources?: string;
  /**
   * <p>
   *    Specifies when the control was created.
   * </p>
   */
  createdAt?: Date;
  /**
   * <p>
   *    Specifies when the control was most recently updated.
   * </p>
   */
  lastUpdatedAt?: Date;
}
export declare namespace ControlMetadata {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ControlMetadata) => any;
}
export interface ListControlsResponse {
  /**
   * <p>
   *    The list of control metadata objects returned by the <code>ListControls</code> API.
   * </p>
   */
  controlMetadataList?: ControlMetadata[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace ListControlsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListControlsResponse) => any;
}
export interface ListKeywordsForDataSourceRequest {
  /**
   * <p>
   * The control mapping data source to which the keywords apply.
   * </p>
   */
  source: SourceType | string | undefined;
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *    Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace ListKeywordsForDataSourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListKeywordsForDataSourceRequest) => any;
}
export interface ListKeywordsForDataSourceResponse {
  /**
   * <p>
   *    The list of keywords for the specified event mapping source.
   * </p>
   */
  keywords?: string[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace ListKeywordsForDataSourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListKeywordsForDataSourceResponse) => any;
}
export interface ListNotificationsRequest {
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
  /**
   * <p>
   *   Represents the maximum number of results per page, or per API request call.
   * </p>
   */
  maxResults?: number;
}
export declare namespace ListNotificationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListNotificationsRequest) => any;
}
/**
 * <p>
 *    The notification used to inform a user of an update in AWS Audit Manager. For example, this includes the notification that is sent when a control set is delegated for review.
 * </p>
 */
export interface Notification {
  /**
   * <p>
   *  The unique identifier for the notification.
   * </p>
   */
  id?: string;
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId?: string;
  /**
   * <p>
   *  The name of the related assessment.
   * </p>
   */
  assessmentName?: string;
  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId?: string;
  /**
   * <p>
   *          Specifies the name of the control set that the notification is about.
   *       </p>
   */
  controlSetName?: string;
  /**
   * <p>
   *  The description of the notification.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *          The time when the notification was sent.
   *       </p>
   */
  eventTime?: Date;
  /**
   * <p>
   *  The sender of the notification.
   * </p>
   */
  source?: string;
}
export declare namespace Notification {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Notification) => any;
}
export interface ListNotificationsResponse {
  /**
   * <p>
   *  The returned list of notifications.
   * </p>
   */
  notifications?: Notification[];
  /**
   * <p>
   *    The pagination token used to fetch the next set of results.
   * </p>
   */
  nextToken?: string;
}
export declare namespace ListNotificationsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListNotificationsResponse) => any;
}
export interface ListTagsForResourceRequest {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified resource.
   * </p>
   */
  resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
  /**
   * <p>
   *    The list of tags returned by the <code>ListTagsForResource</code> API.
   * </p>
   */
  tags?: {
    [key: string]: string;
  };
}
export declare namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface RegisterAccountRequest {
  /**
   * <p>
   *    The AWS KMS key details.
   * </p>
   */
  kmsKey?: string;
  /**
   * <p>
   *    The delegated administrator account for AWS Audit Manager.
   * </p>
   */
  delegatedAdminAccount?: string;
}
export declare namespace RegisterAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RegisterAccountRequest) => any;
}
export interface RegisterAccountResponse {
  /**
   * <p>
   *  The status of the account registration request.
   * </p>
   */
  status?: AccountStatus | string;
}
export declare namespace RegisterAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RegisterAccountResponse) => any;
}
export interface RegisterOrganizationAdminAccountRequest {
  /**
   * <p>
   *    The identifier for the specified delegated administrator account.
   * </p>
   */
  adminAccountId: string | undefined;
}
export declare namespace RegisterOrganizationAdminAccountRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RegisterOrganizationAdminAccountRequest) => any;
}
export interface RegisterOrganizationAdminAccountResponse {
  /**
   * <p>
   *    The identifier for the specified delegated administrator account.
   * </p>
   */
  adminAccountId?: string;
  /**
   * <p>
   *    The identifier for the specified AWS organization.
   * </p>
   */
  organizationId?: string;
}
export declare namespace RegisterOrganizationAdminAccountResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: RegisterOrganizationAdminAccountResponse) => any;
}
export interface TagResourceRequest {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified resource.
   * </p>
   */
  resourceArn: string | undefined;
  /**
   * <p>
   * The tags to be associated with the resource.
   * </p>
   */
  tags:
    | {
        [key: string]: string;
      }
    | undefined;
}
export declare namespace TagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {}
export declare namespace TagResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
  /**
   * <p>
   *    The Amazon Resource Name (ARN) of the specified resource.
   * </p>
   */
  resourceArn: string | undefined;
  /**
   * <p>
   *    The name or key of the tag.
   * </p>
   */
  tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {}
export declare namespace UntagResourceResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface UpdateAssessmentRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *  The name of the specified assessment to be updated.
   * </p>
   */
  assessmentName?: string;
  /**
   * <p>
   *  The description of the specified assessment.
   * </p>
   */
  assessmentDescription?: string;
  /**
   * <p>
   *  The scope of the specified assessment.
   * </p>
   */
  scope: Scope | undefined;
  /**
   * <p>
   *    The assessment report storage destination for the specified assessment that is being updated.
   * </p>
   */
  assessmentReportsDestination?: AssessmentReportsDestination;
  /**
   * <p>
   *  The list of roles for the specified assessment.
   * </p>
   */
  roles?: Role[];
}
export declare namespace UpdateAssessmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentRequest) => any;
}
export interface UpdateAssessmentResponse {
  /**
   * <p>
   *    The response object (name of the updated assessment) for the <code>UpdateAssessmentRequest</code> API.
   * </p>
   */
  assessment?: Assessment;
}
export declare namespace UpdateAssessmentResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentResponse) => any;
}
export interface UpdateAssessmentControlRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;
  /**
   * <p>
   *
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;
  /**
   * <p>
   *    The status of the specified control.
   * </p>
   */
  controlStatus?: ControlStatus | string;
  /**
   * <p>
   *    The comment body text for the specified control.
   * </p>
   */
  commentBody?: string;
}
export declare namespace UpdateAssessmentControlRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentControlRequest) => any;
}
export interface UpdateAssessmentControlResponse {
  /**
   * <p>
   *    The name of the updated control set returned by the <code>UpdateAssessmentControl</code> API.
   * </p>
   */
  control?: AssessmentControl;
}
export declare namespace UpdateAssessmentControlResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentControlResponse) => any;
}
export interface UpdateAssessmentControlSetStatusRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The identifier for the specified control set.
   * </p>
   */
  controlSetId: string | undefined;
  /**
   * <p>
   * The status of the control set that is being updated.
   * </p>
   */
  status: ControlSetStatus | string | undefined;
  /**
   * <p>
   *    The comment related to the status update.
   * </p>
   */
  comment: string | undefined;
}
export declare namespace UpdateAssessmentControlSetStatusRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentControlSetStatusRequest) => any;
}
export interface UpdateAssessmentControlSetStatusResponse {
  /**
   * <p>
   *    The name of the updated control set returned by the <code>UpdateAssessmentControlSetStatus</code> API.
   * </p>
   */
  controlSet?: AssessmentControlSet;
}
export declare namespace UpdateAssessmentControlSetStatusResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentControlSetStatusResponse) => any;
}
/**
 * <p>
 *    A <code>controlSet</code> entity that represents a collection of controls in AWS Audit Manager. This does not contain the control set ID.
 * </p>
 */
export interface UpdateAssessmentFrameworkControlSet {
  /**
   * <p>
   * The unique identifier for the control set.
   * </p>
   */
  id?: string;
  /**
   * <p>
   * The name of the control set.
   * </p>
   */
  name: string | undefined;
  /**
   * <p>
   * The list of controls contained within the control set.
   * </p>
   */
  controls?: CreateAssessmentFrameworkControl[];
}
export declare namespace UpdateAssessmentFrameworkControlSet {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentFrameworkControlSet) => any;
}
export interface UpdateAssessmentFrameworkRequest {
  /**
   * <p>
   *    The identifier for the specified framework.
   * </p>
   */
  frameworkId: string | undefined;
  /**
   * <p>
   * The name of the framework to be updated.
   * </p>
   */
  name: string | undefined;
  /**
   * <p>
   * The description of the framework that is to be updated.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *    The compliance type that the new custom framework supports, such as CIS or HIPAA.
   * </p>
   */
  complianceType?: string;
  /**
   * <p>
   *    The control sets associated with the framework.
   * </p>
   */
  controlSets: UpdateAssessmentFrameworkControlSet[] | undefined;
}
export declare namespace UpdateAssessmentFrameworkRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentFrameworkRequest) => any;
}
export interface UpdateAssessmentFrameworkResponse {
  /**
   * <p>
   * The name of the specified framework.
   * </p>
   */
  framework?: Framework;
}
export declare namespace UpdateAssessmentFrameworkResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentFrameworkResponse) => any;
}
export interface UpdateAssessmentStatusRequest {
  /**
   * <p>
   *    The identifier for the specified assessment.
   * </p>
   */
  assessmentId: string | undefined;
  /**
   * <p>
   *    The current status of the specified assessment.
   * </p>
   */
  status: AssessmentStatus | string | undefined;
}
export declare namespace UpdateAssessmentStatusRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentStatusRequest) => any;
}
export interface UpdateAssessmentStatusResponse {
  /**
   * <p>
   *    The name of the updated assessment returned by the <code>UpdateAssessmentStatus</code> API.
   * </p>
   */
  assessment?: Assessment;
}
export declare namespace UpdateAssessmentStatusResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateAssessmentStatusResponse) => any;
}
export interface UpdateControlRequest {
  /**
   * <p>
   *    The identifier for the specified control.
   * </p>
   */
  controlId: string | undefined;
  /**
   * <p>
   * The name of the control to be updated.
   * </p>
   */
  name: string | undefined;
  /**
   * <p>
   * The optional description of the control.
   * </p>
   */
  description?: string;
  /**
   * <p>
   *          The steps that to follow to determine if the control has been satisfied.
   *       </p>
   */
  testingInformation?: string;
  /**
   * <p>
   *          The title of the action plan for remediating the control.
   *       </p>
   */
  actionPlanTitle?: string;
  /**
   * <p>
   *
   *          The recommended actions to carry out if the control is not fulfilled.
   *       </p>
   */
  actionPlanInstructions?: string;
  /**
   * <p>
   *    The data mapping sources for the specified control.
   * </p>
   */
  controlMappingSources: ControlMappingSource[] | undefined;
}
export declare namespace UpdateControlRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateControlRequest) => any;
}
export interface UpdateControlResponse {
  /**
   * <p>
   *    The name of the updated control set returned by the <code>UpdateControl</code> API.
   * </p>
   */
  control?: Control;
}
export declare namespace UpdateControlResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateControlResponse) => any;
}
export interface UpdateSettingsRequest {
  /**
   * <p>
   * The Amazon Simple Notification Service (Amazon SNS) topic to which AWS Audit Manager sends notifications.
   * </p>
   */
  snsTopic?: string;
  /**
   * <p>
   *    The default storage destination for assessment reports.
   * </p>
   */
  defaultAssessmentReportsDestination?: AssessmentReportsDestination;
  /**
   * <p>
   * A list of the default audit owners.
   * </p>
   */
  defaultProcessOwners?: Role[];
  /**
   * <p>
   *          The AWS KMS key details.
   *       </p>
   */
  kmsKey?: string;
}
export declare namespace UpdateSettingsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateSettingsRequest) => any;
}
export interface UpdateSettingsResponse {
  /**
   * <p>
   * The current list of settings.
   * </p>
   */
  settings?: Settings;
}
export declare namespace UpdateSettingsResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateSettingsResponse) => any;
}
export interface ValidateAssessmentReportIntegrityRequest {
  /**
   * <p>
   *    The relative path of the specified Amazon S3 bucket in which the assessment report is stored.
   * </p>
   */
  s3RelativePath: string | undefined;
}
export declare namespace ValidateAssessmentReportIntegrityRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ValidateAssessmentReportIntegrityRequest) => any;
}
export interface ValidateAssessmentReportIntegrityResponse {
  /**
   * <p>
   * Specifies whether the signature key is valid.
   * </p>
   */
  signatureValid?: boolean;
  /**
   * <p>
   *    The signature algorithm used to code sign the assessment report file.
   * </p>
   */
  signatureAlgorithm?: string;
  /**
   * <p>
   * The date and time signature that specifies when the assessment report was created.
   * </p>
   */
  signatureDateTime?: string;
  /**
   * <p>
   * The unique identifier for the validation signature key.
   * </p>
   */
  signatureKeyId?: string;
  /**
   * <p>
   * Represents any errors that occurred when validating the assessment report.
   * </p>
   */
  validationErrors?: string[];
}
export declare namespace ValidateAssessmentReportIntegrityResponse {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ValidateAssessmentReportIntegrityResponse) => any;
}
