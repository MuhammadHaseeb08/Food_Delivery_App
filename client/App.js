import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,AppRegistry  } from 'react-native';
import SignUp from './Components/SignUp';
import MyStack from './screens/MyStack';
import { Provider } from 'react-redux';
import meraStore from './store/store';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <Provider store={meraStore}>
      <StripeProvider 
      
      publishableKey='pk_test_51OIwkWKCxgQFwew7A1dqcPhUmQB6zU4DcGXPtuRJWmkNkG8NKxsJ56srt8ayIzTHX2G0MevfkpeM0LOXID06ACqB00T3P9qWqT' >
    <View className="flex-1 pt-10" >

      <MyStack/> 

    </View>
      </StripeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
