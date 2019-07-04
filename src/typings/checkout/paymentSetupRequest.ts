

/**
 * Adyen Checkout Service
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including One-Click and 3D Secure), mobile wallets, and local payment methods (e.g. iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/checkout).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/user-management/how-to-get-the-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v46/payments ```
 *
 * OpenAPI spec version: 46
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Address } from './address';
import { Amount } from './amount';
import { Company } from './company';
import { Configuration } from './configuration';
import { ForexQuote } from './forexQuote';
import { Installments } from './installments';
import { LineItem } from './lineItem';
import { Name } from './name';
import { Split } from './split';


export interface PaymentSetupRequest { 
    /**
     * This field contains additional data, which may be required for a particular payment request.  The `additionalData` object consists of entries, each of which includes the key and value. For more information on possible key-value pairs, refer to the [additionalData section](https://docs.adyen.com/api-reference/payments-api#paymentrequestadditionaldata).
     */
    additionalData?: any;
    /**
     * List of payments methods to be presented to the shopper. To refer to payment methods, use their `brandCode` from [Payment methods overview](https://docs.adyen.com/payment-methods/payment-methods-overview).
     */
    allowedPaymentMethods?: Array<string>;
    amount: Amount;
    billingAddress?: Address;
    /**
     * List of payments methods to be hidden from the shopper. To refer to payment methods, use their `brandCode` from [Payment methods overview](https://docs.adyen.com/payment-methods/payment-methods-overview).
     */
    blockedPaymentMethods?: Array<string>;
    /**
     * The delay between the authorisation and scheduled auto-capture, specified in hours.
     */
    captureDelayHours?: number;
    /**
     * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.  Possible values: * iOS * Android * Web
     */
    channel?: PaymentSetupRequest.ChannelEnum;
    company?: Company;
    configuration?: Configuration;
    /**
     * The shopper country.  Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Example: NL or DE
     */
    countryCode: string;
    /**
     * The shopper's date of birth.  Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
     */
    dateOfBirth?: Date;
    dccQuote?: ForexQuote;
    deliveryAddress?: Address;
    /**
     * The date and time the purchased goods should be delivered.  Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD  Example: 2017-07-17T13:42:40.428+01:00
     */
    deliveryDate?: Date;
    /**
     * When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
     */
    enableOneClick?: boolean;
    /**
     * When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
     */
    enablePayOut?: boolean;
    /**
     * When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments.
     */
    enableRecurring?: boolean;
    /**
     * The type of the entity the payment is processed for.
     */
    entityType?: PaymentSetupRequest.EntityTypeEnum;
    /**
     * An integer value that is added to the normal fraud score. The value can be either positive or negative.
     */
    fraudOffset?: number;
    installments?: Installments;
    /**
     * Line items regarding the payment.
     */
    lineItems?: Array<LineItem>;
    /**
     * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
     */
    mcc?: string;
    /**
     * The merchant account identifier, with which you want to process the transaction.
     */
    merchantAccount: string;
    /**
     * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle. The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations. > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
     */
    merchantOrderReference?: string;
    /**
     * Metadata consists of entries, each of which includes a key and a value. Limitations: Error \"177\", \"Metadata size exceeds limit\"
     */
    metadata?: any;
    /**
     * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
     */
    orderReference?: string;
    /**
     * Required for the Web integration.  Set this parameter to the origin URL of the page that you are loading the SDK from.
     */
    origin?: string;
    /**
     * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
     */
    reference: string;
    /**
     * The URL to return to.
     */
    returnUrl: string;
    /**
     * The version of the SDK you are using (for Web SDK integrations only).
     */
    sdkVersion?: string;
    /**
     * The maximum validity of the session.
     */
    sessionValidity?: string;
    /**
     * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
     */
    shopperEmail?: string;
    /**
     * The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks). > This field is mandatory for some merchants depending on your business model. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
     */
    shopperIP?: string;
    /**
     * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
     */
    shopperInteraction?: PaymentSetupRequest.ShopperInteractionEnum;
    /**
     * The combination of a language code and a country code to specify the language to be used in the payment.
     */
    shopperLocale?: string;
    shopperName?: Name;
    /**
     * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID). > This field is required for recurring payments.
     */
    shopperReference?: string;
    /**
     * The text to appear on the shopper's bank statement.
     */
    shopperStatement?: string;
    /**
     * The shopper's social security number.
     */
    socialSecurityNumber?: string;
    /**
     * The details of how the payment should be split when distributing a payment to a MarketPay Marketplace and its Accounts.
     */
    splits?: Array<Split>;
    /**
     * The shopper's telephone number.
     */
    telephoneNumber?: string;
    /**
     * The token obtained when initializing the SDK.  > This parameter is required for iOS and Android; not required for Web.
     */
    token?: string;
    /**
     * Set to true if the payment should be routed to a trusted MID.
     */
    trustedShopper?: boolean;
}
export namespace PaymentSetupRequest {
    export type ChannelEnum = 'iOS' | 'Android' | 'Web';
    export const ChannelEnum = {
        IOS: 'iOS' as ChannelEnum,
        Android: 'Android' as ChannelEnum,
        Web: 'Web' as ChannelEnum
    };
    export type EntityTypeEnum = 'NaturalPerson' | 'CompanyName';
    export const EntityTypeEnum = {
        NaturalPerson: 'NaturalPerson' as EntityTypeEnum,
        CompanyName: 'CompanyName' as EntityTypeEnum
    };
    export type ShopperInteractionEnum = 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS';
    export const ShopperInteractionEnum = {
        Ecommerce: 'Ecommerce' as ShopperInteractionEnum,
        ContAuth: 'ContAuth' as ShopperInteractionEnum,
        Moto: 'Moto' as ShopperInteractionEnum,
        POS: 'POS' as ShopperInteractionEnum
    };
}