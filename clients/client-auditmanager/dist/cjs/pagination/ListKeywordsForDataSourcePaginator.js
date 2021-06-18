"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListKeywordsForDataSource = void 0;
const AuditManager_1 = require("../AuditManager");
const AuditManagerClient_1 = require("../AuditManagerClient");
const ListKeywordsForDataSourceCommand_1 = require("../commands/ListKeywordsForDataSourceCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.send(new ListKeywordsForDataSourceCommand_1.ListKeywordsForDataSourceCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
  // @ts-ignore
  return await client.listKeywordsForDataSource(input, ...args);
};
async function* paginateListKeywordsForDataSource(config, input, ...additionalArguments) {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token = config.startingToken || undefined;
  let hasNext = true;
  let page;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AuditManager_1.AuditManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AuditManagerClient_1.AuditManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AuditManager | AuditManagerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
exports.paginateListKeywordsForDataSource = paginateListKeywordsForDataSource;
//# sourceMappingURL=ListKeywordsForDataSourcePaginator.js.map
