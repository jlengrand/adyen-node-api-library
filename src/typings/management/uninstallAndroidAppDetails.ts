/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class UninstallAndroidAppDetails {
    /**
    * The unique identifier of the app to be uninstalled.
    */
    'appId'?: string;
    /**
    * Type of terminal action: Uninstall an Android app.
    */
    'type'?: UninstallAndroidAppDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appId",
            "baseName": "appId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UninstallAndroidAppDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return UninstallAndroidAppDetails.attributeTypeMap;
    }
}

export namespace UninstallAndroidAppDetails {
    export enum TypeEnum {
        UninstallAndroidApp = <any> 'UninstallAndroidApp'
    }
}
