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
  AccessControlRecord,
  StorSimple8000SeriesManagementClient
} from "@azure/arm-storsimple8000series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or Updates an access control record.
 *
 * @summary Creates or Updates an access control record.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/AccessControlRecordsCreateOrUpdate.json
 */
async function accessControlRecordsCreateOrUpdate(): Promise<void> {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const accessControlRecordName = "ACRForTest";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const parameters: AccessControlRecord = {
    initiatorName: "iqn.2017-06.com.contoso:ForTest"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.accessControlRecords.beginCreateOrUpdateAndWait(
    accessControlRecordName,
    resourceGroupName,
    managerName,
    parameters
  );
  console.log(result);
}

accessControlRecordsCreateOrUpdate().catch(console.error);
