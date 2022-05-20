import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import { theme } from '../../core/theme';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:theme.colors.white,
        justifyContent:'center',
        alignItems:'center'
    },
    logoCover:{
        width:200,
        height:200
    }
})