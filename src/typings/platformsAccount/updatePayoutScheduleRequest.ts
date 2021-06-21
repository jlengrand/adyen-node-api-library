/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/platforms). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder ```
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UpdatePayoutScheduleRequest {
    /**
    * Direction on how to handle any payouts that have already been scheduled. Permitted values: * `CLOSE` will close the existing batch of payouts. * `UPDATE` will reschedule the existing batch to the new schedule. * `NOTHING` (**default**) will allow the payout to proceed.
    */
    'action'?: UpdatePayoutScheduleRequest.ActionEnum;
    /**
    * The reason for the payout schedule update. > This field is required when the `schedule` parameter is set to `HOLD`.
    */
    'reason'?: string;
    /**
    * The payout schedule to which the account is to be updated. Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`. `HOLD` will prevent scheduled payouts from happening but will still allow manual payouts to occur.
    */
    'schedule': UpdatePayoutScheduleRequest.ScheduleEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "UpdatePayoutScheduleRequest.ActionEnum"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "UpdatePayoutScheduleRequest.ScheduleEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePayoutScheduleRequest.attributeTypeMap;
    }
}

export namespace UpdatePayoutScheduleRequest {
    export enum ActionEnum {
        Close = <any> 'CLOSE',
        Nothing = <any> 'NOTHING',
        Update = <any> 'UPDATE'
    }
    export enum ScheduleEnum {
        BiweeklyOn1StAnd15ThAtMidnight = <any> 'BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT',
        BiweeklyOn1StAnd15ThAtNoon = <any> 'BIWEEKLY_ON_1ST_AND_15TH_AT_NOON',
        Daily = <any> 'DAILY',
        Daily6Pm = <any> 'DAILY_6PM',
        DailyAu = <any> 'DAILY_AU',
        DailyEu = <any> 'DAILY_EU',
        DailySg = <any> 'DAILY_SG',
        DailyUs = <any> 'DAILY_US',
        Default = <any> 'DEFAULT',
        Every6HoursFromMidnight = <any> 'EVERY_6_HOURS_FROM_MIDNIGHT',
        Hold = <any> 'HOLD',
        Monthly = <any> 'MONTHLY',
        MonthlyOn15ThAtMidnight = <any> 'MONTHLY_ON_15TH_AT_MIDNIGHT',
        Weekly = <any> 'WEEKLY',
        WeeklyOnTueFriMidnight = <any> 'WEEKLY_ON_TUE_FRI_MIDNIGHT',
        Yearly = <any> 'YEARLY'
    }
}
