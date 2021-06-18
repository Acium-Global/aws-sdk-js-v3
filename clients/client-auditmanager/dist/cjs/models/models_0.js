"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManualEvidence =
  exports.BatchDisassociateAssessmentReportEvidenceResponse =
  exports.BatchDisassociateAssessmentReportEvidenceRequest =
  exports.BatchDeleteDelegationByAssessmentResponse =
  exports.BatchDeleteDelegationByAssessmentError =
  exports.BatchDeleteDelegationByAssessmentRequest =
  exports.BatchCreateDelegationByAssessmentResponse =
  exports.BatchCreateDelegationByAssessmentError =
  exports.BatchCreateDelegationByAssessmentRequest =
  exports.CreateDelegationRequest =
  exports.BatchAssociateAssessmentReportEvidenceResponse =
  exports.BatchAssociateAssessmentReportEvidenceRequest =
  exports.ValidationException =
  exports.ValidationExceptionReason =
  exports.ValidationExceptionField =
  exports.ResourceNotFoundException =
  exports.InternalServerException =
  exports.AssociateAssessmentReportEvidenceFolderResponse =
  exports.AssociateAssessmentReportEvidenceFolderRequest =
  exports.AssessmentReportMetadata =
  exports.AssessmentReportEvidenceError =
  exports.AssessmentReport =
  exports.AssessmentReportStatus =
  exports.AssessmentMetadataItem =
  exports.AssessmentFrameworkMetadata =
  exports.FrameworkType =
  exports.AssessmentEvidenceFolder =
  exports.Assessment =
  exports.AssessmentMetadata =
  exports.AssessmentStatus =
  exports.Scope =
  exports.AWSService =
  exports.AssessmentReportsDestination =
  exports.AssessmentReportDestinationType =
  exports.AssessmentFramework =
  exports.FrameworkMetadata =
  exports.AssessmentControlSet =
  exports.ControlSetStatus =
  exports.Role =
  exports.Delegation =
  exports.DelegationStatus =
  exports.RoleType =
  exports.AssessmentControl =
  exports.ControlStatus =
  exports.ControlResponse =
  exports.ControlComment =
  exports.AWSAccount =
  exports.ActionEnum =
  exports.AccountStatus =
  exports.AccessDeniedException =
    void 0;
exports.ChangeLog =
  exports.ObjectTypeEnum =
  exports.GetChangeLogsRequest =
  exports.GetAssessmentReportUrlResponse =
  exports.URL =
  exports.GetAssessmentReportUrlRequest =
  exports.GetAssessmentFrameworkResponse =
  exports.GetAssessmentFrameworkRequest =
  exports.GetAssessmentResponse =
  exports.GetAssessmentRequest =
  exports.GetAccountStatusResponse =
  exports.GetAccountStatusRequest =
  exports.DisassociateAssessmentReportEvidenceFolderResponse =
  exports.DisassociateAssessmentReportEvidenceFolderRequest =
  exports.DeregisterOrganizationAdminAccountResponse =
  exports.DeregisterOrganizationAdminAccountRequest =
  exports.DeregisterAccountResponse =
  exports.DeregisterAccountRequest =
  exports.DeleteControlResponse =
  exports.DeleteControlRequest =
  exports.DeleteAssessmentReportResponse =
  exports.DeleteAssessmentReportRequest =
  exports.DeleteAssessmentFrameworkResponse =
  exports.DeleteAssessmentFrameworkRequest =
  exports.DeleteAssessmentResponse =
  exports.DeleteAssessmentRequest =
  exports.CreateControlResponse =
  exports.CreateControlRequest =
  exports.CreateControlMappingSource =
  exports.CreateAssessmentReportResponse =
  exports.CreateAssessmentReportRequest =
  exports.CreateAssessmentFrameworkResponse =
  exports.Framework =
  exports.ControlSet =
  exports.Control =
  exports.ControlType =
  exports.ControlMappingSource =
  exports.SourceType =
  exports.SourceSetUpOption =
  exports.SourceKeyword =
  exports.KeywordInputType =
  exports.SourceFrequency =
  exports.CreateAssessmentFrameworkRequest =
  exports.CreateAssessmentFrameworkControlSet =
  exports.CreateAssessmentFrameworkControl =
  exports.CreateAssessmentResponse =
  exports.CreateAssessmentRequest =
  exports.BatchImportEvidenceToAssessmentControlResponse =
  exports.BatchImportEvidenceToAssessmentControlError =
  exports.BatchImportEvidenceToAssessmentControlRequest =
    void 0;
exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.RegisterOrganizationAdminAccountResponse =
  exports.RegisterOrganizationAdminAccountRequest =
  exports.RegisterAccountResponse =
  exports.RegisterAccountRequest =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListNotificationsResponse =
  exports.Notification =
  exports.ListNotificationsRequest =
  exports.ListKeywordsForDataSourceResponse =
  exports.ListKeywordsForDataSourceRequest =
  exports.ListControlsResponse =
  exports.ControlMetadata =
  exports.ListControlsRequest =
  exports.ListAssessmentsResponse =
  exports.ListAssessmentsRequest =
  exports.ListAssessmentReportsResponse =
  exports.ListAssessmentReportsRequest =
  exports.ListAssessmentFrameworksResponse =
  exports.ListAssessmentFrameworksRequest =
  exports.GetSettingsResponse =
  exports.Settings =
  exports.GetSettingsRequest =
  exports.SettingAttribute =
  exports.GetServicesInScopeResponse =
  exports.ServiceMetadata =
  exports.GetServicesInScopeRequest =
  exports.GetOrganizationAdminAccountResponse =
  exports.GetOrganizationAdminAccountRequest =
  exports.GetEvidenceFoldersByAssessmentControlResponse =
  exports.GetEvidenceFoldersByAssessmentControlRequest =
  exports.GetEvidenceFoldersByAssessmentResponse =
  exports.GetEvidenceFoldersByAssessmentRequest =
  exports.GetEvidenceFolderResponse =
  exports.GetEvidenceFolderRequest =
  exports.GetEvidenceByEvidenceFolderResponse =
  exports.GetEvidenceByEvidenceFolderRequest =
  exports.GetEvidenceResponse =
  exports.Evidence =
  exports.Resource =
  exports.GetEvidenceRequest =
  exports.GetDelegationsResponse =
  exports.DelegationMetadata =
  exports.GetDelegationsRequest =
  exports.GetControlResponse =
  exports.GetControlRequest =
  exports.GetChangeLogsResponse =
    void 0;
