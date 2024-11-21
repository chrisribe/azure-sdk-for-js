/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Accounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetAppManagementClient } from "../netAppManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  NetAppAccount,
  AccountsListBySubscriptionNextOptionalParams,
  AccountsListBySubscriptionOptionalParams,
  AccountsListBySubscriptionResponse,
  AccountsListNextOptionalParams,
  AccountsListOptionalParams,
  AccountsListResponse,
  AccountsGetOptionalParams,
  AccountsGetResponse,
  AccountsCreateOrUpdateOptionalParams,
  AccountsCreateOrUpdateResponse,
  AccountsDeleteOptionalParams,
  NetAppAccountPatch,
  AccountsUpdateOptionalParams,
  AccountsUpdateResponse,
  AccountsRenewCredentialsOptionalParams,
  AccountsTransitionToCmkOptionalParams,
  AccountsTransitionToCmkResponse,
  AccountsGetChangeKeyVaultInformationOptionalParams,
  AccountsGetChangeKeyVaultInformationResponse,
  AccountsChangeKeyVaultOptionalParams,
  AccountsChangeKeyVaultResponse,
  AccountsListBySubscriptionNextResponse,
  AccountsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Accounts operations. */
export class AccountsImpl implements Accounts {
  private readonly client: NetAppManagementClient;

  /**
   * Initialize a new instance of the class Accounts class.
   * @param client Reference to the service client
   */
  constructor(client: NetAppManagementClient) {
    this.client = client;
  }

