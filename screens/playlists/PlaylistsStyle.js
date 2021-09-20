import {StyleSheet,Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },
  flatlist:{
      width:Dimensions.get('window').width,
      marginTop:10
  },
  card:{
      alignSelf:'center',
  }
})