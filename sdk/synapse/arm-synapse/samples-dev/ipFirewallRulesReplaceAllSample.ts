/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ReplaceAllIpFirewallRulesRequest } from "@azure/arm-synapse";
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Replaces firewall rules
 *
 * @summary Replaces firewall rules
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/ReplaceAllIpFirewallRules.json
 */
async function replaceAllIPFirewallRulesInAWorkspace(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "ExampleResourceGroup";
  const workspaceName = "ExampleWorkspace";
  const request: ReplaceAllIpFirewallRulesRequest = {
    ipFirewallRules: {
      anotherExampleFirewallRule: {
        endIpAddress: "10.0.1.254",
        startIpAddress: "10.0.1.0",
      },
      exampleFirewallRule: {
        endIpAddress: "10.0.0.254",
        startIpAddress: "10.0.0.0",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.ipFirewallRules.beginReplaceAllAndWait(
    resourceGroupName,
    workspaceName,
    request,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await replaceAllIPFirewallRulesInAWorkspace();
}

main().catch(console.error);
