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
  Grid,
  Col,
  Row,
} from 'native-base';
import Answer from '../controller/anwescontroller';


 
export default class Wiz3 extends React.Component {
  static navigationOptions = { header: null }

  
  constructor(props){
    super(props);

    this.state = {
      value: '',
      question: 'papa_nicolau'
    }

    this.save = this.save.bind(this);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          
    

<View style={styles.output}>
      <Text>
          Você já fez o exame de papanicolau?{"\n"}
      </Text>

<Text style={{color: 'blue'}}
       onPress={() => this.props.navigation.navigate('Imppapa')}>
  Saiba mais.
</Text>



</View>

        <Image
          style={{ height: 200, width: 150, marginTop: -20,}}
          source={require('../../assets/chat.png')}
          resizeMode="contain"
        />


        <Grid>
          <Col>  
              <Button 
              success
              onPress={() => this.save('S')}
              style={styles.buttonLogin}>
              <Text>Sim</Text>
              </Button>
          </Col>

          <Col>
              <Button
                danger
                onPress={() => this.save('N')}
                style={styles.buttonLogin}>
                <Text>Não</Text>
              </Button>
          </Col>
        </Grid>
  
      
      

      </SafeAreaView>
    );
  }

    save = (value) => {

     var self  =  this;
     var controller = new Answer();
     
     controller.create(value, this.state.question,
     function(dados){

      if(value == "S"){
       self.props.navigation.navigate('Wiz5')
      }else{

        self.props.navigation.navigate('Wiz7')
      }

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
