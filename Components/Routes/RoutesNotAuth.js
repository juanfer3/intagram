import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '../Authentication/SignIn'
import SignUp from '../Authentication/SignUp'

const RoutesNotAuth = createStackNavigator(
    {
        SignIn: {
            screen:SignIn,
            navigationOptions: {
                title: 'SignIn'
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'SignUp'
            }
        },
    },
    {
        navigationOptions: {
            title: "Titulo desde StackNavigation"
        }
    }
    /*
    {
        headerMode: 'none'
    }
    /* */
);

export default createAppContainer(RoutesNotAuth);