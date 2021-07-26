import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import Todos from './src/components/Todos';
import Users from './src/components/Users';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Tab.Navigator>
          <Tab.Screen
            name="Todos"
            component={Todos}
            options={{
              tabBarLabel: 'Todos',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="pencil"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Users"
            component={Users}
            options={{
              tabBarLabel: 'Users',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
