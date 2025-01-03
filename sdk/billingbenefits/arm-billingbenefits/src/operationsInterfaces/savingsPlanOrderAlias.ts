/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SavingsPlanOrderAliasModel,
  SavingsPlanOrderAliasCreateOptionalParams,
  SavingsPlanOrderAliasCreateResponse,
  SavingsPlanOrderAliasGetOptionalParams,
  SavingsPlanOrderAliasGetResponse
} from "../models/index.js";

/** Interface representing a SavingsPlanOrderAlias. */
export interface SavingsPlanOrderAlias {
  /**
   * Create a savings plan. Learn more about permissions needed at
   * https://go.microsoft.com/fwlink/?linkid=2215851
   * @param savingsPlanOrderAliasName Name of the savings plan order alias
   * @param body Request body for creating a savings plan order alias
   * @param options The options parameters.
   */
  beginCreate(
    savingsPlanOrderAliasName: string,
    body: SavingsPlanOrderAliasModel,
    options?: SavingsPlanOrderAliasCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SavingsPlanOrderAliasCreateResponse>,
      SavingsPlanOrderAliasCreateResponse
    >
  >;
  /**
   * Create a savings plan. Learn more about permissions needed at
   * https://go.microsoft.com/fwlink/?linkid=2215851
   * @param savingsPlanOrderAliasName Name of the savings plan order alias
   * @param body Request body for creating a savings plan order alias
   * @param options The options parameters.
   */
  beginCreateAndWait(
    savingsPlanOrderAliasName: string,
    body: SavingsPlanOrderAliasModel,
    options?: SavingsPlanOrderAliasCreateOptionalParams
  ): Promise<SavingsPlanOrderAliasCreateResponse>;
  /**
   * Get a savings plan.
   * @param savingsPlanOrderAliasName Name of the savings plan order alias
   * @param options The options parameters.
   */
  get(
    savingsPlanOrderAliasName: string,
    options?: SavingsPlanOrderAliasGetOptionalParams
  ): Promise<SavingsPlanOrderAliasGetResponse>;
}
