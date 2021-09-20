import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        borderBottomWidth:0.5,
        borderColor:'#00000044'
    },
    row:{
        flexDirection:'row',
    },
    image:{
        width: 80,
        aspectRatio:1/1,
        borderRadius:10,
        marginVertical:5
    },
    column:{
        flexDirection:'column',
        margin:10,
        justifyContent: 'space-around',
        width:'50%'
    },
    title:{
        textAlign:'left',
        color:'white',
        fontSize:15,
        fontFamily:'Avenir',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
    },
    artist:{
        textAlign:'left',
        color:'#bfbfbf',
        fontSize:13,
        fontFamily:'Avenir',
    },
    duration:{
        margin:10,
        alignSelf: 'center',
        flex:1,
        textAlign:'right',
        color:'#bfbfbf',
        fontSize:13,
        fontFamily:'Avenir',
    }
})