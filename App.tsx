import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/AppNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App: React.FC = () => {
    return (
        <GestureHandlerRootView style={{flex:1}}>
            <NavigationContainer>
                <AppNavigation/>
            </NavigationContainer>
        </GestureHandlerRootView>
        
    )
}
export default App;