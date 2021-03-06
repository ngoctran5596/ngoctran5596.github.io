import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import * as CartAction from '../../store/actions/cart'

const ProductsDetailScreen = props => {
  const productId = props.route.params.productId;
  const selectedProduct = useSelector (state =>
    state.products.availableProducts.find (prod => prod.id === productId)
  );
    const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to cart" onPress={() => {
          dispatch(CartAction.addToCart(selectedProduct))
        }} />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed (2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create ({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
});
export default ProductsDetailScreen;
