// import {createAppContainer} from 'react-navigation';
import * as React from 'react';
import {Platform, SafeAreaView, Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// import Colors from '../constants/Colors';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
import ProductsOverviewScreen, {
  screenOptions as productsOverviewScreenOptions,
} from '../screens/shop/ProductsOverviewScreen';
import ProductDetail from '../screens/shop/ProductsDetailScreen';
import CartScreen, {
  screenOptions as cartScreenOptions,
} from '../screens/shop/CartScreen';
import OrdersScreen, {
  screenOptions as ordersScreenOptions,
} from '../screens/shop/OrdersScreen';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {Ionicons} from '@expo/vector-icons';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const ProductsStackNavigator = createStackNavigator ();

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="AllProduct"
        component={ProductsOverviewScreen}
        options={productsOverviewScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({route}) => ({title: route.params.productTitle})}
      />
      <ProductsStackNavigator.Screen
        name="CartProduct"
        component={CartScreen}
        options={cartScreenOptions}
      />
      {/* <ProductsNavigator.Screen name="Order" component={OrderScreen} /> */}
    </ProductsStackNavigator.Navigator>
  );
};

const OrdersStackNavigator = createStackNavigator ();

export const OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OrdersStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={ordersScreenOptions}
      />
    </OrdersStackNavigator.Navigator>
  );
};

const ShopDrawerNavigator = createDrawerNavigator ();

export const ShopNavigator = () => {
  const dispatch = useDispatch ();

  return (
    <ShopDrawerNavigator.Navigator
    // drawerContent={props => {
    //   return (
    //     <View style={{flex: 1, paddingTop: 20}}>
    //       <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
    //         <DrawerItemList {...props} />
    //         <Button
    //           title="Logout"
    //           color={Colors.primary}
    //           onPress={() => {
    //             // dispatch(authActions.logout());
    //             // props.navigation.navigate('Auth');
    //           }}
    //         />
    //       </SafeAreaView>
    //     </View>
    //   );
    // }}
    // drawerContentOptions={{
    //   activeTintColor: Colors.primary,
    // }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      {/* <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={23}
              color={props.color}
            />
          )
        }}
      /> */}
    </ShopDrawerNavigator.Navigator>
  );
};

// export default function StackHome () {
//   return (
//     <NavigationContainer>
//       <myStack />
//       {/* <MyDrawer /> */}
//     </NavigationContainer>
//   );
// }
