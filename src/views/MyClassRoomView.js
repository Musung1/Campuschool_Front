import { Typography,styled,Paper } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";

function MyClassRoomView() {
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
            {MyClassRoomTab()}
        </CategoryPaper>

    </div>
  );
}
function MyClassRoomTab() {
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
              <Tab label="채팅방" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">hello</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </Box>
      </div>
    );
}

export default MyClassRoomView;
