import { Typography,styled,Paper } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";

function MyOpenClassRoomView() {
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
                노래 잘하기 강의실
            </Typography>
            {MyOpenClassRoomTab()}
        </CategoryPaper>

    </div>
  );
}
function MyOpenClassRoomTab() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', margin: 10}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="공지" value="1" />
              <Tab label="강의요청" value="2" />
              <Tab label="회원 관리" value="3" />
              <Tab label="되는 시간 수정" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">hello</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">hello</TabPanel>
          <TabPanel value="4">Item Two</TabPanel>
        </TabContext>
      </Box>
      </div>
    );
}

export default MyOpenClassRoomView;
