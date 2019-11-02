import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Login from '~/pages/Login';
import Cases from '~/pages/Cases';
import CaseDetail from '~/pages/CaseDetail';
import Profile from '~/pages/Profile';

import {BottomItem, Text} from './styles';
import {colors} from '../styles';

const CasesStack = createStackNavigator(
  {
    Cases: {
      screen: Cases,
    },
    CaseDetail: {
      screen: CaseDetail,
    },
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createStackNavigator(
      {
        Login,
      },
      {
        headerMode: 'none',
      },
    ),
    Main: createBottomTabNavigator({
      Cases: {
        screen: CasesStack,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => {
            return (
              <BottomItem>
                <Text tintColor={tintColor}>Cases</Text>
                <Icon name="folder" size={18} color={tintColor} />
              </BottomItem>
            );
          },
          tabBarOptions: {
            activeTintColor: colors.primary,
            inactiveTintColor: colors.white,
            showIcon: true,
            showLabel: false,
            style: {
              backgroundColor: colors.darker,
            },
          },
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => {
            return (
              <BottomItem>
                <Text tintColor={tintColor}>PERFIL</Text>
                <Icon name="user" size={18} color={tintColor} />
              </BottomItem>
            );
          },
          tabBarOptions: {
            activeTintColor: colors.primary,
            inactiveTintColor: colors.white,
            showIcon: true,
            showLabel: false,
            style: {
              backgroundColor: colors.darker,
            },
          },
        },
      },
    }),
  }),
);

export default Routes;