exports.ValidateAssessmentReportIntegrityResponse =
  exports.ValidateAssessmentReportIntegrityRequest =
  exports.UpdateSettingsResponse =
  exports.UpdateSettingsRequest =
  exports.UpdateControlResponse =
  exports.UpdateControlRequest =
  exports.UpdateAssessmentStatusResponse =
  exports.UpdateAssessmentStatusRequest =
  exports.UpdateAssessmentFrameworkResponse =
  exports.UpdateAssessmentFrameworkRequest =
  exports.UpdateAssessmentFrameworkControlSet =
  exports.UpdateAssessmentControlSetStatusResponse =
  exports.UpdateAssessmentControlSetStatusRequest =
  exports.UpdateAssessmentControlResponse =
  exports.UpdateAssessmentControlRequest =
  exports.UpdateAssessmentResponse =
  exports.UpdateAssessmentRequest =
  exports.UntagResourceResponse =
    void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var AccountStatus;
(function (AccountStatus) {
  AccountStatus["ACTIVE"] = "ACTIVE";
  AccountStatus["INACTIVE"] = "INACTIVE";
  AccountStatus["PENDING_ACTIVATION"] = "PENDING_ACTIVATION";
})((AccountStatus = exports.AccountStatus || (exports.AccountStatus = {})));
var ActionEnum;
(function (ActionEnum) {
  ActionEnum["ACTIVE"] = "ACTIVE";
  ActionEnum["CREATE"] = "CREATE";
  ActionEnum["DELETE"] = "DELETE";
  ActionEnum["IMPORT_EVIDENCE"] = "IMPORT_EVIDENCE";
  ActionEnum["INACTIVE"] = "INACTIVE";
  ActionEnum["REVIEWED"] = "REVIEWED";
  ActionEnum["UNDER_REVIEW"] = "UNDER_REVIEW";
  ActionEnum["UPDATE_METADATA"] = "UPDATE_METADATA";
})((ActionEnum = exports.ActionEnum || (exports.ActionEnum = {})));
var AWSAccount;
(function (AWSAccount) {
  /**
   * @internal
   */
  AWSAccount.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AWSAccount = exports.AWSAccount || (exports.AWSAccount = {})));
var ControlComment;
(function (ControlComment) {
  /**
   * @internal
   */
  ControlComment.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ControlComment = exports.ControlComment || (exports.ControlComment = {})));
var ControlResponse;
(function (ControlResponse) {
  ControlResponse["AUTOMATE"] = "AUTOMATE";
  ControlResponse["DEFER"] = "DEFER";
  ControlResponse["IGNORE"] = "IGNORE";
  ControlResponse["MANUAL"] = "MANUAL";
})((ControlResponse = exports.ControlResponse || (exports.ControlResponse = {})));
var ControlStatus;
(function (ControlStatus) {
  ControlStatus["INACTIVE"] = "INACTIVE";
  ControlStatus["REVIEWED"] = "REVIEWED";
  ControlStatus["UNDER_REVIEW"] = "UNDER_REVIEW";
})((ControlStatus = exports.ControlStatus || (exports.ControlStatus = {})));
var AssessmentControl;
(function (AssessmentControl) {
  /**
   * @internal
   */
  AssessmentControl.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssessmentControl = exports.AssessmentControl || (exports.AssessmentControl = {})));
var RoleType;
(function (RoleType) {
  RoleType["PROCESS_OWNER"] = "PROCESS_OWNER";
  RoleType["RESOURCE_OWNER"] = "RESOURCE_OWNER";
})((RoleType = exports.RoleType || (exports.RoleType = {})));
var DelegationStatus;
(function (DelegationStatus) {
  DelegationStatus["COMPLETE"] = "COMPLETE";
  DelegationStatus["IN_PROGRESS"] = "IN_PROGRESS";
  DelegationStatus["UNDER_REVIEW"] = "UNDER_REVIEW";
})((DelegationStatus = exports.DelegationStatus || (exports.DelegationStatus = {})));
var Delegation;
(function (Delegation) {
  /**
   * @internal
   */
  Delegation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Delegation = exports.Delegation || (exports.Delegation = {})));
var Role;
(function (Role) {
  /**
   * @internal
   */
  Role.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Role = exports.Role || (exports.Role = {})));
var ControlSetStatus;
(function (ControlSetStatus) {
  ControlSetStatus["ACTIVE"] = "ACTIVE";
  ControlSetStatus["REVIEWED"] = "REVIEWED";
  ControlSetStatus["UNDER_REVIEW"] = "UNDER_REVIEW";
})((ControlSetStatus = exports.ControlSetStatus || (exports.ControlSetStatus = {})));
var AssessmentControlSet;
(function (AssessmentControlSet) {
  /**
   * @internal
   */
  AssessmentControlSet.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssessmentControlSet = exports.AssessmentControlSet || (exports.AssessmentControlSet = {})));
var FrameworkMetadata;
(function (FrameworkMetadata) {
  /**
   * @internal
   */
  FrameworkMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FrameworkMetadata = exports.FrameworkMetadata || (exports.FrameworkMetadata = {})));
var AssessmentFramework;
(function (AssessmentFramework) {
  /**
   * @internal
   */
  AssessmentFramework.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssessmentFramework = exports.AssessmentFramework || (exports.AssessmentFramework = {})));
var AssessmentReportDestinationType;
(function (AssessmentReportDestinationType) {
  AssessmentReportDestinationType["S3"] = "S3";
})(
  (AssessmentReportDestinationType =
    exports.AssessmentReportDestinationType || (exports.AssessmentReportDestinationType = {}))
);
var AssessmentReportsDestination;
(function (AssessmentReportsDestination) {
  /**
   * @internal
   */
  AssessmentReportsDestination.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssessmentReportsDestination = exports.AssessmentReportsDestination || (exports.AssessmentReportsDestination = {}))
);
var AWSService;
(function (AWSService) {
  /**
   * @internal
   */
  AWSService.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AWSService = exports.AWSService || (exports.AWSService = {})));
var Scope;
(function (Scope) {
  /**
   * @internal
   */
  Scope.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Scope = exports.Scope || (exports.Scope = {})));
var AssessmentStatus;
(function (AssessmentStatus) {
  AssessmentStatus["ACTIVE"] = "ACTIVE";
  AssessmentStatus["INACTIVE"] = "INACTIVE";
})((AssessmentStatus = exports.AssessmentStatus || (exports.AssessmentStatus = {})));
var AssessmentMetadata;
(function (AssessmentMetadata) {
  /**
   * @internal
   */
  AssessmentMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssessmentMetadata = exports.AssessmentMetadata || (exports.AssessmentMetadata = {})));
var Assessment;
(function (Assessment) {
  /**
   * @internal
   */
  Assessment.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Assessment = exports.Assessment || (exports.Assessment = {})));
