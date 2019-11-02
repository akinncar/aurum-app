import React from 'react';

import {Container, TitleLogin, TextInput, SubmitButton} from './styles';

function Login({navigation}) {
  return (
    <Container resizeMode="contain">
      <TitleLogin>Login</TitleLogin>
      <TextInput
        autoFocus
        autoCapitalize="none"
        // onChangeText={}
        // value={propsFormik.values.companyName}
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
      <SubmitButton
        onPress={() => {
          navigation.navigate('Cases');
        }}>
        Entrar
      </SubmitButton>
    </Container>
  );
}

export default Login;
