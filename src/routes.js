/**
 *
 * @author Rodrigo Santos de Souza
 */

import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import logo from './assets/instagram.png';
import Feed from './pages/feed';

const Routes = createAppContainer(
	createStackNavigator(
		{
			Feed
		},
		{
			headerLayoutPreset: 'center',
			defaultNavigationOptions: {
				headerTitle: <Image source={logo} />,
				headerStyle: {
					backgroundColor: '#f5f5f5'
				}
			}
		}
	)
);

export default Routes;
