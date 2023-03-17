import axios from 'axios';
import { toast } from 'react-toastify';

export const LoginApi = async (data) => {
  try {
    const res = await axios.post('https://reqres.in/api/login', data);
    toast.success('Login Successfully');
    const resData = await res;

    console.log(resData);
  } catch (error) {
    toast.error('Please enter valid field');
    console.log(error);
  }
};
