import axios from 'axios';
import { API_URL } from '../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';

async function cekToken (navigation) {
  console.log('====================================');
  console.log("masuk cek token");
  console.log('====================================');
  try {
    const token = await AsyncStorage.getItem('accessToken')
    console.log('====================================');
    console.log("token : ", token);
    console.log('====================================');
    const { data } = await axios.get(`${API_URL}check-token`, { headers : { Authorization : `Bearer ${token}`}})
    if( data ){
      navigation.navigate('Employee')
    }
    console.log('====================================');
    console.log( "data cek token ===> ",data);
    console.log('====================================');
  } catch (err) {
    console.log('====================================');
    console.log("error cek token ==> ", err.response);
    console.log('====================================');
    navigation.navigate('Auth')
  }
}

export default cekToken