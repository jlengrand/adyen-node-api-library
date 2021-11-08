/**
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen for Platforms: Notifications
 * The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.  For more information, refer to our [documentation](https://docs.adyen.com/platforms/notifications).
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ViasPhoneNumber {
    /**
    * The two-character country code of the phone number. >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. \'NL\').
    */
    'phoneCountryCode': string;
    /**
    * The phone number. >The inclusion of the phone number country code is not necessary.
    */
    'phoneNumber': string;
    /**
    * The type of the phone number. >The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.
    */
    'phoneType'?: ViasPhoneNumber.PhoneTypeEnum;
}

export namespace ViasPhoneNumber {
    export enum PhoneTypeEnum {
        Fax = <any> 'Fax',
        Landline = <any> 'Landline',
        Mobile = <any> 'Mobile',
        Sip = <any> 'SIP'
    }
}
