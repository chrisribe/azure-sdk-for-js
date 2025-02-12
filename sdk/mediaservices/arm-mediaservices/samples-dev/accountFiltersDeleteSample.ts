/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes an Account Filter in the Media Services account.
 *
 * @summary Deletes an Account Filter in the Media Services account.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/accountFilters-delete.json
 */
async function deleteAnAccountFilter(): Promise<void> {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const filterName = "accountFilterWithTimeWindowAndTrack";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.accountFilters.delete(resourceGroupName, accountName, filterName);
  console.log(result);
}

async function main(): Promise<void> {
  await deleteAnAccountFilter();
}

main().catch(console.error);
