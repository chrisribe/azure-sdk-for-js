/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PrivateEndpointConnection,
  AzureMediaServices
} from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update an existing private endpoint connection.
 *
 * @summary Update an existing private endpoint connection.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Accounts/stable/2021-11-01/examples/private-endpoint-connection-put.json
 */
async function updatePrivateEndpointConnection(): Promise<void> {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contososports";
  const name = "connectionName1";
  const parameters: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "Test description.",
      status: "Approved"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.privateEndpointConnections.createOrUpdate(
    resourceGroupName,
    accountName,
    name,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  updatePrivateEndpointConnection();
}

main().catch(console.error);
