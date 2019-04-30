/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ResourceNamespacePatch: msRest.CompositeMapper = {
  serializedName: "ResourceNamespacePatch",
  type: {
    name: "Composite",
    className: "ResourceNamespacePatch",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SBSku: msRest.CompositeMapper = {
  serializedName: "SBSku",
  type: {
    name: "Composite",
    className: "SBSku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "Enum",
          allowedValues: [
            "Basic",
            "Standard",
            "Premium"
          ]
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "Enum",
          allowedValues: [
            "Basic",
            "Standard",
            "Premium"
          ]
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SBNamespace: msRest.CompositeMapper = {
  serializedName: "SBNamespace",
  type: {
    name: "Composite",
    className: "SBNamespace",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "SBSku"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      serviceBusEndpoint: {
        readOnly: true,
        serializedName: "properties.serviceBusEndpoint",
        type: {
          name: "String"
        }
      },
      metricId: {
        readOnly: true,
        serializedName: "properties.metricId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SBNamespaceUpdateParameters: msRest.CompositeMapper = {
  serializedName: "SBNamespaceUpdateParameters",
  type: {
    name: "Composite",
    className: "SBNamespaceUpdateParameters",
    modelProperties: {
      ...ResourceNamespacePatch.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "SBSku"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      serviceBusEndpoint: {
        readOnly: true,
        serializedName: "properties.serviceBusEndpoint",
        type: {
          name: "String"
        }
      },
      metricId: {
        readOnly: true,
        serializedName: "properties.metricId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SBNamespaceMigrate: msRest.CompositeMapper = {
  serializedName: "SBNamespaceMigrate",
  type: {
    name: "Composite",
    className: "SBNamespaceMigrate",
    modelProperties: {
      targetNamespaceType: {
        required: true,
        serializedName: "targetNamespaceType",
        type: {
          name: "Enum",
          allowedValues: [
            "Messaging",
            "NotificationHub",
            "Mixed",
            "EventHub",
            "Relay"
          ]
        }
      }
    }
  }
};

export const SBAuthorizationRule: msRest.CompositeMapper = {
  serializedName: "SBAuthorizationRule",
  type: {
    name: "Composite",
    className: "SBAuthorizationRule",
    modelProperties: {
      ...Resource.type.modelProperties,
      rights: {
        required: true,
        serializedName: "properties.rights",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "Manage",
                "Send",
                "Listen"
              ]
            }
          }
        }
      }
    }
  }
};

export const AuthorizationRuleProperties: msRest.CompositeMapper = {
  serializedName: "AuthorizationRuleProperties",
  type: {
    name: "Composite",
    className: "AuthorizationRuleProperties",
    modelProperties: {
      rights: {
        required: true,
        serializedName: "rights",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "Manage",
                "Send",
                "Listen"
              ]
            }
          }
        }
      }
    }
  }
};

export const AccessKeys: msRest.CompositeMapper = {
  serializedName: "AccessKeys",
  type: {
    name: "Composite",
    className: "AccessKeys",
    modelProperties: {
      primaryConnectionString: {
        readOnly: true,
        serializedName: "primaryConnectionString",
        type: {
          name: "String"
        }
      },
      secondaryConnectionString: {
        readOnly: true,
        serializedName: "secondaryConnectionString",
        type: {
          name: "String"
        }
      },
      aliasPrimaryConnectionString: {
        readOnly: true,
        serializedName: "aliasPrimaryConnectionString",
        type: {
          name: "String"
        }
      },
      aliasSecondaryConnectionString: {
        readOnly: true,
        serializedName: "aliasSecondaryConnectionString",
        type: {
          name: "String"
        }
      },
      primaryKey: {
        readOnly: true,
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        readOnly: true,
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      },
      keyName: {
        readOnly: true,
        serializedName: "keyName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegenerateAccessKeyParameters: msRest.CompositeMapper = {
  serializedName: "RegenerateAccessKeyParameters",
  type: {
    name: "Composite",
    className: "RegenerateAccessKeyParameters",
    modelProperties: {
      keyType: {
        required: true,
        serializedName: "keyType",
        type: {
          name: "Enum",
          allowedValues: [
            "PrimaryKey",
            "SecondaryKey"
          ]
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessageCountDetails: msRest.CompositeMapper = {
  serializedName: "MessageCountDetails",
  type: {
    name: "Composite",
    className: "MessageCountDetails",
    modelProperties: {
      activeMessageCount: {
        readOnly: true,
        serializedName: "activeMessageCount",
        type: {
          name: "Number"
        }
      },
      deadLetterMessageCount: {
        readOnly: true,
        serializedName: "deadLetterMessageCount",
        type: {
          name: "Number"
        }
      },
      scheduledMessageCount: {
        readOnly: true,
        serializedName: "scheduledMessageCount",
        type: {
          name: "Number"
        }
      },
      transferMessageCount: {
        readOnly: true,
        serializedName: "transferMessageCount",
        type: {
          name: "Number"
        }
      },
      transferDeadLetterMessageCount: {
        readOnly: true,
        serializedName: "transferDeadLetterMessageCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SBQueue: msRest.CompositeMapper = {
  serializedName: "SBQueue",
  type: {
    name: "Composite",
    className: "SBQueue",
    modelProperties: {
      ...Resource.type.modelProperties,
      countDetails: {
        readOnly: true,
        serializedName: "properties.countDetails",
        type: {
          name: "Composite",
          className: "MessageCountDetails"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      accessedAt: {
        readOnly: true,
        serializedName: "properties.accessedAt",
        type: {
          name: "DateTime"
        }
      },
      sizeInBytes: {
        readOnly: true,
        serializedName: "properties.sizeInBytes",
        type: {
          name: "Number"
        }
      },
      messageCount: {
        readOnly: true,
        serializedName: "properties.messageCount",
        type: {
          name: "Number"
        }
      },
      lockDuration: {
        serializedName: "properties.lockDuration",
        type: {
          name: "TimeSpan"
        }
      },
      maxSizeInMegabytes: {
        serializedName: "properties.maxSizeInMegabytes",
        type: {
          name: "Number"
        }
      },
      requiresDuplicateDetection: {
        serializedName: "properties.requiresDuplicateDetection",
        type: {
          name: "Boolean"
        }
      },
      requiresSession: {
        serializedName: "properties.requiresSession",
        type: {
          name: "Boolean"
        }
      },
      defaultMessageTimeToLive: {
        serializedName: "properties.defaultMessageTimeToLive",
        type: {
          name: "TimeSpan"
        }
      },
      deadLetteringOnMessageExpiration: {
        serializedName: "properties.deadLetteringOnMessageExpiration",
        type: {
          name: "Boolean"
        }
      },
      duplicateDetectionHistoryTimeWindow: {
        serializedName: "properties.duplicateDetectionHistoryTimeWindow",
        type: {
          name: "TimeSpan"
        }
      },
      maxDeliveryCount: {
        serializedName: "properties.maxDeliveryCount",
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "Enum",
          allowedValues: [
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown"
          ]
        }
      },
      enableBatchedOperations: {
        serializedName: "properties.enableBatchedOperations",
        type: {
          name: "Boolean"
        }
      },
      autoDeleteOnIdle: {
        serializedName: "properties.autoDeleteOnIdle",
        type: {
          name: "TimeSpan"
        }
      },
      enablePartitioning: {
        serializedName: "properties.enablePartitioning",
        type: {
          name: "Boolean"
        }
      },
      enableExpress: {
        serializedName: "properties.enableExpress",
        type: {
          name: "Boolean"
        }
      },
      forwardTo: {
        serializedName: "properties.forwardTo",
        type: {
          name: "String"
        }
      },
      forwardDeadLetteredMessagesTo: {
        serializedName: "properties.forwardDeadLetteredMessagesTo",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SBTopic: msRest.CompositeMapper = {
  serializedName: "SBTopic",
  type: {
    name: "Composite",
    className: "SBTopic",
    modelProperties: {
      ...Resource.type.modelProperties,
      sizeInBytes: {
        readOnly: true,
        serializedName: "properties.sizeInBytes",
        type: {
          name: "Number"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      accessedAt: {
        readOnly: true,
        serializedName: "properties.accessedAt",
        type: {
          name: "DateTime"
        }
      },
      subscriptionCount: {
        readOnly: true,
        serializedName: "properties.subscriptionCount",
        type: {
          name: "Number"
        }
      },
      countDetails: {
        readOnly: true,
        serializedName: "properties.countDetails",
        type: {
          name: "Composite",
          className: "MessageCountDetails"
        }
      },
      defaultMessageTimeToLive: {
        serializedName: "properties.defaultMessageTimeToLive",
        type: {
          name: "TimeSpan"
        }
      },
      maxSizeInMegabytes: {
        serializedName: "properties.maxSizeInMegabytes",
        type: {
          name: "Number"
        }
      },
      requiresDuplicateDetection: {
        serializedName: "properties.requiresDuplicateDetection",
        type: {
          name: "Boolean"
        }
      },
      duplicateDetectionHistoryTimeWindow: {
        serializedName: "properties.duplicateDetectionHistoryTimeWindow",
        type: {
          name: "TimeSpan"
        }
      },
      enableBatchedOperations: {
        serializedName: "properties.enableBatchedOperations",
        type: {
          name: "Boolean"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "Enum",
          allowedValues: [
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown"
          ]
        }
      },
      supportOrdering: {
        serializedName: "properties.supportOrdering",
        type: {
          name: "Boolean"
        }
      },
      autoDeleteOnIdle: {
        serializedName: "properties.autoDeleteOnIdle",
        type: {
          name: "TimeSpan"
        }
      },
      enablePartitioning: {
        serializedName: "properties.enablePartitioning",
        type: {
          name: "Boolean"
        }
      },
      enableExpress: {
        serializedName: "properties.enableExpress",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SBSubscription: msRest.CompositeMapper = {
  serializedName: "SBSubscription",
  type: {
    name: "Composite",
    className: "SBSubscription",
    modelProperties: {
      ...Resource.type.modelProperties,
      messageCount: {
        readOnly: true,
        serializedName: "properties.messageCount",
        type: {
          name: "Number"
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      accessedAt: {
        readOnly: true,
        serializedName: "properties.accessedAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      countDetails: {
        readOnly: true,
        serializedName: "properties.countDetails",
        type: {
          name: "Composite",
          className: "MessageCountDetails"
        }
      },
      lockDuration: {
        serializedName: "properties.lockDuration",
        type: {
          name: "TimeSpan"
        }
      },
      requiresSession: {
        serializedName: "properties.requiresSession",
        type: {
          name: "Boolean"
        }
      },
      defaultMessageTimeToLive: {
        serializedName: "properties.defaultMessageTimeToLive",
        type: {
          name: "TimeSpan"
        }
      },
      deadLetteringOnFilterEvaluationExceptions: {
        serializedName: "properties.deadLetteringOnFilterEvaluationExceptions",
        type: {
          name: "Boolean"
        }
      },
      deadLetteringOnMessageExpiration: {
        serializedName: "properties.deadLetteringOnMessageExpiration",
        type: {
          name: "Boolean"
        }
      },
      duplicateDetectionHistoryTimeWindow: {
        serializedName: "properties.duplicateDetectionHistoryTimeWindow",
        type: {
          name: "TimeSpan"
        }
      },
      maxDeliveryCount: {
        serializedName: "properties.maxDeliveryCount",
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "Enum",
          allowedValues: [
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown"
          ]
        }
      },
      enableBatchedOperations: {
        serializedName: "properties.enableBatchedOperations",
        type: {
          name: "Boolean"
        }
      },
      autoDeleteOnIdle: {
        serializedName: "properties.autoDeleteOnIdle",
        type: {
          name: "TimeSpan"
        }
      },
      forwardTo: {
        serializedName: "properties.forwardTo",
        type: {
          name: "String"
        }
      },
      forwardDeadLetteredMessagesTo: {
        serializedName: "properties.forwardDeadLetteredMessagesTo",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailability: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailability",
  type: {
    name: "Composite",
    className: "CheckNameAvailability",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "InvalidName",
            "SubscriptionIsDisabled",
            "NameInUse",
            "NameInLockdown",
            "TooManyNamespaceInCurrentSubscription"
          ]
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Action: msRest.CompositeMapper = {
  serializedName: "Action",
  type: {
    name: "Composite",
    className: "Action",
    modelProperties: {
      sqlExpression: {
        serializedName: "sqlExpression",
        type: {
          name: "String"
        }
      },
      compatibilityLevel: {
        serializedName: "compatibilityLevel",
        type: {
          name: "Number"
        }
      },
      requiresPreprocessing: {
        serializedName: "requiresPreprocessing",
        defaultValue: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SqlFilter: msRest.CompositeMapper = {
  serializedName: "SqlFilter",
  type: {
    name: "Composite",
    className: "SqlFilter",
    modelProperties: {
      sqlExpression: {
        serializedName: "sqlExpression",
        type: {
          name: "String"
        }
      },
      compatibilityLevel: {
        readOnly: true,
        serializedName: "compatibilityLevel",
        defaultValue: 20,
        type: {
          name: "Number"
        }
      },
      requiresPreprocessing: {
        serializedName: "requiresPreprocessing",
        defaultValue: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const CorrelationFilter: msRest.CompositeMapper = {
  serializedName: "CorrelationFilter",
  type: {
    name: "Composite",
    className: "CorrelationFilter",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      correlationId: {
        serializedName: "correlationId",
        type: {
          name: "String"
        }
      },
      messageId: {
        serializedName: "messageId",
        type: {
          name: "String"
        }
      },
      to: {
        serializedName: "to",
        type: {
          name: "String"
        }
      },
      replyTo: {
        serializedName: "replyTo",
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        type: {
          name: "String"
        }
      },
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      replyToSessionId: {
        serializedName: "replyToSessionId",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      requiresPreprocessing: {
        serializedName: "requiresPreprocessing",
        defaultValue: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Rule: msRest.CompositeMapper = {
  serializedName: "Rule",
  type: {
    name: "Composite",
    className: "Rule",
    modelProperties: {
      ...Resource.type.modelProperties,
      action: {
        serializedName: "properties.action",
        type: {
          name: "Composite",
          className: "Action"
        }
      },
      filterType: {
        serializedName: "properties.filterType",
        type: {
          name: "Enum",
          allowedValues: [
            "SqlFilter",
            "CorrelationFilter"
          ]
        }
      },
      sqlFilter: {
        serializedName: "properties.sqlFilter",
        type: {
          name: "Composite",
          className: "SqlFilter"
        }
      },
      correlationFilter: {
        serializedName: "properties.correlationFilter",
        type: {
          name: "Composite",
          className: "CorrelationFilter"
        }
      }
    }
  }
};

export const SqlRuleAction: msRest.CompositeMapper = {
  serializedName: "SqlRuleAction",
  type: {
    name: "Composite",
    className: "SqlRuleAction",
    modelProperties: {
      ...Action.type.modelProperties
    }
  }
};

export const PremiumMessagingRegionsProperties: msRest.CompositeMapper = {
  serializedName: "PremiumMessagingRegions_properties",
  type: {
    name: "Composite",
    className: "PremiumMessagingRegionsProperties",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      fullName: {
        readOnly: true,
        serializedName: "fullName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PremiumMessagingRegions: msRest.CompositeMapper = {
  serializedName: "PremiumMessagingRegions",
  type: {
    name: "Composite",
    className: "PremiumMessagingRegions",
    modelProperties: {
      ...ResourceNamespacePatch.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PremiumMessagingRegionsProperties"
        }
      }
    }
  }
};

export const Destination: msRest.CompositeMapper = {
  serializedName: "Destination",
  type: {
    name: "Composite",
    className: "Destination",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      storageAccountResourceId: {
        serializedName: "properties.storageAccountResourceId",
        type: {
          name: "String"
        }
      },
      blobContainer: {
        serializedName: "properties.blobContainer",
        type: {
          name: "String"
        }
      },
      archiveNameFormat: {
        serializedName: "properties.archiveNameFormat",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CaptureDescription: msRest.CompositeMapper = {
  serializedName: "CaptureDescription",
  type: {
    name: "Composite",
    className: "CaptureDescription",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      encoding: {
        serializedName: "encoding",
        type: {
          name: "Enum",
          allowedValues: [
            "Avro",
            "AvroDeflate"
          ]
        }
      },
      intervalInSeconds: {
        serializedName: "intervalInSeconds",
        constraints: {
          InclusiveMaximum: 900,
          InclusiveMinimum: 60
        },
        type: {
          name: "Number"
        }
      },
      sizeLimitInBytes: {
        serializedName: "sizeLimitInBytes",
        constraints: {
          InclusiveMaximum: 524288000,
          InclusiveMinimum: 10485760
        },
        type: {
          name: "Number"
        }
      },
      destination: {
        serializedName: "destination",
        type: {
          name: "Composite",
          className: "Destination"
        }
      }
    }
  }
};

export const Eventhub: msRest.CompositeMapper = {
  serializedName: "Eventhub",
  type: {
    name: "Composite",
    className: "Eventhub",
    modelProperties: {
      ...Resource.type.modelProperties,
      partitionIds: {
        readOnly: true,
        serializedName: "properties.partitionIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      createdAt: {
        readOnly: true,
        serializedName: "properties.createdAt",
        type: {
          name: "DateTime"
        }
      },
      updatedAt: {
        readOnly: true,
        serializedName: "properties.updatedAt",
        type: {
          name: "DateTime"
        }
      },
      messageRetentionInDays: {
        serializedName: "properties.messageRetentionInDays",
        constraints: {
          InclusiveMaximum: 7,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      partitionCount: {
        serializedName: "properties.partitionCount",
        constraints: {
          InclusiveMaximum: 32,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "Enum",
          allowedValues: [
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown"
          ]
        }
      },
      captureDescription: {
        serializedName: "properties.captureDescription",
        type: {
          name: "Composite",
          className: "CaptureDescription"
        }
      }
    }
  }
};

export const ArmDisasterRecovery: msRest.CompositeMapper = {
  serializedName: "ArmDisasterRecovery",
  type: {
    name: "Composite",
    className: "ArmDisasterRecovery",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "Enum",
          allowedValues: [
            "Accepted",
            "Succeeded",
            "Failed"
          ]
        }
      },
      pendingReplicationOperationsCount: {
        readOnly: true,
        serializedName: "properties.pendingReplicationOperationsCount",
        type: {
          name: "Number"
        }
      },
      partnerNamespace: {
        serializedName: "properties.partnerNamespace",
        type: {
          name: "String"
        }
      },
      alternateName: {
        serializedName: "properties.alternateName",
        type: {
          name: "String"
        }
      },
      role: {
        readOnly: true,
        serializedName: "properties.role",
        type: {
          name: "Enum",
          allowedValues: [
            "Primary",
            "PrimaryNotReplicating",
            "Secondary"
          ]
        }
      }
    }
  }
};

export const MigrationConfigProperties: msRest.CompositeMapper = {
  serializedName: "MigrationConfigProperties",
  type: {
    name: "Composite",
    className: "MigrationConfigProperties",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      pendingReplicationOperationsCount: {
        readOnly: true,
        serializedName: "properties.pendingReplicationOperationsCount",
        type: {
          name: "Number"
        }
      },
      targetNamespace: {
        required: true,
        serializedName: "properties.targetNamespace",
        type: {
          name: "String"
        }
      },
      postMigrationName: {
        required: true,
        serializedName: "properties.postMigrationName",
        type: {
          name: "String"
        }
      },
      migrationState: {
        readOnly: true,
        serializedName: "properties.migrationState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SBNamespaceListResult: msRest.CompositeMapper = {
  serializedName: "SBNamespaceListResult",
  type: {
    name: "Composite",
    className: "SBNamespaceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SBNamespace"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SBAuthorizationRuleListResult: msRest.CompositeMapper = {
  serializedName: "SBAuthorizationRuleListResult",
  type: {
    name: "Composite",
    className: "SBAuthorizationRuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SBAuthorizationRule"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ArmDisasterRecoveryListResult: msRest.CompositeMapper = {
  serializedName: "ArmDisasterRecoveryListResult",
  type: {
    name: "Composite",
    className: "ArmDisasterRecoveryListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ArmDisasterRecovery"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MigrationConfigListResult: msRest.CompositeMapper = {
  serializedName: "MigrationConfigListResult",
  type: {
    name: "Composite",
    className: "MigrationConfigListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MigrationConfigProperties"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SBQueueListResult: msRest.CompositeMapper = {
  serializedName: "SBQueueListResult",
  type: {
    name: "Composite",
    className: "SBQueueListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SBQueue"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SBTopicListResult: msRest.CompositeMapper = {
  serializedName: "SBTopicListResult",
  type: {
    name: "Composite",
    className: "SBTopicListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SBTopic"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SBSubscriptionListResult: msRest.CompositeMapper = {
  serializedName: "SBSubscriptionListResult",
  type: {
    name: "Composite",
    className: "SBSubscriptionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SBSubscription"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RuleListResult: msRest.CompositeMapper = {
  serializedName: "RuleListResult",
  type: {
    name: "Composite",
    className: "RuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Rule"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PremiumMessagingRegionsListResult: msRest.CompositeMapper = {
  serializedName: "PremiumMessagingRegionsListResult",
  type: {
    name: "Composite",
    className: "PremiumMessagingRegionsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PremiumMessagingRegions"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventHubListResult: msRest.CompositeMapper = {
  serializedName: "EventHubListResult",
  type: {
    name: "Composite",
    className: "EventHubListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Eventhub"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};