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
  },
  card:{
      alignSelf:'center',
  },
    indicator:{
    position:'absolute',
    left:'50%',
    top:'50%',
    bottom:'50%',
    right:'50%',
    alignSelf: 'center',
  },
})