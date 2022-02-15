import { React } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateHomeCounter } from '../../redux/reducers/browseReducer';


const Header = ({ activetab, setActivetab }) => {

    return (
        <View style={styles.HeaderStyle}>
            <HeaderButton
                text="Delivery"
                activeTab={activetab}
                setActiveTab={setActivetab}
            />
            <HeaderButton
                text="Pickup"
                activeTab={activetab}
                setActiveTab={setActivetab}
            />
        </View>
    )
}

const HeaderButton = (props) => {

    const BtnStyle = StyleSheet.create({
        HeaderButtonStyle: {
            backgroundColor: props.activeTab === props.text ? "#FF4500" : "#FFFFFF",
            paddingHorizontal: 18,
            paddingVertical: 7,
            borderRadius: 50,
        },
        HeaderButtonTextStyle: {
            color: props.activeTab === props.text ? "#FFFFFF" : "#FF4500",
            fontSize: 15,
            fontWeight: "bold"
        }
    })

    // dispatch for State Update
    const dispatch = useDispatch()

    return (
        <TouchableOpacity style={BtnStyle.HeaderButtonStyle} onPress={() => {
            props.setActiveTab(props.text)
            dispatch(updateHomeCounter())
        }}>
            <Text style={BtnStyle.HeaderButtonTextStyle}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    HeaderStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default Header;