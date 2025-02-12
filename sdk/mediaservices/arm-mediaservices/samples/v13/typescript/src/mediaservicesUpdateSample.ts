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
  MediaServiceUpdate,
  AzureMediaServices
} from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates an existing Media Services account
 *
 * @summary Updates an existing Media Services account
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Accounts/stable/2021-11-01/examples/async-accounts-update.json
 */
async function updateAMediaServicesAccounts(): Promise<void> {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contososports";
  const parameters: MediaServiceUpdate = { tags: { key1: "value3" } };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaservices.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  updateAMediaServicesAccounts();
}

main().catch(console.error);
