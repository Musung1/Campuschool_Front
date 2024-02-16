import { Typography } from "@mui/material";
import { useState } from "react";
import {Stack, TextField, Button, Chip, FormControl,InputLabel,Select,MenuItem,Box} from "@mui/material";
import MyBreadCrum from "../component/MyBreadCrum";
function CategoryFilter(props) {
    function handleClick(){}
    const [age, setAge] = useState(10);

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div style={{margin: 10}}>
            <Stack direction="row" justifyContent="space-between">
            <MyBreadCrum name={props.name}></MyBreadCrum>
                <Stack direction={"row"} spacing={1}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"sx={{ m: 1, width: '20ch' }} />
                    <Button variant="contained">검색</Button>
                </Stack>
            </Stack>
            <div style={{margin:10}}>
            <Stack direction="row" spacing={1}>
                <Chip label="Clickable" onClick={handleClick} />
                <Chip label="Clickable" variant="outlined" onClick={handleClick} />
            </Stack>
            </div>
            <div style={{margin:10}}>
            <Stack direction="row" spacing={1}>
                <Chip label="입문" onClick={handleClick} />
                <Chip label="중급" variant="outlined" onClick={handleClick} />
                <Chip label="고급" variant="outlined" onClick={handleClick} />
            </Stack>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box sx={{ maxWidth: 100}}>
                <FormControl fullWidth>
                    <Select
                    style={{ height: '40px' }}
                    value= {age}
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </Box>
            </div>
        </div>
    );
}
export default CategoryFilter;