import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { React } from 'react';
import { updateBrowseStatus } from '../../redux/reducers/browseReducer';
import { updateHomeCounter } from '../../redux/reducers/browseReducer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Footer = (props) => {

    // dispatch for State Update
    const dispatch = useDispatch()


    return (
        <View style={styles.FooterContainerStyle}>
            <TouchableOpacity onPress={() => {
                dispatch(updateHomeCounter())
                props.navigation.navigate('Home')
            }}>
                <Icon
                    icon="home"
                    text="Home"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                dispatch(updateBrowseStatus())
                props.navigation.navigate('Home')
            }}>
                <Icon
                    icon="search"
                    text="Browse"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Order', { TransactionStatus: "OrderRoute" })}>
                <Icon
                    icon="receipt"
                    text="Orders"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
                <Icon
                    icon="user"
                    text="Account"
                />
            </TouchableOpacity>
        </View>
    )
}

const Icon = (props) => {

    return (
        <View>
            <FontAwesome5
                name={props.icon}
                size={25}
                style={styles.FooterIconStyle}
            />
            <Text>
                {props.text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    FooterContainerStyle: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    },
    FooterIconStyle: {
        marginBottom: 3,
        alignSelf: 'center',
        color: '#000000'
    }
})

export default Footer;