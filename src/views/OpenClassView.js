import { Typography,styled,Paper,Stack,Button } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";

function OpenClassView() {
    const CategoryPaper = styled(Paper)(({ theme }) => ({
        height: 300,
        padding: theme.spacing(2),
        ...theme.typography.h2,
        textAlign: 'center',
        margin: 10
      }));
  return (
    <div>
        <CategoryPaper>
            <Typography variant="h3">
                강의 개설하기
            </Typography>
            {OpenClassTab()}
        </CategoryPaper>

    </div>
  );
}
function ProgressTab(name) {
    return (
        <div>
            <Stack direction={"row"}>
                <Typography variant="h6" width={100}>
                    {name}
                </Typography>
                {Circle()}
            </Stack>
        </div>
    );
}
function Circle() {
    return (
      <svg width="30" height="30">
        <circle cx="15" cy="16" r="10" stroke="black" strokeWidth="1" fill="red" />
      </svg>
    );
  }
function OpenClassTab() {
    const [value, setValue] = useState('1');
    const tabItems = ["프로필","강의 상세", "커리큘럼", "되는 시간"]
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', margin: 10}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="프로필" value="1" />
              <Tab label="강의 상세" value="2" />
              <Tab label="커리큘럼" value="3" />
              <Tab label="되는 시간" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">hello</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Two</TabPanel>
          <TabPanel value="4">Item Two</TabPanel>
        </TabContext>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Stack alignItems="center" justifyContent="center">
            {tabItems.map((item)=> ProgressTab(item))}
              <Button
                  style={{ width: '310px', height: '50px', fontSize: '20px',margin: 10 }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  width="200"
                >
                  강의 신청하기
                </Button>
          </Stack>
          </div>
      </div>
    );
}

export default OpenClassView;
