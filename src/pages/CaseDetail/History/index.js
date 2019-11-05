import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {format, parseISO} from 'date-fns';
import monthTranslate from '~/util/monthTranslate';

// import pt from 'date-fns/locales/pt';

import {
  Container,
  Head,
  TitleHistory,
  SelectFilter,
  MaterialIcon,
  Historicals,
  HistoricalsItem,
  BoxDayDate,
  DayDate,
  InfoContainer,
  Label,
  Span,
  Description,
  ModalFilter,
  ModalBackground,
  ModalContainer,
  FilterList,
  FilterItem,
  FilterChecked,
  FilterLabel,
  Divisor,
} from './styles';
import colors from '~/styles/colors';

function CaseDetail({children}) {
  const [historicals, setHistoricals] = useState(children);
  const [modalVisible, setModalVisible] = useState(false);
  const [orderByDate, setOrderByDate] = useState(true);
  const [orderByAsc, setOrderByAsc] = useState(true);

  let order = [];

  historicals.forEach(historcial => {
    order.push(historcial);
  });

  function handleOrder() {
    if (orderByDate && orderByAsc) {
      order.sort(function(a, b) {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      });
    }

    if (orderByDate && !orderByAsc) {
      order.sort(function(a, b) {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
    }

    if (!orderByDate && orderByAsc) {
      order.sort(function(a, b) {
        if (a.description > b.description) {
          return 1;
        }
        if (a.description < b.description) {
          return -1;
        }
        return 0;
      });
    }

    if (!orderByDate && !orderByAsc) {
      order.sort(function(a, b) {
        if (a.description < b.description) {
          return 1;
        }
        if (a.description > b.description) {
          return -1;
        }
        return 0;
      });
    }
    setHistoricals(order);
  }

  useEffect(() => {
    handleOrder();
  }, [orderByDate]);

  useEffect(() => {
    handleOrder();
  }, [orderByAsc]);

  useEffect(() => {});

  return (
    <Container>
      <Head>
        <TitleHistory>histórico</TitleHistory>
        <SelectFilter onPress={() => setModalVisible(!modalVisible)}>
          <Label>Ordenar por</Label>
          <MaterialIcon
            name="filter-list"
            size={20}
            color={`${colors.darkTransparent}`}
          />
        </SelectFilter>
      </Head>
      <Historicals
        style={{width: '100%'}}
        data={historicals}
        // keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <InfoContainer>
            <BoxDayDate>
              <DayDate>{format(parseISO(item.date), 'dd')}</DayDate>
            </BoxDayDate>
            <HistoricalsItem>
              <Label>
                {monthTranslate(format(parseISO(item.date), 'MMMM'))}
              </Label>
              <Span>{format(parseISO(item.date), 'yyyy')}</Span>
              <Description>{item.description}</Description>
            </HistoricalsItem>
          </InfoContainer>
        )}
      />

      {/* Modal */}

      <ModalFilter
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <ModalBackground>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <MaterialIcon name="close" size={30} color={`${colors.primary}`} />
          </TouchableOpacity>
        </ModalBackground>
        <ModalContainer>
          <FilterList>
            <FilterItem onPress={() => setOrderByDate(true)}>
              <FilterChecked>
                <MaterialIcon
                  name={orderByDate && 'check'}
                  size={26}
                  color={`${colors.primary}`}
                />
              </FilterChecked>
              <FilterLabel>Ordenar por data</FilterLabel>
            </FilterItem>
            <FilterItem onPress={() => setOrderByDate(false)}>
              <FilterChecked>
                <MaterialIcon
                  name={!orderByDate && 'check'}
                  size={26}
                  color={`${colors.primary}`}
                />
              </FilterChecked>
              <FilterLabel>Ordenar por descrição</FilterLabel>
            </FilterItem>
          </FilterList>

          <Divisor />

          <FilterList>
            <FilterItem onPress={() => setOrderByAsc(true)}>
              <FilterChecked>
                <MaterialIcon
                  name={orderByAsc && 'check'}
                  size={26}
                  color={`${colors.primary}`}
                />
              </FilterChecked>
              <FilterLabel>Crescente</FilterLabel>
            </FilterItem>
            <FilterItem onPress={() => setOrderByAsc(false)}>
              <FilterChecked>
                <MaterialIcon
                  name={!orderByAsc && 'check'}
                  size={26}
                  color={`${colors.primary}`}
                />
              </FilterChecked>
              <FilterLabel>Decrescente</FilterLabel>
            </FilterItem>
          </FilterList>
        </ModalContainer>
      </ModalFilter>
    </Container>
  );
}

export default CaseDetail;
