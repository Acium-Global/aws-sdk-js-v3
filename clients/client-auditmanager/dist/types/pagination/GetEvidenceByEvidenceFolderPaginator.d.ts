import {
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
} from "../commands/GetEvidenceByEvidenceFolderCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetEvidenceByEvidenceFolder(
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceByEvidenceFolderCommandInput,
  ...additionalArguments: any
): Paginator<GetEvidenceByEvidenceFolderCommandOutput>;
