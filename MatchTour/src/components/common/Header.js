import React from 'react';
import { View } from 'react-native';

const Header = (props) => {
    return (
        <View style={style.containerStyle}>
            {props.children}
        </View>
    );
}
const style = {
    containerStyle: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    }
}
export { Header };