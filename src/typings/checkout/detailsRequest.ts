/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AuthenticationData } from './authenticationData';
import { PaymentCompletionDetails } from './paymentCompletionDetails';

export class DetailsRequest {
    'authenticationData'?: AuthenticationData;
    'details': PaymentCompletionDetails;
    /**
    * The `paymentData` value from the `/payments` response. Required if the `/payments` response returns this value. 
    */
    'paymentData'?: string;
    /**
    * Change the `authenticationOnly` indicator originally set in the `/payments` request. Only needs to be set if you want to modify the value set previously.
    */
    'threeDSAuthenticationOnly'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authenticationData",
            "baseName": "authenticationData",
            "type": "AuthenticationData"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "PaymentCompletionDetails"
        },
        {
            "name": "paymentData",
            "baseName": "paymentData",
            "type": "string"
        },
        {
            "name": "threeDSAuthenticationOnly",
            "baseName": "threeDSAuthenticationOnly",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DetailsRequest.attributeTypeMap;
    }
}

