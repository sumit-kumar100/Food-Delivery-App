import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native';
import Footer from '../components/home/Footer';
import LottieView from 'lottie-react-native';
import React from 'react';


const Account = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.AccountContainer}>
                <Text style={styles.AccountContainerText}>
                    Made By Sumit Singh
                </Text>
                <LottieView
                    size={50}
                    style={styles.Animationstyle}
                    source={
                        require('../assets/animations/foodapp.json')
                    }
                    autoPlay
                    speed={0.5}
                    loop={true}
                />
            </View>
            <Footer navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Platform.OS === 'android' ? 0 : 0
    },
    AccountContainer: {
        flex: 1,
        backgroundColor: '#eee'
    },
    AccountContainerText: {
        marginTop: 80,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        alignSelf: 'center',
        color: 'black'
    },
    Animationstyle: {
        height: 700,
        alignSelf: 'center'
    }
})

export default Account;