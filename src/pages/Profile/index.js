import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {signOut} from '~/store/modules/auth/actions';

import Title from '~/components/Title';
import Button from '~/components/Button';

import {Container, User} from './styles';

function Profile({navigation}) {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.email);

  async function handleSignOut() {
    await dispatch(signOut());
  }

  return (
    <Container resizeMode="contain">
      <Title>usuário</Title>
      <User>{email}</User>
      <Button onPress={() => handleSignOut()}>Sair</Button>
    </Container>
  );
}

export default Profile;
