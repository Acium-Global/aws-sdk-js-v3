import { GetDelegationsCommandInput, GetDelegationsCommandOutput } from "../commands/GetDelegationsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDelegations(
  config: AuditManagerPaginationConfiguration,
  input: GetDelegationsCommandInput,
  ...additionalArguments: any
): Paginator<GetDelegationsCommandOutput>;
