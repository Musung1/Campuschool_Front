import { Typography,Stack,Button,} from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function ClassDetailView() {
  const image = "data:image/jpeg;base64,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";
  const backImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHGPmvZI9aDaf_4tbYbOyEwTG9mRlLneB0Q&usqp=CAU";
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div>
        <img src={backImage} alt="Image" style={{ opacity: 0.5,width:"100%",height: 300,zIndex: '2' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', margin: 10, height:100}}>
        <img src={image} style={{ borderRadius: '10px',position: 'absolute', top: '35%', left: '16.5%', transform: 'translate(-50%, -50%)', zIndex: '1'  }}></img>
      </div>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left'}}>
        <Stack>
          <Typography variant="h4">
            김무성
          </Typography>
          <Typography variant="body1">
            한동대학교 4학년
          </Typography>
          <Typography variant="body1">
            전산전자공학부
          </Typography>
        </Stack>
      </div>
      <Stack direction="row" justifyContent="space-between">
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', margin: 10, width:1000}}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="강사 정보" value="1" />
                <Tab label="상세설명" value="2" />
                <Tab label="커리큘럼" value="3" />
                <Tab label="사진" value="4" />
                <Tab label="리뷰" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">hello</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Three</TabPanel>
            <TabPanel value="5">Item Three</TabPanel>
          </TabContext>
        </Box>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Stack alignItems="center" justifyContent="center">
            <Typography variant="h6">
                김무성 강사님께 질문해 보아요
              </Typography>
              <Stack direction={"row"} spacing={1}>
                <Button
                  style={{ width: '100px', height: '50px', fontSize: '20px' }}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                >
                  <FavoriteIcon />
                </Button>
                <Button
                  style={{ width: '200px', height: '50px', fontSize: '20px'}}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  width="200"
                >
                  질문하기
                </Button>
              </Stack>
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
      </Stack>
    </div>
  );
}

export default ClassDetailView;
