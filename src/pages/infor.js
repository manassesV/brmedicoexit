import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image} from 'react-native'
import { Container, Header, Content, Button, Text, Form, Item, Input,  Footer, FooterTab, Icon, Badge } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Main extends React.Component {
  state = { currentUser: null }
render() {
    const { currentUser } = this.state
return (
      <SafeAreaView style={styles.container}>     

        <Image
          style={{height:200 , width: 150, marginTop: -30}}
          source={require('../../assets/logoB.png')}
          resizeMode="contain"
        />


        
        <Grid>
          <Col style={styles.styleCol}>


          </Col>


          <Col style={styles.styleCol}>


          </Col>
        </Grid>


        <Grid style={styles.styleGrid2}>
        <Col style={styles.styleCol}>


          </Col>
          <Col style={styles.styleCol}>


          </Col>
        </Grid>

              
        <Content />
        <Footer>
        <FooterTab>
            <Button  vertical onPress={() => this.props.navigation.navigate('Main')}>
              <Icon type="FontAwesome" name="home"/>
              <Text style={styles.textFooter}> Home </Text>
            </Button>
            <Button  badge vertical onPress={() => this.props.navigation.navigate('Alerts')}>
            <Badge ><Text>10</Text></Badge>
              <Icon type="FontAwesome" name="bell-o" />
              <Text style={styles.textFooter}>Alertas</Text>
            </Button>
             <Button active vertical onPress={() => this.props.navigation.navigate('Infor')}>
              <Icon type="FontAwesome" name="user" />
              <Text style={styles.textFooter}>Usuário</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Logout')}>
              <Icon type="FontAwesome" name="power-off" />
              <Text style={styles.textFooter}>Sair</Text>
            </Button>
          </FooterTab>
        </Footer>
     
      </SafeAreaView>
    )
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

  styleGrid: {
    margin: 10,
     },


  styleGrid2: {
      marginTop: 20
  },

  styleCol: {
   marginRight: 10,
   marginLeft: 10,
   backgroundColor: '#FFF', 
   height: 100
},

  



  
})