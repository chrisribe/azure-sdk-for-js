/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { TriggerSupportPackageRequest } from "@azure/arm-databoxedge";
import { DataBoxEdgeManagementClient } from "@azure/arm-databoxedge";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Triggers support package on the device
 *
 * @summary Triggers support package on the device
 * x-ms-original-file: specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/stable/2021-06-01/examples/TriggerSupportPackage.json
 */
async function triggerSupportPackage(): Promise<void> {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "testedgedevice";
  const resourceGroupName = "GroupForEdgeAutomation";
  const triggerSupportPackageRequest: TriggerSupportPackageRequest = {
    include: "DefaultWithDumps",
    maximumTimeStamp: new Date("2018-12-18T02:19:51.4270267Z"),
    minimumTimeStamp: new Date("2018-12-18T02:18:51.4270267Z"),
  };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxEdgeManagementClient(credential, subscriptionId);
  const result = await client.supportPackages.beginTriggerSupportPackageAndWait(
    deviceName,
    resourceGroupName,
    triggerSupportPackageRequest,
  );
  console.log(result);
}

triggerSupportPackage().catch(console.error);
