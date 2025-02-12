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
import { MariaDBManagementClient } from "../mariaDBManagementClient.js";
import {
  OperationsListOptionalParams,
  OperationsListResponse
} from "../models/index.js";

/** Class containing Operations operations. */
export class OperationsImpl implements Operations {
  private readonly client: MariaDBManagementClient;

  /**
   * Initialize a new instance of the class Operations class.
   * @param client Reference to the service client
   */
  constructor(client: MariaDBManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the available REST API operations.
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
  path: "/providers/Microsoft.DBforMariaDB/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
