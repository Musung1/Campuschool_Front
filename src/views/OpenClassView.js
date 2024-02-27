import { Typography,styled,Paper,Stack,Button,TextField,FormControl,IconButton,Select,MenuItem } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, { useState } from "react";
import TimeTable from "../component/TimeTable";
import { useNavigate } from 'react-router-dom';
import { ClassDetail } from "../component/ClassDetail";
import { Curriculums } from "../component/Curriculums";
import useLectureFormStore from "../store/LectureFormStore";
import { createLectureForm } from "../api/LectureFormAPI";

function OpenClassView() {
    const CategoryPaper = styled(Paper)(({ theme }) => ({
        height: 1000,
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
        {useCreateButton()}
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
    const [value, setValue] = useState('2');
    const tabItems = ["강의 상세", "커리큘럼", "되는 시간"]
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', margin: 10}}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}> 
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="강의 상세" value="2" />
              <Tab label="커리큘럼" value="3" />
              <Tab label="되는 시간" value="4" />
            </TabList>
          </Box>
          <TabPanel value="2"><ClassDetail></ClassDetail></TabPanel>
          <TabPanel value="3"><Curriculums></Curriculums></TabPanel>
          <TabPanel value="4"><TimeTable></TimeTable></TabPanel>
        </TabContext>
      </Box>
      </div>
    );
}
function useCreateButton() {
  const navigate = useNavigate();
  const sendLecture = async () => {
      const state = useLectureFormStore.getState();
      const lectureForm = {
          title: state.title,
          day : state.day,
          description: state.description,
          categoryType: state.categoryType,
          difficulty: state.difficulty,
          curriculumList: state.curriculumList,
          avaliableTimeList: state.avaliableTimeList,
      }
      console.log(lectureForm)
      await createLectureForm();
      goHome();
  }
  const goHome = () => {
    navigate('/')
  }
  //const tabItems = ["강의 상세","커리 큘럼","되는 시간"]
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Stack alignItems="center" justifyContent="center">
      {/* {tabItems.map((item)=> ProgressTab(item))} */}
        <Button
            style={{ width: '310px', height: '50px', fontSize: '20px',margin: 10 }}
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            width="200"
            onClick={sendLecture}
          >
            강의 개설하기
          </Button>
    </Stack>
    </div>
  );
}
export default OpenClassView;
