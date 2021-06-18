import {
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentControlCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetEvidenceFoldersByAssessmentControl(
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  ...additionalArguments: any
): Paginator<GetEvidenceFoldersByAssessmentControlCommandOutput>;
