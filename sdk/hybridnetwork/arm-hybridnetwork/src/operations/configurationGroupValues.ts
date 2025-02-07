/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ConfigurationGroupValues } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { HybridNetworkManagementClient } from "../hybridNetworkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ConfigurationGroupValue,
  ConfigurationGroupValuesListBySubscriptionNextOptionalParams,
  ConfigurationGroupValuesListBySubscriptionOptionalParams,
  ConfigurationGroupValuesListBySubscriptionResponse,
  ConfigurationGroupValuesListByResourceGroupNextOptionalParams,
  ConfigurationGroupValuesListByResourceGroupOptionalParams,
  ConfigurationGroupValuesListByResourceGroupResponse,
  ConfigurationGroupValuesDeleteOptionalParams,
  ConfigurationGroupValuesDeleteResponse,
  ConfigurationGroupValuesGetOptionalParams,
  ConfigurationGroupValuesGetResponse,
  ConfigurationGroupValuesCreateOrUpdateOptionalParams,
  ConfigurationGroupValuesCreateOrUpdateResponse,
  TagsObject,
  ConfigurationGroupValuesUpdateTagsOptionalParams,
  ConfigurationGroupValuesUpdateTagsResponse,
  ConfigurationGroupValuesListBySubscriptionNextResponse,
  ConfigurationGroupValuesListByResourceGroupNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ConfigurationGroupValues operations. */
export class ConfigurationGroupValuesImpl implements ConfigurationGroupValues {
  private readonly client: HybridNetworkManagementClient;

  /**
   * Initialize a new instance of the class ConfigurationGroupValues class.
   * @param client Reference to the service client
   */
  constructor(client: HybridNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all sites in the configuration group value in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ConfigurationGroupValuesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ConfigurationGroupValue> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ConfigurationGroupValuesListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ConfigurationGroupValue[]> {
    let result: ConfigurationGroupValuesListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: ConfigurationGroupValuesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ConfigurationGroupValue> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all the hybrid network configurationGroupValues in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ConfigurationGroupValuesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ConfigurationGroupValue> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ConfigurationGroupValuesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ConfigurationGroupValue[]> {
    let result: ConfigurationGroupValuesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ConfigurationGroupValuesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ConfigurationGroupValue> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified hybrid configuration group value.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationGroupValueName The name of the configuration group value.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    configurationGroupValueName: string,
    options?: ConfigurationGroupValuesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationGroupValuesDeleteResponse>,
      ConfigurationGroupValuesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ConfigurationGroupValuesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, configurationGroupValueName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      ConfigurationGroupValuesDeleteResponse,
      OperationState<ConfigurationGroupValuesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified hybrid configuration group value.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationGroupValueName The name of the configuration group value.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    configurationGroupValueName: string,
    options?: ConfigurationGroupValuesDeleteOptionalParams
  ): Promise<ConfigurationGroupValuesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      configurationGroupValueName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified hybrid configuration group values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationGroupValueName The name of the configuration group value.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    configurationGroupValueName: string,
    options?: ConfigurationGroupValuesGetOptionalParams
  ): Promise<ConfigurationGroupValuesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configurationGroupValueName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a hybrid configuration group value.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationGroupValueName The name of the configuration group value.
   * @param parameters Parameters supplied to the create or update configuration group value resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    configurationGroupValueName: string,
    parameters: ConfigurationGroupValue,
    options?: ConfigurationGroupValuesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationGroupValuesCreateOrUpdateResponse>,
      ConfigurationGroupValuesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ConfigurationGroupValuesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        configurationGroupValueName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ConfigurationGroupValuesCreateOrUpdateResponse,
      OperationState<ConfigurationGroupValuesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a hybrid configuration group value.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationGroupValueName The name of the configuration group value.
   * @param parameters Parameters supplied to the create or update configuration group value resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    configurationGroupValueName: string,
    parameters: ConfigurationGroupValue,
    options?: ConfigurationGroupValuesCreateOrUpdateOptionalParams
  ): Promise<ConfigurationGroupValuesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      configurationGroupValueName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a hybrid configuration group tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configurationGroupValueName The name of the configuration group value.
   * @param parameters Parameters supplied to update configuration group values tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    configurationGroupValueName: string,
    parameters: TagsObject,
    options?: ConfigurationGroupValuesUpdateTagsOptionalParams
  ): Promise<ConfigurationGroupValuesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configurationGroupValueName, parameters, options },
      updateTagsOperationSpec
    );
  }

  /**
   * Lists all sites in the configuration group value in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ConfigurationGroupValuesListBySubscriptionOptionalParams
  ): Promise<ConfigurationGroupValuesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists all the hybrid network configurationGroupValues in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ConfigurationGroupValuesListByResourceGroupOptionalParams
  ): Promise<ConfigurationGroupValuesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ConfigurationGroupValuesListBySubscriptionNextOptionalParams
  ): Promise<ConfigurationGroupValuesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ConfigurationGroupValuesListByResourceGroupNextOptionalParams
  ): Promise<ConfigurationGroupValuesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ConfigurationGroupValuesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.ConfigurationGroupValuesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.ConfigurationGroupValuesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.ConfigurationGroupValuesDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.configurationGroupValueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationGroupValue
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.configurationGroupValueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationGroupValue
    },
    201: {
      bodyMapper: Mappers.ConfigurationGroupValue
    },
    202: {
      bodyMapper: Mappers.ConfigurationGroupValue
    },
    204: {
      bodyMapper: Mappers.ConfigurationGroupValue
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.configurationGroupValueName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationGroupValue
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.configurationGroupValueName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/configurationGroupValues",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationGroupValueListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationGroupValueListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationGroupValueListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationGroupValueListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
