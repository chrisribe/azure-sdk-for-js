/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Routes } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { CdnManagementClient } from "../cdnManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  Route,
  RoutesListByEndpointNextOptionalParams,
  RoutesListByEndpointOptionalParams,
  RoutesListByEndpointResponse,
  RoutesGetOptionalParams,
  RoutesGetResponse,
  RoutesCreateOptionalParams,
  RoutesCreateResponse,
  RouteUpdateParameters,
  RoutesUpdateOptionalParams,
  RoutesUpdateResponse,
  RoutesDeleteOptionalParams,
  RoutesListByEndpointNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Routes operations. */
export class RoutesImpl implements Routes {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class Routes class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the existing origins within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  public listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: RoutesListByEndpointOptionalParams,
  ): PagedAsyncIterableIterator<Route> {
    const iter = this.listByEndpointPagingAll(
      resourceGroupName,
      profileName,
      endpointName,
      options,
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
        return this.listByEndpointPagingPage(
          resourceGroupName,
          profileName,
          endpointName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByEndpointPagingPage(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: RoutesListByEndpointOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Route[]> {
    let result: RoutesListByEndpointResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByEndpoint(
        resourceGroupName,
        profileName,
        endpointName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByEndpointNext(
        resourceGroupName,
        profileName,
        endpointName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByEndpointPagingAll(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: RoutesListByEndpointOptionalParams,
  ): AsyncIterableIterator<Route> {
    for await (const page of this.listByEndpointPagingPage(
      resourceGroupName,
      profileName,
      endpointName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the existing origins within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  private _listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: RoutesListByEndpointOptionalParams,
  ): Promise<RoutesListByEndpointResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, options },
      listByEndpointOperationSpec,
    );
  }

  /**
   * Gets an existing route with the specified route name under the specified subscription, resource
   * group, profile, and AzureFrontDoor endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param routeName Name of the routing rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    routeName: string,
    options?: RoutesGetOptionalParams,
  ): Promise<RoutesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, routeName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a new route with the specified route name under the specified subscription, resource group,
   * profile, and AzureFrontDoor endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param routeName Name of the routing rule.
   * @param route Route properties
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    routeName: string,
    route: Route,
    options?: RoutesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<RoutesCreateResponse>, RoutesCreateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<RoutesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        profileName,
        endpointName,
        routeName,
        route,
        options,
      },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      RoutesCreateResponse,
      OperationState<RoutesCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new route with the specified route name under the specified subscription, resource group,
   * profile, and AzureFrontDoor endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param routeName Name of the routing rule.
   * @param route Route properties
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    routeName: string,
    route: Route,
    options?: RoutesCreateOptionalParams,
  ): Promise<RoutesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      endpointName,
      routeName,
      route,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing route with the specified route name under the specified subscription, resource
   * group, profile, and AzureFrontDoor endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param routeName Name of the routing rule.
   * @param routeUpdateProperties Route update properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    routeName: string,
    routeUpdateProperties: RouteUpdateParameters,
    options?: RoutesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<RoutesUpdateResponse>, RoutesUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<RoutesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        profileName,
        endpointName,
        routeName,
        routeUpdateProperties,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      RoutesUpdateResponse,
      OperationState<RoutesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an existing route with the specified route name under the specified subscription, resource
   * group, profile, and AzureFrontDoor endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param routeName Name of the routing rule.
   * @param routeUpdateProperties Route update properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    routeName: string,
    routeUpdateProperties: RouteUpdateParameters,
    options?: RoutesUpdateOptionalParams,
  ): Promise<RoutesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      endpointName,
      routeName,
      routeUpdateProperties,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing route with the specified route name under the specified subscription, resource
   * group, profile, and AzureFrontDoor endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param routeName Name of the routing rule.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    routeName: string,
    options?: RoutesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        profileName,
        endpointName,
        routeName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing route with the specified route name under the specified subscription, resource
   * group, profile, and AzureFrontDoor endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param routeName Name of the routing rule.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    routeName: string,
    options?: RoutesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      endpointName,
      routeName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByEndpointNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param nextLink The nextLink from the previous successful call to the ListByEndpoint method.
   * @param options The options parameters.
   */
  private _listByEndpointNext(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    nextLink: string,
    options?: RoutesListByEndpointNextOptionalParams,
  ): Promise<RoutesListByEndpointNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, nextLink, options },
      listByEndpointNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByEndpointOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteListResult,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.endpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes/{routeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Route,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.endpointName,
    Parameters.routeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes/{routeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Route,
    },
    201: {
      bodyMapper: Mappers.Route,
    },
    202: {
      bodyMapper: Mappers.Route,
    },
    204: {
      bodyMapper: Mappers.Route,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  requestBody: Parameters.route,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.endpointName,
    Parameters.routeName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes/{routeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Route,
    },
    201: {
      bodyMapper: Mappers.Route,
    },
    202: {
      bodyMapper: Mappers.Route,
    },
    204: {
      bodyMapper: Mappers.Route,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  requestBody: Parameters.routeUpdateProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.endpointName,
    Parameters.routeName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes/{routeName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.endpointName,
    Parameters.routeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByEndpointNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteListResult,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.nextLink,
    Parameters.endpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
