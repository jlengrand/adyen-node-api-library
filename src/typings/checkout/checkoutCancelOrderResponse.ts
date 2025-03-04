/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CheckoutCancelOrderResponse {
    /**
    * A unique reference of the cancellation request.
    */
    'pspReference': string;
    /**
    * The result of the cancellation request.  Possible values:  * **Received** – Indicates the cancellation has successfully been received by Adyen, and will be processed.
    */
    'resultCode': CheckoutCancelOrderResponse.ResultCodeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "CheckoutCancelOrderResponse.ResultCodeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutCancelOrderResponse.attributeTypeMap;
    }
}

export namespace CheckoutCancelOrderResponse {
    export enum ResultCodeEnum {
        Received = <any> 'Received'
    }
}
