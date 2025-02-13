/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Creators } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMapsManagementClient } from "../azureMapsManagementClient.js";
import {
  Creator,
  CreatorsListByAccountNextOptionalParams,
  CreatorsListByAccountOptionalParams,
  CreatorsListByAccountResponse,
  CreatorsCreateOrUpdateOptionalParams,
  CreatorsCreateOrUpdateResponse,
  CreatorUpdateParameters,
  CreatorsUpdateOptionalParams,
  CreatorsUpdateResponse,
  CreatorsDeleteOptionalParams,
  CreatorsGetOptionalParams,
  CreatorsGetResponse,
  CreatorsListByAccountNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Creators operations. */
export class CreatorsImpl implements Creators {
  private readonly client: AzureMapsManagementClient;

  /**
   * Initialize a new instance of the class Creators class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMapsManagementClient) {
    this.client = client;
  }

  /**
   * Get all Creator instances for an Azure Maps Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param options The options parameters.
   */
  public listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: CreatorsListByAccountOptionalParams
  ): PagedAsyncIterableIterator<Creator> {
    const iter = this.listByAccountPagingAll(
      resourceGroupName,
      accountName,
      options
    );
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
        return this.listByAccountPagingPage(
          resourceGroupName,
          accountName,
          options,
          settings
        );
      }
    };
  }

  private async *listByAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: CreatorsListByAccountOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Creator[]> {
    let result: CreatorsListByAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAccount(
        resourceGroupName,
        accountName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAccountNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: CreatorsListByAccountOptionalParams
  ): AsyncIterableIterator<Creator> {
    for await (const page of this.listByAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all Creator instances for an Azure Maps Account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param options The options parameters.
   */
  private _listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: CreatorsListByAccountOptionalParams
  ): Promise<CreatorsListByAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByAccountOperationSpec
    );
  }

  /**
   * Create or update a Maps Creator resource. Creator resource will manage Azure resources required to
   * populate a custom set of mapping data. It requires an account to exist before it can be created.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param creatorName The name of the Maps Creator instance.
   * @param creatorResource The new or updated parameters for the Creator resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    creatorName: string,
    creatorResource: Creator,
    options?: CreatorsCreateOrUpdateOptionalParams
  ): Promise<CreatorsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, creatorName, creatorResource, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates the Maps Creator resource. Only a subset of the parameters may be updated after creation,
   * such as Tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param creatorName The name of the Maps Creator instance.
   * @param creatorUpdateParameters The update parameters for Maps Creator.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    creatorName: string,
    creatorUpdateParameters: CreatorUpdateParameters,
    options?: CreatorsUpdateOptionalParams
  ): Promise<CreatorsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        creatorName,
        creatorUpdateParameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Delete a Maps Creator resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param creatorName The name of the Maps Creator instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    creatorName: string,
    options?: CreatorsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, creatorName, options },
      deleteOperationSpec
    );
  }

  /**
   * Get a Maps Creator resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param creatorName The name of the Maps Creator instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    creatorName: string,
    options?: CreatorsGetOptionalParams
  ): Promise<CreatorsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, creatorName, options },
      getOperationSpec
    );
  }

  /**
   * ListByAccountNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Maps Account.
   * @param nextLink The nextLink from the previous successful call to the ListByAccount method.
   * @param options The options parameters.
   */
  private _listByAccountNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: CreatorsListByAccountNextOptionalParams
  ): Promise<CreatorsListByAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listByAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CreatorList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators/{creatorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Creator
    },
    201: {
      bodyMapper: Mappers.Creator
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.creatorResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.creatorName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators/{creatorName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Creator
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.creatorUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.creatorName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators/{creatorName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.creatorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators/{creatorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Creator
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.creatorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CreatorList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
