import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styles from '../Styles/BowViewStyles';


function Input({...props}:TextInputProps) {
 return (
        <TextInput
        style={styles.inputStyle}
        {...props}
        />


 );
}
export default Input;
