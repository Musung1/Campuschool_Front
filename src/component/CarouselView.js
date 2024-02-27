import LectureCard from "./LectureCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Stack,Button,Paper, Typography } from "@mui/material";
function CarouselView(props) {
    var items = [
        <LectureCard name="1"></LectureCard>,
        <LectureCard name="2"></LectureCard>,
        <LectureCard name="3"></LectureCard>,
        <LectureCard name="4"></LectureCard>,
    ]

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
                {items.map((item)=>item)}
            </Carousel>
        </div>
    )
}
export default CarouselView;