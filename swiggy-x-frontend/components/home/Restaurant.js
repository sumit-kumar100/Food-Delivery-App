import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { Placeholder, PlaceholderMedia, ShineOverlay, PlaceholderLine } from "rn-placeholder";
import { React } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Restaurant = ({ restaurant, isDataFetched, navigation, ...props }) => {

    // handleRestaurant Click
    const handleRestaurantNavigate = (restaurant) => {
        const detailObject = restaurant.restaurant
        const detail = {
            id: detailObject.id,
            featured_image: detailObject.featured_image,
            name: detailObject.name,
            user_rating: detailObject.user_rating,
            cuisines: detailObject.cuisines,
            location: detailObject.location
        }
        navigation.navigate('RestaurantDetail', detail)
    }

    return (
        <>
            {

                restaurant.map((restaurant, index) => {
                    return (
                        <Pressable key={index}>
                            {
                                isDataFetched ?
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => handleRestaurantNavigate(restaurant)}
                                    >
                                        <View style={styles.RestaurantContainerStyle} >
                                            <RestaurantImage
                                                image={restaurant.restaurant.featured_image}
                                                isDataFetched={isDataFetched}
                                            />
                                            <RestaurantImageInfo
                                                name={restaurant.restaurant.name}
                                                cuisines={restaurant.restaurant.cuisines}
                                                rating={restaurant.restaurant.user_rating.aggregate_rating}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    <View style={styles.RestaurantContainerStyle}>
                                        <Placeholder
                                            Animation={ShineOverlay}
                                            Left={props => (
                                                <PlaceholderMedia
                                                    style={[
                                                        props.style,
                                                        styles.RestaurantImageStyle
                                                    ]}
                                                />
                                            )}
                                        />
                                        <Placeholder
                                            Animation={ShineOverlay}
                                            style={{ width: '75%', marginTop: 10 }}
                                        >
                                            <PlaceholderLine />
                                        </Placeholder>
                                        <Placeholder
                                            Animation={ShineOverlay}
                                        >
                                            <PlaceholderLine />
                                        </Placeholder>
                                    </View>
                            }
                        </Pressable>
                    )
                })
            }
        </>
    )
}

const RestaurantImage = (props) => {
    return (
        <View>
            <Image
                source={{
                    uri: props.image
                }}
                style={styles.RestaurantImageStyle}
            />
            <TouchableOpacity style={styles.RestaurantImageTimeIconStyle}>
                <Text style={{ color: '#ffffff' }}>
                    54 min | 6 km
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.RestaurantImageIconStyle}>
                <MaterialCommunityIcons
                    name='heart-outline'
                    size={25}
                    color='#ffffff'
                />
            </TouchableOpacity>
        </View>
    )
}

const RestaurantImageInfo = (props) => {
    return (
        <View style={styles.RestaurantInfoContainerStyle}>
            <View style={{ width: '85%' }}>
                <Text style={{
                    fontSize: 16.5,
                    fontWeight: 'bold'
                }}>
                    {props.name}
                </Text>
                <Text style={{
                    fontSize: 13.5,
                    color: '#696969',
                }}>
                    {props.cuisines}
                </Text>
            </View>

            <View
                style={styles.RestaurantRatingStyle}>
                <Text style={{
                    fontWeight: '900',
                    color: '#ffffff',
                    marginEnd: 5
                }}>
                    {props.rating}
                </Text>
                <AntDesign name='star' size={12} color={'#ffffff'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    RestaurantContainerStyle: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        padding: 15
    },
    RestaurantImageStyle: {
        width: '100%',
        height: 180
    },
    RestaurantImageTimeIconStyle: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 7,
        backgroundColor: '#FF4500'
    },
    RestaurantImageIconStyle: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    RestaurantInfoContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    RestaurantRatingStyle: {
        flexDirection: 'row',
        backgroundColor: "#008000",
        height: 30,
        width: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    }
})

export default Restaurant;