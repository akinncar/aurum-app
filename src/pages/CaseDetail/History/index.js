import React from 'react';
import {format, parseISO} from 'date-fns';

// import pt from 'date-fns/locales/pt';

import {
  Container,
  TitleHistory,
  Historicals,
  InfoContainer,
  Label,
  Span,
  Description,
} from './styles';

function CaseDetail({children}) {
  return (
    <Container>
      <TitleHistory>histórico</TitleHistory>
      <Historicals
        data={children}
        // keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <InfoContainer>
            <Label>{format(parseISO(item.date), 'MMMM')}</Label>
            <Span>{format(parseISO(item.date), 'yyyy')}</Span>
            <Description>{item.description}</Description>
          </InfoContainer>
        )}
      />
    </Container>
  );
}

export default CaseDetail;
