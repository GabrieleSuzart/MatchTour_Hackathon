import React from 'react';
import { Image } from 'react-native';

const Avatar = (props) => {
    return (
        <Image source={props.image} style={style.imageStyle} />
    );
}
const style = {
    imageStyle: {
        width: 36,
        height: 36,
        borderRadius: 18
    }
}
export { Avatar };