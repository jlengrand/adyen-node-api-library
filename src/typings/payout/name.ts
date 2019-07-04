/**
 * Adyen Payout Service
 * A set of API endpoints that allow you to store payout details, confirm, or decline a payout.  For more information, refer to [Third-party payouts](https://docs.adyen.com/features/third-party-payouts).
 *
 * OpenAPI spec version: 30
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Name { 
    /**
     * The first name.
     */
    firstName: string;
    /**
     * The gender. >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
     */
    gender: Name.GenderEnum;
    /**
     * The name's infix, if applicable. >A maximum length of twenty (20) characters is imposed.
     */
    infix?: string;
    /**
     * The last name.
     */
    lastName: string;
}
export namespace Name {
    export type GenderEnum = 'MALE' | 'FEMALE' | 'UNKNOWN';
    export const GenderEnum = {
        MALE: 'MALE' as GenderEnum,
        FEMALE: 'FEMALE' as GenderEnum,
        UNKNOWN: 'UNKNOWN' as GenderEnum
    };
}