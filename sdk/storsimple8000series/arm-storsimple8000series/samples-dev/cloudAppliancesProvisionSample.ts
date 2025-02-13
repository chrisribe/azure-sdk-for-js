/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { CloudAppliance } from "@azure/arm-storsimple8000series";
import { StorSimple8000SeriesManagementClient } from "@azure/arm-storsimple8000series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Provisions cloud appliance.
 *
 * @summary Provisions cloud appliance.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/CloudAppliancesProvision.json
 */
async function cloudAppliancesProvision(): Promise<void> {
  const subscriptionId = "d3ebfe71-b7a9-4c57-92b9-68a2afde4de5";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const parameters: CloudAppliance = {
    name: "sca07forsdktest",
    modelNumber: "8020",
    vnetRegion: "West US",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(credential, subscriptionId);
  const result = await client.cloudAppliances.beginProvisionAndWait(
    resourceGroupName,
    managerName,
    parameters,
  );
  console.log(result);
}

cloudAppliancesProvision().catch(console.error);
