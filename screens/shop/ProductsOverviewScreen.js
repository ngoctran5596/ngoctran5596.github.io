import React from 'react';
import {FlatList, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

// import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

import * as cartAction from '../../store/actions/cart';

const ProductsOverviewScreen = props => {
  const products = useSelector (state => state.products.availableProducts);
  const dispatch = useDispatch ();
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onAddToCart={() => {
            dispatch (cartAction.addToCart (itemData.item));
          }}
          onViewDetail={() => {
            props.navigation.navigate ('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
              productImage: itemData.item.imageUrl,
            });
          }}
        />
      )}
    />
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer ();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate ('CartProduct');
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default ProductsOverviewScreen;
