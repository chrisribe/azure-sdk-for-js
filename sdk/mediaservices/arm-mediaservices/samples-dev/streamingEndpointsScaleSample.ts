/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { StreamingEntityScaleUnit } from "@azure/arm-mediaservices";
import { AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Scales an existing streaming endpoint.
 *
 * @summary Scales an existing streaming endpoint.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Streaming/stable/2022-08-01/examples/streamingendpoint-scale.json
 */
async function scaleAStreamingEndpoint(): Promise<void> {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "0a6ec948-5a62-437d-b9df-934dc7c1b722";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "mediaresources";
  const accountName = "slitestmedia10";
  const streamingEndpointName = "myStreamingEndpoint1";
  const parameters: StreamingEntityScaleUnit = { scaleUnit: 5 };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.streamingEndpoints.beginScaleAndWait(
    resourceGroupName,
    accountName,
    streamingEndpointName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await scaleAStreamingEndpoint();
}

main().catch(console.error);
