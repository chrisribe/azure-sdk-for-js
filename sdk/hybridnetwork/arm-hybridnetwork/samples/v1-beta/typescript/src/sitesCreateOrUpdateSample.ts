/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Site, HybridNetworkManagementClient } from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a network site.
 *
 * @summary Creates or updates a network site.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/SiteCreate.json
 */
async function createNetworkSite(): Promise<void> {
  const subscriptionId =
    process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "rg1";
  const siteName = "testSite";
  const parameters: Site = {
    location: "westUs2",
    properties: {
      nfvis: [
        { name: "nfvi1", location: "westUs2", nfviType: "AzureCore" },
        {
          name: "nfvi2",
          customLocationReference: {
            id:
              "/subscriptions/subid/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation1"
          },
          nfviType: "AzureArcKubernetes"
        },
        {
          name: "nfvi3",
          customLocationReference: {
            id:
              "/subscriptions/subid/resourceGroups/testResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/testCustomLocation2"
          },
          nfviType: "AzureOperatorNexus"
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.sites.beginCreateOrUpdateAndWait(
    resourceGroupName,
    siteName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  createNetworkSite();
}

main().catch(console.error);
