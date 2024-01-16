import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/AppNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./src/Store/store";

const App: React.FC = () => {
    return (
        <GestureHandlerRootView style={{flex:1}}>
            <Provider store={store}>
                <NavigationContainer>
                    <AppNavigation/>
                </NavigationContainer>
            </Provider>
        </GestureHandlerRootView>
        
    )
}
export default App;