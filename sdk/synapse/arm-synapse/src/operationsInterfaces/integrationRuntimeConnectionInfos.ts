/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  IntegrationRuntimeConnectionInfosGetOptionalParams,
  IntegrationRuntimeConnectionInfosGetResponse
} from "../models/index.js";

/** Interface representing a IntegrationRuntimeConnectionInfos. */
export interface IntegrationRuntimeConnectionInfos {
  /**
   * Get connection info for an integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeConnectionInfosGetOptionalParams
  ): Promise<IntegrationRuntimeConnectionInfosGetResponse>;
}
