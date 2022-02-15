import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrderCartStatus } from '../redux/reducers/orderReducer';
import { EmptyFoodCart } from '../redux/reducers/cartReducer';
import { Divider } from 'react-native-elements';
import { Rating } from 'react-native-ratings';
import { React, useEffect } from 'react';
import Footer from '../components/home/Footer';
import LottieView from 'lottie-react-native';


const Order = ({ navigation, route }) => {

    // FoodCart Redux State
    const { Items } = useSelector(state => state.Cart.FoodCart);

    // OrderCart Redux State
    const order = useSelector(state => state.Order.OrderCart);

    // dispatch for State Update
    const dispatch = useDispatch()

    // Route query
    const routeStatus = route.params.TransactionStatus


    useEffect(() => {
        // If Transaction is Success Put FoodCart Item into Order Cart 
        if (routeStatus === 'Successful') {
            dispatch(updateOrderCartStatus({
                Item: Items
            }))
            dispatch(EmptyFoodCart());
        }
    }, [])

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            {/* Conditionally Rendering Animation in OrderTab */}
            <LottieView
                style={styles.Animationstyle}
                source={
                    routeStatus === 'OrderRoute' && order.Items.length !== 0 ? require('../assets/animations/success.json') : routeStatus === 'OrderRoute' && order.Items.length === 0 ? require('../assets/animations/failed.json') : routeStatus === 'Successful' ? require('../assets/animations/success.json') : require('../assets/animations/failed.json')
                }
                autoPlay
                speed={0.5}
                loop={false}
            />
            <>
                {/* Conditionally Rendering Text in Order Tab */}
                <Text style={styles.AnimationTextstyle}>
                    {
                        routeStatus === 'OrderRoute' && order.Items.length !== 0 ? "Your Orders" : routeStatus === 'OrderRoute' && order.Items.length === 0 ? "No Orders Yet " : routeStatus === 'Successful' ? "Your order has placed Successfully" : "Transaction has failed"
                    }
                </Text>
            </>

            <ScrollView style={styles.MenuItemContainerStyle}>
                {
                    order.Items.length !== 0 ?
                        order.Items.map((fd, index) => {
                            return (
                                <View key={index}>
                                    <View style={styles.MenuItemStyle}>
                                        <FoodInfo
                                            price={fd.FoodPrice}
                                            ratingCount={fd.RatingCount}
                                            title={fd.FoodTitle}
                                            qty={fd.FoodQuantity}
                                        />
                                        <View style={{
                                            flexDirection: 'column'
                                        }}>
                                            <FoodImage
                                                image={fd.FoodImage}
                                            />
                                        </View>
                                    </View>
                                    <Divider width={1} />
                                </View>
                            )
                        })
                        :
                        (<>
                            {
                                Items.length !== 0 && routeStatus === 'Successful' ?
                                    Items.map((fd, index) => {
                                        return (
                                            <View key={index}>
                                                <View style={styles.MenuItemStyle}>
                                                    <FoodInfo
                                                        price={fd.FoodPrice}
                                                        ratingCount={fd.RatingCount}
                                                        title={fd.FoodTitle}
                                                        qty={fd.FoodQuantity}
                                                    />
                                                    <View style={{
                                                        flexDirection: 'column'
                                                    }}>
                                                        <FoodImage
                                                            image={fd.FoodImage}
                                                        />
                                                    </View>
                                                </View>
                                                <Divider width={1} />
                                            </View>
                                        )
                                    })
                                    :
                                    (<></>)
                            }
                        </>)
                }
            </ScrollView>
            <LottieView
                style={{ height: 100, alignSelf: 'center', marginBottom: 20 }}
                source={require('../assets/animations/cooking.json')}
                autoPlay
                speed={1}
                loop={true}
            />
            <Footer navigation={navigation} />
        </SafeAreaView>
    )
}

const FoodInfo = (props) => {
    return (
        <View style={styles.FoodInfoContainerStyle}>
            <Text style={styles.FoodTitleStyle}>
                {props.title} ({props.qty})
            </Text>
            <Text style={{
                marginVertical: 4,
                marginHorizontal: 8
            }}>
                ₹ {props.price}
            </Text>
            <Rating
                type='star'
                showRating={false}
                ratingCount={5}
                imageSize={20}
                readonly={true}
                style={{ marginRight: 'auto' }}
                startingValue={props.ratingCount}
            />
        </View>
    )
}

const FoodImage = (props) => {
    return (
        <Image
            source={{
                uri: props.image
            }}
            style={{
                height: 100,
                width: 140,
                borderRadius: 10,
                marginBottom: 10
            }}
        />
    )
}



const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
    Animationstyle: {
        height: 120,
        alignSelf: 'center'
    },
    AnimationTextstyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 15,
        fontSize: 21,
        fontFamily: 'Roboto'
    },
    MenuItemContainerStyle: {
        paddingHorizontal: 10
    },
    MenuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 7,
        alignItems: 'center'
    },
    FoodInfoContainerStyle: {
        width: '50%',
        justifyContent: 'space-evenly'
    },
    FoodTitleStyle: {
        fontSize: 17,
        fontWeight: "600"
    }
});

export default Order;