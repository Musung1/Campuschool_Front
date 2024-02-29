import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api';

export const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
export const fileAPIService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data' 
  },
  withCredentials: true,
});
export const loginedUserAPIService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('accessToken'),
    'RefreshToken': localStorage.getItem('refreshToken'),
  },
  withCredentials: true,
});
const saveTokensToStorage = (accessToken, refreshToken) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};


export const login = async (loginForm) => {
    try {
      const response = await apiService.post('/login',loginForm);
      const accessToken = response.headers.get("Authorization")
      const refreshToken = response.headers.get("RefreshToken")
      saveTokensToStorage(accessToken,refreshToken)
      console.log(accessToken)
      console.log(refreshToken)
      console.log(response.data)
      return response.data;
    } catch (error) {
        throw error;
    }
  }
  export const signup = async (signupForm) => {
    try {
      const response = await apiService.post('/signup',signupForm);
      return response.data;
    } catch (error) {
        throw error;
    }
  }
  export const logout = async () => {
    try {
      const response = await apiService.get('/logout');
      console.log(response.data)
      return response.data;
    } catch (error) {
        throw error;
    }
  }
  export const getUser = async () => {
    try {
      const response = await loginedUserAPIService.get('/user');
      return response.data;
    } catch (error) {
        throw error;
    }
  }
  export const loginTest = async () => {
    try {
      const response = await loginedUserAPIService.get('/loginTest');
      return true;
    } catch (error) {
        throw error;
    }
  }