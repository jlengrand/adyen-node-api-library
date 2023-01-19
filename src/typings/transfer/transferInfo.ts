/*
 * The version of the OpenAPI document: v3
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { CounterpartyInfoV3 } from './counterpartyInfoV3';

export class TransferInfo {
    'amount': Amount;
    /**
    * Unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
    */
    'balanceAccountId'?: string;
    /**
    * The type of transfer.  Possible values:   - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.
    */
    'category': TransferInfo.CategoryEnum;
    'counterparty': CounterpartyInfoV3;
    /**
    * A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.
    */
    'description'?: string;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    /**
    * Unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).
    */
    'paymentInstrumentId'?: string;
    /**
    * The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.  Possible values:  * **regular**: For normal, low-value transactions.  * **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.  * **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).
    */
    'priority'?: TransferInfo.PriorityEnum;
    /**
    * A reference for the transfer, only used internally within your platform. If you don\'t provide this in the request, Adyen generates a unique reference. Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    *  A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.   Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.  - **internal**: 80 characters  - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
    */
    'referenceForBeneficiary'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "balanceAccountId",
            "baseName": "balanceAccountId",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "TransferInfo.CategoryEnum"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "CounterpartyInfoV3"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "paymentInstrumentId",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "TransferInfo.PriorityEnum"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "referenceForBeneficiary",
            "baseName": "referenceForBeneficiary",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferInfo.attributeTypeMap;
    }
}

export namespace TransferInfo {
    export enum CategoryEnum {
        Bank = <any> 'bank',
        Internal = <any> 'internal'
    }
    export enum PriorityEnum {
        Fast = <any> 'fast',
        Instant = <any> 'instant',
        Regular = <any> 'regular',
        Wire = <any> 'wire'
    }
}
