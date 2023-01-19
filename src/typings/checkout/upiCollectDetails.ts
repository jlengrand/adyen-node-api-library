/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class UpiCollectDetails {
    /**
    * The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper.
    */
    'billingSequenceNumber': string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only.
    */
    'shopperNotificationReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **upi_collect**
    */
    'type': UpiCollectDetails.TypeEnum;
    /**
    * The virtual payment address for UPI.
    */
    'virtualPaymentAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingSequenceNumber",
            "baseName": "billingSequenceNumber",
            "type": "string"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string"
        },
        {
            "name": "shopperNotificationReference",
            "baseName": "shopperNotificationReference",
            "type": "string"
        },
        {
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UpiCollectDetails.TypeEnum"
        },
        {
            "name": "virtualPaymentAddress",
            "baseName": "virtualPaymentAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpiCollectDetails.attributeTypeMap;
    }
}

export namespace UpiCollectDetails {
    export enum TypeEnum {
        UpiCollect = <any> 'upi_collect'
    }
}
