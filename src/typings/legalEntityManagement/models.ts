/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export * from './address';
export * from './attachment';
export * from './bankAccountInfo';
export * from './birthData';
export * from './businessLine';
export * from './businessLineInfo';
export * from './businessLineInfoUpdate';
export * from './businessLines';
export * from './document';
export * from './documentReference';
export * from './entityReference';
export * from './genericEntityInfo';
export * from './identificationData';
export * from './individual';
export * from './legalEntity';
export * from './legalEntityAssociation';
export * from './legalEntityInfo';
export * from './name';
export * from './onboardingLink';
export * from './onboardingLinkInfo';
export * from './onboardingTheme';
export * from './onboardingThemes';
export * from './organization';
export * from './ownerEntity';
export * from './phoneNumber';
export * from './recurringDetail';
export * from './serviceError';
export * from './soleProprietorship';
export * from './sourceOfFunds';
export * from './stockData';
export * from './taxInformation';
export * from './taxReportingClassification';
export * from './transferInstrument';
export * from './transferInstrumentInfo';
export * from './webData';
export * from './webDataExemption';


import { Address } from './address';
import { Attachment } from './attachment';
import { BankAccountInfo } from './bankAccountInfo';
import { BirthData } from './birthData';
import { BusinessLine } from './businessLine';
import { BusinessLineInfo } from './businessLineInfo';
import { BusinessLineInfoUpdate } from './businessLineInfoUpdate';
import { BusinessLines } from './businessLines';
import { Document } from './document';
import { DocumentReference } from './documentReference';
import { EntityReference } from './entityReference';
import { GenericEntityInfo } from './genericEntityInfo';
import { IdentificationData } from './identificationData';
import { Individual } from './individual';
import { LegalEntity } from './legalEntity';
import { LegalEntityAssociation } from './legalEntityAssociation';
import { LegalEntityInfo } from './legalEntityInfo';
import { Name } from './name';
import { OnboardingLink } from './onboardingLink';
import { OnboardingLinkInfo } from './onboardingLinkInfo';
import { OnboardingTheme } from './onboardingTheme';
import { OnboardingThemes } from './onboardingThemes';
import { Organization } from './organization';
import { OwnerEntity } from './ownerEntity';
import { PhoneNumber } from './phoneNumber';
import { RecurringDetail } from './recurringDetail';
import { ServiceError } from './serviceError';
import { SoleProprietorship } from './soleProprietorship';
import { SourceOfFunds } from './sourceOfFunds';
import { StockData } from './stockData';
import { TaxInformation } from './taxInformation';
import { TaxReportingClassification } from './taxReportingClassification';
import { TransferInstrument } from './transferInstrument';
import { TransferInstrumentInfo } from './transferInstrumentInfo';
import { WebData } from './webData';
import { WebDataExemption } from './webDataExemption';

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
        "Document.TypeEnum": Document.TypeEnum,
        "IdentificationData.TypeEnum": IdentificationData.TypeEnum,
        "LegalEntity.TypeEnum": LegalEntity.TypeEnum,
        "LegalEntityAssociation.TypeEnum": LegalEntityAssociation.TypeEnum,
        "LegalEntityInfo.TypeEnum": LegalEntityInfo.TypeEnum,
        "Organization.TypeEnum": Organization.TypeEnum,
        "Organization.VatAbsenceReasonEnum": Organization.VatAbsenceReasonEnum,
        "SoleProprietorship.VatAbsenceReasonEnum": SoleProprietorship.VatAbsenceReasonEnum,
        "SourceOfFunds.TypeEnum": SourceOfFunds.TypeEnum,
        "TaxReportingClassification.BusinessTypeEnum": TaxReportingClassification.BusinessTypeEnum,
        "TaxReportingClassification.MainSourceOfIncomeEnum": TaxReportingClassification.MainSourceOfIncomeEnum,
        "TaxReportingClassification.TypeEnum": TaxReportingClassification.TypeEnum,
        "TransferInstrument.TypeEnum": TransferInstrument.TypeEnum,
        "TransferInstrumentInfo.TypeEnum": TransferInstrumentInfo.TypeEnum,
        "WebDataExemption.ReasonEnum": WebDataExemption.ReasonEnum,
}

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "Attachment": Attachment,
    "BankAccountInfo": BankAccountInfo,
    "BirthData": BirthData,
    "BusinessLine": BusinessLine,
    "BusinessLineInfo": BusinessLineInfo,
    "BusinessLineInfoUpdate": BusinessLineInfoUpdate,
    "BusinessLines": BusinessLines,
    "Document": Document,
    "DocumentReference": DocumentReference,
    "EntityReference": EntityReference,
    "GenericEntityInfo": GenericEntityInfo,
    "IdentificationData": IdentificationData,
    "Individual": Individual,
    "LegalEntity": LegalEntity,
    "LegalEntityAssociation": LegalEntityAssociation,
    "LegalEntityInfo": LegalEntityInfo,
    "Name": Name,
    "OnboardingLink": OnboardingLink,
    "OnboardingLinkInfo": OnboardingLinkInfo,
    "OnboardingTheme": OnboardingTheme,
    "OnboardingThemes": OnboardingThemes,
    "Organization": Organization,
    "OwnerEntity": OwnerEntity,
    "PhoneNumber": PhoneNumber,
    "RecurringDetail": RecurringDetail,
    "ServiceError": ServiceError,
    "SoleProprietorship": SoleProprietorship,
    "SourceOfFunds": SourceOfFunds,
    "StockData": StockData,
    "TaxInformation": TaxInformation,
    "TaxReportingClassification": TaxReportingClassification,
    "TransferInstrument": TransferInstrument,
    "TransferInstrumentInfo": TransferInstrumentInfo,
    "WebData": WebData,
    "WebDataExemption": WebDataExemption,
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
