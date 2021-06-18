import {
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "../commands/ListAssessmentFrameworksCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssessmentFrameworks(
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentFrameworksCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentFrameworksCommandOutput>;
