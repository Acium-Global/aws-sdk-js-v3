import {
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
} from "../commands/ListAssessmentReportsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssessmentReports(
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentReportsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentReportsCommandOutput>;
