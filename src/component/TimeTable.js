import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell,Button } from '@mui/material';
import { useState, useEffect } from 'react';
import useLectureFormStore from '../store/LectureFormStore';

function TimeTable() {
    // const [selectTime, setSelectTime] = useState([]);
    const {avaliableTimeList,addAvaliableTime,removeAvaliableTime} = useLectureFormStore();
    const days = ["월","화","수","목","금","토","일"]
    const times = ["9~10","10~11","11~12","12~1","1~2","2~3","3~4","4~5","5~6","6~7","7~8","8~9","9~10","10~11","11~12","12~1"]

    useEffect(() => {
        console.log(avaliableTimeList);
    }, [avaliableTimeList]); // selectTime이 변경될 때마다 호출됩니다.

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
                    {days.map((day, index) => (
                        <TableCell key={index} sx={{ border: '1px solid black',padding: 0 }}>
                            <UseTimeCell day={day} time= {time}></UseTimeCell>
                        </TableCell>
                    ))}
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

function UseTimeCell({ day, time}) {
    const {avaliableTimeList,addAvaliableTime,removeAvaliableTime} = useLectureFormStore();
    const [clicked, setClicked] = useState(false)

    const checkHandle = () => {
        if (!clicked) {
            // 새로운 선택 시간을 추가합니다.
            addAvaliableTime(day,time)
            //setSelectTime(prevSelectTime => [...prevSelectTime, { day, time }]);
        } else {
            removeAvaliableTime(day,time)
            // 선택된 시간을 제거합니다.
            //setSelectTime(prevSelectTime => prevSelectTime.filter(select => !(select.day === day && select.time === time)));
        }
        setClicked(!clicked);
    }

    return (
        <Button
            variant="contained"
            onClick={checkHandle}
            style={{
                backgroundColor: clicked ? '#c7ffd8' : 'white',
                borderRadius: 0,
                padding: 14,
                margin: 0,
                width: '100%', height: '100%'
            }}
        >
            &nbsp;
        </Button>
    )
}

export default TimeTable;
