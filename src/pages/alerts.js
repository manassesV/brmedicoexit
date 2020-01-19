import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image, ScrollView} from 'react-native'
import { Container, Header, Content, Button, Text, Item, Footer, FooterTab, Icon, Badge, List, ListItem, Left, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Main extends React.Component {
  state = { currentUser: null }
render() {
    const { currentUser } = this.state
return (
      <Container style={styles.container}>
         <Image
          style={{height:100 , width: 75}}
          source={require('../../assets/logoB.png')}
          resizeMode="contain"
        />
        <Content />

       


        
      <ScrollView style={{width: "100%", height: "58%", marginTop: -10}}> 

     
       
    
          <List style={{backgroundColor: "#FFF"}}>
            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
              <Left>
                <Text style={{ fontSize: 13 }} > 23/09/2019 {"\n"}{"\n"}
                <Icon style={{ fontSize: 15 }} type="FontAwesome" name="bell-o" />

                 Lembrete início de tratamento.
                
                </Text>
            
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem >
             <Left>
                <Text style={{ fontSize: 13 }} > 20/09/2019 {"\n"}{"\n"}
                <Icon style={{ fontSize: 15 }} type="FontAwesome" name="bell-o" />
                   Agendamento de consulta.              
                </Text>            
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={{ fontSize: 13 }} > 19/09/2019 {"\n"}{"\n"}
                <Icon style={{ fontSize: 15 }} type="FontAwesome" name="bell-o" />
                 Você sabia?              
                </Text> 
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={{ fontSize: 13 }} > 17/09/2019 {"\n"}{"\n"}
                <Icon style={{ fontSize: 15 }} type="FontAwesome" name="bell-o" />
                  Você sabia?              
                </Text> 
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
    
  
        
      </ScrollView> 
         <Footer>
        <FooterTab>
            <Button  vertical onPress={() => this.props.navigation.navigate('Main')}>
              <Icon type="FontAwesome" name="home"/>
              <Text style={styles.textFooter}> Home </Text>
            </Button>
            <Button active badge vertical onPress={() => this.props.navigation.navigate('Alerts')}>
            <Badge ><Text>10</Text></Badge>
              <Icon type="FontAwesome" name="bell-o" />
              <Text style={styles.textFooter}>Alertas</Text>
            </Button>
            <Button  vertical onPress={() => this.props.navigation.navigate('Infor')}>
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