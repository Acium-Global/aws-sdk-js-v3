import { GetChangeLogsCommandInput, GetChangeLogsCommandOutput } from "../commands/GetChangeLogsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetChangeLogs(
  config: AuditManagerPaginationConfiguration,
  input: GetChangeLogsCommandInput,
  ...additionalArguments: any
): Paginator<GetChangeLogsCommandOutput>;
