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
} from 'native-base';
import Answer from '../controller/anwescontroller';

 
export default class Wiz1 extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      nome: '',
      question: 'Nome'
    }


    this.save = this.save.bind(this);
  }
  static navigationOptions = { header: null }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          
    

<View style={styles.output}>
      <Text>
          Primeiro preciso saber o seu nome você pode me dizer?
      </Text>


</View>

        <Image
          style={{ height: 200, width: 150, marginTop: -20,}}
          source={require('../../assets/chat.png')}
          resizeMode="contain"
        />

        <Item>
          <Input
            autoCapitalize="none"
            placeholder="Nome Completo"
            onChangeText={nome => this.setState({ nome })}
            value={this.state.nome}
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
     var self  =  this;
     var controller = new Answer();
     
     controller.create(this.state.nome, this.state.question,
     function(dados){
       self.props.navigation.navigate('Wiz2')

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
