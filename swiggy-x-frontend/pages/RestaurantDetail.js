import { React } from 'react';
import { ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurant/About';
import MenuItem from '../components/restaurant/MenuItem';
import ViewCart from '../components/restaurant/ViewCart';

const RestaurantDetail = ({ navigation, route }) => {

    const restaurant = route.params

    const { featured_image, name, user_rating, cuisines, location } = restaurant;

    return (
        <>
            <About
                image={featured_image}
                title={name}
                rating={user_rating}
                cuisines={cuisines}
                location={location}
            />
            <ScrollView>
                <Divider width={1} />
                <MenuItem restaurant={restaurant} />
            </ScrollView>
            <ViewCart navigation={navigation} restaurant={restaurant} />
        </>
    )
}


export default RestaurantDetail;