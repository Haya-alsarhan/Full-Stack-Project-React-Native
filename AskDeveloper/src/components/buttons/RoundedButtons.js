import React, {Component} from 'react';
import {WebView, Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';


export default class RoundedButtons extends Component {

render(){
  const{text ,textColor,background,marginTop,borderColor,handleOnPress}=this.props;
const backgroundColor = background || 'transparent';
const color = textColor || colors.black;
return (
<TouchableHighlight style={[{backgroundColor},{marginTop},{borderColor},styles.wrapper]}
onPress={handleOnPress}


>

<Text style={[{color}, styles.buttonText]}> {text}</Text>

</TouchableHighlight>

);
}
}

RoundedButtons.PropTypes = {
textColor: PropTypes.string.isRequired,
color:PropTypes.string,
background:PropTypes.string,
marginTop:PropTypes.string,
borderColor:PropTypes.string,
icon:PropTypes.object,
handleOnPress:PropTypes.func.isRequired,
};

const styles= StyleSheet.create ({

wrapper:{
display:'flex',
padding: 15,
borderRadius:40,
borderWidth:1,
marginBottom: 15,
alignItems:'center',
},

buttonTextWrapper:{
flexDirection:'row',
justifyContent:'flex-end',
},


buttonText:{
 fontSize: 17,
 width:'100%',
 textAlign:'center',
},



});
