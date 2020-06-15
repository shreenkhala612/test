import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';

var bg=require('./background.jpg');
var im2=require('./src2.jpg');
export default class screen2 extends Component
{
    show=()=>
    {
        this.props.navigation.navigate('S3');
    }
    render()
    {
        return(
            <ImageBackground source={bg} style={{height:'100%',width:'100%'}}>
                <View>
                   <Image source={im2} style={{height:'35%', width:'85%',marginTop:150,marginLeft:30}}></Image>
                    <Text style={{ textAlign:"center",textAlign:"center",fontWeight:"bold",color:"#2c397e" ,marginTop:35,fontSize:17,marginLeft:30,marginRight:30  }}>Studies have shown that elephants help protect forest health in central Africa by distributing the seeds of trees. Because they roam over such great distances, elephants play a key role in spreading tree seedlings far and wide. </Text>
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