var AssessmentEvidenceFolder;
(function (AssessmentEvidenceFolder) {
  /**
   * @internal
   */
  AssessmentEvidenceFolder.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssessmentEvidenceFolder = exports.AssessmentEvidenceFolder || (exports.AssessmentEvidenceFolder = {})));
var FrameworkType;
(function (FrameworkType) {
  FrameworkType["CUSTOM"] = "Custom";
  FrameworkType["STANDARD"] = "Standard";
})((FrameworkType = exports.FrameworkType || (exports.FrameworkType = {})));
var AssessmentFrameworkMetadata;
(function (AssessmentFrameworkMetadata) {
  /**
   * @internal
   */
  AssessmentFrameworkMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssessmentFrameworkMetadata = exports.AssessmentFrameworkMetadata || (exports.AssessmentFrameworkMetadata = {})));
var AssessmentMetadataItem;
(function (AssessmentMetadataItem) {
  /**
   * @internal
   */
  AssessmentMetadataItem.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssessmentMetadataItem = exports.AssessmentMetadataItem || (exports.AssessmentMetadataItem = {})));
var AssessmentReportStatus;
(function (AssessmentReportStatus) {
  AssessmentReportStatus["COMPLETE"] = "COMPLETE";
  AssessmentReportStatus["FAILED"] = "FAILED";
  AssessmentReportStatus["IN_PROGRESS"] = "IN_PROGRESS";
})((AssessmentReportStatus = exports.AssessmentReportStatus || (exports.AssessmentReportStatus = {})));
var AssessmentReport;
(function (AssessmentReport) {
  /**
   * @internal
   */
  AssessmentReport.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssessmentReport = exports.AssessmentReport || (exports.AssessmentReport = {})));
var AssessmentReportEvidenceError;
(function (AssessmentReportEvidenceError) {
  /**
   * @internal
   */
  AssessmentReportEvidenceError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssessmentReportEvidenceError =
    exports.AssessmentReportEvidenceError || (exports.AssessmentReportEvidenceError = {}))
);
var AssessmentReportMetadata;
(function (AssessmentReportMetadata) {
  /**
   * @internal
   */
  AssessmentReportMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AssessmentReportMetadata = exports.AssessmentReportMetadata || (exports.AssessmentReportMetadata = {})));
var AssociateAssessmentReportEvidenceFolderRequest;
(function (AssociateAssessmentReportEvidenceFolderRequest) {
  /**
   * @internal
   */
  AssociateAssessmentReportEvidenceFolderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateAssessmentReportEvidenceFolderRequest =
    exports.AssociateAssessmentReportEvidenceFolderRequest ||
    (exports.AssociateAssessmentReportEvidenceFolderRequest = {}))
);
var AssociateAssessmentReportEvidenceFolderResponse;
(function (AssociateAssessmentReportEvidenceFolderResponse) {
  /**
   * @internal
   */
  AssociateAssessmentReportEvidenceFolderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateAssessmentReportEvidenceFolderResponse =
    exports.AssociateAssessmentReportEvidenceFolderResponse ||
    (exports.AssociateAssessmentReportEvidenceFolderResponse = {}))
);
var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServerException = exports.InternalServerException || (exports.InternalServerException = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var ValidationExceptionField;
(function (ValidationExceptionField) {
  /**
   * @internal
   */
  ValidationExceptionField.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {})));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
  ValidationExceptionReason["CANNOT_PARSE"] = "cannotParse";
  ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "fieldValidationFailed";
  ValidationExceptionReason["OTHER"] = "other";
  ValidationExceptionReason["UNKNOWN_OPERATION"] = "unknownOperation";
})((ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {})));
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var BatchAssociateAssessmentReportEvidenceRequest;
(function (BatchAssociateAssessmentReportEvidenceRequest) {
  /**
   * @internal
   */
  BatchAssociateAssessmentReportEvidenceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchAssociateAssessmentReportEvidenceRequest =
    exports.BatchAssociateAssessmentReportEvidenceRequest ||
    (exports.BatchAssociateAssessmentReportEvidenceRequest = {}))
);
var BatchAssociateAssessmentReportEvidenceResponse;
(function (BatchAssociateAssessmentReportEvidenceResponse) {
  /**
   * @internal
   */
  BatchAssociateAssessmentReportEvidenceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchAssociateAssessmentReportEvidenceResponse =
    exports.BatchAssociateAssessmentReportEvidenceResponse ||
    (exports.BatchAssociateAssessmentReportEvidenceResponse = {}))
);
var CreateDelegationRequest;
(function (CreateDelegationRequest) {
  /**
   * @internal
   */
  CreateDelegationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDelegationRequest = exports.CreateDelegationRequest || (exports.CreateDelegationRequest = {})));
var BatchCreateDelegationByAssessmentRequest;
(function (BatchCreateDelegationByAssessmentRequest) {
  /**
   * @internal
   */
  BatchCreateDelegationByAssessmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchCreateDelegationByAssessmentRequest =
    exports.BatchCreateDelegationByAssessmentRequest || (exports.BatchCreateDelegationByAssessmentRequest = {}))
);
var BatchCreateDelegationByAssessmentError;
(function (BatchCreateDelegationByAssessmentError) {
  /**
   * @internal
   */
  BatchCreateDelegationByAssessmentError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchCreateDelegationByAssessmentError =
    exports.BatchCreateDelegationByAssessmentError || (exports.BatchCreateDelegationByAssessmentError = {}))
);
var BatchCreateDelegationByAssessmentResponse;
(function (BatchCreateDelegationByAssessmentResponse) {
  /**
   * @internal
   */
  BatchCreateDelegationByAssessmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchCreateDelegationByAssessmentResponse =
    exports.BatchCreateDelegationByAssessmentResponse || (exports.BatchCreateDelegationByAssessmentResponse = {}))
);
var BatchDeleteDelegationByAssessmentRequest;
(function (BatchDeleteDelegationByAssessmentRequest) {
  /**
   * @internal
   */
  BatchDeleteDelegationByAssessmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDeleteDelegationByAssessmentRequest =
    exports.BatchDeleteDelegationByAssessmentRequest || (exports.BatchDeleteDelegationByAssessmentRequest = {}))
);
var BatchDeleteDelegationByAssessmentError;
(function (BatchDeleteDelegationByAssessmentError) {
  /**
   * @internal
   */
  BatchDeleteDelegationByAssessmentError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDeleteDelegationByAssessmentError =
    exports.BatchDeleteDelegationByAssessmentError || (exports.BatchDeleteDelegationByAssessmentError = {}))
);
var BatchDeleteDelegationByAssessmentResponse;
(function (BatchDeleteDelegationByAssessmentResponse) {
  /**
   * @internal
   */
  BatchDeleteDelegationByAssessmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDeleteDelegationByAssessmentResponse =
    exports.BatchDeleteDelegationByAssessmentResponse || (exports.BatchDeleteDelegationByAssessmentResponse = {}))
);
var BatchDisassociateAssessmentReportEvidenceRequest;
(function (BatchDisassociateAssessmentReportEvidenceRequest) {
  /**
   * @internal
   */
  BatchDisassociateAssessmentReportEvidenceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDisassociateAssessmentReportEvidenceRequest =
    exports.BatchDisassociateAssessmentReportEvidenceRequest ||
    (exports.BatchDisassociateAssessmentReportEvidenceRequest = {}))
);
var BatchDisassociateAssessmentReportEvidenceResponse;
(function (BatchDisassociateAssessmentReportEvidenceResponse) {
  /**
   * @internal
   */
  BatchDisassociateAssessmentReportEvidenceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDisassociateAssessmentReportEvidenceResponse =
    exports.BatchDisassociateAssessmentReportEvidenceResponse ||
    (exports.BatchDisassociateAssessmentReportEvidenceResponse = {}))
);
var ManualEvidence;
(function (ManualEvidence) {
  /**
   * @internal
   */
  ManualEvidence.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ManualEvidence = exports.ManualEvidence || (exports.ManualEvidence = {})));
