import { Card,CardActionArea, CardMedia, CardContent,Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
function LectureCard(props) {
  const navigate = useNavigate();

  const goClassDetail = (id) => {
    navigate('/class/'+"hiroo")
  }
    return <div>
    <Card sx={{ maxWidth: 345 }} onClick={()=> goClassDetail()}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={"http://localhost:8080" + props.lecture.refImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.lecture.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.lecture.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
}
export default LectureCard;