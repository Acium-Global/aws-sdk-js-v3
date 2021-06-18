import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AccountStatus;
(function (AccountStatus) {
  AccountStatus["ACTIVE"] = "ACTIVE";
  AccountStatus["INACTIVE"] = "INACTIVE";
  AccountStatus["PENDING_ACTIVATION"] = "PENDING_ACTIVATION";
})(AccountStatus || (AccountStatus = {}));
export var ActionEnum;
(function (ActionEnum) {
  ActionEnum["ACTIVE"] = "ACTIVE";
  ActionEnum["CREATE"] = "CREATE";
  ActionEnum["DELETE"] = "DELETE";
  ActionEnum["IMPORT_EVIDENCE"] = "IMPORT_EVIDENCE";
  ActionEnum["INACTIVE"] = "INACTIVE";
  ActionEnum["REVIEWED"] = "REVIEWED";
  ActionEnum["UNDER_REVIEW"] = "UNDER_REVIEW";
  ActionEnum["UPDATE_METADATA"] = "UPDATE_METADATA";
})(ActionEnum || (ActionEnum = {}));
export var AWSAccount;
(function (AWSAccount) {
  /**
   * @internal
   */
  AWSAccount.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AWSAccount || (AWSAccount = {}));
export var ControlComment;
(function (ControlComment) {
  /**
   * @internal
   */
  ControlComment.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ControlComment || (ControlComment = {}));
export var ControlResponse;
(function (ControlResponse) {
  ControlResponse["AUTOMATE"] = "AUTOMATE";
  ControlResponse["DEFER"] = "DEFER";
  ControlResponse["IGNORE"] = "IGNORE";
  ControlResponse["MANUAL"] = "MANUAL";
})(ControlResponse || (ControlResponse = {}));
export var ControlStatus;
(function (ControlStatus) {
  ControlStatus["INACTIVE"] = "INACTIVE";
  ControlStatus["REVIEWED"] = "REVIEWED";
  ControlStatus["UNDER_REVIEW"] = "UNDER_REVIEW";
})(ControlStatus || (ControlStatus = {}));
export var AssessmentControl;
(function (AssessmentControl) {
  /**
   * @internal
   */
  AssessmentControl.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentControl || (AssessmentControl = {}));
export var RoleType;
(function (RoleType) {
  RoleType["PROCESS_OWNER"] = "PROCESS_OWNER";
  RoleType["RESOURCE_OWNER"] = "RESOURCE_OWNER";
})(RoleType || (RoleType = {}));
export var DelegationStatus;
(function (DelegationStatus) {
  DelegationStatus["COMPLETE"] = "COMPLETE";
  DelegationStatus["IN_PROGRESS"] = "IN_PROGRESS";
  DelegationStatus["UNDER_REVIEW"] = "UNDER_REVIEW";
})(DelegationStatus || (DelegationStatus = {}));
export var Delegation;
(function (Delegation) {
  /**
   * @internal
   */
  Delegation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Delegation || (Delegation = {}));
export var Role;
(function (Role) {
  /**
   * @internal
   */
  Role.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Role || (Role = {}));
export var ControlSetStatus;
(function (ControlSetStatus) {
  ControlSetStatus["ACTIVE"] = "ACTIVE";
  ControlSetStatus["REVIEWED"] = "REVIEWED";
  ControlSetStatus["UNDER_REVIEW"] = "UNDER_REVIEW";
})(ControlSetStatus || (ControlSetStatus = {}));
export var AssessmentControlSet;
(function (AssessmentControlSet) {
  /**
   * @internal
   */
  AssessmentControlSet.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentControlSet || (AssessmentControlSet = {}));
export var FrameworkMetadata;
(function (FrameworkMetadata) {
  /**
   * @internal
   */
  FrameworkMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FrameworkMetadata || (FrameworkMetadata = {}));
export var AssessmentFramework;
(function (AssessmentFramework) {
  /**
   * @internal
   */
  AssessmentFramework.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentFramework || (AssessmentFramework = {}));
export var AssessmentReportDestinationType;
(function (AssessmentReportDestinationType) {
  AssessmentReportDestinationType["S3"] = "S3";
})(AssessmentReportDestinationType || (AssessmentReportDestinationType = {}));
export var AssessmentReportsDestination;
(function (AssessmentReportsDestination) {
  /**
   * @internal
   */
  AssessmentReportsDestination.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentReportsDestination || (AssessmentReportsDestination = {}));
export var AWSService;
(function (AWSService) {
  /**
   * @internal
   */
  AWSService.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AWSService || (AWSService = {}));
export var Scope;
(function (Scope) {
  /**
   * @internal
   */
  Scope.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Scope || (Scope = {}));
export var AssessmentStatus;
(function (AssessmentStatus) {
  AssessmentStatus["ACTIVE"] = "ACTIVE";
  AssessmentStatus["INACTIVE"] = "INACTIVE";
})(AssessmentStatus || (AssessmentStatus = {}));
export var AssessmentMetadata;
(function (AssessmentMetadata) {
  /**
   * @internal
   */
  AssessmentMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentMetadata || (AssessmentMetadata = {}));
export var Assessment;
(function (Assessment) {
  /**
   * @internal
   */
  Assessment.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Assessment || (Assessment = {}));
export var AssessmentEvidenceFolder;
(function (AssessmentEvidenceFolder) {
  /**
   * @internal
   */
  AssessmentEvidenceFolder.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentEvidenceFolder || (AssessmentEvidenceFolder = {}));
export var FrameworkType;
(function (FrameworkType) {
  FrameworkType["CUSTOM"] = "Custom";
  FrameworkType["STANDARD"] = "Standard";
})(FrameworkType || (FrameworkType = {}));
export var AssessmentFrameworkMetadata;
(function (AssessmentFrameworkMetadata) {
  /**
   * @internal
   */
  AssessmentFrameworkMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentFrameworkMetadata || (AssessmentFrameworkMetadata = {}));
export var AssessmentMetadataItem;
(function (AssessmentMetadataItem) {
  /**
   * @internal
   */
  AssessmentMetadataItem.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentMetadataItem || (AssessmentMetadataItem = {}));
export var AssessmentReportStatus;
(function (AssessmentReportStatus) {
  AssessmentReportStatus["COMPLETE"] = "COMPLETE";
  AssessmentReportStatus["FAILED"] = "FAILED";
  AssessmentReportStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(AssessmentReportStatus || (AssessmentReportStatus = {}));
export var AssessmentReport;
(function (AssessmentReport) {
  /**
   * @internal
   */
  AssessmentReport.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentReport || (AssessmentReport = {}));
export var AssessmentReportEvidenceError;
(function (AssessmentReportEvidenceError) {
  /**
   * @internal
   */
  AssessmentReportEvidenceError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentReportEvidenceError || (AssessmentReportEvidenceError = {}));
export var AssessmentReportMetadata;
(function (AssessmentReportMetadata) {
  /**
   * @internal
   */
  AssessmentReportMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssessmentReportMetadata || (AssessmentReportMetadata = {}));
export var AssociateAssessmentReportEvidenceFolderRequest;
(function (AssociateAssessmentReportEvidenceFolderRequest) {
  /**
   * @internal
   */
  AssociateAssessmentReportEvidenceFolderRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociateAssessmentReportEvidenceFolderRequest || (AssociateAssessmentReportEvidenceFolderRequest = {}));
export var AssociateAssessmentReportEvidenceFolderResponse;
(function (AssociateAssessmentReportEvidenceFolderResponse) {
  /**
   * @internal
   */
  AssociateAssessmentReportEvidenceFolderResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AssociateAssessmentReportEvidenceFolderResponse || (AssociateAssessmentReportEvidenceFolderResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ValidationExceptionField;
(function (ValidationExceptionField) {
  /**
   * @internal
   */
  ValidationExceptionField.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationExceptionField || (ValidationExceptionField = {}));
export var ValidationExceptionReason;
(function (ValidationExceptionReason) {
  ValidationExceptionReason["CANNOT_PARSE"] = "cannotParse";
  ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "fieldValidationFailed";
  ValidationExceptionReason["OTHER"] = "other";
  ValidationExceptionReason["UNKNOWN_OPERATION"] = "unknownOperation";
})(ValidationExceptionReason || (ValidationExceptionReason = {}));
export var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationException || (ValidationException = {}));
export var BatchAssociateAssessmentReportEvidenceRequest;
(function (BatchAssociateAssessmentReportEvidenceRequest) {
  /**
   * @internal
   */
  BatchAssociateAssessmentReportEvidenceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchAssociateAssessmentReportEvidenceRequest || (BatchAssociateAssessmentReportEvidenceRequest = {}));
export var BatchAssociateAssessmentReportEvidenceResponse;
(function (BatchAssociateAssessmentReportEvidenceResponse) {
  /**
   * @internal
   */
  BatchAssociateAssessmentReportEvidenceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchAssociateAssessmentReportEvidenceResponse || (BatchAssociateAssessmentReportEvidenceResponse = {}));
export var CreateDelegationRequest;
(function (CreateDelegationRequest) {
  /**
   * @internal
   */
  CreateDelegationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDelegationRequest || (CreateDelegationRequest = {}));
export var BatchCreateDelegationByAssessmentRequest;
(function (BatchCreateDelegationByAssessmentRequest) {
  /**
   * @internal
   */
  BatchCreateDelegationByAssessmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateDelegationByAssessmentRequest || (BatchCreateDelegationByAssessmentRequest = {}));
export var BatchCreateDelegationByAssessmentError;
(function (BatchCreateDelegationByAssessmentError) {
  /**
   * @internal
   */
  BatchCreateDelegationByAssessmentError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateDelegationByAssessmentError || (BatchCreateDelegationByAssessmentError = {}));
export var BatchCreateDelegationByAssessmentResponse;
(function (BatchCreateDelegationByAssessmentResponse) {
  /**
   * @internal
   */
  BatchCreateDelegationByAssessmentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchCreateDelegationByAssessmentResponse || (BatchCreateDelegationByAssessmentResponse = {}));
export var BatchDeleteDelegationByAssessmentRequest;
(function (BatchDeleteDelegationByAssessmentRequest) {
  /**
   * @internal
   */
  BatchDeleteDelegationByAssessmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDeleteDelegationByAssessmentRequest || (BatchDeleteDelegationByAssessmentRequest = {}));
export var BatchDeleteDelegationByAssessmentError;
(function (BatchDeleteDelegationByAssessmentError) {
  /**
   * @internal
   */
  BatchDeleteDelegationByAssessmentError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDeleteDelegationByAssessmentError || (BatchDeleteDelegationByAssessmentError = {}));
export var BatchDeleteDelegationByAssessmentResponse;
(function (BatchDeleteDelegationByAssessmentResponse) {
  /**
   * @internal
   */
  BatchDeleteDelegationByAssessmentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDeleteDelegationByAssessmentResponse || (BatchDeleteDelegationByAssessmentResponse = {}));
export var BatchDisassociateAssessmentReportEvidenceRequest;
(function (BatchDisassociateAssessmentReportEvidenceRequest) {
  /**
   * @internal
   */
  BatchDisassociateAssessmentReportEvidenceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDisassociateAssessmentReportEvidenceRequest || (BatchDisassociateAssessmentReportEvidenceRequest = {}));
export var BatchDisassociateAssessmentReportEvidenceResponse;
(function (BatchDisassociateAssessmentReportEvidenceResponse) {
  /**
   * @internal
   */
  BatchDisassociateAssessmentReportEvidenceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchDisassociateAssessmentReportEvidenceResponse || (BatchDisassociateAssessmentReportEvidenceResponse = {}));
export var ManualEvidence;
(function (ManualEvidence) {
  /**
   * @internal
   */
  ManualEvidence.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ManualEvidence || (ManualEvidence = {}));
export var BatchImportEvidenceToAssessmentControlRequest;
(function (BatchImportEvidenceToAssessmentControlRequest) {
  /**
   * @internal
   */
  BatchImportEvidenceToAssessmentControlRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchImportEvidenceToAssessmentControlRequest || (BatchImportEvidenceToAssessmentControlRequest = {}));
export var BatchImportEvidenceToAssessmentControlError;
(function (BatchImportEvidenceToAssessmentControlError) {
  /**
   * @internal
   */
  BatchImportEvidenceToAssessmentControlError.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchImportEvidenceToAssessmentControlError || (BatchImportEvidenceToAssessmentControlError = {}));
export var BatchImportEvidenceToAssessmentControlResponse;
(function (BatchImportEvidenceToAssessmentControlResponse) {
  /**
   * @internal
   */
  BatchImportEvidenceToAssessmentControlResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BatchImportEvidenceToAssessmentControlResponse || (BatchImportEvidenceToAssessmentControlResponse = {}));
export var CreateAssessmentRequest;
(function (CreateAssessmentRequest) {
  /**
   * @internal
   */
  CreateAssessmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAssessmentRequest || (CreateAssessmentRequest = {}));
export var CreateAssessmentResponse;
(function (CreateAssessmentResponse) {
  /**
   * @internal
   */
  CreateAssessmentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAssessmentResponse || (CreateAssessmentResponse = {}));
export var CreateAssessmentFrameworkControl;
(function (CreateAssessmentFrameworkControl) {
  /**
   * @internal
   */
  CreateAssessmentFrameworkControl.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAssessmentFrameworkControl || (CreateAssessmentFrameworkControl = {}));
export var CreateAssessmentFrameworkControlSet;
(function (CreateAssessmentFrameworkControlSet) {
  /**
   * @internal
   */
  CreateAssessmentFrameworkControlSet.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAssessmentFrameworkControlSet || (CreateAssessmentFrameworkControlSet = {}));
export var CreateAssessmentFrameworkRequest;
(function (CreateAssessmentFrameworkRequest) {
  /**
   * @internal
   */
  CreateAssessmentFrameworkRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAssessmentFrameworkRequest || (CreateAssessmentFrameworkRequest = {}));
export var SourceFrequency;
(function (SourceFrequency) {
  SourceFrequency["DAILY"] = "DAILY";
  SourceFrequency["MONTHLY"] = "MONTHLY";
  SourceFrequency["WEEKLY"] = "WEEKLY";
})(SourceFrequency || (SourceFrequency = {}));
export var KeywordInputType;
(function (KeywordInputType) {
  KeywordInputType["SELECT_FROM_LIST"] = "SELECT_FROM_LIST";
})(KeywordInputType || (KeywordInputType = {}));
export var SourceKeyword;
(function (SourceKeyword) {
  /**
   * @internal
   */
  SourceKeyword.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SourceKeyword || (SourceKeyword = {}));
export var SourceSetUpOption;
(function (SourceSetUpOption) {
  SourceSetUpOption["PROCEDURAL_CONTROLS_MAPPING"] = "Procedural_Controls_Mapping";
  SourceSetUpOption["SYSTEM_CONTROLS_MAPPING"] = "System_Controls_Mapping";
})(SourceSetUpOption || (SourceSetUpOption = {}));
export var SourceType;
(function (SourceType) {
  SourceType["AWS_API_CALL"] = "AWS_API_Call";
  SourceType["AWS_CLOUDTRAIL"] = "AWS_Cloudtrail";
  SourceType["AWS_CONFIG"] = "AWS_Config";
  SourceType["AWS_SECURITY_HUB"] = "AWS_Security_Hub";
  SourceType["MANUAL"] = "MANUAL";
})(SourceType || (SourceType = {}));
export var ControlMappingSource;
(function (ControlMappingSource) {
  /**
   * @internal
   */
  ControlMappingSource.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ControlMappingSource || (ControlMappingSource = {}));
export var ControlType;
(function (ControlType) {
  ControlType["CUSTOM"] = "Custom";
  ControlType["STANDARD"] = "Standard";
})(ControlType || (ControlType = {}));
export var Control;
(function (Control) {
  /**
   * @internal
   */
  Control.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Control || (Control = {}));
export var ControlSet;
(function (ControlSet) {
  /**
   * @internal
   */
  ControlSet.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ControlSet || (ControlSet = {}));
export var Framework;
(function (Framework) {
  /**
   * @internal
   */
  Framework.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Framework || (Framework = {}));
export var CreateAssessmentFrameworkResponse;
(function (CreateAssessmentFrameworkResponse) {
  /**
   * @internal
   */
  CreateAssessmentFrameworkResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAssessmentFrameworkResponse || (CreateAssessmentFrameworkResponse = {}));
export var CreateAssessmentReportRequest;
(function (CreateAssessmentReportRequest) {
  /**
   * @internal
   */
  CreateAssessmentReportRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAssessmentReportRequest || (CreateAssessmentReportRequest = {}));
export var CreateAssessmentReportResponse;
(function (CreateAssessmentReportResponse) {
  /**
   * @internal
   */
  CreateAssessmentReportResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAssessmentReportResponse || (CreateAssessmentReportResponse = {}));
export var CreateControlMappingSource;
(function (CreateControlMappingSource) {
  /**
   * @internal
   */
  CreateControlMappingSource.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateControlMappingSource || (CreateControlMappingSource = {}));
export var CreateControlRequest;
(function (CreateControlRequest) {
  /**
   * @internal
   */
  CreateControlRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateControlRequest || (CreateControlRequest = {}));
export var CreateControlResponse;
(function (CreateControlResponse) {
  /**
   * @internal
   */
  CreateControlResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateControlResponse || (CreateControlResponse = {}));
export var DeleteAssessmentRequest;
(function (DeleteAssessmentRequest) {
  /**
   * @internal
   */
  DeleteAssessmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAssessmentRequest || (DeleteAssessmentRequest = {}));
export var DeleteAssessmentResponse;
(function (DeleteAssessmentResponse) {
  /**
   * @internal
   */
  DeleteAssessmentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAssessmentResponse || (DeleteAssessmentResponse = {}));
export var DeleteAssessmentFrameworkRequest;
(function (DeleteAssessmentFrameworkRequest) {
  /**
   * @internal
   */
  DeleteAssessmentFrameworkRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAssessmentFrameworkRequest || (DeleteAssessmentFrameworkRequest = {}));
export var DeleteAssessmentFrameworkResponse;
(function (DeleteAssessmentFrameworkResponse) {
  /**
   * @internal
   */
  DeleteAssessmentFrameworkResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAssessmentFrameworkResponse || (DeleteAssessmentFrameworkResponse = {}));
export var DeleteAssessmentReportRequest;
(function (DeleteAssessmentReportRequest) {
  /**
   * @internal
   */
  DeleteAssessmentReportRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAssessmentReportRequest || (DeleteAssessmentReportRequest = {}));
export var DeleteAssessmentReportResponse;
(function (DeleteAssessmentReportResponse) {
  /**
   * @internal
   */
  DeleteAssessmentReportResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAssessmentReportResponse || (DeleteAssessmentReportResponse = {}));
export var DeleteControlRequest;
(function (DeleteControlRequest) {
  /**
   * @internal
   */
  DeleteControlRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteControlRequest || (DeleteControlRequest = {}));
export var DeleteControlResponse;
(function (DeleteControlResponse) {
  /**
   * @internal
   */
  DeleteControlResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteControlResponse || (DeleteControlResponse = {}));
export var DeregisterAccountRequest;
(function (DeregisterAccountRequest) {
  /**
   * @internal
   */
  DeregisterAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeregisterAccountRequest || (DeregisterAccountRequest = {}));
export var DeregisterAccountResponse;
(function (DeregisterAccountResponse) {
  /**
   * @internal
   */
  DeregisterAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeregisterAccountResponse || (DeregisterAccountResponse = {}));
export var DeregisterOrganizationAdminAccountRequest;
(function (DeregisterOrganizationAdminAccountRequest) {
  /**
   * @internal
   */
  DeregisterOrganizationAdminAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeregisterOrganizationAdminAccountRequest || (DeregisterOrganizationAdminAccountRequest = {}));
export var DeregisterOrganizationAdminAccountResponse;
(function (DeregisterOrganizationAdminAccountResponse) {
  /**
   * @internal
   */
  DeregisterOrganizationAdminAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeregisterOrganizationAdminAccountResponse || (DeregisterOrganizationAdminAccountResponse = {}));
export var DisassociateAssessmentReportEvidenceFolderRequest;
(function (DisassociateAssessmentReportEvidenceFolderRequest) {
  /**
   * @internal
   */
  DisassociateAssessmentReportEvidenceFolderRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociateAssessmentReportEvidenceFolderRequest || (DisassociateAssessmentReportEvidenceFolderRequest = {}));
export var DisassociateAssessmentReportEvidenceFolderResponse;
(function (DisassociateAssessmentReportEvidenceFolderResponse) {
  /**
   * @internal
   */
  DisassociateAssessmentReportEvidenceFolderResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DisassociateAssessmentReportEvidenceFolderResponse || (DisassociateAssessmentReportEvidenceFolderResponse = {}));
export var GetAccountStatusRequest;
(function (GetAccountStatusRequest) {
  /**
   * @internal
   */
  GetAccountStatusRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAccountStatusRequest || (GetAccountStatusRequest = {}));
export var GetAccountStatusResponse;
(function (GetAccountStatusResponse) {
  /**
   * @internal
   */
  GetAccountStatusResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAccountStatusResponse || (GetAccountStatusResponse = {}));
export var GetAssessmentRequest;
(function (GetAssessmentRequest) {
  /**
   * @internal
   */
  GetAssessmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAssessmentRequest || (GetAssessmentRequest = {}));
export var GetAssessmentResponse;
(function (GetAssessmentResponse) {
  /**
   * @internal
   */
  GetAssessmentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAssessmentResponse || (GetAssessmentResponse = {}));
export var GetAssessmentFrameworkRequest;
(function (GetAssessmentFrameworkRequest) {
  /**
   * @internal
   */
  GetAssessmentFrameworkRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAssessmentFrameworkRequest || (GetAssessmentFrameworkRequest = {}));
export var GetAssessmentFrameworkResponse;
(function (GetAssessmentFrameworkResponse) {
  /**
   * @internal
   */
  GetAssessmentFrameworkResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAssessmentFrameworkResponse || (GetAssessmentFrameworkResponse = {}));
export var GetAssessmentReportUrlRequest;
(function (GetAssessmentReportUrlRequest) {
  /**
   * @internal
   */
  GetAssessmentReportUrlRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAssessmentReportUrlRequest || (GetAssessmentReportUrlRequest = {}));
export var URL;
(function (URL) {
  /**
   * @internal
   */
  URL.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(URL || (URL = {}));
export var GetAssessmentReportUrlResponse;
(function (GetAssessmentReportUrlResponse) {
  /**
   * @internal
   */
  GetAssessmentReportUrlResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAssessmentReportUrlResponse || (GetAssessmentReportUrlResponse = {}));
export var GetChangeLogsRequest;
(function (GetChangeLogsRequest) {
  /**
   * @internal
   */
  GetChangeLogsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetChangeLogsRequest || (GetChangeLogsRequest = {}));
export var ObjectTypeEnum;
(function (ObjectTypeEnum) {
  ObjectTypeEnum["ASSESSMENT"] = "ASSESSMENT";
  ObjectTypeEnum["ASSESSMENT_REPORT"] = "ASSESSMENT_REPORT";
  ObjectTypeEnum["CONTROL"] = "CONTROL";
  ObjectTypeEnum["CONTROL_SET"] = "CONTROL_SET";
  ObjectTypeEnum["DELEGATION"] = "DELEGATION";
})(ObjectTypeEnum || (ObjectTypeEnum = {}));
export var ChangeLog;
(function (ChangeLog) {
  /**
   * @internal
   */
  ChangeLog.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ChangeLog || (ChangeLog = {}));
export var GetChangeLogsResponse;
(function (GetChangeLogsResponse) {
  /**
   * @internal
   */
  GetChangeLogsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetChangeLogsResponse || (GetChangeLogsResponse = {}));
export var GetControlRequest;
(function (GetControlRequest) {
  /**
   * @internal
   */
  GetControlRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetControlRequest || (GetControlRequest = {}));
export var GetControlResponse;
(function (GetControlResponse) {
  /**
   * @internal
   */
  GetControlResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetControlResponse || (GetControlResponse = {}));
export var GetDelegationsRequest;
(function (GetDelegationsRequest) {
  /**
   * @internal
   */
  GetDelegationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDelegationsRequest || (GetDelegationsRequest = {}));
export var DelegationMetadata;
(function (DelegationMetadata) {
  /**
   * @internal
   */
  DelegationMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DelegationMetadata || (DelegationMetadata = {}));
export var GetDelegationsResponse;
(function (GetDelegationsResponse) {
  /**
   * @internal
   */
  GetDelegationsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDelegationsResponse || (GetDelegationsResponse = {}));
export var GetEvidenceRequest;
(function (GetEvidenceRequest) {
  /**
   * @internal
   */
  GetEvidenceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceRequest || (GetEvidenceRequest = {}));
export var Resource;
(function (Resource) {
  /**
   * @internal
   */
  Resource.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Resource || (Resource = {}));
export var Evidence;
(function (Evidence) {
  /**
   * @internal
   */
  Evidence.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Evidence || (Evidence = {}));
export var GetEvidenceResponse;
(function (GetEvidenceResponse) {
  /**
   * @internal
   */
  GetEvidenceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceResponse || (GetEvidenceResponse = {}));
export var GetEvidenceByEvidenceFolderRequest;
(function (GetEvidenceByEvidenceFolderRequest) {
  /**
   * @internal
   */
  GetEvidenceByEvidenceFolderRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceByEvidenceFolderRequest || (GetEvidenceByEvidenceFolderRequest = {}));
export var GetEvidenceByEvidenceFolderResponse;
(function (GetEvidenceByEvidenceFolderResponse) {
  /**
   * @internal
   */
  GetEvidenceByEvidenceFolderResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceByEvidenceFolderResponse || (GetEvidenceByEvidenceFolderResponse = {}));
export var GetEvidenceFolderRequest;
(function (GetEvidenceFolderRequest) {
  /**
   * @internal
   */
  GetEvidenceFolderRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceFolderRequest || (GetEvidenceFolderRequest = {}));
export var GetEvidenceFolderResponse;
(function (GetEvidenceFolderResponse) {
  /**
   * @internal
   */
  GetEvidenceFolderResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceFolderResponse || (GetEvidenceFolderResponse = {}));
export var GetEvidenceFoldersByAssessmentRequest;
(function (GetEvidenceFoldersByAssessmentRequest) {
  /**
   * @internal
   */
  GetEvidenceFoldersByAssessmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceFoldersByAssessmentRequest || (GetEvidenceFoldersByAssessmentRequest = {}));
export var GetEvidenceFoldersByAssessmentResponse;
(function (GetEvidenceFoldersByAssessmentResponse) {
  /**
   * @internal
   */
  GetEvidenceFoldersByAssessmentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceFoldersByAssessmentResponse || (GetEvidenceFoldersByAssessmentResponse = {}));
export var GetEvidenceFoldersByAssessmentControlRequest;
(function (GetEvidenceFoldersByAssessmentControlRequest) {
  /**
   * @internal
   */
  GetEvidenceFoldersByAssessmentControlRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceFoldersByAssessmentControlRequest || (GetEvidenceFoldersByAssessmentControlRequest = {}));
export var GetEvidenceFoldersByAssessmentControlResponse;
(function (GetEvidenceFoldersByAssessmentControlResponse) {
  /**
   * @internal
   */
  GetEvidenceFoldersByAssessmentControlResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetEvidenceFoldersByAssessmentControlResponse || (GetEvidenceFoldersByAssessmentControlResponse = {}));
export var GetOrganizationAdminAccountRequest;
(function (GetOrganizationAdminAccountRequest) {
  /**
   * @internal
   */
  GetOrganizationAdminAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetOrganizationAdminAccountRequest || (GetOrganizationAdminAccountRequest = {}));
export var GetOrganizationAdminAccountResponse;
(function (GetOrganizationAdminAccountResponse) {
  /**
   * @internal
   */
  GetOrganizationAdminAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetOrganizationAdminAccountResponse || (GetOrganizationAdminAccountResponse = {}));
export var GetServicesInScopeRequest;
(function (GetServicesInScopeRequest) {
  /**
   * @internal
   */
  GetServicesInScopeRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetServicesInScopeRequest || (GetServicesInScopeRequest = {}));
export var ServiceMetadata;
(function (ServiceMetadata) {
  /**
   * @internal
   */
  ServiceMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceMetadata || (ServiceMetadata = {}));
export var GetServicesInScopeResponse;
(function (GetServicesInScopeResponse) {
  /**
   * @internal
   */
  GetServicesInScopeResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetServicesInScopeResponse || (GetServicesInScopeResponse = {}));
export var SettingAttribute;
(function (SettingAttribute) {
  SettingAttribute["ALL"] = "ALL";
  SettingAttribute["DEFAULT_ASSESSMENT_REPORTS_DESTINATION"] = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION";
  SettingAttribute["DEFAULT_PROCESS_OWNERS"] = "DEFAULT_PROCESS_OWNERS";
  SettingAttribute["IS_AWS_ORG_ENABLED"] = "IS_AWS_ORG_ENABLED";
  SettingAttribute["SNS_TOPIC"] = "SNS_TOPIC";
})(SettingAttribute || (SettingAttribute = {}));
export var GetSettingsRequest;
(function (GetSettingsRequest) {
  /**
   * @internal
   */
  GetSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSettingsRequest || (GetSettingsRequest = {}));
export var Settings;
(function (Settings) {
  /**
   * @internal
   */
  Settings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Settings || (Settings = {}));
export var GetSettingsResponse;
(function (GetSettingsResponse) {
  /**
   * @internal
   */
  GetSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSettingsResponse || (GetSettingsResponse = {}));
export var ListAssessmentFrameworksRequest;
(function (ListAssessmentFrameworksRequest) {
  /**
   * @internal
   */
  ListAssessmentFrameworksRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssessmentFrameworksRequest || (ListAssessmentFrameworksRequest = {}));
export var ListAssessmentFrameworksResponse;
(function (ListAssessmentFrameworksResponse) {
  /**
   * @internal
   */
  ListAssessmentFrameworksResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssessmentFrameworksResponse || (ListAssessmentFrameworksResponse = {}));
export var ListAssessmentReportsRequest;
(function (ListAssessmentReportsRequest) {
  /**
   * @internal
   */
  ListAssessmentReportsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssessmentReportsRequest || (ListAssessmentReportsRequest = {}));
export var ListAssessmentReportsResponse;
(function (ListAssessmentReportsResponse) {
  /**
   * @internal
   */
  ListAssessmentReportsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssessmentReportsResponse || (ListAssessmentReportsResponse = {}));
export var ListAssessmentsRequest;
(function (ListAssessmentsRequest) {
  /**
   * @internal
   */
  ListAssessmentsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssessmentsRequest || (ListAssessmentsRequest = {}));
export var ListAssessmentsResponse;
(function (ListAssessmentsResponse) {
  /**
   * @internal
   */
  ListAssessmentsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListAssessmentsResponse || (ListAssessmentsResponse = {}));
export var ListControlsRequest;
(function (ListControlsRequest) {
  /**
   * @internal
   */
  ListControlsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListControlsRequest || (ListControlsRequest = {}));
export var ControlMetadata;
(function (ControlMetadata) {
  /**
   * @internal
   */
  ControlMetadata.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ControlMetadata || (ControlMetadata = {}));
export var ListControlsResponse;
(function (ListControlsResponse) {
  /**
   * @internal
   */
  ListControlsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListControlsResponse || (ListControlsResponse = {}));
export var ListKeywordsForDataSourceRequest;
(function (ListKeywordsForDataSourceRequest) {
  /**
   * @internal
   */
  ListKeywordsForDataSourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListKeywordsForDataSourceRequest || (ListKeywordsForDataSourceRequest = {}));
export var ListKeywordsForDataSourceResponse;
(function (ListKeywordsForDataSourceResponse) {
  /**
   * @internal
   */
  ListKeywordsForDataSourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListKeywordsForDataSourceResponse || (ListKeywordsForDataSourceResponse = {}));
export var ListNotificationsRequest;
(function (ListNotificationsRequest) {
  /**
   * @internal
   */
  ListNotificationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListNotificationsRequest || (ListNotificationsRequest = {}));
export var Notification;
(function (Notification) {
  /**
   * @internal
   */
  Notification.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Notification || (Notification = {}));
export var ListNotificationsResponse;
(function (ListNotificationsResponse) {
  /**
   * @internal
   */
  ListNotificationsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListNotificationsResponse || (ListNotificationsResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var RegisterAccountRequest;
(function (RegisterAccountRequest) {
  /**
   * @internal
   */
  RegisterAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RegisterAccountRequest || (RegisterAccountRequest = {}));
export var RegisterAccountResponse;
(function (RegisterAccountResponse) {
  /**
   * @internal
   */
  RegisterAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RegisterAccountResponse || (RegisterAccountResponse = {}));
export var RegisterOrganizationAdminAccountRequest;
(function (RegisterOrganizationAdminAccountRequest) {
  /**
   * @internal
   */
  RegisterOrganizationAdminAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RegisterOrganizationAdminAccountRequest || (RegisterOrganizationAdminAccountRequest = {}));
export var RegisterOrganizationAdminAccountResponse;
(function (RegisterOrganizationAdminAccountResponse) {
  /**
   * @internal
   */
  RegisterOrganizationAdminAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RegisterOrganizationAdminAccountResponse || (RegisterOrganizationAdminAccountResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateAssessmentRequest;
(function (UpdateAssessmentRequest) {
  /**
   * @internal
   */
  UpdateAssessmentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentRequest || (UpdateAssessmentRequest = {}));
export var UpdateAssessmentResponse;
(function (UpdateAssessmentResponse) {
  /**
   * @internal
   */
  UpdateAssessmentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentResponse || (UpdateAssessmentResponse = {}));
export var UpdateAssessmentControlRequest;
(function (UpdateAssessmentControlRequest) {
  /**
   * @internal
   */
  UpdateAssessmentControlRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentControlRequest || (UpdateAssessmentControlRequest = {}));
export var UpdateAssessmentControlResponse;
(function (UpdateAssessmentControlResponse) {
  /**
   * @internal
   */
  UpdateAssessmentControlResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentControlResponse || (UpdateAssessmentControlResponse = {}));
export var UpdateAssessmentControlSetStatusRequest;
(function (UpdateAssessmentControlSetStatusRequest) {
  /**
   * @internal
   */
  UpdateAssessmentControlSetStatusRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentControlSetStatusRequest || (UpdateAssessmentControlSetStatusRequest = {}));
export var UpdateAssessmentControlSetStatusResponse;
(function (UpdateAssessmentControlSetStatusResponse) {
  /**
   * @internal
   */
  UpdateAssessmentControlSetStatusResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentControlSetStatusResponse || (UpdateAssessmentControlSetStatusResponse = {}));
export var UpdateAssessmentFrameworkControlSet;
(function (UpdateAssessmentFrameworkControlSet) {
  /**
   * @internal
   */
  UpdateAssessmentFrameworkControlSet.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentFrameworkControlSet || (UpdateAssessmentFrameworkControlSet = {}));
export var UpdateAssessmentFrameworkRequest;
(function (UpdateAssessmentFrameworkRequest) {
  /**
   * @internal
   */
  UpdateAssessmentFrameworkRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentFrameworkRequest || (UpdateAssessmentFrameworkRequest = {}));
export var UpdateAssessmentFrameworkResponse;
(function (UpdateAssessmentFrameworkResponse) {
  /**
   * @internal
   */
  UpdateAssessmentFrameworkResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentFrameworkResponse || (UpdateAssessmentFrameworkResponse = {}));
export var UpdateAssessmentStatusRequest;
(function (UpdateAssessmentStatusRequest) {
  /**
   * @internal
   */
  UpdateAssessmentStatusRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentStatusRequest || (UpdateAssessmentStatusRequest = {}));
export var UpdateAssessmentStatusResponse;
(function (UpdateAssessmentStatusResponse) {
  /**
   * @internal
   */
  UpdateAssessmentStatusResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAssessmentStatusResponse || (UpdateAssessmentStatusResponse = {}));
export var UpdateControlRequest;
(function (UpdateControlRequest) {
  /**
   * @internal
   */
  UpdateControlRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateControlRequest || (UpdateControlRequest = {}));
export var UpdateControlResponse;
(function (UpdateControlResponse) {
  /**
   * @internal
   */
  UpdateControlResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateControlResponse || (UpdateControlResponse = {}));
export var UpdateSettingsRequest;
(function (UpdateSettingsRequest) {
  /**
   * @internal
   */
  UpdateSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateSettingsRequest || (UpdateSettingsRequest = {}));
export var UpdateSettingsResponse;
(function (UpdateSettingsResponse) {
  /**
   * @internal
   */
  UpdateSettingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateSettingsResponse || (UpdateSettingsResponse = {}));
export var ValidateAssessmentReportIntegrityRequest;
(function (ValidateAssessmentReportIntegrityRequest) {
  /**
   * @internal
   */
  ValidateAssessmentReportIntegrityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidateAssessmentReportIntegrityRequest || (ValidateAssessmentReportIntegrityRequest = {}));
export var ValidateAssessmentReportIntegrityResponse;
(function (ValidateAssessmentReportIntegrityResponse) {
  /**
   * @internal
   */
  ValidateAssessmentReportIntegrityResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidateAssessmentReportIntegrityResponse || (ValidateAssessmentReportIntegrityResponse = {}));
//# sourceMappingURL=models_0.js.map
