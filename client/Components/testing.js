import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {useStripe} from '@stripe/stripe-react-native';

const PaymentSheetScreen = () => {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [paymentSheetVisible, setPaymentSheetVisible] = useState(false);

  const initializePaymentSheet = async () => {
    try {
      // Initialize the payment sheet
      await initPaymentSheet({
        paymentIntentClientSecret: 'your-payment-intent-client-secret',
      });
      setPaymentSheetVisible(true);
    } catch (error) {
      console.error('Error initializing payment sheet:', error);
    }
  };

  const openPaymentSheet = async () => {
    try {
      // Present the payment sheet
      const {status} = await presentPaymentSheet();
      if (status === 'succeeded') {
        // Payment succeeded
      } else {
        // Payment failed or was canceled
      }
    } catch (error) {
      console.error('Error presenting payment sheet:', error);
    }
  };

  return (
    <View>
      <Button title="Initialize Payment Sheet" onPress={initializePaymentSheet} />
      {paymentSheetVisible && (
        <Button title="Open Payment Sheet" onPress={openPaymentSheet} />
      )}
    </View>
  );
};

export default PaymentSheetScreen;
