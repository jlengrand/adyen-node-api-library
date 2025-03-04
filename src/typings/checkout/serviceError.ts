/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ServiceError {
    /**
    * Contains additional information about the payment. Some data fields are included only if you select them first. Go to **Customer Area** > **Developers** > **Additional data**.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * The error code mapped to the error message.
    */
    'errorCode'?: string;
    /**
    * The category of the error.
    */
    'errorType'?: string;
    /**
    * A short explanation of the issue.
    */
    'message'?: string;
    /**
    * The PSP reference of the payment.
    */
    'pspReference'?: string;
    /**
    * The HTTP response status.
    */
    'status'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "string"
        },
        {
            "name": "errorType",
            "baseName": "errorType",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ServiceError.attributeTypeMap;
    }
}

