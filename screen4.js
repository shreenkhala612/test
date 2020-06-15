import React,{Component} from 'react';
import {View,Text,ImageBackground,Image,StyleSheet} from 'react-native';

var bg=require('./background.jpg');
var logo= require('./circle-cropped.png');
export default class screen4 extends Component
{
    render()
    {
        return(
            <ImageBackground source={bg} style={{height:'100%',width:'100%'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Image source={logo} style={{height:'10%', width:'20%'}}></Image>
              <Text style={{textAlign:"center",fontWeight:"bold",color:"#2c397e"}}>They say an Elephant never forgets.. </Text>
            <View style={styles.bottom}>
                <Text style={{color:"#2c397e"}}>Do to others what you want others to do to You </Text>
            </View>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    bottom:{
        justifyContent: 'flex-end',
        marginBottom:40
    }
})