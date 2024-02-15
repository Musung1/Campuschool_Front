import LectureCard from "./LectureCard";
import { Grid } from "@mui/material";
function ClassGrid(props) {
    var items = [
        <LectureCard name="1"></LectureCard>,
        <LectureCard name="2"></LectureCard>,
        <LectureCard name="3"></LectureCard>,
        <LectureCard name="4"></LectureCard>,
        <LectureCard name="1"></LectureCard>,
        <LectureCard name="2"></LectureCard>,
        <LectureCard name="3"></LectureCard>,
        <LectureCard name="4"></LectureCard>,
        <LectureCard name="1"></LectureCard>,
        <LectureCard name="2"></LectureCard>,
        <LectureCard name="3"></LectureCard>,
        <LectureCard name="4"></LectureCard>,
    ]
    return (
        <div>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {items.map((item)=> <Grid item xs={3}>{item}</Grid>)}
            </Grid>
        </div>
    )
}
export default ClassGrid;