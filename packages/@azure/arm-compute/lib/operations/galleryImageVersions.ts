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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/galleryImageVersionsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a GalleryImageVersions. */
export class GalleryImageVersions {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a GalleryImageVersions.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version is
   * to be created.
   * @param galleryImageVersionName The name of the gallery Image Version to be created. Needs to
   * follow semantic version name pattern: The allowed characters are digit and period. Digits must
   * be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the create or update gallery Image Version
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImageVersionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, galleryImageVersion: Models.GalleryImageVersion, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImageVersionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,galleryName,galleryImageName,galleryImageVersionName,galleryImageVersion,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GalleryImageVersionsCreateOrUpdateResponse>;
  }

  /**
   * Retrieves information about a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version
   * resides.
   * @param galleryImageVersionName The name of the gallery Image Version to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImageVersionsGetResponse>
   */
  get(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, options?: Models.GalleryImageVersionsGetOptionalParams): Promise<Models.GalleryImageVersionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version
   * resides.
   * @param galleryImageVersionName The name of the gallery Image Version to be retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, callback: msRest.ServiceCallback<Models.GalleryImageVersion>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version
   * resides.
   * @param galleryImageVersionName The name of the gallery Image Version to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, options: Models.GalleryImageVersionsGetOptionalParams, callback: msRest.ServiceCallback<Models.GalleryImageVersion>): void;
  get(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, options?: Models.GalleryImageVersionsGetOptionalParams | msRest.ServiceCallback<Models.GalleryImageVersion>, callback?: msRest.ServiceCallback<Models.GalleryImageVersion>): Promise<Models.GalleryImageVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImageVersionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.GalleryImageVersionsGetResponse>;
  }

  /**
   * Delete a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version
   * resides.
   * @param galleryImageVersionName The name of the gallery Image Version to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,galleryName,galleryImageName,galleryImageVersionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * List gallery Image Versions in a gallery Image Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the
   * Image Versions are to be listed.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImageVersionsListByGalleryImageResponse>
   */
  listByGalleryImage(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImageVersionsListByGalleryImageResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the
   * Image Versions are to be listed.
   * @param callback The callback
   */
  listByGalleryImage(resourceGroupName: string, galleryName: string, galleryImageName: string, callback: msRest.ServiceCallback<Models.GalleryImageVersionList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the
   * Image Versions are to be listed.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGalleryImage(resourceGroupName: string, galleryName: string, galleryImageName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryImageVersionList>): void;
  listByGalleryImage(resourceGroupName: string, galleryName: string, galleryImageName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryImageVersionList>, callback?: msRest.ServiceCallback<Models.GalleryImageVersionList>): Promise<Models.GalleryImageVersionsListByGalleryImageResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        options
      },
      listByGalleryImageOperationSpec,
      callback) as Promise<Models.GalleryImageVersionsListByGalleryImageResponse>;
  }

  /**
   * Create or update a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version is
   * to be created.
   * @param galleryImageVersionName The name of the gallery Image Version to be created. Needs to
   * follow semantic version name pattern: The allowed characters are digit and period. Digits must
   * be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the create or update gallery Image Version
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, galleryImageVersion: Models.GalleryImageVersion, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImageVersionName,
        galleryImageVersion,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version
   * resides.
   * @param galleryImageVersionName The name of the gallery Image Version to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, galleryName: string, galleryImageName: string, galleryImageVersionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImageVersionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List gallery Image Versions in a gallery Image Definition.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImageVersionsListByGalleryImageNextResponse>
   */
  listByGalleryImageNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImageVersionsListByGalleryImageNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByGalleryImageNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.GalleryImageVersionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGalleryImageNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryImageVersionList>): void;
  listByGalleryImageNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryImageVersionList>, callback?: msRest.ServiceCallback<Models.GalleryImageVersionList>): Promise<Models.GalleryImageVersionsListByGalleryImageNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByGalleryImageNextOperationSpec,
      callback) as Promise<Models.GalleryImageVersionsListByGalleryImageNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  queryParameters: [
    Parameters.expand0,
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByGalleryImageOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryImageName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "galleryImageVersion",
    mapper: {
      ...Mappers.GalleryImageVersion,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    201: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    202: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByGalleryImageNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.GalleryImageVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};