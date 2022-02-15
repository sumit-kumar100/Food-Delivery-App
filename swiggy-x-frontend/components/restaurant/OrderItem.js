import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const OrderItem = ({ item }) => {

    const { FoodTitle, FoodPrice, FoodQuantity } = item;
    
    return (
        <View style={styles.TextContainer}>
            <Text style={styles.TitleStyle}>
                {`${FoodTitle} (${FoodQuantity})`}
            </Text>

            <Text style={styles.PriceStyle}>
                ₹ {FoodPrice}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    TextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    TitleStyle: {
        fontWeight: '600',
        fontSize: 16
    },
    PriceStyle: {
        opacity: 0.7,
        fontSize: 16
    }
})

export default OrderItem;