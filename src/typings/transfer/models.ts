/*
 * The version of the OpenAPI document: v3
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export * from './aULocalAccountIdentification';
export * from './additionalBankIdentification';
export * from './address2';
export * from './amount';
export * from './bRLocalAccountIdentification';
export * from './bankAccountV3';
export * from './cZLocalAccountIdentification';
export * from './counterpartyInfoV3';
export * from './counterpartyV3';
export * from './hULocalAccountIdentification';
export * from './ibanAccountIdentification';
export * from './invalidField';
export * from './jSONObject';
export * from './jSONPath';
export * from './link';
export * from './links';
export * from './merchantData';
export * from './nOLocalAccountIdentification';
export * from './nameLocation';
export * from './numberAndBicAccountIdentification';
export * from './pLLocalAccountIdentification';
export * from './partyIdentification2';
export * from './restServiceError';
export * from './sELocalAccountIdentification';
export * from './transaction';
export * from './transactionSearchResponse';
export * from './transfer';
export * from './transferInfo';
export * from './uKLocalAccountIdentification';
export * from './uSLocalAccountIdentification';


import { AULocalAccountIdentification } from './aULocalAccountIdentification';
import { AdditionalBankIdentification } from './additionalBankIdentification';
import { Address2 } from './address2';
import { Amount } from './amount';
import { BRLocalAccountIdentification } from './bRLocalAccountIdentification';
import { BankAccountV3 } from './bankAccountV3';
import { CZLocalAccountIdentification } from './cZLocalAccountIdentification';
import { CounterpartyInfoV3 } from './counterpartyInfoV3';
import { CounterpartyV3 } from './counterpartyV3';
import { HULocalAccountIdentification } from './hULocalAccountIdentification';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { InvalidField } from './invalidField';
import { JSONObject } from './jSONObject';
import { JSONPath } from './jSONPath';
import { Link } from './link';
import { Links } from './links';
import { MerchantData } from './merchantData';
import { NOLocalAccountIdentification } from './nOLocalAccountIdentification';
import { NameLocation } from './nameLocation';
import { NumberAndBicAccountIdentification } from './numberAndBicAccountIdentification';
import { PLLocalAccountIdentification } from './pLLocalAccountIdentification';
import { PartyIdentification2 } from './partyIdentification2';
import { RestServiceError } from './restServiceError';
import { SELocalAccountIdentification } from './sELocalAccountIdentification';
import { Transaction } from './transaction';
import { TransactionSearchResponse } from './transactionSearchResponse';
import { Transfer } from './transfer';
import { TransferInfo } from './transferInfo';
import { UKLocalAccountIdentification } from './uKLocalAccountIdentification';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AULocalAccountIdentification.TypeEnum": AULocalAccountIdentification.TypeEnum,
        "AdditionalBankIdentification.TypeEnum": AdditionalBankIdentification.TypeEnum,
        "BRLocalAccountIdentification.TypeEnum": BRLocalAccountIdentification.TypeEnum,
        "CZLocalAccountIdentification.TypeEnum": CZLocalAccountIdentification.TypeEnum,
        "HULocalAccountIdentification.TypeEnum": HULocalAccountIdentification.TypeEnum,
        "IbanAccountIdentification.TypeEnum": IbanAccountIdentification.TypeEnum,
        "NOLocalAccountIdentification.TypeEnum": NOLocalAccountIdentification.TypeEnum,
        "NumberAndBicAccountIdentification.TypeEnum": NumberAndBicAccountIdentification.TypeEnum,
        "PLLocalAccountIdentification.TypeEnum": PLLocalAccountIdentification.TypeEnum,
        "PartyIdentification2.TypeEnum": PartyIdentification2.TypeEnum,
        "SELocalAccountIdentification.TypeEnum": SELocalAccountIdentification.TypeEnum,
        "Transaction.CategoryEnum": Transaction.CategoryEnum,
        "Transaction.StatusEnum": Transaction.StatusEnum,
        "Transaction.TypeEnum": Transaction.TypeEnum,
        "Transfer.CategoryEnum": Transfer.CategoryEnum,
        "Transfer.DirectionEnum": Transfer.DirectionEnum,
        "Transfer.PriorityEnum": Transfer.PriorityEnum,
        "Transfer.ReasonEnum": Transfer.ReasonEnum,
        "Transfer.StatusEnum": Transfer.StatusEnum,
        "TransferInfo.CategoryEnum": TransferInfo.CategoryEnum,
        "TransferInfo.PriorityEnum": TransferInfo.PriorityEnum,
        "UKLocalAccountIdentification.TypeEnum": UKLocalAccountIdentification.TypeEnum,
        "USLocalAccountIdentification.AccountTypeEnum": USLocalAccountIdentification.AccountTypeEnum,
        "USLocalAccountIdentification.TypeEnum": USLocalAccountIdentification.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AULocalAccountIdentification": AULocalAccountIdentification,
    "AdditionalBankIdentification": AdditionalBankIdentification,
    "Address2": Address2,
    "Amount": Amount,
    "BRLocalAccountIdentification": BRLocalAccountIdentification,
    "BankAccountV3": BankAccountV3,
    "CZLocalAccountIdentification": CZLocalAccountIdentification,
    "CounterpartyInfoV3": CounterpartyInfoV3,
    "CounterpartyV3": CounterpartyV3,
    "HULocalAccountIdentification": HULocalAccountIdentification,
    "IbanAccountIdentification": IbanAccountIdentification,
    "InvalidField": InvalidField,
    "JSONObject": JSONObject,
    "JSONPath": JSONPath,
    "Link": Link,
    "Links": Links,
    "MerchantData": MerchantData,
    "NOLocalAccountIdentification": NOLocalAccountIdentification,
    "NameLocation": NameLocation,
    "NumberAndBicAccountIdentification": NumberAndBicAccountIdentification,
    "PLLocalAccountIdentification": PLLocalAccountIdentification,
    "PartyIdentification2": PartyIdentification2,
    "RestServiceError": RestServiceError,
    "SELocalAccountIdentification": SELocalAccountIdentification,
    "Transaction": Transaction,
    "TransactionSearchResponse": TransactionSearchResponse,
    "Transfer": Transfer,
    "TransferInfo": TransferInfo,
    "UKLocalAccountIdentification": UKLocalAccountIdentification,
    "USLocalAccountIdentification": USLocalAccountIdentification,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else if (type === "SaleToAcquirerData") {
            const dataString = JSON.stringify(data);
            return Buffer.from(dataString).toString("base64");
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
