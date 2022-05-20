import React from 'react'
import { View,StyleSheet,StatusBar} from 'react-native';
import { ios } from '../constants/device';
import { screenHeight, screenWidth } from '../constants/dimensions';
import { theme } from '../core/theme';
import { Text } from 'react-native-paper';
export default function HomeHeader() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
            <View style={styles.headerWrapper}>
                <Text style={styles.textStyle}>Home</Text>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        height:ios?screenHeight(12):screenHeight(4),
        backgroundColor:theme.colors.white,
        shadowColor: "#EBEBEB",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 2,
    },
    headerWrapper:{
        paddingTop:ios?screenHeight(7):null,
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        justifyContent:'center',
    },
    textStyle:{
        fontSize:17,
    }
})