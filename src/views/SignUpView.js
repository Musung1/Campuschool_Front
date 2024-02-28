import { Stack,TextField,Typography,Button } from "@mui/material";
import { useState } from "react";
import { signup } from "../api/UserAPI";
import { useNavigate } from 'react-router-dom';
export function SignUpView() {
    const navigate = useNavigate();

    const goHome = () => {
      navigate('/')
    }
    const [signupForm, setSignupForm] = useState({
        name: '',
        username: '',
        password: ''
    })
    const signupButtonClick = async () => {
        const user = await signup(signupForm);
        goHome();
        console.log(user)
    }
    return (
        <Stack >
            <Typography variant="h5">{'회원가입'}</Typography>
            <Typography variant="h5">{'이름'}</Typography>
            <TextField id= "name"variant="outlined"
             value={signupForm.name}
             onChange={(e)=> setSignupForm({...signupForm,name:e.target.value})} />
            <Typography variant="h5">{'아이디'}</Typography>
            <TextField id= "username" variant="outlined"
            value={signupForm.username}
            onChange={(e)=> setSignupForm({...signupForm,username:e.target.value})}  />
            <Typography variant="h5">{'비밀번호'}</Typography>
            <TextField id= "password" variant="outlined"  type="password"
             value={signupForm.password}
             onChange={(e)=> setSignupForm({...signupForm,password:e.target.value})} />
            < Button variant="contained"
            onClick={signupButtonClick}>회원가입</Button>
        </Stack>
    );
}