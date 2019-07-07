import React, {Component} from 'react';
import {WebView, Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';


export default class InputFiled extends Component{
 render(){

const { labelTexr, labelTextSize, labelColor, textColor, borderBottomColor,inputType, customStyle } = this.props;
const fontSize = labelTextSize || 14;
const color = labelColor || colors.black;
const inputColor = textColor || colors.black;
const borderBottom = borderBottomColor || 'transparent';
return(

<View style={[customStyle,styles.wrapper]}>

<Text style={[{color,fontSize},styles.labl]}> { labelText } </Text>
<TextInput
outoCorrect={false}
style= {[{color: inputColor, borderBottomColor: borderBottom}, styles.InputFiled]}
secureTextEntry={inputType === 'password'}
 />
</View>



);
 }}

InputFiled.propTypes = {

labelText: propTypes.string.isRequired,
labelTextSize: propTypes.number,
labelColor:propTypes.string,
textColor: propTypes.string,
borderBottomColor: propTypes.string,
inputType: propTypes.string.isRequired,
customStyle: propTypes.object,
};







const styles = StyleSheet.create(
{
wrapper:{

  display: 'flex',
},
label:{
  fontWeight: '700',
  marginBottom: 10,
},

InputFiled:{
borderBottomWidth:1,
paddingTop: 5,
paddingBottom: 5,
},


});
