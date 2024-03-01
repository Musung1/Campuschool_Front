import LectureCard from "./LectureCard";
import { Grid } from "@mui/material";
import { useLectureCardStore } from "../store/LectureCardStore";
import { useLectureSearchStore } from "../store/LectureSearchStore";
function ClassGrid(props) {
    const {currentPage} = useLectureSearchStore();
    const contents = () => {
        var lectures = []
        if(currentPage.content != null) {
            lectures = currentPage.content
        }
        console.log(currentPage)
        return lectures.map((lecture)=> <LectureCard lecture={lecture}></LectureCard>)
    }
    return (
        <div>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {contents().map((item)=> <Grid item xs={3}>{item}</Grid>)}
            </Grid>
        </div>
    )
}
export default ClassGrid;