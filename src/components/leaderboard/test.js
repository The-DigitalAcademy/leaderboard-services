import React,{useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';

import { LeaderboardData } from "./database";
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Players() {
  const [data, setData] = useState([]);
  useEffect(() => {
    LeaderboardData.sort((a, b) => {
      if ( a.score === b.score){
          return b.score - a.score;
      } else{
          return b.score - a.score;
      }
  })
    setData(LeaderboardData);
  }, []);
  const handleClick = (e) => {
     
  //  setPeriod(e.target.dataset.id)
  }
  return (
        <div id="profile">
          <LeaderboardHeader/>
          <div className="duration">
            <button onClick={handleClick} data-id='7'>7 Days</button>
            <button onClick={handleClick} data-id='30'>30 Days</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 70 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell >Game</StyledTableCell>
            <StyledTableCell >Score</StyledTableCell>
            <StyledTableCell >Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((value, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {value.name}
                <Avatar src={value.img} alt="User avatar" />
              </StyledTableCell>
              <StyledTableCell >{value.Game}</StyledTableCell>
              <StyledTableCell >{value.score}</StyledTableCell>
              <StyledTableCell >{value.dt}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
  )

}

const LeaderboardHeader = () => {
  return (
    <div className="leadheader">
        <h2>Leaderboard</h2>
    </div>
  )
}

