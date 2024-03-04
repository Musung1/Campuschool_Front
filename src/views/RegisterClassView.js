import { Typography, styled, Paper, Stack, Button } from "@mui/material";
import TimeTable from "../component/TimeTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLectureDetailStore } from "../store/LectureDetailStore";

function RegisterClassView() {
  const { lectureDetail, setLectureDetail } = useLectureDetailStore();
  let lectureId = useParams().id;
  useEffect(() => {
    setLectureDetail(lectureId);
  }, []);
  if (lectureDetail == null) {
    return <div>loading</div>;
  }
  const CategoryPaper = styled(Paper)(({ theme }) => ({
    height: 200,
    padding: theme.spacing(2),
    ...theme.typography.h2,
    textAlign: "center",
    margin: 10,
  }));
  return (
    <div>
      <CategoryPaper>
        <Typography variant="h3">{lectureDetail.lectureTitle}</Typography>
      </CategoryPaper>
      <Typography variant="h4">{"주 " + lectureDetail.day + "회"}</Typography>
      <TimeTable ableTime={lectureDetail.avaliableTimeList}></TimeTable>
      <Button variant="contained">등록하기</Button>
    </div>
  );
}

export default RegisterClassView;
