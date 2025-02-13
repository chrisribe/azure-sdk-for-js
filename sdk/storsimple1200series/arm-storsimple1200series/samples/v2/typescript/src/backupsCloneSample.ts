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
  CloneRequest,
  StorSimpleManagementClient
} from "@azure/arm-storsimple1200series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Clones the given backup element to a new disk or share with given details.
 *
 * @summary Clones the given backup element to a new disk or share with given details.
 * x-ms-original-file: specification/storsimple1200series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/BackupsClone.json
 */
async function backupsClone(): Promise<void> {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const deviceName = "HSDK-4XY4FI2IVG";
  const backupName = "58d33025-e837-41cc-b15f-7c85ced64aab";
  const elementName = "2304968f-91af-4f59-8b79-31e321eee40e";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const cloneRequest: CloneRequest = {
    newEndpointName: "ClonedTieredFileShareForSDKTest",
    share: {
      name: "TieredFileShareForSDKTest",
      description: "Restore file Share",
      adminUser: "HSDK-4XY4FI2IVG\\StorSimpleAdmin",
      dataPolicy: "Tiered",
      monitoringStatus: "Enabled",
      provisionedCapacityInBytes: 536870912000,
      shareStatus: "Online"
    },
    targetAccessPointId:
      "/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/devices/hsdk-4xy4fi2ivg/fileServers/HSDK-4XY4FI2IVG",
    targetDeviceId:
      "/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/devices/hsdk-4xy4fi2ivg"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const result = await client.backups.beginCloneAndWait(
    deviceName,
    backupName,
    elementName,
    resourceGroupName,
    managerName,
    cloneRequest
  );
  console.log(result);
}

backupsClone().catch(console.error);
