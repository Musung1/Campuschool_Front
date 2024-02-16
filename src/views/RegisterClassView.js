import { Typography,styled,Paper,Stack,Button } from "@mui/material";
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function RegisterClassView() {
    const CategoryPaper = styled(Paper)(({ theme }) => ({
        height: 300,
        padding: theme.spacing(2),
        ...theme.typography.h2,
        textAlign: 'center',
        margin: 10
      }));
      const timeTable = TimeTable()
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
        {timeTable}
        <Button variant="contained">
          등록하기
        </Button>
    </div>
  );
}
function TimeTable() {
    const days = ["월","화","수","목","금","토","일"]
    const times = ["9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12"]
    return (
        <TableContainer style={{ maxWidth: 1400, maxHeight:800, textAlign:'center' }}>
        <Table>
          <TableHead>
            <TableRow>
                {[" ",...days].map((day)=> <TableCell align="center">{day}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {times.map((time, index) => (
                <TableRow key={index}>
                    <TableCell>{time}</TableCell>
                    {days.map((_, index) => (
                        <TableCell key={index} sx={{ border: '1px solid black',padding: 0 }}>
                            {TimeCell()}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
function TimeCell() {
    return(
        <Button variant="contained"
        style={{
            // backgroundColor: '#c7ffd8',
            borderRadius: 0,
            padding: 14,
            margin: 0,
            width: '100%', height: '100%'
          }} > &nbsp; </Button>
    )
}

export default RegisterClassView;
