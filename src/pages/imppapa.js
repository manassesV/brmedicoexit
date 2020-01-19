import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image, ScrollView } from 'react-native';
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

 
export default class Wiz0 extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
          
    

<View style={styles.output}>
  <ScrollView>
      <Text>
      O exame preventivo do câncer do colo do útero (Papanicolau) é a principal 
      estratégia para detectar lesões precursoras e fazer o diagnóstico precoce 
      da doença. O exame pode ser feito em postos ou unidades de saúde da rede 
      pública que tenham profissionais capacitados. Sua realização periódica 
      permite reduzir a ocorrência e a mortalidade pela doença.
      O exame preventivo é indolor, simples e rápido. Pode, no máximo, causar um pequeno desconforto. 
      {"\n"} 
      {"\n"} 
      Para garantir um resultado correto, a mulher não deve ter relações sexuais (mesmo com camisinha) 
      no dia anterior ao exame; evitar também o uso de duchas, medicamentos vaginais e anticoncepcionais 
      locais nas 48 horas anteriores à realização do exame. É importante também que não esteja menstruada, 
      porque a presença de sangue pode alterar o resultado. Mulheres grávidas também podem se submeter ao exame, 
      sem prejuízo para sua saúde ou a do bebê.
            
      
      
      
      tipos 6, 11, 16 e 18 do HPV.{"\n"} 
      Os dois primeiros causam verrugas genitais 
      e os dois últimos são responsáveis por cerca de 70% dos casos de câncer do colo do útero.
      </Text>
  </ScrollView>

</View>

<Image
          style={{ height: 200, width: 150, marginTop: -20,}}
          source={require('../../assets/chat.png')}
          resizeMode="contain"
        />
        

      </SafeAreaView>
    );
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
  borderRadius:0,
  marginBottom:2,
  width:"100%",
  height:"40%",
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
