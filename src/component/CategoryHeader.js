import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
const CategoryPaper = styled(Paper)(({ theme }) => ({
    height: 300,
    padding: theme.spacing(2),
    ...theme.typography.h2,
    textAlign: 'center',
    margin: 10
  }));
function CategoryHeader(props) {
    return (
        <CategoryPaper variant="elevation" style={{backgroundColor: 'blue'}} >
            <h1>{props.name}</h1>
        </CategoryPaper>
    )
}
export default CategoryHeader;