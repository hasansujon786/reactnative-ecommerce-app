import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native'

function ProductPreview({ product, ...props }) {
  const NativeFeadback = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
  return (
    <NativeFeadback useForeground {...props}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.imageUrl }} />
        <View style={styles.flexWrapper}>
          <View style={{ flexBasis: '80%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{product.title}</Text>
            <Text style={{ fontWeight: 'bold', marginTop: 8, fontSize: 22 }}>
              $ {product.price}
            </Text>
          </View>
          <View style={[styles.buttonContainer]}>
            <Button title='add' />
          </View>
        </View>
      </View>
    </NativeFeadback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
    elevation: 3,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  buttonContainer: {},
  flexWrapper: {
    padding: 12,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default ProductPreview