var BatchImportEvidenceToAssessmentControlRequest;
(function (BatchImportEvidenceToAssessmentControlRequest) {
  /**
   * @internal
   */
  BatchImportEvidenceToAssessmentControlRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchImportEvidenceToAssessmentControlRequest =
    exports.BatchImportEvidenceToAssessmentControlRequest ||
    (exports.BatchImportEvidenceToAssessmentControlRequest = {}))
);
var BatchImportEvidenceToAssessmentControlError;
(function (BatchImportEvidenceToAssessmentControlError) {
  /**
   * @internal
   */
  BatchImportEvidenceToAssessmentControlError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchImportEvidenceToAssessmentControlError =
    exports.BatchImportEvidenceToAssessmentControlError || (exports.BatchImportEvidenceToAssessmentControlError = {}))
);
var BatchImportEvidenceToAssessmentControlResponse;
(function (BatchImportEvidenceToAssessmentControlResponse) {
  /**
   * @internal
   */
  BatchImportEvidenceToAssessmentControlResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchImportEvidenceToAssessmentControlResponse =
    exports.BatchImportEvidenceToAssessmentControlResponse ||
    (exports.BatchImportEvidenceToAssessmentControlResponse = {}))
);
var CreateAssessmentRequest;
(function (CreateAssessmentRequest) {
  /**
   * @internal
   */
  CreateAssessmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAssessmentRequest = exports.CreateAssessmentRequest || (exports.CreateAssessmentRequest = {})));
var CreateAssessmentResponse;
(function (CreateAssessmentResponse) {
  /**
   * @internal
   */
  CreateAssessmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAssessmentResponse = exports.CreateAssessmentResponse || (exports.CreateAssessmentResponse = {})));
var CreateAssessmentFrameworkControl;
(function (CreateAssessmentFrameworkControl) {
  /**
   * @internal
   */
  CreateAssessmentFrameworkControl.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAssessmentFrameworkControl =
    exports.CreateAssessmentFrameworkControl || (exports.CreateAssessmentFrameworkControl = {}))
);
var CreateAssessmentFrameworkControlSet;
(function (CreateAssessmentFrameworkControlSet) {
  /**
   * @internal
   */
  CreateAssessmentFrameworkControlSet.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAssessmentFrameworkControlSet =
    exports.CreateAssessmentFrameworkControlSet || (exports.CreateAssessmentFrameworkControlSet = {}))
);
var CreateAssessmentFrameworkRequest;
(function (CreateAssessmentFrameworkRequest) {
  /**
   * @internal
   */
  CreateAssessmentFrameworkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAssessmentFrameworkRequest =
    exports.CreateAssessmentFrameworkRequest || (exports.CreateAssessmentFrameworkRequest = {}))
);
var SourceFrequency;
(function (SourceFrequency) {
  SourceFrequency["DAILY"] = "DAILY";
  SourceFrequency["MONTHLY"] = "MONTHLY";
  SourceFrequency["WEEKLY"] = "WEEKLY";
})((SourceFrequency = exports.SourceFrequency || (exports.SourceFrequency = {})));
var KeywordInputType;
(function (KeywordInputType) {
  KeywordInputType["SELECT_FROM_LIST"] = "SELECT_FROM_LIST";
})((KeywordInputType = exports.KeywordInputType || (exports.KeywordInputType = {})));
var SourceKeyword;
(function (SourceKeyword) {
  /**
   * @internal
   */
  SourceKeyword.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SourceKeyword = exports.SourceKeyword || (exports.SourceKeyword = {})));
var SourceSetUpOption;
(function (SourceSetUpOption) {
  SourceSetUpOption["PROCEDURAL_CONTROLS_MAPPING"] = "Procedural_Controls_Mapping";
  SourceSetUpOption["SYSTEM_CONTROLS_MAPPING"] = "System_Controls_Mapping";
})((SourceSetUpOption = exports.SourceSetUpOption || (exports.SourceSetUpOption = {})));
var SourceType;
(function (SourceType) {
  SourceType["AWS_API_CALL"] = "AWS_API_Call";
  SourceType["AWS_CLOUDTRAIL"] = "AWS_Cloudtrail";
  SourceType["AWS_CONFIG"] = "AWS_Config";
  SourceType["AWS_SECURITY_HUB"] = "AWS_Security_Hub";
  SourceType["MANUAL"] = "MANUAL";
})((SourceType = exports.SourceType || (exports.SourceType = {})));
var ControlMappingSource;
(function (ControlMappingSource) {
  /**
   * @internal
   */
  ControlMappingSource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ControlMappingSource = exports.ControlMappingSource || (exports.ControlMappingSource = {})));
var ControlType;
(function (ControlType) {
  ControlType["CUSTOM"] = "Custom";
  ControlType["STANDARD"] = "Standard";
})((ControlType = exports.ControlType || (exports.ControlType = {})));
var Control;
(function (Control) {
  /**
   * @internal
   */
  Control.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Control = exports.Control || (exports.Control = {})));
var ControlSet;
(function (ControlSet) {
  /**
   * @internal
   */
  ControlSet.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ControlSet = exports.ControlSet || (exports.ControlSet = {})));
var Framework;
(function (Framework) {
  /**
   * @internal
   */
  Framework.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Framework = exports.Framework || (exports.Framework = {})));
