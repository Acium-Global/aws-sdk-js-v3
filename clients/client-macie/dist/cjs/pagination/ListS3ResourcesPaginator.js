"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListS3Resources = void 0;
const Macie_1 = require("../Macie");
const MacieClient_1 = require("../MacieClient");
const ListS3ResourcesCommand_1 = require("../commands/ListS3ResourcesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListS3ResourcesCommand_1.ListS3ResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listS3Resources(input, ...args);
};
async function* paginateListS3Resources(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof Macie_1.Macie) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof MacieClient_1.MacieClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Macie | MacieClient");
        }
        yield page;
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListS3Resources = paginateListS3Resources;
//# sourceMappingURL=ListS3ResourcesPaginator.js.map