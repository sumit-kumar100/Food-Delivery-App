import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Axios } from '../../constants';
import React from 'react';


const Category = ({ setRestaurant, isDataFetched }) => {

    const handleCategory = (category) => {
        isDataFetched(false)
        Axios.get(`api/v2.1/search?q=${category}`)
            .then((res) => {
                setRestaurant(res.data.restaurants)
                isDataFetched(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <View style={styles.CategoryStyle}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    items.length ?
                        items.map((item, index) => {
                            return (
                                <Pressable key={index} onPress={() => handleCategory(item.category)}>
                                    <View style={styles.CategoryContainerStyle} >
                                        <Image
                                            source={item.image}
                                            style={styles.CategoryImageStyle}
                                        />
                                        <Text style={styles.CategoryTextStyle}>
                                            {item.text}
                                        </Text>
                                    </View>
                                </Pressable>
                            )
                        })
                        :
                        (<></>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    CategoryStyle: {
        marginTop: 5,
        backgroundColor: '#fff'
    },
    CategoryContainerStyle: {
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    CategoryImageStyle: {
        width: 70,
        height: 60,
        resizeMode: 'contain'
    },
    CategoryTextStyle: {
        fontWeight: "bold"
    }
})


const items = [
    {
        image: require('../../assets/images/fast-food.png'),
        text: "Fast Foods",
        category: 'fast-food'
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: "Soft Drinks",
        category: 'drinks'
    },
    {
        image: require('../../assets/images/pizza.png'),
        text: "Pizza",
        category: 'pizza'
    },
    
    {
        image: require('../../assets/images/coffee.png'),
        text: "Tea & Coffee",
        category: 'coffee'
    },
    {
        image: require('../../assets/images/bread.png'),
        text: "Bakery Item",
        category: 'bakery'
    },


]

export default Category;
