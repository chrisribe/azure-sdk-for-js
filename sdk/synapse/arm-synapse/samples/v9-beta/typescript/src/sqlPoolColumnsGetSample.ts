/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get Sql pool column
 *
 * @summary Get Sql pool column
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/SqlPoolColumnGet.json
 */
async function getDatabaseColumn(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "myRG";
  const workspaceName = "serverName";
  const sqlPoolName = "myDatabase";
  const schemaName = "dbo";
  const tableName = "table1";
  const columnName = "column1";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolColumns.get(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    schemaName,
    tableName,
    columnName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getDatabaseColumn();
}

main().catch(console.error);
