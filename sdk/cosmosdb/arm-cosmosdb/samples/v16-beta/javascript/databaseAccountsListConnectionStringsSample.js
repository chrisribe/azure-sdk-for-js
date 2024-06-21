/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the connection strings for the specified Azure Cosmos DB database account.
 *
 * @summary Lists the connection strings for the specified Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-05-15-preview/examples/CosmosDBDatabaseAccountListConnectionStrings.json
 */
async function cosmosDbDatabaseAccountListConnectionStrings() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.listConnectionStrings(
    resourceGroupName,
    accountName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Lists the connection strings for the specified Azure Cosmos DB database account.
 *
 * @summary Lists the connection strings for the specified Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-05-15-preview/examples/CosmosDBDatabaseAccountListConnectionStringsMongo.json
 */
async function cosmosDbDatabaseAccountListConnectionStringsMongo() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "mongo-ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.listConnectionStrings(
    resourceGroupName,
    accountName,
  );
  console.log(result);
}

async function main() {
  cosmosDbDatabaseAccountListConnectionStrings();
  cosmosDbDatabaseAccountListConnectionStringsMongo();
}

main().catch(console.error);
