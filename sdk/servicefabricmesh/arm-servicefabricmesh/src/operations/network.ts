/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/networkMappers";
import * as Parameters from "../models/parameters";
import { ServiceFabricMeshManagementClientContext } from "../serviceFabricMeshManagementClientContext";

/** Class representing a Network. */
export class Network {
  private readonly client: ServiceFabricMeshManagementClientContext;

  /**
   * Create a Network.
   * @param {ServiceFabricMeshManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceFabricMeshManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a network resource with the specified name, description and properties. If a network
   * resource with the same name exists, then it is updated with the specified description and
   * properties.
   * @summary Creates or updates a network resource.
   * @param resourceGroupName Azure resource group name
   * @param networkResourceName The identity of the network.
   * @param networkResourceDescription Description for creating a Network resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkCreateResponse>
   */
  create(resourceGroupName: string, networkResourceName: string, networkResourceDescription: Models.NetworkResourceDescription, options?: msRest.RequestOptionsBase): Promise<Models.NetworkCreateResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param networkResourceName The identity of the network.
   * @param networkResourceDescription Description for creating a Network resource.
   * @param callback The callback
   */
  create(resourceGroupName: string, networkResourceName: string, networkResourceDescription: Models.NetworkResourceDescription, callback: msRest.ServiceCallback<Models.NetworkResourceDescription>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param networkResourceName The identity of the network.
   * @param networkResourceDescription Description for creating a Network resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, networkResourceName: string, networkResourceDescription: Models.NetworkResourceDescription, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkResourceDescription>): void;
  create(resourceGroupName: string, networkResourceName: string, networkResourceDescription: Models.NetworkResourceDescription, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkResourceDescription>, callback?: msRest.ServiceCallback<Models.NetworkResourceDescription>): Promise<Models.NetworkCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkResourceName,
        networkResourceDescription,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.NetworkCreateResponse>;
  }

  /**
   * Gets the information about the network resource with the given name. The information include the
   * description and other properties of the network.
   * @summary Gets the network resource with the given name.
   * @param resourceGroupName Azure resource group name
   * @param networkResourceName The identity of the network.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkGetResponse>
   */
  get(resourceGroupName: string, networkResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkGetResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param networkResourceName The identity of the network.
   * @param callback The callback
   */
  get(resourceGroupName: string, networkResourceName: string, callback: msRest.ServiceCallback<Models.NetworkResourceDescription>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param networkResourceName The identity of the network.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, networkResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkResourceDescription>): void;
  get(resourceGroupName: string, networkResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkResourceDescription>, callback?: msRest.ServiceCallback<Models.NetworkResourceDescription>): Promise<Models.NetworkGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.NetworkGetResponse>;
  }

  /**
   * Deletes the network resource identified by the name.
   * @summary Deletes the network resource.
   * @param resourceGroupName Azure resource group name
   * @param networkResourceName The identity of the network.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, networkResourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param networkResourceName The identity of the network.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, networkResourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param networkResourceName The identity of the network.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, networkResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, networkResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkResourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets the information about all network resources in a given resource group. The information
   * include the description and other properties of the Network.
   * @summary Gets all the network resources in a given resource group.
   * @param resourceGroupName Azure resource group name
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): Promise<Models.NetworkListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.NetworkListByResourceGroupResponse>;
  }

  /**
   * Gets the information about all network resources in a given resource group. The information
   * include the description and other properties of the network.
   * @summary Gets all the network resources in a given subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.NetworkListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): Promise<Models.NetworkListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.NetworkListBySubscriptionResponse>;
  }

  /**
   * Gets the information about all network resources in a given resource group. The information
   * include the description and other properties of the Network.
   * @summary Gets all the network resources in a given resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): Promise<Models.NetworkListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.NetworkListByResourceGroupNextResponse>;
  }

  /**
   * Gets the information about all network resources in a given resource group. The information
   * include the description and other properties of the network.
   * @summary Gets all the network resources in a given subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NetworkListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.NetworkListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NetworkResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.NetworkResourceDescriptionList>): Promise<Models.NetworkListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.NetworkListBySubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/networks/{networkResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "networkResourceDescription",
    mapper: {
      ...Mappers.NetworkResourceDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NetworkResourceDescription
    },
    201: {
      bodyMapper: Mappers.NetworkResourceDescription
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/networks/{networkResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkResourceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/networks/{networkResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/networks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabricMesh/networks",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.NetworkResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};