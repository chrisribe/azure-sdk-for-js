/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ListEdgePoliciesInput } from "@azure/arm-mediaservices";
import { AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List all the media edge policies associated with the Media Services account.
 *
 * @summary List all the media edge policies associated with the Media Services account.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Accounts/stable/2021-11-01/examples/accounts-list-media-edge-policies.json
 */
async function listTheMediaEdgePolicies(): Promise<void> {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contososports";
  const parameters: ListEdgePoliciesInput = {
    deviceId: "contosiothubhost_contosoiotdevice",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaservices.listEdgePolicies(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await listTheMediaEdgePolicies();
}

main().catch(console.error);
