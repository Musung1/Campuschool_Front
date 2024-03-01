import LectureCard from "./LectureCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Stack,Button,Paper, Typography } from "@mui/material";
import { useLectureCardStore } from "../store/LectureCardStore";
function CarouselView(props) {
    const {popularLectures, recentLectures } = useLectureCardStore();
    const contents = () => {
        var lectures = [];
        if(props.type === "popular") {
            lectures = popularLectures
        } else if(props.type === "recent") {
            lectures = recentLectures
        }
        return lectures.map((lecture)=> <LectureCard lecture={lecture}></LectureCard>)
    }
    return (
        <div style={{margin: 10}}>
            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left'}}>
            <Typography variant="h5">
                {props.title}
            </Typography>
            </div>
            <Carousel
            showArrows={true}
            centerMode={true}
            centerSlidePercentage={20}
            showThumbs={false}
            showStatus={false}
            autoPlay={false}
            infiniteLoop={false}>
            {contents()}
            </Carousel>
        </div>
    )
}
export default CarouselView;