/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { PrivateLinkHubPatchInfo } from "@azure/arm-synapse";
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates a privateLinkHub
 *
 * @summary Updates a privateLinkHub
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/UpdatePrivateLinkHub.json
 */
async function updateAPrivateLinkHub(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "resourceGroup1";
  const privateLinkHubName = "privateLinkHub1";
  const privateLinkHubPatchInfo: PrivateLinkHubPatchInfo = {
    tags: { key: "value" },
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.privateLinkHubs.update(
    resourceGroupName,
    privateLinkHubName,
    privateLinkHubPatchInfo,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateAPrivateLinkHub();
}

main().catch(console.error);
