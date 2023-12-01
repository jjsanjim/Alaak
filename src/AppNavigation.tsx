import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AppNavigationParamsList } from "./AppNavigationParamsList";

import AlaakScene from "./scenes/alaak";
import AlaakHome from "./scenes/home";

const AppStack = createNativeStackNavigator<AppNavigationParamsList>()


const AppNavigation: React.FC = () => {

    return (
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen  name="Home" component={AlaakHome}/>
            <AppStack.Screen  name="Perfil" component={AlaakScene} />
        </AppStack.Navigator>
    )
}

export default AppNavigation;