import {
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
} from "../commands/ListKeywordsForDataSourceCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListKeywordsForDataSource(
  config: AuditManagerPaginationConfiguration,
  input: ListKeywordsForDataSourceCommandInput,
  ...additionalArguments: any
): Paginator<ListKeywordsForDataSourceCommandOutput>;
