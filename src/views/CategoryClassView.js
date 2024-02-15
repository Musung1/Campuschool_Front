import CategoryHeader from "../component/CategoryHeader";
import ClassGrid from "../component/ClassGrid";
import CategoryFilter from "../component/CategoryFilter";
import CategoryList from "../component/CategoryList";
import Header from "../component/Header";
import { Pagination,Paper,styled } from "@mui/material";
function CategoryClassView() {
  return (
    <div>
        <CategoryHeader name="Vocal"></CategoryHeader>
        <CategoryList></CategoryList>
        <CategoryFilter></CategoryFilter>
        <ClassGrid></ClassGrid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10}}>
        <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
    </div>
  );
}

export default CategoryClassView;
