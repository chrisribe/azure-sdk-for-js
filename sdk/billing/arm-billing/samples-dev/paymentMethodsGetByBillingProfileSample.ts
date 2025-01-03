/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a payment method linked with a billing profile. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @summary Gets a payment method linked with a billing profile. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/paymentMethodsGetByBillingProfile.json
 */
async function paymentMethodsGetByBillingProfile() {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000032:00000000-0000-0000-0000-000000000099_2019-05-31";
  const billingProfileName = "ABC1-A1CD-AB1-BP1";
  const paymentMethodName = "ABCDABCDABC0";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.paymentMethods.getByBillingProfile(
    billingAccountName,
    billingProfileName,
    paymentMethodName,
  );
  console.log(result);
}

async function main() {
  paymentMethodsGetByBillingProfile();
}

main().catch(console.error);
