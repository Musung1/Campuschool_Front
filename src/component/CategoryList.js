import { Stack } from "@mui/material";
import CategoryIcon from "./CategoryIcon";

function CategoryList(props) {
    const categories = ["보컬","음악","요리","운동","코딩","촬영","댄스","기타"];
    const categoryConverter = (category)=> {
        switch(category) {
            case "보컬":
                return "VOCAL"
            case "음악":
                return "MUSIC"
            case "요리":
                return "COOK"
            case "운동":
                return "EXERCISE"
            case "코딩":
                return "CODING"
            case "촬영":
                return "PICTURE"
            case "댄스":
                return "DANCE"
            case "기타":
                return "STAR"
        }
    }
    const list = categories.map((category)=><CategoryIcon name = {categoryConverter(category)}></CategoryIcon>);
    return (
        <Stack direction={"row"} spacing={5} alignItems={"center"}textAlign={"center"} justifyContent={"center"}>
        {list}
        </Stack>
    );
}
export default CategoryList;