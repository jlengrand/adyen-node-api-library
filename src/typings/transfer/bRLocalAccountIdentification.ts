/*
 * The version of the OpenAPI document: v3
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BRLocalAccountIdentification {
    /**
    * The bank account number (without separators or whitespace).
    */
    'accountNumber': string;
    /**
    * The 3-digit Brazilian bank code (with leading zeros).
    */
    'bankCode': string;
    /**
    * The bank account branch number (without separators or whitespace).
    */
    'branchNumber': string;
    /**
    * **brLocal**
    */
    'type'?: BRLocalAccountIdentification.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "bankCode",
            "baseName": "bankCode",
            "type": "string"
        },
        {
            "name": "branchNumber",
            "baseName": "branchNumber",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BRLocalAccountIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BRLocalAccountIdentification.attributeTypeMap;
    }
}

export namespace BRLocalAccountIdentification {
    export enum TypeEnum {
        BrLocal = <any> 'brLocal'
    }
}
