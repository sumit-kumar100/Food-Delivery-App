import { SafeAreaView, View, ScrollView } from 'react-native';
import { React, useState, useEffect } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Axios } from '../constants';
import { Divider } from 'react-native-elements';
import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';
import Category from '../components/home/Category';
import Restaurant from '../components/home/Restaurant';
import Footer from '../components/home/Footer';
import axios from 'react-native-axios';
import * as Location from 'expo-location';
import { useSelector, useDispatch } from 'react-redux';
import { updateHomeRestaurant } from '../redux/reducers/browseReducer';


const Home = ({ navigation }) => {

    // dispatch for State Update
    const dispatch = useDispatch()

    // setHomeRestaurant OnPress on HomeTab
    const HomeRestaurant = useSelector(state => state.Browse.HomeRestaurant);
    const HomeCounter = useSelector(state => state.Browse.HomeCounter)

    // Default Restaurants.
    const [NearByRestaurant, setNearByRestaurant] = useState(Array.from({ length: 10 }));

    // Set to true when data fetched from API.
    const [isDataFetched, setDataFetched] = useState(false);

    // Current Active Tab
    const [activeTab, setActiveTab] = useState("Delivery")


    // This will shuffle restaurant 
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // getRestaurant Detail By Latitude and Longitude
    const getRestaurantByGeo = (latitude, longitude) => {
        // Currently Not Using latitude and longitude for restaurant search 
        // Problem in Zomato ZPI
        Axios.get(`/api/v2.1/search?q=restaurant`)
            .then((restaurantRes) => {
                setNearByRestaurant(restaurantRes.data.restaurants);
                setDataFetched(true);
                dispatch(updateHomeRestaurant({ HomeRestaurant: restaurantRes.data.restaurants }));
            })
            .catch(ResErr => console.log(ResErr));
    }


    // getRestaurant Detail By GeoLocation.com
    const getRestaurantByAlternateGeo = () => {
        axios.get('https://geolocation-db.com/json/')
            .then((response) => {
                getRestaurantByGeo(response.data.latitude, response.data.longitude);
            })
            .catch((error) => {
                Axios.get(`/api/v2.1/search?q=restaurant`)
                    .then((res) => {
                        setNearByRestaurant(res.data.restaurants);
                        setDataFetched(true);
                    })
                    .catch(error => console.log(error));
            })
    }


    useEffect(() => {
        if (HomeCounter !== 0) {
            setNearByRestaurant(shuffle(HomeRestaurant.map((x) => x)))
        }
        else {
            (async () => {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    getRestaurantByAlternateGeo()
                }
                else {
                    let LocationResponse = await Location.getCurrentPositionAsync(
                        {
                            enableHighAccuracy: true,
                            maximumAge: 1000,
                            timeout: 1000
                        }
                    )
                    getRestaurantByGeo(LocationResponse.coords.latitude, LocationResponse.coords.longitude)
                }
            })()
        }
    }, [HomeCounter])

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={styles.HeaderStyle}>
                <Header activetab={activeTab} setActivetab={setActiveTab} restaurant={NearByRestaurant} setRestaurant={setNearByRestaurant} />
                <SearchBar navigation={navigation} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ zIndex: -1 }}>
                <Category
                    setRestaurant={setNearByRestaurant}
                    isDataFetched={setDataFetched}
                />
                <Restaurant
                    restaurant={NearByRestaurant}
                    isDataFetched={isDataFetched}
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1} />
            <Footer navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    AndroidSafeArea: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
    HeaderStyle: {
        padding: 15,
        backgroundColor: '#ffffff'
    }
});

export default Home;