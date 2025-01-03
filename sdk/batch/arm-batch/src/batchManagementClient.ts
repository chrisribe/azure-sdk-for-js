/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  BatchAccountOperationsImpl,
  ApplicationPackageOperationsImpl,
  ApplicationOperationsImpl,
  LocationImpl,
  OperationsImpl,
  CertificateOperationsImpl,
  PrivateLinkResourceOperationsImpl,
  PrivateEndpointConnectionOperationsImpl,
  PoolOperationsImpl,
  NetworkSecurityPerimeterOperationsImpl,
} from "./operations/index.js";
import {
  BatchAccountOperations,
  ApplicationPackageOperations,
  ApplicationOperations,
  Location,
  Operations,
  CertificateOperations,
  PrivateLinkResourceOperations,
  PrivateEndpointConnectionOperations,
  PoolOperations,
  NetworkSecurityPerimeterOperations,
} from "./operationsInterfaces/index.js";
import { BatchManagementClientOptionalParams } from "./models/index.js";

export class BatchManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the BatchManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g.
   *                       00000000-0000-0000-0000-000000000000)
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: BatchManagementClientOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: BatchManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-arm-batch/10.0.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2024-07-01";
    this.batchAccountOperations = new BatchAccountOperationsImpl(this);
    this.applicationPackageOperations = new ApplicationPackageOperationsImpl(
      this,
    );
    this.applicationOperations = new ApplicationOperationsImpl(this);
    this.location = new LocationImpl(this);
    this.operations = new OperationsImpl(this);
    this.certificateOperations = new CertificateOperationsImpl(this);
    this.privateLinkResourceOperations = new PrivateLinkResourceOperationsImpl(
      this,
    );
    this.privateEndpointConnectionOperations =
      new PrivateEndpointConnectionOperationsImpl(this);
    this.poolOperations = new PoolOperationsImpl(this);
    this.networkSecurityPerimeterOperations =
      new NetworkSecurityPerimeterOperationsImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest,
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  batchAccountOperations: BatchAccountOperations;
  applicationPackageOperations: ApplicationPackageOperations;
  applicationOperations: ApplicationOperations;
  location: Location;
  operations: Operations;
  certificateOperations: CertificateOperations;
  privateLinkResourceOperations: PrivateLinkResourceOperations;
  privateEndpointConnectionOperations: PrivateEndpointConnectionOperations;
  poolOperations: PoolOperations;
  networkSecurityPerimeterOperations: NetworkSecurityPerimeterOperations;
}
