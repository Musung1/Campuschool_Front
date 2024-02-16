import CategoryHeader from "../component/CategoryHeader";
import ClassGrid from "../component/ClassGrid";
import CategoryFilter from "../component/CategoryFilter";
import CategoryList from "../component/CategoryList";
import { Pagination } from "@mui/material";
import {useParams} from 'react-router-dom';
function CategoryClassView() {
  let category = useParams().category;
  console.log(useParams())
  return (
    <div>
        <CategoryHeader name={category}></CategoryHeader>
        <CategoryList></CategoryList>
        <CategoryFilter name={category}></CategoryFilter>
        <ClassGrid></ClassGrid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
        <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
    </div>
  );
}

export default CategoryClassView;
