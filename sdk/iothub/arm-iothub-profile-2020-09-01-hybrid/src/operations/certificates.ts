/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Certificates } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { IotHubClient } from "../iotHubClient.js";
import {
  CertificatesListByIotHubOptionalParams,
  CertificatesListByIotHubResponse,
  CertificatesGetOptionalParams,
  CertificatesGetResponse,
  CertificateBodyDescription,
  CertificatesCreateOrUpdateOptionalParams,
  CertificatesCreateOrUpdateResponse,
  CertificatesDeleteOptionalParams,
  CertificatesGenerateVerificationCodeOptionalParams,
  CertificatesGenerateVerificationCodeResponse,
  CertificateVerificationDescription,
  CertificatesVerifyOptionalParams,
  CertificatesVerifyResponse
} from "../models/index.js";

/** Class containing Certificates operations. */
export class CertificatesImpl implements Certificates {
  private readonly client: IotHubClient;

  /**
   * Initialize a new instance of the class Certificates class.
   * @param client Reference to the service client
   */
  constructor(client: IotHubClient) {
    this.client = client;
  }

  /**
   * Returns the list of certificates.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param options The options parameters.
   */
  listByIotHub(
    resourceGroupName: string,
    resourceName: string,
    options?: CertificatesListByIotHubOptionalParams
  ): Promise<CertificatesListByIotHubResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listByIotHubOperationSpec
    );
  }

  /**
   * Returns the certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?: CertificatesGetOptionalParams
  ): Promise<CertificatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, certificateName, options },
      getOperationSpec
    );
  }

  /**
   * Adds new or replaces existing certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param certificateDescription The certificate body.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    certificateDescription: CertificateBodyDescription,
    options?: CertificatesCreateOrUpdateOptionalParams
  ): Promise<CertificatesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        certificateName,
        certificateDescription,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes an existing X509 certificate or does nothing if it does not exist.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?: CertificatesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, certificateName, ifMatch, options },
      deleteOperationSpec
    );
  }

  /**
   * Generates verification code for proof of possession flow. The verification code will be used to
   * generate a leaf certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param options The options parameters.
   */
  generateVerificationCode(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    options?: CertificatesGenerateVerificationCodeOptionalParams
  ): Promise<CertificatesGenerateVerificationCodeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, certificateName, ifMatch, options },
      generateVerificationCodeOperationSpec
    );
  }

  /**
   * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying
   * pre uploaded certificate.
   * @param resourceGroupName The name of the resource group that contains the IoT hub.
   * @param resourceName The name of the IoT hub.
   * @param certificateName The name of the certificate
   * @param ifMatch ETag of the Certificate.
   * @param certificateVerificationBody The name of the certificate
   * @param options The options parameters.
   */
  verify(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    ifMatch: string,
    certificateVerificationBody: CertificateVerificationDescription,
    options?: CertificatesVerifyOptionalParams
  ): Promise<CertificatesVerifyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        certificateName,
        ifMatch,
        certificateVerificationBody,
        options
      },
      verifyOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByIotHubOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateListDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateDescription
    },
    201: {
      bodyMapper: Mappers.CertificateDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.certificateDescription,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const generateVerificationCodeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateWithNonceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const verifyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateDescription
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.certificateVerificationBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.certificateName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
