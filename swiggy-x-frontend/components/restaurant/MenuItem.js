import { Placeholder, PlaceholderMedia, PlaceholderLine, ShineOverlay } from "rn-placeholder";
import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { updateFoodCartStatus } from '../../redux/reducers/cartReducer';
import { handleQuantity } from '../../redux/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from 'react-native-elements';
import { MenuList } from '../../constants';
import { Rating } from 'react-native-ratings';
import { React, useState, useEffect } from 'react';
import NumericInput from 'react-native-numeric-input';


const MenuItem = (props) => {

    // FoodCart State from Redux
    const cart = useSelector(state => state.Cart.FoodCart);

    // State for shuffling MenuItems
    const [isShuffled, setIsShuffled] = useState(false);

    // FoodMenuList 
    const [MenuItemList, setMenuItemList] = useState(Array.from({ length: 10 }));

    // dispatch for State Update
    const dispatch = useDispatch();

    // This will shuffle MenuFoodList
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

    useEffect(() => {
        // Shuffle MenuFoodList and gave 20 Foods only
        setMenuItemList(shuffle(MenuList).slice(0, 20))
        setIsShuffled(true)
    }, [])


    // Will Add to FoodItem to React-Redux FoodCart
    const AddToCart = (fd) => {
        dispatch(updateFoodCartStatus({
            RestaurantDetail: {
                Res_id: props.restaurant.id,
                Res_Name: props.restaurant.name
            },
            Item: {
                FoodId: fd.id,
                FoodImage: fd.item_image_url,
                FoodTitle: fd.name,
                FoodPrice: fd.min_price,
                FoodQuantity: 1,
                RatingCount: fd.rating.value
            }
        }));
    }

    // Conditionally rendering button check if food item already in react-redux foodcart
    const renderButton = (fd) => {
        let IsInCart = false
        let Quantity = 0

        if (cart.RestaurantDetail.Res_id === props.restaurant.id) {
            for (let i = 0; i < cart.Items.length; i++) {
                if (cart.Items[i].FoodId === fd.id) {
                    IsInCart = true
                    Quantity = cart.Items[i].FoodQuantity
                    break
                }
            }
            return (
                <>
                    {
                        IsInCart ?
                            <NumericInput
                                minValue={0}
                                value={Quantity}
                                onChange={value => {
                                    dispatch(handleQuantity({
                                        FoodId: fd.id,
                                        value: value > Quantity ? Quantity + 1 : Quantity - 1
                                    }));
                                }}
                                totalWidth={130}
                                totalHeight={37}
                                iconSize={25}
                                step={1}
                                valueType='real'
                                rounded={false}
                                textColor='#000000'
                                iconStyle={{ color: 'white' }}
                                borderColor='#FF4500'
                                rightButtonBackgroundColor='#FF4500'
                                leftButtonBackgroundColor='#FF4500' />
                            :
                            <Button
                                onPress={() => AddToCart(fd)}
                                title="ADD  +"
                                color="#FF4500"
                                accessibilityLabel="ADD +"
                            />
                    }
                </>
            )
        }
        return (
            <Button
                onPress={() => AddToCart(fd)}
                title="ADD  +"
                color="#FF4500"
                accessibilityLabel="ADD +"
            />
        )

    }

    return (
        <ScrollView style={styles.MenuItemContainerStyle}>
            {
                MenuItemList.map((fd, index) => {
                    return (
                        <View key={index}>
                            {
                                isShuffled ?
                                    <>
                                        <View style={styles.MenuItemStyle}>
                                            <FoodInfo
                                                price={fd.min_price}
                                                ratingCount={fd.rating.value}
                                                title={fd.name}
                                            />
                                            <View style={{
                                                flexDirection: 'column'
                                            }}>
                                                <FoodImage
                                                    image={fd.item_image_url}
                                                />
                                                {renderButton(fd)}
                                            </View>
                                        </View>
                                        <Divider width={1} />
                                    </>
                                    :
                                    <>
                                        <Placeholder
                                            Animation={ShineOverlay}
                                            Right={props => (
                                                <PlaceholderMedia
                                                    style={[
                                                        props.style,
                                                        {
                                                            height: 80,
                                                            width: 130,
                                                            borderRadius: 10,
                                                            marginTop: 10
                                                        }
                                                    ]}
                                                />
                                            )}
                                        >
                                            <PlaceholderLine width={80} style={{ marginTop: 20 }} />
                                            <PlaceholderLine width={40} />
                                        </Placeholder>
                                    </>
                            }
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}


const FoodInfo = (props) => {
    return (
        <View style={styles.FoodInfoContainerStyle}>
            <Text style={styles.FoodTitleStyle}>
                {props.title}
            </Text>
            <Text style={{
                marginVertical: 8,
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
                height: 80,
                width: 130,
                backgroundColor: 'rgb(239, 239, 239)',
                borderRadius: 10,
                marginBottom: 10
            }}
        />
    )
}

const styles = StyleSheet.create({
    MenuItemContainerStyle: {
        paddingHorizontal: 10,
        backgroundColor: '#ffffff'
    },
    MenuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center',
    },
    FoodInfoContainerStyle: {
        width: '50%',
        justifyContent: 'space-evenly'
    },
    FoodTitleStyle: {
        fontSize: 17,
        fontWeight: "600"
    },
    IncDecBtn: {
        flexDirection: 'row',
        backgroundColor: '#FF4500',
        justifyContent: 'space-between'
    }
})

export default MenuItem;