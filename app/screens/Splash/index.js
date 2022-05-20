import { View, Image,StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'
import { theme } from '../../core/theme';
export default function Splash({navigation}) {
    const [mainSplash, setMainSplash] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setMainSplash(true);
        }, 3000);
        if(mainSplash){
            navigation.navigate('Login');
        }
    }, [mainSplash]);
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />
        <Image 
            source = {require('../../assets/images/logo.png')}                         
            style={styles.logoCover}      
        />
    </View>
  )
}