/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { OperationEntity, OperationsListOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operations. */
export interface Operations {
  /**
   * Lists all of the available Storage Sync Rest API operations.
   * @param options The options parameters.
   */
  list(
    options?: OperationsListOptionalParams
  ): PagedAsyncIterableIterator<OperationEntity>;
}
