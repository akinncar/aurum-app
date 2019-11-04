import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch} from 'react-redux';
import {addFile} from '~/store/modules/files/actions';

import {Container, TitleHeader, MaterialIcon} from './styles';
import colors from '~/styles/colors';

function Header({children}) {
  const dispatch = useDispatch();

  async function handleUploadFile(id, file) {
    await dispatch(addFile(id, file));
  }

  async function insertLink() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      //Printing the log realted to the file
      // console.tron.log('res : ' + JSON.stringify(res));
      // console.tron.log('URI : ' + res.uri);
      // console.tron.log('Type : ' + res.type);
      // console.tron.log('File Name : ' + res.name);
      // console.tron.log('File Size : ' + res.size);
      handleUploadFile(children.state.params.item.id, res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('O anexo de arquivo foi cancelado');
      } else {
        Alert.alert('Erro desconhecido');
        // Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => children.pop()}>
        <MaterialIcon name="arrow-back" size={24} color={`${colors.primary}`} />
      </TouchableOpacity>
      <TitleHeader>Processo</TitleHeader>
      <TouchableOpacity onPress={() => insertLink()}>
        <MaterialIcon
          name="insert-link"
          size={24}
          color={`${colors.primary}`}
        />
      </TouchableOpacity>
    </Container>
  );
}

export default Header;
