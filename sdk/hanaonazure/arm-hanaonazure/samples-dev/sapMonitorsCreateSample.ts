/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { SapMonitor } from "@azure/arm-hanaonazure";
import { HanaManagementClient } from "@azure/arm-hanaonazure";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @summary Creates a SAP monitor for the specified subscription, resource group, and resource name.
 * x-ms-original-file: specification/hanaonazure/resource-manager/Microsoft.HanaOnAzure/preview/2020-02-07-preview/examples/SapMonitors_Create.json
 */
async function createASapMonitor(): Promise<void> {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const sapMonitorName = "mySapMonitor";
  const sapMonitorParameter: SapMonitor = {
    enableCustomerAnalytics: true,
    location: "westus",
    logAnalyticsWorkspaceArmId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.operationalinsights/workspaces/myWorkspace",
    logAnalyticsWorkspaceId: "00000000-0000-0000-0000-000000000000",
    logAnalyticsWorkspaceSharedKey:
      "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000==",
    monitorSubnet:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet",
    tags: { key: "value" },
  };
  const credential = new DefaultAzureCredential();
  const client = new HanaManagementClient(credential, subscriptionId);
  const result = await client.sapMonitors.beginCreateAndWait(
    resourceGroupName,
    sapMonitorName,
    sapMonitorParameter,
  );
  console.log(result);
}

createASapMonitor().catch(console.error);
