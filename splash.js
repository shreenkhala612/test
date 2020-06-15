import React,{Component} from 'react';
import {View,ImageBackground,Image} from 'react-native';

var bg=require('./background.jpg');
var logo= require('./circle-cropped.png');
export default class splash extends Component
{
    constructor(props)
    {
        super(props);
        setTimeout(()=>
        {
            navigation.navigate("S1");
        },4000);
    }
    render()
    {
        return(
            <ImageBackground source={bg} style={{height:'100%',width:'100%'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Image source={logo} style={{height:'15%', width:'29%'}}></Image>
                </View>
            </ImageBackground>
        );
    }
}