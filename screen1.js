import React,{Component} from 'react';
import {View,Text,ImageBackground,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import S2 from './screen2';
var bg=require('./background.jpg');
var im1=require('./download.jpg');

class screen1 extends Component
{
    constructor(props) {
        super(props);
        console.log("Screen 1");
      }
    show=()=>
    {
        this.props.navigation.navigate('S2');

    }
    render()
    {
        return(
            <ImageBackground source={bg} style={{height:'100%',width:'100%'}}>
                <View>
                <Image source={im1} style={{height:'35%', width:'85%',marginTop:150,marginLeft:30}}></Image>
                    <Text style={{ textAlign:"center",textAlign:"center",fontWeight:"bold",color:"#2c397e" ,marginTop:35,fontSize:17,marginLeft:30,marginRight:30  }}>Elephants are “ecosystem engineers”: They push over trees to maintain savanna ecosystems, excavate waterholes and fertilize land, which helps other animals thrive.</Text>
                    <TouchableOpacity
                     style={styles.SubmitButtonStyle}
                     activeOpacity = { .5 }
                     onPress={ this.show}>
                     <Text style={styles.TextStyle}> Continue.. </Text>
                     </TouchableOpacity>
                </View>
                </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    SubmitButtonStyle: {
        marginTop:100,
        paddingTop:12,
        paddingBottom:12,
        marginLeft:50,
        marginRight:50,
        backgroundColor:'#2c397e',
        borderRadius:20,
        marginBottom:30
      },
      TextStyle:{
          fontSize:15,
        color:'#fff',
        textAlign:'center',
    }
})

export default screen1;