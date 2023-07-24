import React from "react";
import { View, Text,Image } from "react-native";
import styles from "./Card.style"

const ProductsCard = ({products})=>{
     console.log(products.inStock)

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:products.imgURL}}/>
            <Text style={styles.title}>{products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            {products.inStock === false && <Text style={styles.instock}>Stokta Yok</Text>}

        </View>
    )
}

export default ProductsCard; //const productscard