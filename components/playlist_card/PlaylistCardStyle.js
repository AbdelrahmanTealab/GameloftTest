import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width:'45%',
        marginHorizontal:10,
        marginVertical:10,
    },
    shadow:{
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 3,
    },
    image:{
        width:  '100%',
        aspectRatio:1/1,
        borderWidth:1,
    },
    header:{
        width:'100%',
    },
    title:{
        textAlign:'left',
        color:'white',
        fontSize:12,
        fontFamily:'Avenir',
        shadowColor: '#000000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 3,
    },
    subtitle:{
        textAlign:'left',
        color:'white',
        fontSize:10,
        fontFamily:'Avenir',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 3,
    }
})