import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {formatPrice} from '~/util/format';

import {
  Container,
  InfoContainer,
  Label,
  Span,
  TitleCase,
  FileContainer,
  ShowFile,
  SpanFile,
  DeleteFile,
  MaterialIcon,
} from './styles';
import colors from '~/styles/colors';

import {removeFile} from '~/store/modules/files/actions';

function Details({children}) {
  const files = useSelector(state => state.files.files);
  const [file, setFiles] = useState();

  const dispatch = useDispatch();

  async function handleRemoveFile(id) {
    await dispatch(removeFile(id));
  }

  useEffect(() => {
    setFiles(files.find(f => f.id === children.id));
  }, [files]);

  return (
    <Container>
      <TitleCase>{children.title}</TitleCase>
      <InfoContainer>
        <Label>Número</Label>
        <Span>{children.number}</Span>
      </InfoContainer>
      <InfoContainer>
        <Label>Cliente</Label>
        <Span>{children.customers[0].name}</Span>
      </InfoContainer>
      <InfoContainer>
        <Label>Parte</Label>
        <Span>{children.customers[0].roleName}</Span>
      </InfoContainer>
      <InfoContainer>
        <Label>Fórum</Label>
        <Span>{children.court}</Span>
      </InfoContainer>
      <InfoContainer>
        <Label>Valor</Label>
        <Span>{formatPrice(children.amount)}</Span>
      </InfoContainer>
      {file && (
        <InfoContainer>
          <Label>Anexo</Label>
          <FileContainer>
            <ShowFile>
              <SpanFile>{file.file.name}</SpanFile>
            </ShowFile>
            <DeleteFile onPress={() => handleRemoveFile(file.id)}>
              <MaterialIcon
                name="close"
                size={24}
                color={`${colors.darkTransparent}`}
              />
            </DeleteFile>
          </FileContainer>
        </InfoContainer>
      )}
    </Container>
  );
}

export default Details;
