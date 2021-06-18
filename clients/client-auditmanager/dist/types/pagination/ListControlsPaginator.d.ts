import { ListControlsCommandInput, ListControlsCommandOutput } from "../commands/ListControlsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListControls(
  config: AuditManagerPaginationConfiguration,
  input: ListControlsCommandInput,
  ...additionalArguments: any
): Paginator<ListControlsCommandOutput>;
