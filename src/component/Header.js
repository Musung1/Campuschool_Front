import { Button,Stack,TextField,Typography} from "@mui/material";

function Header() {
    return <div>
        <Stack direction={"row"} justifyContent="space-between" margin={2}>
            <Typography variant="h4">캠퍼스쿨</Typography>
            <Stack direction={"row"} spacing={5}>
                <Stack direction={"row"} spacing={1}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"sx={{ m: 1, width: '60ch' }} />
                    <Button variant="contained">검색</Button>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                    <Button variant="outlined">로그인</Button>
                    <Button variant="contained">회원가입</Button>
                </Stack>
            </Stack>
        </Stack>
    </div>
}
export default Header;