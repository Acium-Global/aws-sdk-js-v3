import { ListAssessmentsCommandInput, ListAssessmentsCommandOutput } from "../commands/ListAssessmentsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssessments(
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentsCommandOutput>;
