import React,{Component} from 'react';
import {View,Text,Button, ImageBackground, StyleSheet, TouchableOpacity,Image} from 'react-native';
var bg=require('./background.jpg');
var im=require('./scr3.jpg');
export default class screen3 extends Component
{
    show=()=>
    {
        this.props.navigation.navigate('S4');
    }
    render()
    {
        return(
            <ImageBackground source={bg} style={{height:'100%',width:'100%'}}>
                <View style={{justifyContent:"center"}}>
                <Image source={im} style={{height:'35%', width:'85%',marginTop:200,marginLeft:30}}></Image>
                    <Text style={{ textAlign:"center",textAlign:"center",fontWeight:"bold",color:"#2c397e" ,marginTop:35,fontSize:20}}>Elephants think Humans are cute.</Text>
                    <TouchableOpacity
                     style={styles.SubmitButtonStyle}
                     activeOpacity = { .5 }
                     onPress={ this.show }>
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