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
import User from '../controller/logincontroller';

export default class SignUp extends React.Component {
  static navigationOptions = { header: null };

  state = { email: '', password: '', passwordconf: '', errorMessage: null };
  handleSignUp = () => {
    var pattern =  /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
    var self = this;

    var regexemail = new RegExp(pattern);

    if (this.state.email == '') {
      alert('Campo email vazio!');

      return;
    }

    if (!regexemail.test(this.state.email)) {
      alert('Email inválido!');

      return;
    }
    if (this.state.password == '') {
      alert('Campo senha vazio!');

      return;
    }

    if (this.state.passwordconf == '') {
      alert('Campo confirme senha vazio!');

      return;
    }

    if (this.state.password != this.state.passwordconf) {
      alert('Senha e Confirme senha diferentes!');

      return;
    }

    var user = new User();

    var model = {
      email: this.state.email,
      password: this.state.password,
    };

    user.create(
      model,
      function(dados) {
        alert('Cadastrado com sucesso');
        self.props.navigation.navigate('Login')
      },
      function(error) {
        alert(error);
      }
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Cadastrar</Text>
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}

        <Item>
          <Input
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </Item>

        <Item>
          <Input
            secureTextEntry
            placeholder="Senha"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </Item>

        <Item>
          <Input
            secureTextEntry
            placeholder="Confirme Senha"
            autoCapitalize="none"
            onChangeText={passwordconf => this.setState({ passwordconf })}
            value={this.state.passwordconf}
          />
        </Item>

        <Button full success title="Cadastrar" onPress={this.handleSignUp}>
          <Text>Cadastrar</Text>
        </Button>

        <Button
          transparent
          light
          title="Você já possui uma conta? Acessar"
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Você já possui uma conta? Acessar</Text>
        </Button>
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
    marginTop: 8,
    backgroundColor: '#FFF',
  },

  textHeader: {
    color: '#FFF',
  },

  buttonLogin: {
    marginTop: 40,
  },
});
