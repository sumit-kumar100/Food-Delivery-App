import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable, TextInput, FlatList } from 'react-native';
import { Placeholder, PlaceholderMedia, PlaceholderLine, ShineOverlay } from "rn-placeholder";
import { React, useState, useEffect, useRef } from 'react';
import { Divider } from 'react-native-elements';
import { Axios } from '../../constants';
import { useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'


const SearchBar = ({ navigation }) => {

    // isSearchFocued redux state
    const isSearchFocued = useSelector(state => state.Browse.SearchFocus);
    const Counter = useSelector(state => state.Browse.Counter)

    // Search Recommendataion
    const [ResultData, setResultData] = useState([])

    // Seach Text
    const [SearchQuery, setSearchQuery] = useState("")

    // setRestaurant
    const [restaurant, setRestaurant] = useState([]);

    // isDataFetched
    const [isDataFetched, setDataFetched] = useState(false);

    // inputFocusRef
    const inputFocus = useRef()

    // handleonChangeText
    const handleOnChangeText = (text) => {
        setSearchQuery(text)
        // && SearchQuery.length % 2 === 0
        if (SearchQuery.length !== 0) {
            setDataFetched(false)
            Axios.get(`api/v2.1/search?q=${SearchQuery}&count=8`)
                .then((res) => {
                    let startsWith = [], notStartsWith = []
                    res.data.restaurants.map((result) => {
                        result.restaurant.name.toLowerCase().startsWith(SearchQuery.toLowerCase().slice(0, 4)) ?
                            startsWith.push(
                                result.restaurant.name + "@information" +
                                result.restaurant.featured_image + "@information" +
                                result.restaurant.id
                            )
                            :
                            notStartsWith.push(
                                result.restaurant.name + "@information" +
                                result.restaurant.featured_image + "@information" +
                                result.restaurant.id
                            )
                    })
                    setResultData(startsWith.concat(notStartsWith))
                    setRestaurant(res.data.restaurants)
                    setDataFetched(true)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }


    // handleSubmitSearch
    const handleSearchRestaurant = (item) => {
        restaurant.map((res) => {
            if (res.restaurant.id === item.split('@information')[2]) {

                const detailObject = res.restaurant

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
        })
    }

    // renderItem
    const renderItem = ({ item }) => {
        return (
            <>
                {
                    isDataFetched ?
                        <Pressable onPress={() => handleSearchRestaurant(item)}>
                            <View style={styles.SuggestionStyleList}>
                                <Image
                                    source={{
                                        uri: item.split('@information')[1]
                                    }}
                                    style={{
                                        height: 50,
                                        width: 70
                                    }}
                                />
                                <Text style={{
                                    marginStart: 10,
                                    fontSize: 15,
                                    fontWeight: "bold"
                                }}>
                                    {item.split('@information')[0]}
                                </Text>
                            </View>
                        </Pressable>
                        :
                        <View style={styles.SuggestionStyleList}>
                            <Placeholder
                                Animation={ShineOverlay}
                                Left={props => (
                                    <PlaceholderMedia
                                        style={[
                                            props.style,
                                            {
                                                height: 50,
                                                width: 70
                                            }
                                        ]}
                                    />
                                )}
                                Right={props => (
                                    <PlaceholderLine width={200} style={{ marginTop: 15 }} />
                                )}
                            />
                        </View>
                }
            </>
        )
    }

    useEffect(() => {
        // First Clear Text Focus and again Do TextInput Focus
        if (Counter !== 0) {
            inputFocus.current.blur()
            inputFocus.current.focus()
        }
    }, [isSearchFocued])



    return (
        <>
            <View style={styles.SearchBarStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RenderLeftButton />
                    <TextInput
                        style={styles.InputContainerStyle}
                        onChangeText={(text) => handleOnChangeText(text)}
                        value={SearchQuery}
                        placeholder='Search Restaurant'
                        ref={inputFocus}
                    />
                </View>
                <RenderRightButton setSuggestion={setResultData} setQuery={setSearchQuery} />
            </View>
            {
                SearchQuery.length && ResultData.length ?
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={SearchQuery.length ? ResultData : []}
                        keyExtractor={item => item}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => <Divider width={1} />}
                    />
                    :
                    (<></>)
            }
        </>
    )
}

// SearchBar Left Icon
const RenderLeftButton = (props) => {
    return (
        <View style={styles.LeftButtonStyle}>
            <Feather
                name='search'
                size={25}
                color={'#FF4500'}
            />
        </View>
    )
}

// SearchBar Right Icon
const RenderRightButton = (props) => {
    const EmptySuggestion = () => {
        props.setSuggestion([])
        props.setQuery("")
    }
    return (
        <TouchableOpacity onPress={EmptySuggestion}>
            <View style={styles.RightButtonStyle}>
                <Entypo
                    name='cross'
                    size={25}
                    color={'#FF4500'}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    SearchBarStyle: {
        marginTop: 10,
        backgroundColor: '#eee',
        borderRadius: 50,
        borderWidth: 1,
        marginBottom: 4,
        borderColor: '#b9b9b9',
        alignItems: 'center',
        flexDirection: 'row', // Important 
        justifyContent: 'space-between'
    },
    LeftButtonStyle: {
        marginLeft: 15
    },
    InputContainerStyle: {
        borderRadius: 50,
        margin: 7.5
    },
    RightButtonStyle: {
        marginRight: 10,
        backgroundColor: '#ffffff',
        paddingHorizontal: 11,
        paddingVertical: 2,
        borderRadius: 50
    },
    SuggestionStyleList: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6
    },
})

export default SearchBar;