/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  EdgeDeviceUnion,
  EdgeDevicesListOptionalParams,
  EdgeDevicesGetOptionalParams,
  EdgeDevicesGetResponse,
  EdgeDevicesCreateOrUpdateOptionalParams,
  EdgeDevicesCreateOrUpdateResponse,
  EdgeDevicesDeleteOptionalParams,
  EdgeDevicesDeleteResponse,
  ValidateRequest,
  EdgeDevicesValidateOptionalParams,
  EdgeDevicesValidateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EdgeDevices. */
export interface EdgeDevices {
  /**
   * List EdgeDevice resources by parent
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: EdgeDevicesListOptionalParams,
  ): PagedAsyncIterableIterator<EdgeDeviceUnion>;
  /**
   * Get a EdgeDevice
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param edgeDeviceName Name of Device
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    edgeDeviceName: string,
    options?: EdgeDevicesGetOptionalParams,
  ): Promise<EdgeDevicesGetResponse>;
  /**
   * Create a EdgeDevice
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param edgeDeviceName Name of Device
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceUri: string,
    edgeDeviceName: string,
    resource: EdgeDeviceUnion,
    options?: EdgeDevicesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<EdgeDevicesCreateOrUpdateResponse>,
      EdgeDevicesCreateOrUpdateResponse
    >
  >;
  /**
   * Create a EdgeDevice
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param edgeDeviceName Name of Device
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceUri: string,
    edgeDeviceName: string,
    resource: EdgeDeviceUnion,
    options?: EdgeDevicesCreateOrUpdateOptionalParams,
  ): Promise<EdgeDevicesCreateOrUpdateResponse>;
  /**
   * Delete a EdgeDevice
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param edgeDeviceName Name of Device
   * @param options The options parameters.
   */
  beginDelete(
    resourceUri: string,
    edgeDeviceName: string,
    options?: EdgeDevicesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<EdgeDevicesDeleteResponse>,
      EdgeDevicesDeleteResponse
    >
  >;
  /**
   * Delete a EdgeDevice
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param edgeDeviceName Name of Device
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceUri: string,
    edgeDeviceName: string,
    options?: EdgeDevicesDeleteOptionalParams,
  ): Promise<EdgeDevicesDeleteResponse>;
  /**
   * A long-running resource action.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param edgeDeviceName Name of Device
   * @param validateRequest The content of the action request
   * @param options The options parameters.
   */
  beginValidate(
    resourceUri: string,
    edgeDeviceName: string,
    validateRequest: ValidateRequest,
    options?: EdgeDevicesValidateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<EdgeDevicesValidateResponse>,
      EdgeDevicesValidateResponse
    >
  >;
  /**
   * A long-running resource action.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param edgeDeviceName Name of Device
   * @param validateRequest The content of the action request
   * @param options The options parameters.
   */
  beginValidateAndWait(
    resourceUri: string,
    edgeDeviceName: string,
    validateRequest: ValidateRequest,
    options?: EdgeDevicesValidateOptionalParams,
  ): Promise<EdgeDevicesValidateResponse>;
}