var CreateAssessmentFrameworkResponse;
(function (CreateAssessmentFrameworkResponse) {
  /**
   * @internal
   */
  CreateAssessmentFrameworkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAssessmentFrameworkResponse =
    exports.CreateAssessmentFrameworkResponse || (exports.CreateAssessmentFrameworkResponse = {}))
);
var CreateAssessmentReportRequest;
(function (CreateAssessmentReportRequest) {
  /**
   * @internal
   */
  CreateAssessmentReportRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAssessmentReportRequest =
    exports.CreateAssessmentReportRequest || (exports.CreateAssessmentReportRequest = {}))
);
var CreateAssessmentReportResponse;
(function (CreateAssessmentReportResponse) {
  /**
   * @internal
   */
  CreateAssessmentReportResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateAssessmentReportResponse =
    exports.CreateAssessmentReportResponse || (exports.CreateAssessmentReportResponse = {}))
);
var CreateControlMappingSource;
(function (CreateControlMappingSource) {
  /**
   * @internal
   */
  CreateControlMappingSource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateControlMappingSource = exports.CreateControlMappingSource || (exports.CreateControlMappingSource = {})));
var CreateControlRequest;
(function (CreateControlRequest) {
  /**
   * @internal
   */
  CreateControlRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateControlRequest = exports.CreateControlRequest || (exports.CreateControlRequest = {})));
var CreateControlResponse;
(function (CreateControlResponse) {
  /**
   * @internal
   */
  CreateControlResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateControlResponse = exports.CreateControlResponse || (exports.CreateControlResponse = {})));
var DeleteAssessmentRequest;
(function (DeleteAssessmentRequest) {
  /**
   * @internal
   */
  DeleteAssessmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAssessmentRequest = exports.DeleteAssessmentRequest || (exports.DeleteAssessmentRequest = {})));
var DeleteAssessmentResponse;
(function (DeleteAssessmentResponse) {
  /**
   * @internal
   */
  DeleteAssessmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAssessmentResponse = exports.DeleteAssessmentResponse || (exports.DeleteAssessmentResponse = {})));
var DeleteAssessmentFrameworkRequest;
(function (DeleteAssessmentFrameworkRequest) {
  /**
   * @internal
   */
  DeleteAssessmentFrameworkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAssessmentFrameworkRequest =
    exports.DeleteAssessmentFrameworkRequest || (exports.DeleteAssessmentFrameworkRequest = {}))
);
var DeleteAssessmentFrameworkResponse;
(function (DeleteAssessmentFrameworkResponse) {
  /**
   * @internal
   */
  DeleteAssessmentFrameworkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAssessmentFrameworkResponse =
    exports.DeleteAssessmentFrameworkResponse || (exports.DeleteAssessmentFrameworkResponse = {}))
);
var DeleteAssessmentReportRequest;
(function (DeleteAssessmentReportRequest) {
  /**
   * @internal
   */
  DeleteAssessmentReportRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAssessmentReportRequest =
    exports.DeleteAssessmentReportRequest || (exports.DeleteAssessmentReportRequest = {}))
);
var DeleteAssessmentReportResponse;
(function (DeleteAssessmentReportResponse) {
  /**
   * @internal
   */
  DeleteAssessmentReportResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAssessmentReportResponse =
    exports.DeleteAssessmentReportResponse || (exports.DeleteAssessmentReportResponse = {}))
);
var DeleteControlRequest;
(function (DeleteControlRequest) {
  /**
   * @internal
   */
  DeleteControlRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteControlRequest = exports.DeleteControlRequest || (exports.DeleteControlRequest = {})));
var DeleteControlResponse;
(function (DeleteControlResponse) {
  /**
   * @internal
   */
  DeleteControlResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteControlResponse = exports.DeleteControlResponse || (exports.DeleteControlResponse = {})));
var DeregisterAccountRequest;
(function (DeregisterAccountRequest) {
  /**
   * @internal
   */
  DeregisterAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeregisterAccountRequest = exports.DeregisterAccountRequest || (exports.DeregisterAccountRequest = {})));
var DeregisterAccountResponse;
(function (DeregisterAccountResponse) {
  /**
   * @internal
   */
  DeregisterAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeregisterAccountResponse = exports.DeregisterAccountResponse || (exports.DeregisterAccountResponse = {})));
var DeregisterOrganizationAdminAccountRequest;
(function (DeregisterOrganizationAdminAccountRequest) {
  /**
   * @internal
   */
  DeregisterOrganizationAdminAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeregisterOrganizationAdminAccountRequest =
    exports.DeregisterOrganizationAdminAccountRequest || (exports.DeregisterOrganizationAdminAccountRequest = {}))
);
var DeregisterOrganizationAdminAccountResponse;
(function (DeregisterOrganizationAdminAccountResponse) {
  /**
   * @internal
   */
  DeregisterOrganizationAdminAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeregisterOrganizationAdminAccountResponse =
    exports.DeregisterOrganizationAdminAccountResponse || (exports.DeregisterOrganizationAdminAccountResponse = {}))
);
var DisassociateAssessmentReportEvidenceFolderRequest;
(function (DisassociateAssessmentReportEvidenceFolderRequest) {
  /**
   * @internal
   */
  DisassociateAssessmentReportEvidenceFolderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateAssessmentReportEvidenceFolderRequest =
    exports.DisassociateAssessmentReportEvidenceFolderRequest ||
    (exports.DisassociateAssessmentReportEvidenceFolderRequest = {}))
);
var DisassociateAssessmentReportEvidenceFolderResponse;
(function (DisassociateAssessmentReportEvidenceFolderResponse) {
  /**
   * @internal
   */
  DisassociateAssessmentReportEvidenceFolderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateAssessmentReportEvidenceFolderResponse =
    exports.DisassociateAssessmentReportEvidenceFolderResponse ||
    (exports.DisassociateAssessmentReportEvidenceFolderResponse = {}))
);
var GetAccountStatusRequest;
(function (GetAccountStatusRequest) {
  /**
   * @internal
   */
  GetAccountStatusRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAccountStatusRequest = exports.GetAccountStatusRequest || (exports.GetAccountStatusRequest = {})));
var GetAccountStatusResponse;
(function (GetAccountStatusResponse) {
  /**
   * @internal
   */
  GetAccountStatusResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAccountStatusResponse = exports.GetAccountStatusResponse || (exports.GetAccountStatusResponse = {})));
var GetAssessmentRequest;
(function (GetAssessmentRequest) {
  /**
   * @internal
   */
  GetAssessmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAssessmentRequest = exports.GetAssessmentRequest || (exports.GetAssessmentRequest = {})));
var GetAssessmentResponse;
(function (GetAssessmentResponse) {
  /**
   * @internal
   */
  GetAssessmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAssessmentResponse = exports.GetAssessmentResponse || (exports.GetAssessmentResponse = {})));
