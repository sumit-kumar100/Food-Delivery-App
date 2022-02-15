import { View, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { WebView } from 'react-native-webview';
import { React, useState } from 'react';
import LottieView from 'lottie-react-native';
import OrderItem from './OrderItem';
import axios from 'react-native-axios';


const ViewCart = (props) => {
    // navigation 
    const navigation = props.navigation

    // RestaurantDetail and Item from react redux
    const { RestaurantDetail, Items } = useSelector(state => state.Cart.FoodCart);

    // Will Calcuate the total of cart from react-redux foodcart
    const total = Items.reduce((prev, curr) => prev + curr.FoodPrice * curr.FoodQuantity, 0)

    // ViewCart modal state
    const [modalVisible, setModalVisible] = useState(false)

    // Modal initial Loading
    const [isLoading, setIsLoading] = useState(false)

    // Payment gateway initial state
    const [showPaymentGateWay, setShowPaymentGateWay] = useState(false);

    // After Order will create we will get order ID and further pass to paytm to server
    const [FoodOrderID, setFoodOrderId] = useState('');

    // createOrder
    const createOrder = () => {
        setIsLoading(true)
        const FoodData = {
            RestaurantDetail: RestaurantDetail,
            FoodItems: Items,
            TotalAmount: total
        }
        axios.get(`http://anjali1196.pythonanywhere.com/paytm/create-order/?FoodData=${JSON.stringify(FoodData)}`)
            .then((res) => {
                setFoodOrderId(res.data.OrderID)
                setIsLoading(false)
                setShowPaymentGateWay(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    const checkoutModalContent = () => {
        return (
            <View style={styles.modalContainer}>
                {
                    isLoading ?
                        <>
                            <LottieView
                                style={{ height: 150, alignSelf: 'center', marginBottom: 100 }}
                                source={require('../../assets/animations/scanner.json')}
                                autoPlay
                                speed={0.5}
                                loop={true}
                            />
                        </>
                        :
                        <>
                            {
                                !showPaymentGateWay ?
                                    <>
                                        <View style={styles.modalCheckOutContainer}>
                                            <Text style={styles.modalRestaurantTitle}>{RestaurantDetail.Res_Name}</Text>
                                            {
                                                Items.map((item, index) => {
                                                    return (
                                                        <OrderItem key={index} item={item} />
                                                    )
                                                })
                                            }
                                            <View style={styles.modalSubTotalContainer}>
                                                <Text style={styles.modalSubTotalText}>SubTotal</Text>
                                                <Text>₹ {total}</Text>
                                            </View>
                                            <View style={styles.modalCheckoutButtonContainer}>
                                                <TouchableOpacity style={styles.modalCheckoutButton} onPress={() => createOrder()}>
                                                    <Text style={{ color: 'white', fontSize: 20 }}>Checkout</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </>
                                    :
                                    <WebView
                                        source={{ uri: 'http://anjali1196.pythonanywhere.com/paytm/ReactNativeCustomPayment/' }}
                                        originWhitelist={['*']}
                                        injectedJavaScript={`document.getElementById('OrderID').value = "${FoodOrderID}"; document.getElementById('PaytmForm').submit()`}
                                        onNavigationStateChange={data => {
                                            if (data.title === 'Transaction Successful') {
                                                setShowPaymentGateWay(false)
                                                setModalVisible(false)
                                                navigation.navigate('Order', { TransactionStatus: 'Successful' })
                                            }
                                            else if (data.title === 'Transaction Failed') {
                                                setShowPaymentGateWay(false)
                                                setModalVisible(false)
                                                navigation.navigate('Order', { TransactionStatus: 'Failed' })
                                            }
                                            else {
                                                null
                                            }
                                        }}
                                    />
                            }
                        </>
                }
            </View>
        )
    }

    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {
                total !== 0 && RestaurantDetail.Res_id === props.restaurant.id ?
                    <View
                        style={styles.ViewCartContainer}>
                        <View style={styles.ViewCartButtonContainer}>
                            <TouchableOpacity
                                style={styles.ViewCartButton}
                                onPress={() => setModalVisible(true)}
                            >
                                <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                                    View Cart
                                </Text>
                                <Text style={{ color: "white", fontSize: 20 }}>₹ {total}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    (<></>)
            }
        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalCheckOutContainer: {
        backgroundColor: 'white',
        padding: 15,
        height: 500,
        borderWidth: 1
    },
    modalRestaurantTitle: {
        textAlign: 'center',
        color: 'black',
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10
    },
    modalSubTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    modalSubTotalText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    modalCheckoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    modalCheckoutButton: {
        backgroundColor: '#FF4500',
        marginTop: 20,
        padding: 13,
        borderRadius: 30,
        width: 300,
        alignItems: 'center'
    },
    ViewCartContainer: {
        position: "absolute",
        bottom: 20,
        zIndex: 999,
        justifyContent: "center",
        flexDirection: "row"
    },
    ViewCartButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    },
    ViewCartButton: {
        backgroundColor: "#FF4500",
        flexDirection: "row",
        justifyContent: "center",
        padding: 15,
        borderRadius: 30,
        width: 300
    }
})


export default ViewCart;