/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a Artifact overview information.
 *
 * @summary Get a Artifact overview information.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/PureProxyArtifact/ArtifactGet.json
 */
async function getAnArtifactOverview(): Promise<void> {
  const subscriptionId =
    process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "TestResourceGroup";
  const publisherName = "TestPublisher";
  const artifactStoreName = "TestArtifactStoreName";
  const artifactName = "fedrbac";
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.proxyArtifact.listVersions(
    resourceGroupName,
    publisherName,
    artifactStoreName,
    artifactName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  getAnArtifactOverview();
}

main().catch(console.error);
