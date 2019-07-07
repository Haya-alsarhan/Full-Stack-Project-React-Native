import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableHighlight
} from 'react-native';
import colors from '../styles/colors/index';
import RoundedButtons from '../components/buttons/RoundedButtons';
import {transparentHeaderStyle} from './styles/navigation';
import NavBarButton from '../components/buttons/NavBarButton';


export default class LoggedOut extends Component{

static navigationOptions = ({ navigation}) => ({
headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Log In"/>,
headerStyle:transparentHeaderStyle,
headerTintColor: colors.white,

});


onCreateAccountPress (){

  alert('Facebook button press');


}

onMoreOptionPress(){

  alert('More options button');


}


  render() {
    return(
  <View style={styles.wrapper}>
  <View style={styles.welcomeWrapper}>

<ImageBackground source={require('../img/logo-.png')} style={{width: '100%', height: '100%' ,marginTop:50,
marginBottom:50}}>

<RoundedButtons
text=" Sign up"
background={colors.yellow}
marginTop={250}
borderColor={colors.white}
handleOnPress={this.onCreateAccountPress}
/>

<RoundedButtons
text=" Login"
background={colors.white}
marginTop={40}
borderColor={colors.black}
/>
<TouchableHighlight style={styles.moreOptionsButton} onPress={this.onMoreOptionPress}>

<Text style={styles.moreOptionsButtonText}> More options</Text>
</TouchableHighlight>
<View style={styles.termsAndConditions}>
<Text style={styles.termsText}>By tapping continue,Create Account or More options</Text>
<Text style={styles.termsText}> i agree to AskDeveloper </Text>
<TouchableHighlight style={styles.linkButton} >
<Text style={styles.termsText}> Terms of Services</Text>
</TouchableHighlight>

</View>

</ImageBackground>

</View>
 </View>

    ) ;
  }
}

const styles=StyleSheet.create({

wrapper:{
flex:1,
display:'flex',
},

welcomeWrapper:{
  flex:1,
  display:'flex',
  marginTop:30,
  padding:20,


},


moreOptionsButton:{

  marginTop:10,
},

moreOptionsButtonText:{

color: colors.black,
fontSize:16,

},

termsText:{

color:colors.black,
fontSize:13,
fontWeight:'600',
},

termsAndConditions:{
flexWrap: 'wrap',
alignItems:'flex-start',
flexDirection:'row',
marginTop:10,
},

linkButton:{
borderBottomWidth:1,
borderBottomColor: colors.black,

},
 logo: {

marginTop:50,
marginBottom:50,

 }
});
