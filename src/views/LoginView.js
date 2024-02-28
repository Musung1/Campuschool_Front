import { Stack,TextField,Typography,Button } from "@mui/material";
import { useState } from "react";
import { login } from "../api/UserAPI";
import { useNavigate } from 'react-router-dom';
import useUserStore from "../store/UserStore";
export function LoginView() {
    const navigate = useNavigate();
    const {userDetail} = useUserStore();

    const goHome = () => {
      navigate('/')
    }
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const loginButtonClick = async () => {
        console.log(loginForm)
        const user = await login(loginForm);
        userDetail()
        goHome();
    }
    return (
        <Stack >
            <Typography variant="h5">{'회원가입'}</Typography>
            <Typography variant="h5">{'아이디'}</Typography>
            <TextField id= "username" variant="outlined"
            value={loginForm.username}
            onChange={(e)=> setLoginForm({...loginForm,username:e.target.value})}  />
            <Typography variant="h5">{'비밀번호'}</Typography>
            <TextField id= "password" variant="outlined"  type="password"
             value={loginForm.password}
             onChange={(e)=> setLoginForm({...loginForm,password:e.target.value})} />
            < Button variant="contained"
            onClick={loginButtonClick}>로그인</Button>
        </Stack>
    );
}