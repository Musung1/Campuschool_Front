import { Typography,styled,Paper,Stack,Button } from "@mui/material";
import TimeTable from "../component/TimeTable";
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function RegisterClassView() {
    const CategoryPaper = styled(Paper)(({ theme }) => ({
        height: 300,
        padding: theme.spacing(2),
        ...theme.typography.h2,
        textAlign: 'center',
        margin: 10
      }));
  return (
    <div>
        <CategoryPaper>
            <Typography variant="h3">
                노래 잘하기
            </Typography>
        </CategoryPaper>
        <Typography variant="h4">
          주 2회 
        </Typography>
        <TimeTable></TimeTable>
        <Button variant="contained">
          등록하기
        </Button>
    </div>
  );
}

export default RegisterClassView;
