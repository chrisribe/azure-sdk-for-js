/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Communications } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MicrosoftSupport } from "../microsoftSupport.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  CommunicationDetails,
  CommunicationsListNextOptionalParams,
  CommunicationsListOptionalParams,
  CommunicationsListResponse,
  CheckNameAvailabilityInput,
  CommunicationsCheckNameAvailabilityOptionalParams,
  CommunicationsCheckNameAvailabilityResponse,
  CommunicationsGetOptionalParams,
  CommunicationsGetResponse,
  CommunicationsCreateOptionalParams,
  CommunicationsCreateResponse,
  CommunicationsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Communications operations. */
export class CommunicationsImpl implements Communications {
  private readonly client: MicrosoftSupport;

  /**
   * Initialize a new instance of the class Communications class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftSupport) {
    this.client = client;
  }

  /**
   * Lists all communications (attachments not included) for a support ticket. <br/></br> You can also
   * filter support ticket communications by _CreatedDate_ or _CommunicationType_ using the $filter
   * parameter. The only type of communication supported today is _Web_. Output will be a paged result
   * with _nextLink_, using which you can retrieve the next set of Communication results.
   * <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was
   * created more than 18 months ago, a request for data might cause an error.
   * @param supportTicketName Support ticket name.
   * @param options The options parameters.
   */
  public list(
    supportTicketName: string,
    options?: CommunicationsListOptionalParams,
  ): PagedAsyncIterableIterator<CommunicationDetails> {
    const iter = this.listPagingAll(supportTicketName, options);
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
        return this.listPagingPage(supportTicketName, options, settings);
      },
    };
  }

  private async *listPagingPage(
    supportTicketName: string,
    options?: CommunicationsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<CommunicationDetails[]> {
    let result: CommunicationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(supportTicketName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        supportTicketName,
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
    supportTicketName: string,
    options?: CommunicationsListOptionalParams,
  ): AsyncIterableIterator<CommunicationDetails> {
    for await (const page of this.listPagingPage(supportTicketName, options)) {
      yield* page;
    }
  }

  /**
   * Check the availability of a resource name. This API should be used to check the uniqueness of the
   * name for adding a new communication to the support ticket.
   * @param supportTicketName Support ticket name.
   * @param checkNameAvailabilityInput Input to check.
   * @param options The options parameters.
   */
  checkNameAvailability(
    supportTicketName: string,
    checkNameAvailabilityInput: CheckNameAvailabilityInput,
    options?: CommunicationsCheckNameAvailabilityOptionalParams,
  ): Promise<CommunicationsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { supportTicketName, checkNameAvailabilityInput, options },
      checkNameAvailabilityOperationSpec,
    );
  }

  /**
   * Lists all communications (attachments not included) for a support ticket. <br/></br> You can also
   * filter support ticket communications by _CreatedDate_ or _CommunicationType_ using the $filter
   * parameter. The only type of communication supported today is _Web_. Output will be a paged result
   * with _nextLink_, using which you can retrieve the next set of Communication results.
   * <br/><br/>Support ticket data is available for 18 months after ticket creation. If a ticket was
   * created more than 18 months ago, a request for data might cause an error.
   * @param supportTicketName Support ticket name.
   * @param options The options parameters.
   */
  private _list(
    supportTicketName: string,
    options?: CommunicationsListOptionalParams,
  ): Promise<CommunicationsListResponse> {
    return this.client.sendOperationRequest(
      { supportTicketName, options },
      listOperationSpec,
    );
  }

  /**
   * Returns communication details for a support ticket.
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param options The options parameters.
   */
  get(
    supportTicketName: string,
    communicationName: string,
    options?: CommunicationsGetOptionalParams,
  ): Promise<CommunicationsGetResponse> {
    return this.client.sendOperationRequest(
      { supportTicketName, communicationName, options },
      getOperationSpec,
    );
  }

  /**
   * Adds a new customer communication to an Azure support ticket.
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param createCommunicationParameters Communication object.
   * @param options The options parameters.
   */
  async beginCreate(
    supportTicketName: string,
    communicationName: string,
    createCommunicationParameters: CommunicationDetails,
    options?: CommunicationsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CommunicationsCreateResponse>,
      CommunicationsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<CommunicationsCreateResponse> => {
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
        supportTicketName,
        communicationName,
        createCommunicationParameters,
        options,
      },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      CommunicationsCreateResponse,
      OperationState<CommunicationsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Adds a new customer communication to an Azure support ticket.
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param createCommunicationParameters Communication object.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    supportTicketName: string,
    communicationName: string,
    createCommunicationParameters: CommunicationDetails,
    options?: CommunicationsCreateOptionalParams,
  ): Promise<CommunicationsCreateResponse> {
    const poller = await this.beginCreate(
      supportTicketName,
      communicationName,
      createCommunicationParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param supportTicketName Support ticket name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    supportTicketName: string,
    nextLink: string,
    options?: CommunicationsListNextOptionalParams,
  ): Promise<CommunicationsListNextResponse> {
    return this.client.sendOperationRequest(
      { supportTicketName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityOutput,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.checkNameAvailabilityInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.supportTicketName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.supportTicketName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationDetails,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.supportTicketName,
    Parameters.communicationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationDetails,
    },
    201: {
      bodyMapper: Mappers.CommunicationDetails,
    },
    202: {
      bodyMapper: Mappers.CommunicationDetails,
    },
    204: {
      bodyMapper: Mappers.CommunicationDetails,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.createCommunicationParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.supportTicketName,
    Parameters.communicationName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.supportTicketName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