  /**
   * List and describe all NetApp accounts in the subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AccountsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<NetAppAccount> {
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
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: AccountsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NetAppAccount[]> {
    let result: AccountsListBySubscriptionResponse;
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
    options?: AccountsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<NetAppAccount> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List and describe all NetApp accounts in the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: AccountsListOptionalParams,
  ): PagedAsyncIterableIterator<NetAppAccount> {
    const iter = this.listPagingAll(resourceGroupName, options);
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
        return this.listPagingPage(resourceGroupName, options, settings);
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: AccountsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NetAppAccount[]> {
    let result: AccountsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: AccountsListOptionalParams,
  ): AsyncIterableIterator<NetAppAccount> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * List and describe all NetApp accounts in the subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AccountsListBySubscriptionOptionalParams,
  ): Promise<AccountsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * List and describe all NetApp accounts in the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: AccountsListOptionalParams,
  ): Promise<AccountsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec,
    );
  }

  /**
   * Get the NetApp account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsGetOptionalParams,
  ): Promise<AccountsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update the specified NetApp account within the resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param body NetApp Account object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    body: NetAppAccount,
    options?: AccountsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AccountsCreateOrUpdateResponse>,
      AccountsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AccountsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, accountName, body, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      AccountsCreateOrUpdateResponse,
      OperationState<AccountsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update the specified NetApp account within the resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param body NetApp Account object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    body: NetAppAccount,
    options?: AccountsCreateOrUpdateOptionalParams,
  ): Promise<AccountsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      accountName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the specified NetApp account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams,
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
      args: { resourceGroupName, accountName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the specified NetApp account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch the specified NetApp account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param body NetApp Account object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accountName: string,
    body: NetAppAccountPatch,
    options?: AccountsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AccountsUpdateResponse>,
      AccountsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AccountsUpdateResponse> => {
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
      args: { resourceGroupName, accountName, body, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      AccountsUpdateResponse,
      OperationState<AccountsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch the specified NetApp account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param body NetApp Account object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    body: NetAppAccountPatch,
    options?: AccountsUpdateOptionalParams,
  ): Promise<AccountsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accountName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Renew identity credentials that are used to authenticate to key vault, for customer-managed key
   * encryption. If encryption.identity.principalId does not match identity.principalId, running this
   * operation will fix it.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginRenewCredentials(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsRenewCredentialsOptionalParams,
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
      args: { resourceGroupName, accountName, options },
      spec: renewCredentialsOperationSpec,
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
   * Renew identity credentials that are used to authenticate to key vault, for customer-managed key
   * encryption. If encryption.identity.principalId does not match identity.principalId, running this
   * operation will fix it.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginRenewCredentialsAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsRenewCredentialsOptionalParams,
  ): Promise<void> {
    const poller = await this.beginRenewCredentials(
      resourceGroupName,
      accountName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Transitions all volumes in a VNet to a different encryption key source (Microsoft-managed key or
   * Azure Key Vault). Operation fails if targeted volumes share encryption sibling set with volumes from
   * another account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginTransitionToCmk(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsTransitionToCmkOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AccountsTransitionToCmkResponse>,
      AccountsTransitionToCmkResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AccountsTransitionToCmkResponse> => {
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
      args: { resourceGroupName, accountName, options },
      spec: transitionToCmkOperationSpec,
    });
    const poller = await createHttpPoller<
      AccountsTransitionToCmkResponse,
      OperationState<AccountsTransitionToCmkResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Transitions all volumes in a VNet to a different encryption key source (Microsoft-managed key or
   * Azure Key Vault). Operation fails if targeted volumes share encryption sibling set with volumes from
   * another account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginTransitionToCmkAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsTransitionToCmkOptionalParams,
  ): Promise<AccountsTransitionToCmkResponse> {
    const poller = await this.beginTransitionToCmk(
      resourceGroupName,
      accountName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Contains data from encryption.keyVaultProperties as well as information about which private endpoint
   * is used by each encryption sibling set. Response from this endpoint can be modified and used as
   * request body for POST request.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginGetChangeKeyVaultInformation(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsGetChangeKeyVaultInformationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AccountsGetChangeKeyVaultInformationResponse>,
      AccountsGetChangeKeyVaultInformationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AccountsGetChangeKeyVaultInformationResponse> => {
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
      args: { resourceGroupName, accountName, options },
      spec: getChangeKeyVaultInformationOperationSpec,
    });
    const poller = await createHttpPoller<
      AccountsGetChangeKeyVaultInformationResponse,
      OperationState<AccountsGetChangeKeyVaultInformationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Contains data from encryption.keyVaultProperties as well as information about which private endpoint
   * is used by each encryption sibling set. Response from this endpoint can be modified and used as
   * request body for POST request.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginGetChangeKeyVaultInformationAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsGetChangeKeyVaultInformationOptionalParams,
  ): Promise<AccountsGetChangeKeyVaultInformationResponse> {
    const poller = await this.beginGetChangeKeyVaultInformation(
      resourceGroupName,
      accountName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Affects existing volumes that are encrypted with Key Vault/Managed HSM, and new volumes. Supports
   * HSM to Key Vault, Key Vault to HSM, HSM to HSM and Key Vault to Key Vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginChangeKeyVault(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsChangeKeyVaultOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AccountsChangeKeyVaultResponse>,
      AccountsChangeKeyVaultResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AccountsChangeKeyVaultResponse> => {
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
      args: { resourceGroupName, accountName, options },
      spec: changeKeyVaultOperationSpec,
    });
    const poller = await createHttpPoller<
      AccountsChangeKeyVaultResponse,
      OperationState<AccountsChangeKeyVaultResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Affects existing volumes that are encrypted with Key Vault/Managed HSM, and new volumes. Supports
   * HSM to Key Vault, Key Vault to HSM, HSM to HSM and Key Vault to Key Vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  async beginChangeKeyVaultAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsChangeKeyVaultOptionalParams,
  ): Promise<AccountsChangeKeyVaultResponse> {
    const poller = await this.beginChangeKeyVault(
      resourceGroupName,
      accountName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AccountsListBySubscriptionNextOptionalParams,
  ): Promise<AccountsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AccountsListNextOptionalParams,
  ): Promise<AccountsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/netAppAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccountList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccountList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccount,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccount,
    },
    201: {
      bodyMapper: Mappers.NetAppAccount,
    },
    202: {
      bodyMapper: Mappers.NetAppAccount,
    },
    204: {
      bodyMapper: Mappers.NetAppAccount,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccount,
    },
    201: {
      bodyMapper: Mappers.NetAppAccount,
    },
    202: {
      bodyMapper: Mappers.NetAppAccount,
    },
    204: {
      bodyMapper: Mappers.NetAppAccount,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const renewCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/renewCredentials",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const transitionToCmkOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/transitiontocmk",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.AccountsTransitionToCmkHeaders,
    },
    201: {
      headersMapper: Mappers.AccountsTransitionToCmkHeaders,
    },
    202: {
      headersMapper: Mappers.AccountsTransitionToCmkHeaders,
    },
    204: {
      headersMapper: Mappers.AccountsTransitionToCmkHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getChangeKeyVaultInformationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/getKeyVaultStatus",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.AccountsGetChangeKeyVaultInformationHeaders,
    },
    201: {
      headersMapper: Mappers.AccountsGetChangeKeyVaultInformationHeaders,
    },
    202: {
      headersMapper: Mappers.AccountsGetChangeKeyVaultInformationHeaders,
    },
    204: {
      headersMapper: Mappers.AccountsGetChangeKeyVaultInformationHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const changeKeyVaultOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/changeKeyVault",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.AccountsChangeKeyVaultHeaders,
    },
    201: {
      headersMapper: Mappers.AccountsChangeKeyVaultHeaders,
    },
    202: {
      headersMapper: Mappers.AccountsChangeKeyVaultHeaders,
    },
    204: {
      headersMapper: Mappers.AccountsChangeKeyVaultHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccountList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetAppAccountList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
