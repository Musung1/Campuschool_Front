import vocal from "../assets/categoryIcon/mic_external_on.png";
import music from "../assets/categoryIcon/music_note.png";
import cook from "../assets/categoryIcon/lunch_dining.png";
import exercise from "../assets/categoryIcon/directions_run.png";
import coding from "../assets/categoryIcon/personal_video.png";
import picture from "../assets/categoryIcon/local_see.png";
import dance from "../assets/categoryIcon/accessibility_new.png";
import star from "../assets/categoryIcon/star.png";
import { Typography, Box,Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const imageConverter = (name)=> {
    switch(name) {
        case 'vocal':
            return vocal
        case "music":
            return music
        case "cook":
            return cook
        case "exercise":
            return exercise
        case "coding":
            return coding
        case "picture":
            return picture
        case "dance":
            return dance
        case "star":
            return star
    }
}
function CategoryIcon(props) {
    const navigate = useNavigate();

    const goCategoryDetail = (name) => {
      navigate('/classes/' + name)
    }
    return (
        <Button onClick={() => goCategoryDetail(props.name)}>
            <Box textAlign="center" >
            <img src={imageConverter(props.name)}></img>
            <Typography variant="h6">{props.name}</Typography>
            </Box>
        </Button>
    );
}
export default CategoryIcon;