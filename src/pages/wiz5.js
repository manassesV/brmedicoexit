import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  DatePicker,
} from 'native-base';
import Answer from '../controller/anwescontroller';

 
export default class Wiz2 extends React.Component {
  static navigationOptions = { header: null }

  constructor(props){
    super(props);

    this.state = {
      value: '',
      question: 'Data_ult_papan'
    }

    this.save = this.save.bind(this);
  }
  static navigationOptions = { header: null }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          
    

<View style={styles.output}>
      <Text>
        Preciso saber mais ou menos em qual data você fez seu último paranicolau?
      </Text>


</View>

        <Image
          style={{ height: 200, width: 150, marginTop: -20,}}
          source={require('../../assets/chat.png')}
          resizeMode="contain"
        />

        <Item>
        <DatePicker
           full
            defaultDate={new Date(2015, 1,1)}
            minimumDate={new Date(2000, 1, 1)}
            maximumDate={new Date(2029, 12, 31)}
            locale={"pt-Br"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={true}
            animationType={"slide"}
            androidMode={"default"}
            placeHolderText="Data do último exame"
           // textStyle={{ color: "write" }}
            placeHolderTextStyle={{ color: "#FFF" }}
            onDateChange={(date) => {this.setState({value: date})}}
            disabled={false}
            />
        </Item>
       
       
        <Button
          full
          success
          onPress={ this.save}
          style={styles.buttonLogin}>
          <Text>Proseguir</Text>
        </Button>


      </SafeAreaView>
    );
  }
  save = () => {

    dia = this.state.value.getDate();
    mes = this.state.value.getMonth()+1;
    ano = this.state.value.getFullYear();
    dataNascimento = dia+'-'+mes+'-'+ano;
    var self  =  this;
    var controller = new Answer();
    
    controller.create(dataNascimento, this.state.question,
    function(dados){
      self.props.navigation.navigate('Wiz6')

    },
    function(error){
      alert(error)
    });
 }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4',
  },
  textInput: {
    height: 40,
    color: '#FFF',
    width: '90%',
    borderColor: '#333',
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: '#FFF',
  },



  buttonLogin: {
    marginTop: 40,
  },

  output:{ 
  backgroundColor: "white",
  padding:20,
  borderRadius:100,
  marginBottom:2,
  width:"100%",
  marginTop: 20,
  position:"relative",
  alignItems: 'center',
},

output_before:{
width:300,
height:0,
position:"absolute",
bottom:-25,

},

avatar_img:{
  width:170,
  borderRadius:100,
  marginBottom:20,
}









});
