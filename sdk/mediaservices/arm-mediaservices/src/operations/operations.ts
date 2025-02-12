/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Operations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMediaServices } from "../azureMediaServices.js";
import {
  OperationsListOptionalParams,
  OperationsListResponse
} from "../models/index.js";

/** Class containing Operations operations. */
export class OperationsImpl implements Operations {
  private readonly client: AzureMediaServices;

  /**
   * Initialize a new instance of the class Operations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMediaServices) {
    this.client = client;
  }

  /**
   * Lists all the Media Services operations.
   * @param options The options parameters.
   */
  list(
    options?: OperationsListOptionalParams
  ): Promise<OperationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Media/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
