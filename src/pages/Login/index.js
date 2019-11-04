import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {signInRequest} from '~/store/modules/auth/actions';

import {Container, TitleLogin, TextInput, SubmitButton} from './styles';

function Login({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('akinn@aurum.com.br');

  async function handleSignIn() {
    const emailDomain = email.split('@')[1];

    if (emailDomain !== 'aurum.com.br') {
      Alert.alert('O domínio do seu e-mail deve ser @aurum.com.br');
    } else {
      await dispatch(signInRequest(email));
    }
  }

  return (
    <Container resizeMode="contain">
      <TitleLogin>Login</TitleLogin>
      <TextInput
        autoFocus
        autoCapitalize="none"
        onChangeText={text => setEmail(text)}
        value={email}
        underlineColorIos="transparent"
        autoCorrect={false}
        placeholder="Usuário"
      />
      <TextInput
        secureTextEntry={true}
        underlineColorIos="transparent"
        autoCorrect={false}
        placeholder="Senha"
      />
      <SubmitButton onPress={() => handleSignIn()}>Entrar</SubmitButton>
    </Container>
  );
}

export default Login;
