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
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
}
export default LectureCard;