var GetAssessmentFrameworkRequest;
(function (GetAssessmentFrameworkRequest) {
  /**
   * @internal
   */
  GetAssessmentFrameworkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAssessmentFrameworkRequest =
    exports.GetAssessmentFrameworkRequest || (exports.GetAssessmentFrameworkRequest = {}))
);
var GetAssessmentFrameworkResponse;
(function (GetAssessmentFrameworkResponse) {
  /**
   * @internal
   */
  GetAssessmentFrameworkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAssessmentFrameworkResponse =
    exports.GetAssessmentFrameworkResponse || (exports.GetAssessmentFrameworkResponse = {}))
);
var GetAssessmentReportUrlRequest;
(function (GetAssessmentReportUrlRequest) {
  /**
   * @internal
   */
  GetAssessmentReportUrlRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAssessmentReportUrlRequest =
    exports.GetAssessmentReportUrlRequest || (exports.GetAssessmentReportUrlRequest = {}))
);
var URL;
(function (URL) {
  /**
   * @internal
   */
  URL.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((URL = exports.URL || (exports.URL = {})));
var GetAssessmentReportUrlResponse;
(function (GetAssessmentReportUrlResponse) {
  /**
   * @internal
   */
  GetAssessmentReportUrlResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAssessmentReportUrlResponse =
    exports.GetAssessmentReportUrlResponse || (exports.GetAssessmentReportUrlResponse = {}))
);
var GetChangeLogsRequest;
(function (GetChangeLogsRequest) {
  /**
   * @internal
   */
  GetChangeLogsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetChangeLogsRequest = exports.GetChangeLogsRequest || (exports.GetChangeLogsRequest = {})));
var ObjectTypeEnum;
(function (ObjectTypeEnum) {
  ObjectTypeEnum["ASSESSMENT"] = "ASSESSMENT";
  ObjectTypeEnum["ASSESSMENT_REPORT"] = "ASSESSMENT_REPORT";
  ObjectTypeEnum["CONTROL"] = "CONTROL";
  ObjectTypeEnum["CONTROL_SET"] = "CONTROL_SET";
  ObjectTypeEnum["DELEGATION"] = "DELEGATION";
})((ObjectTypeEnum = exports.ObjectTypeEnum || (exports.ObjectTypeEnum = {})));
var ChangeLog;
(function (ChangeLog) {
  /**
   * @internal
   */
  ChangeLog.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ChangeLog = exports.ChangeLog || (exports.ChangeLog = {})));
var GetChangeLogsResponse;
(function (GetChangeLogsResponse) {
  /**
   * @internal
   */
  GetChangeLogsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetChangeLogsResponse = exports.GetChangeLogsResponse || (exports.GetChangeLogsResponse = {})));
var GetControlRequest;
(function (GetControlRequest) {
  /**
   * @internal
   */
  GetControlRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetControlRequest = exports.GetControlRequest || (exports.GetControlRequest = {})));
var GetControlResponse;
(function (GetControlResponse) {
  /**
   * @internal
   */
  GetControlResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetControlResponse = exports.GetControlResponse || (exports.GetControlResponse = {})));
var GetDelegationsRequest;
(function (GetDelegationsRequest) {
  /**
   * @internal
   */
  GetDelegationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDelegationsRequest = exports.GetDelegationsRequest || (exports.GetDelegationsRequest = {})));
var DelegationMetadata;
(function (DelegationMetadata) {
  /**
   * @internal
   */
  DelegationMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DelegationMetadata = exports.DelegationMetadata || (exports.DelegationMetadata = {})));
var GetDelegationsResponse;
(function (GetDelegationsResponse) {
  /**
   * @internal
   */
  GetDelegationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDelegationsResponse = exports.GetDelegationsResponse || (exports.GetDelegationsResponse = {})));
var GetEvidenceRequest;
(function (GetEvidenceRequest) {
  /**
   * @internal
   */
  GetEvidenceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetEvidenceRequest = exports.GetEvidenceRequest || (exports.GetEvidenceRequest = {})));
var Resource;
(function (Resource) {
  /**
   * @internal
   */
  Resource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Resource = exports.Resource || (exports.Resource = {})));
var Evidence;
(function (Evidence) {
  /**
   * @internal
   */
  Evidence.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Evidence = exports.Evidence || (exports.Evidence = {})));
var GetEvidenceResponse;
(function (GetEvidenceResponse) {
  /**
   * @internal
   */
  GetEvidenceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetEvidenceResponse = exports.GetEvidenceResponse || (exports.GetEvidenceResponse = {})));
var GetEvidenceByEvidenceFolderRequest;
(function (GetEvidenceByEvidenceFolderRequest) {
  /**
   * @internal
   */
  GetEvidenceByEvidenceFolderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetEvidenceByEvidenceFolderRequest =
    exports.GetEvidenceByEvidenceFolderRequest || (exports.GetEvidenceByEvidenceFolderRequest = {}))
);
var GetEvidenceByEvidenceFolderResponse;
(function (GetEvidenceByEvidenceFolderResponse) {
  /**
   * @internal
   */
  GetEvidenceByEvidenceFolderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetEvidenceByEvidenceFolderResponse =
    exports.GetEvidenceByEvidenceFolderResponse || (exports.GetEvidenceByEvidenceFolderResponse = {}))
);
var GetEvidenceFolderRequest;
(function (GetEvidenceFolderRequest) {
  /**
   * @internal
   */
  GetEvidenceFolderRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetEvidenceFolderRequest = exports.GetEvidenceFolderRequest || (exports.GetEvidenceFolderRequest = {})));
var GetEvidenceFolderResponse;
(function (GetEvidenceFolderResponse) {
  /**
   * @internal
   */
  GetEvidenceFolderResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetEvidenceFolderResponse = exports.GetEvidenceFolderResponse || (exports.GetEvidenceFolderResponse = {})));
var GetEvidenceFoldersByAssessmentRequest;
(function (GetEvidenceFoldersByAssessmentRequest) {
  /**
   * @internal
   */
  GetEvidenceFoldersByAssessmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetEvidenceFoldersByAssessmentRequest =
    exports.GetEvidenceFoldersByAssessmentRequest || (exports.GetEvidenceFoldersByAssessmentRequest = {}))
);
var GetEvidenceFoldersByAssessmentResponse;
(function (GetEvidenceFoldersByAssessmentResponse) {
  /**
   * @internal
   */
  GetEvidenceFoldersByAssessmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetEvidenceFoldersByAssessmentResponse =
    exports.GetEvidenceFoldersByAssessmentResponse || (exports.GetEvidenceFoldersByAssessmentResponse = {}))
);
var GetEvidenceFoldersByAssessmentControlRequest;
(function (GetEvidenceFoldersByAssessmentControlRequest) {
  /**
   * @internal
   */
  GetEvidenceFoldersByAssessmentControlRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetEvidenceFoldersByAssessmentControlRequest =
    exports.GetEvidenceFoldersByAssessmentControlRequest || (exports.GetEvidenceFoldersByAssessmentControlRequest = {}))
);
var GetEvidenceFoldersByAssessmentControlResponse;
(function (GetEvidenceFoldersByAssessmentControlResponse) {
  /**
   * @internal
   */
  GetEvidenceFoldersByAssessmentControlResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetEvidenceFoldersByAssessmentControlResponse =
    exports.GetEvidenceFoldersByAssessmentControlResponse ||
    (exports.GetEvidenceFoldersByAssessmentControlResponse = {}))
);
var GetOrganizationAdminAccountRequest;
(function (GetOrganizationAdminAccountRequest) {
  /**
   * @internal
   */
  GetOrganizationAdminAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetOrganizationAdminAccountRequest =
    exports.GetOrganizationAdminAccountRequest || (exports.GetOrganizationAdminAccountRequest = {}))
);
var GetOrganizationAdminAccountResponse;
(function (GetOrganizationAdminAccountResponse) {
  /**
   * @internal
   */
  GetOrganizationAdminAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetOrganizationAdminAccountResponse =
    exports.GetOrganizationAdminAccountResponse || (exports.GetOrganizationAdminAccountResponse = {}))
);
var GetServicesInScopeRequest;
(function (GetServicesInScopeRequest) {
  /**
   * @internal
   */
  GetServicesInScopeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetServicesInScopeRequest = exports.GetServicesInScopeRequest || (exports.GetServicesInScopeRequest = {})));
var ServiceMetadata;
(function (ServiceMetadata) {
  /**
   * @internal
   */
  ServiceMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceMetadata = exports.ServiceMetadata || (exports.ServiceMetadata = {})));
var GetServicesInScopeResponse;
(function (GetServicesInScopeResponse) {
  /**
   * @internal
   */
  GetServicesInScopeResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetServicesInScopeResponse = exports.GetServicesInScopeResponse || (exports.GetServicesInScopeResponse = {})));
var SettingAttribute;
(function (SettingAttribute) {
  SettingAttribute["ALL"] = "ALL";
  SettingAttribute["DEFAULT_ASSESSMENT_REPORTS_DESTINATION"] = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION";
  SettingAttribute["DEFAULT_PROCESS_OWNERS"] = "DEFAULT_PROCESS_OWNERS";
  SettingAttribute["IS_AWS_ORG_ENABLED"] = "IS_AWS_ORG_ENABLED";
  SettingAttribute["SNS_TOPIC"] = "SNS_TOPIC";
})((SettingAttribute = exports.SettingAttribute || (exports.SettingAttribute = {})));
var GetSettingsRequest;
(function (GetSettingsRequest) {
  /**
   * @internal
   */
  GetSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSettingsRequest = exports.GetSettingsRequest || (exports.GetSettingsRequest = {})));
var Settings;
(function (Settings) {
  /**
   * @internal
   */
  Settings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Settings = exports.Settings || (exports.Settings = {})));
var GetSettingsResponse;
(function (GetSettingsResponse) {
  /**
   * @internal
   */
  GetSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSettingsResponse = exports.GetSettingsResponse || (exports.GetSettingsResponse = {})));
var ListAssessmentFrameworksRequest;
(function (ListAssessmentFrameworksRequest) {
  /**
   * @internal
   */
  ListAssessmentFrameworksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAssessmentFrameworksRequest =
    exports.ListAssessmentFrameworksRequest || (exports.ListAssessmentFrameworksRequest = {}))
);
var ListAssessmentFrameworksResponse;
(function (ListAssessmentFrameworksResponse) {
  /**
   * @internal
   */
  ListAssessmentFrameworksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAssessmentFrameworksResponse =
    exports.ListAssessmentFrameworksResponse || (exports.ListAssessmentFrameworksResponse = {}))
);
var ListAssessmentReportsRequest;
(function (ListAssessmentReportsRequest) {
  /**
   * @internal
   */
  ListAssessmentReportsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAssessmentReportsRequest = exports.ListAssessmentReportsRequest || (exports.ListAssessmentReportsRequest = {}))
);
var ListAssessmentReportsResponse;
(function (ListAssessmentReportsResponse) {
  /**
   * @internal
   */
  ListAssessmentReportsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAssessmentReportsResponse =
    exports.ListAssessmentReportsResponse || (exports.ListAssessmentReportsResponse = {}))
);
var ListAssessmentsRequest;
(function (ListAssessmentsRequest) {
  /**
   * @internal
   */
  ListAssessmentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAssessmentsRequest = exports.ListAssessmentsRequest || (exports.ListAssessmentsRequest = {})));
var ListAssessmentsResponse;
(function (ListAssessmentsResponse) {
  /**
   * @internal
   */
  ListAssessmentsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAssessmentsResponse = exports.ListAssessmentsResponse || (exports.ListAssessmentsResponse = {})));
var ListControlsRequest;
(function (ListControlsRequest) {
  /**
   * @internal
   */
  ListControlsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListControlsRequest = exports.ListControlsRequest || (exports.ListControlsRequest = {})));
var ControlMetadata;
(function (ControlMetadata) {
  /**
   * @internal
   */
  ControlMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ControlMetadata = exports.ControlMetadata || (exports.ControlMetadata = {})));
var ListControlsResponse;
(function (ListControlsResponse) {
  /**
   * @internal
   */
  ListControlsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListControlsResponse = exports.ListControlsResponse || (exports.ListControlsResponse = {})));
var ListKeywordsForDataSourceRequest;
(function (ListKeywordsForDataSourceRequest) {
  /**
   * @internal
   */
  ListKeywordsForDataSourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListKeywordsForDataSourceRequest =
    exports.ListKeywordsForDataSourceRequest || (exports.ListKeywordsForDataSourceRequest = {}))
);
var ListKeywordsForDataSourceResponse;
(function (ListKeywordsForDataSourceResponse) {
  /**
   * @internal
   */
  ListKeywordsForDataSourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListKeywordsForDataSourceResponse =
    exports.ListKeywordsForDataSourceResponse || (exports.ListKeywordsForDataSourceResponse = {}))
);
var ListNotificationsRequest;
(function (ListNotificationsRequest) {
  /**
   * @internal
   */
  ListNotificationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListNotificationsRequest = exports.ListNotificationsRequest || (exports.ListNotificationsRequest = {})));
var Notification;
(function (Notification) {
  /**
   * @internal
   */
  Notification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Notification = exports.Notification || (exports.Notification = {})));
var ListNotificationsResponse;
(function (ListNotificationsResponse) {
  /**
   * @internal
   */
  ListNotificationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListNotificationsResponse = exports.ListNotificationsResponse || (exports.ListNotificationsResponse = {})));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var RegisterAccountRequest;
(function (RegisterAccountRequest) {
  /**
   * @internal
   */
  RegisterAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RegisterAccountRequest = exports.RegisterAccountRequest || (exports.RegisterAccountRequest = {})));
var RegisterAccountResponse;
(function (RegisterAccountResponse) {
  /**
   * @internal
   */
  RegisterAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RegisterAccountResponse = exports.RegisterAccountResponse || (exports.RegisterAccountResponse = {})));
var RegisterOrganizationAdminAccountRequest;
(function (RegisterOrganizationAdminAccountRequest) {
  /**
   * @internal
   */
  RegisterOrganizationAdminAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RegisterOrganizationAdminAccountRequest =
    exports.RegisterOrganizationAdminAccountRequest || (exports.RegisterOrganizationAdminAccountRequest = {}))
);
var RegisterOrganizationAdminAccountResponse;
(function (RegisterOrganizationAdminAccountResponse) {
  /**
   * @internal
   */
  RegisterOrganizationAdminAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RegisterOrganizationAdminAccountResponse =
    exports.RegisterOrganizationAdminAccountResponse || (exports.RegisterOrganizationAdminAccountResponse = {}))
);
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var UpdateAssessmentRequest;
(function (UpdateAssessmentRequest) {
  /**
   * @internal
   */
  UpdateAssessmentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAssessmentRequest = exports.UpdateAssessmentRequest || (exports.UpdateAssessmentRequest = {})));
var UpdateAssessmentResponse;
(function (UpdateAssessmentResponse) {
  /**
   * @internal
   */
  UpdateAssessmentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAssessmentResponse = exports.UpdateAssessmentResponse || (exports.UpdateAssessmentResponse = {})));
var UpdateAssessmentControlRequest;
(function (UpdateAssessmentControlRequest) {
  /**
   * @internal
   */
  UpdateAssessmentControlRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAssessmentControlRequest =
    exports.UpdateAssessmentControlRequest || (exports.UpdateAssessmentControlRequest = {}))
);
var UpdateAssessmentControlResponse;
(function (UpdateAssessmentControlResponse) {
  /**
   * @internal
   */
  UpdateAssessmentControlResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAssessmentControlResponse =
    exports.UpdateAssessmentControlResponse || (exports.UpdateAssessmentControlResponse = {}))
);
var UpdateAssessmentControlSetStatusRequest;
(function (UpdateAssessmentControlSetStatusRequest) {
  /**
   * @internal
   */
  UpdateAssessmentControlSetStatusRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAssessmentControlSetStatusRequest =
    exports.UpdateAssessmentControlSetStatusRequest || (exports.UpdateAssessmentControlSetStatusRequest = {}))
);
var UpdateAssessmentControlSetStatusResponse;
(function (UpdateAssessmentControlSetStatusResponse) {
  /**
   * @internal
   */
  UpdateAssessmentControlSetStatusResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAssessmentControlSetStatusResponse =
    exports.UpdateAssessmentControlSetStatusResponse || (exports.UpdateAssessmentControlSetStatusResponse = {}))
);
var UpdateAssessmentFrameworkControlSet;
(function (UpdateAssessmentFrameworkControlSet) {
  /**
   * @internal
   */
  UpdateAssessmentFrameworkControlSet.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAssessmentFrameworkControlSet =
    exports.UpdateAssessmentFrameworkControlSet || (exports.UpdateAssessmentFrameworkControlSet = {}))
);
var UpdateAssessmentFrameworkRequest;
(function (UpdateAssessmentFrameworkRequest) {
  /**
   * @internal
   */
  UpdateAssessmentFrameworkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAssessmentFrameworkRequest =
    exports.UpdateAssessmentFrameworkRequest || (exports.UpdateAssessmentFrameworkRequest = {}))
);
var UpdateAssessmentFrameworkResponse;
(function (UpdateAssessmentFrameworkResponse) {
  /**
   * @internal
   */
  UpdateAssessmentFrameworkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAssessmentFrameworkResponse =
    exports.UpdateAssessmentFrameworkResponse || (exports.UpdateAssessmentFrameworkResponse = {}))
);
var UpdateAssessmentStatusRequest;
(function (UpdateAssessmentStatusRequest) {
  /**
   * @internal
   */
  UpdateAssessmentStatusRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAssessmentStatusRequest =
    exports.UpdateAssessmentStatusRequest || (exports.UpdateAssessmentStatusRequest = {}))
);
var UpdateAssessmentStatusResponse;
(function (UpdateAssessmentStatusResponse) {
  /**
   * @internal
   */
  UpdateAssessmentStatusResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateAssessmentStatusResponse =
    exports.UpdateAssessmentStatusResponse || (exports.UpdateAssessmentStatusResponse = {}))
);
var UpdateControlRequest;
(function (UpdateControlRequest) {
  /**
   * @internal
   */
  UpdateControlRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateControlRequest = exports.UpdateControlRequest || (exports.UpdateControlRequest = {})));
var UpdateControlResponse;
(function (UpdateControlResponse) {
  /**
   * @internal
   */
  UpdateControlResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateControlResponse = exports.UpdateControlResponse || (exports.UpdateControlResponse = {})));
var UpdateSettingsRequest;
(function (UpdateSettingsRequest) {
  /**
   * @internal
   */
  UpdateSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateSettingsRequest = exports.UpdateSettingsRequest || (exports.UpdateSettingsRequest = {})));
var UpdateSettingsResponse;
(function (UpdateSettingsResponse) {
  /**
   * @internal
   */
  UpdateSettingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateSettingsResponse = exports.UpdateSettingsResponse || (exports.UpdateSettingsResponse = {})));
var ValidateAssessmentReportIntegrityRequest;
(function (ValidateAssessmentReportIntegrityRequest) {
  /**
   * @internal
   */
  ValidateAssessmentReportIntegrityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ValidateAssessmentReportIntegrityRequest =
    exports.ValidateAssessmentReportIntegrityRequest || (exports.ValidateAssessmentReportIntegrityRequest = {}))
);
var ValidateAssessmentReportIntegrityResponse;
(function (ValidateAssessmentReportIntegrityResponse) {
  /**
   * @internal
   */
  ValidateAssessmentReportIntegrityResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ValidateAssessmentReportIntegrityResponse =
    exports.ValidateAssessmentReportIntegrityResponse || (exports.ValidateAssessmentReportIntegrityResponse = {}))
);
//# sourceMappingURL=models_0.js.map
