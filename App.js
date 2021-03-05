// import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
//tạo cửa hàng
import {createStore, combineReducers} from 'redux';
//muốn dùng store thì phải có provider
import {Provider} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';

import productsReducer from './store/reducers/products';
import CartReduce from './store/reducers/cart';
import ordersReducer from './store/reducers/order';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

const rootReducer = combineReducers ({
  products: productsReducer,
  cart: CartReduce,
  orders: ordersReducer,
});

const fetchFonts = () => {
  return Font.loadAsync ({
    'open-sans': require ('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require ('./assets/fonts/OpenSans-Bold.ttf'),
    ...Ionicons.font,
  });
};

const store = createStore (rootReducer);

export default function App () {
  const [fontLoaded, setFontLoaded] = useState (false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded (true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
