import { Stack } from "@mui/material";
import CategoryIcon from "./CategoryIcon";

function CategoryList(props) {
    const categories = ["보컬","음악","요리","운동","코딩","촬영","댄스","기타"];
    const categoryConverter = (category)=> {
        switch(category) {
            case "보컬":
                return "vocal"
            case "음악":
                return "music"
            case "요리":
                return "cook"
            case "운동":
                return "exercise"
            case "코딩":
                return "coding"
            case "촬영":
                return "picture"
            case "댄스":
                return "dance"
            case "기타":
                return "star"
        }
    }
    const list = categories.map((category)=><CategoryIcon name = {categoryConverter(category)}></CategoryIcon>);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Stack direction={"row"} spacing={10}>
                {list}
            </Stack>
        </div>
    );
}
export default CategoryList;