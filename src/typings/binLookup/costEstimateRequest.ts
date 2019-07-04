/**
 * Adyen BinLookup Service
 * The BIN Lookup API provides endpoints for retrieving information, such as [cost estimates](https://docs.adyen.com/features/cost-estimation), and 3D Secure supported version based on a given [BIN](https://docs.adyen.com/payments-basics/payment-glossary#bankidentificationnumberbin).
 *
 * OpenAPI spec version: 40
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Amount } from './amount';
import { CostEstimateAssumptions } from './costEstimateAssumptions';
import { MerchantDetails } from './merchantDetails';
import { Recurring } from './recurring';


export interface CostEstimateRequest { 
    amount: Amount;
    assumptions?: CostEstimateAssumptions;
    /**
     * The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.  > Either the `cardNumber` or `encryptedCard` field must be provided in a payment request.
     */
    cardNumber?: string;
    /**
     * Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Client-Side Encryption library and must contain at least the `number` and `generationtime` fields.  > Either the `cardNumber` or `encryptedCard` field must be provided in a payment request.
     */
    encryptedCard?: string;
    /**
     * The merchant account identifier you want to process the (transaction) request with.
     */
    merchantAccount: string;
    merchantDetails?: MerchantDetails;
    recurring?: Recurring;
    /**
     * The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail.
     */
    selectedRecurringDetailReference?: string;
    /**
     * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
     */
    shopperInteraction?: CostEstimateRequest.ShopperInteractionEnum;
    /**
     * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID). > This field is required for recurring payments.
     */
    shopperReference?: string;
}
export namespace CostEstimateRequest {
    export type ShopperInteractionEnum = 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS';
    export const ShopperInteractionEnum = {
        Ecommerce: 'Ecommerce' as ShopperInteractionEnum,
        ContAuth: 'ContAuth' as ShopperInteractionEnum,
        Moto: 'Moto' as ShopperInteractionEnum,
        POS: 'POS' as ShopperInteractionEnum
    };
}