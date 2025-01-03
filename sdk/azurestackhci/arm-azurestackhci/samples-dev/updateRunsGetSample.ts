/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureStackHCIClient } from "@azure/arm-azurestackhci";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get the Update run for a specified update
 *
 * @summary Get the Update run for a specified update
 * x-ms-original-file: specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/stable/2024-04-01/examples/GetUpdateRuns.json
 */
async function getUpdateRunsUnderClusterResource() {
  const subscriptionId =
    process.env["AZURESTACKHCI_SUBSCRIPTION_ID"] ||
    "b8d594e5-51f3-4c11-9c54-a7771b81c712";
  const resourceGroupName =
    process.env["AZURESTACKHCI_RESOURCE_GROUP"] || "testrg";
  const clusterName = "testcluster";
  const updateName = "Microsoft4.2203.2.32";
  const updateRunName = "23b779ba-0d52-4a80-8571-45ca74664ec3";
  const credential = new DefaultAzureCredential();
  const client = new AzureStackHCIClient(credential, subscriptionId);
  const result = await client.updateRuns.get(
    resourceGroupName,
    clusterName,
    updateName,
    updateRunName,
  );
  console.log(result);
}

async function main() {
  getUpdateRunsUnderClusterResource();
}

main().catch(console.error);
