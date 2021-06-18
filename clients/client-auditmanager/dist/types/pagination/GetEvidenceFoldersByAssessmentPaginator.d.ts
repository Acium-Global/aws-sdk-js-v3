import {
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetEvidenceFoldersByAssessment(
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceFoldersByAssessmentCommandInput,
  ...additionalArguments: any
): Paginator<GetEvidenceFoldersByAssessmentCommandOutput>;
