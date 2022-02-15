import { Placeholder, PlaceholderMedia, ShineOverlay } from "rn-placeholder";
import { View, Text, Image, StyleSheet } from 'react-native';
import { React } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


const About = (props) => {

    return (
        <View style={{ backgroundColor: '#ffffff' }}>
            <RestaurantImage image={props.image} />
            <View style={styles.RestaurantDetailContainerStyle}>
                <View
                    style={{
                        width: "75%",
                    }}>
                    <RestaurantTitle title={props.title} />
                </View>
                <RestaurantRating
                    rating={props.rating.aggregate_rating}
                    reviewCount={props.rating.votes}
                />
            </View>
            <RestaurantDescription
                cuisines={props.cuisines}
                location={props.location.locality + " , " + props.location.city}
            />
        </View>
    )
}


const RestaurantImage = (props) => {

    const onLoading = () => {
        return (
            <Placeholder
                Animation={ShineOverlay}
                Left={props => (
                    <PlaceholderMedia
                        style={[
                            props.style,
                            styles.ImageStyle
                        ]}
                    />
                )}
            />
        )
    }

    return (
        <>
            <Image
                source={{
                    uri: props.image
                }
                }
                style={styles.ImageStyle}
                onLoading={onLoading}
            />
        </>
    )
}

const RestaurantTitle = (props) => {
    return (
        <Text style={styles.TitleStyle}>
            {props.title}
        </Text>
    )
}

const RestaurantDescription = (props) => {
    return (
        <View style={styles.DescriptionStyle}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                {props.cuisines}
            </Text>
            <Text style={{ fontSize: 15 }}>
                {props.location}
            </Text>
        </View>
    )
}

const RestaurantRating = (props) => {
    return (
        <>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <View
                    style={styles.RestaurantRatingStyle}>
                    <Text style={
                        {
                            fontWeight: '900',
                            color: '#ffffff',
                            marginEnd: 5
                        }
                    }>
                        {props.rating}
                    </Text>
                    <AntDesign name='star' size={12} color={'#ffffff'} />
                </View>
                <Text style={{ fontWeight: 'normal', marginTop: 2 }}>
                    {props.reviewCount} Reviews
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    ImageStyle: {
        width: '100%',
        height: 150
    },
    RestaurantDetailContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    TitleStyle: {
        fontSize: 20,
        fontWeight: "600"
    },
    DescriptionStyle: {
        paddingHorizontal: 15,
        marginBottom: 5,
    },
    RestaurantRatingStyle: {
        flexDirection: 'row',
        backgroundColor: "#008000",
        height: 22,
        marginTop: 5,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    }
})

export default About;