import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Login from '~/pages/Login';
import Process from '~/pages/Process';

import {BottomItem, Text} from './styles';
import {colors} from '../styles';

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createStackNavigator({
      Login,
    }),
    Main: createBottomTabNavigator({
      Process: {
        screen: Process,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => {
            return (
              <BottomItem>
                <Text tintColor={tintColor}>PROCESSOS</Text>
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
        screen: Process,
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
