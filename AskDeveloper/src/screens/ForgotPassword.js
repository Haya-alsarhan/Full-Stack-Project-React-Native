import React, {Component} from 'react';
import {WebView, Text, View, TouchableHighlight, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../styles/colors';
import NextArrowButton from '../components/buttons/NextArrowButton';


export default class ForgotPassword extends Component{

handleNextButton(){

  alert('next');
}


  render() {
    return (
<KeyboardAvoidingView style={styles.wrappe}

behavior="padding"

>
<View  style={styles.scrollViewwrapper}>
<ScrollView style={styles.ScrollView}>
<Text style={styles.loginHeader}>hi</Text>
<InputFiled
labelText="Email "
labelTextSize={14}
labelColor={colors.black}
textColor={colors.black}
borderBottomColor={colors.black}
inputType="email"
customStyle={{marginBottom:30}}
/>
<InputFiled
labelText="Password"
labelTextSize={14}
labelColor={colors.black}
textColor={colors.black}
borderBottomColor={colors.black}
inputType="password"
customStyle={{marginBottom:30}}

/>

</ScrollView>
<View style={styles.nextButton}>

<NextArrowButton
handleNextButton={this.handleNextButton}

/>
</View>

</View>
</KeyboardAvoidingView>
);
  }
}




const styles = StyleSheet.create({
wrapper:{
display: 'flex',
flex: 1,
},
scrollViewwrapper:{
marginTop:70,
flex:1,
},

loginHeader:{

fontSize: 28,
color: colors.black,
fontWeight: '300',
marginBottom: 40,
},

ScrollView:{
paddingLeft: 20,
paddingRight: 20,
paddingTop: 20,
flex: 1,
},

nextButton: {
alignItems:'flex-end',
right:20,
bottom:10,
},

});
