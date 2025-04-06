import styled from "styled-components";
import GooglePayButton from "@google-pay/button-react";

const CashOnDelivery = styled.div`
    display: flex;
    width: 260px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background: #b0a53910;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #756300;
    cursor: pointer;
`;

export const GooglePayModule = ({ payableAmount, updateTransaction }) => {
    return(
        <GooglePayButton
            environment="TEST"
            buttonColor="black"
            buttonType="plain"
            buttonRadius={8}
            buttonSizeMode="fill"
            style={{width: 260, height: 40}}
            paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
                {
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                },
                },
            ],
            merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant',
            },
            transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: `${payableAmount}.00`,
                currencyCode: 'INR',
                countryCode: 'IN',
            },
            }}
            onLoadPaymentData={paymentRequest => {
                const { info: { cardDetails, cardNetwork},
                        type: paymentType
                    } = paymentRequest.paymentMethodData;
                updateTransaction(cardDetails, cardNetwork, paymentType);
            }}
        />
    );
};

export const CashOnDeliveryModule = () => {
    return(
        <CashOnDelivery>Pay at Delivery</CashOnDelivery>
    );
};
