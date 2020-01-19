import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Grid, Col } from 'native-base';
import Speedometer from 'react-native-speedometer-chart';
import firebase from 'firebase'
import AnwesController from '../controller/anwescontroller';
import Funcoes from '../utils/funcoes';


export default class Main extends Component {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props);
    this.state = {
      idadeUsuario: '', // VAI ARMAZERNAR A IDADE DO USUARIO 
      difUltexamepapa: '', // VAI ARMAZENAR A DIFERENÇA O ULTIMO EXAME PARA O DIA ATUAL
      resulthpv: '', // VAI ARMAZENAR SE O USUARIO TOMOU A VACINA DO HPV 
      
    };
  }

  componentDidMount() {
    var controller = new AnwesController();
    var self = this;
    
    // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA A DATA DE NASCIMENTO DO USUARIO  
    controller.getDatas(
      function (error) {
        self.setState({
          idadeUsuario: "Você precisa fazer o exame Papanicolau"
        })
      },
      function (succes) {
        var funcoes = new Funcoes();
        var idade = funcoes.idade(succes);
        // var d = funcoes.addDate(1095, succes)
        self.setState({
          idadeUsuario: idade
        })
      },
      "Data_Nascimento");
      // FIM DO TRECHO 

      // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA A DIFERENÇA DE ANOS DO ULTIMO EXAME DE PAPA DO USUARIO 

      controller.getDatas(
        function (error) {
          self.setState({
            idadeUsuario: "Você precisa fazer o exame Papanicolau"
          })
        },
          function (succes) {
          var funcoes = new Funcoes();
          var difultexame = funcoes.idade(succes);
          self.setState({
            difUltexamepapa: difultexame
          })          
        },
        "Data_ult_papan");



      // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA SE USUARIO TOMOU A VACINA DO HPV

    controller.getDatas(
      function (error) {
    
      },
      function (succes) {
        self.setState({
          resulthpv: succes
        })  

      },
      "Vac_Hpv");

      // FIM DO TRECHO 

    function mountGauge() {


      <Speedometer
        value={50}
        totalValue={150}
        size={250}
        outerColor="#d3d3d3"
        internalColor="#ff0000"
        showText
        text="50.00"
        textStyle={{ color: 'green' }}
        showLabels
        labelStyle={{ color: 'blue' }}
        showPercent
        percentStyle={{ color: 'red' }}
      />





    }






  }

  render() {
        const idadeNew =   this.state.idadeUsuario;
        const diferultexa =   this.state.difUltexamepapa;
        const statHpv =   this.state.resulthpv;
        var  txRisco = parseInt('0');
       


        if(idadeNew >= 25 && idadeNew <=64 && diferultexa >=3 ){
         var  msgPapa = "Alerta";    
         var  msgPapa2 = "Prazo de validade vencido!"; 
         txRisco = parseFloat(txRisco)+50;     
        }else{
          txRisco = parseFloat(txRisco)+1;    
          var  msgPapa = "Parabéns";
          var  msgPapa2 = "Seu último exame esta dentro do prazo!"; 
          
        }

        if(statHpv == 'N' ){
           txRisco = parseFloat(txRisco)+50;  
          var  msgHpv = "Alerta";    
          var  msgHpv2 = "Tome a vacina!"; 
            
         }else{
           txRisco = parseFloat(txRisco)+1;    
           var  msgPapa = "Parabéns";
           var  msgPapa2 = "Vacina em dia!"; 
         }




  

    return (

      <Container style={styles.container}>
        <Image
          style={{ height: 100, width: 75 }}
          source={require('../../assets/logoB.png')}
          resizeMode="contain"
        />

        <Content />


        <Speedometer
    value={txRisco}
    totalValue={100}
    size={250}
    outerColor="#d3d3d3"
    internalColor="#ff0000"
    showText
    text={txRisco}
    textStyle={{ color: 'green' }}
    showLabels
    labelStyle={{ color: 'blue' }}
    showPercent
    percentStyle={{ color: 'red' }}
  />


        <Grid style={styles.styleGrid1}>
          <Col style={styles.styleCol}>
            <Text>PAPANICOLAU</Text>
            <Text> {msgPapa}</Text>
            <Text> {txRisco}</Text>



          </Col>


          <Col style={styles.styleCol}>
          <Text> HPV </Text>
            <Text> {statHpv} </Text>

          </Col>
        </Grid>
        
        <Footer>
          <FooterTab>
            <Button active vertical onPress={() => this.props.navigation.navigate('Main')}>
              <Icon type="FontAwesome" name="home" />
              <Text style={styles.textFooter}> Home </Text>
            </Button>
            <Button badge vertical onPress={() => this.props.navigation.navigate('Alerts')}>
              <Badge ><Text>10</Text></Badge>
              <Icon type="FontAwesome" name="bell-o" />
              <Text style={styles.textFooter}>Alertas</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Infor')}>
              <Icon type="FontAwesome" name="user" />
              <Text style={styles.textFooter}>Usuário</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Logout')}>
              <Icon type="FontAwesome" name="power-off" />
              <Text style={styles.textFooter}>Sair</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

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




  textFooter: {
    fontSize: 8,

  },


  styleGrid1: {
    marginTop: "10%",
    

  },
  styleGrid2: {

    marginTop: "10%",
  },

  styleCol: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#fff',
    height: 100,
    alignItems: 'center',
  },






})