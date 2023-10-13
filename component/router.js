import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Homescreen from './homescreen'
import Receive from './receive'
import Donate from './donate'


const AppNavigator = createStackNavigator({
    Homescreen,
    Receive,
    Donate,
},
    { initialRouteName: 'Homescreen' }
);



export default createAppContainer(createSwitchNavigator(
    {
        App: AppNavigator,
    },
    {
        initialRouteName: 'App',
    }
));