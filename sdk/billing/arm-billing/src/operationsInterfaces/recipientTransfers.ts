/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RecipientTransferDetails,
  RecipientTransfersListOptionalParams,
  AcceptTransferRequest,
  RecipientTransfersAcceptOptionalParams,
  RecipientTransfersAcceptResponse,
  RecipientTransfersValidateOptionalParams,
  RecipientTransfersValidateResponse,
  RecipientTransfersDeclineOptionalParams,
  RecipientTransfersDeclineResponse,
  RecipientTransfersGetOptionalParams,
  RecipientTransfersGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RecipientTransfers. */
export interface RecipientTransfers {
  /**
   * Lists the transfer requests received by the caller.
   * @param options The options parameters.
   */
  list(
    options?: RecipientTransfersListOptionalParams,
  ): PagedAsyncIterableIterator<RecipientTransferDetails>;
  /**
   * Accepts a transfer request.
   * @param transferName The ID that uniquely identifies a transfer request.
   * @param parameters Request parameters that are provided to the accept transfer operation.
   * @param options The options parameters.
   */
  accept(
    transferName: string,
    parameters: AcceptTransferRequest,
    options?: RecipientTransfersAcceptOptionalParams,
  ): Promise<RecipientTransfersAcceptResponse>;
  /**
   * Validates if a subscription or a reservation can be transferred. Use this operation to validate your
   * subscriptions or reservation before using the accept transfer operation.
   * @param transferName The ID that uniquely identifies a transfer request.
   * @param parameters Request parameters that are provided to the validate transfer operation.
   * @param options The options parameters.
   */
  validate(
    transferName: string,
    parameters: AcceptTransferRequest,
    options?: RecipientTransfersValidateOptionalParams,
  ): Promise<RecipientTransfersValidateResponse>;
  /**
   * Declines a transfer request.
   * @param transferName The ID that uniquely identifies a transfer request.
   * @param options The options parameters.
   */
  decline(
    transferName: string,
    options?: RecipientTransfersDeclineOptionalParams,
  ): Promise<RecipientTransfersDeclineResponse>;
  /**
   * Gets a transfer request by ID. The caller must be the recipient of the transfer request.
   * @param transferName The ID that uniquely identifies a transfer request.
   * @param options The options parameters.
   */
  get(
    transferName: string,
    options?: RecipientTransfersGetOptionalParams,
  ): Promise<RecipientTransfersGetResponse>;
}
