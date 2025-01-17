/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  JobStream,
  TestJobStreamsListByTestJobOptionalParams,
  TestJobStreamsGetOptionalParams,
  TestJobStreamsGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TestJobStreams. */
export interface TestJobStreams {
  /**
   * Retrieve a list of test job streams identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The options parameters.
   */
  listByTestJob(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    options?: TestJobStreamsListByTestJobOptionalParams
  ): PagedAsyncIterableIterator<JobStream>;
  /**
   * Retrieve a test job stream of the test job identified by runbook name and stream id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param jobStreamId The job stream id.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    runbookName: string,
    jobStreamId: string,
    options?: TestJobStreamsGetOptionalParams
  ): Promise<TestJobStreamsGetResponse>;
}
