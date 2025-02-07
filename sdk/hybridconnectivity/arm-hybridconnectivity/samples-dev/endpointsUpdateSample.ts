/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { EndpointResource } from "@azure/arm-hybridconnectivity";
import { HybridConnectivityManagementAPI } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update the endpoint to the target resource.
 *
 * @summary Update the endpoint to the target resource.
 * x-ms-original-file: specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2023-03-15/examples/EndpointsPatchDefault.json
 */
async function hybridConnectivityEndpointsPatchDefault(): Promise<void> {
  const resourceUri =
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/machines/testMachine";
  const endpointName = "default";
  const endpointResource: EndpointResource = {
    properties: { type: "default" },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridConnectivityManagementAPI(credential);
  const result = await client.endpoints.update(resourceUri, endpointName, endpointResource);
  console.log(result);
}

async function main(): Promise<void> {
  await hybridConnectivityEndpointsPatchDefault();
}

main().catch(console.error);
