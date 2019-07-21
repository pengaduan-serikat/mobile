import axios from 'axios';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';

async function cekToken (navigation) {
  try {
    const token = await AsyncStorage.getItem('accessToken')
    const { data } = await axios.get(`${API_URL}check-token`, { headers : { Authorization : `Bearer ${token}`}})
    if( data ){
      navigation.navigate('Employee')
    }
  } catch (err) {
    navigation.navigate('Auth')
  }
}

export default cekToken