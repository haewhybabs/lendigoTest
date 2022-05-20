import Home from "../screens/Home";
import Splash from '../screens/Splash';
import Login from '../screens/Auth';
import Registration from '../screens/Auth/Registration';

export const WelcomeStack = 
[
  {
    screen:Splash,
    name:"Splash"
  },
  {
    screen:Login,
    name:"Login"
  },
  {
    screen:Registration,
    name:"Registration"
  },
  
];

export const AppStack = 
[
  {
    screen:Home,
    name:"Home"
  },
]
