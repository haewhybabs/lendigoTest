import { StyleSheet, Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
import { height, width } from '../../constants/dimensions';
import { theme } from '../../core/theme';
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:theme.colors.white,
    },
    wrapper:{
        padding:15
    },
    headerText:{
        fontSize:18,
        fontWeight:'600',
        marginBottom:20
    },
    newsContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingVertical: 12,
        alignItems: "center",
        borderBottomColor: theme.colors.gray,
        padding: 12,
    },
    newsImage:{
        width: 70,
        height: 70,
        resizeMode: "contain",
    }
})