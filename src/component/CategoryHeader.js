import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
const CategoryPaper = styled(Paper)(({ theme }) => ({
  height: 200,
  padding: theme.spacing(2),
  ...theme.typography.h2,
  textAlign: "center",
  alignItems: "center",
  alignContent: "center",
  margin: 10,
}));
function CategoryHeader(props) {
  return (
    <CategoryPaper
      variant="elevation"
      style={{ backgroundColor: "#FFF5DD" }}
    ></CategoryPaper>
  );
}
export default CategoryHeader;
