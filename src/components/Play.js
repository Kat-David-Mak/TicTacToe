import { useState, useEffect, useRef } from "react";
import './Play.css';
  
const Play = () => {

    const [player, setPlayer] = useState('X');
    const [data, setData] = useState(Array(9).fill(''));
    const [finalWinner, setFinalWinner] = useState();

    const winner = (squares) => {
            let winningPatterns = {
            across: 
            [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6],
            ],
        };

        for (let combination in winningPatterns)
        {
            winningPatterns[combination].forEach((pattern) => {
                console.log(pattern);
                if(squares[pattern[0]] === '' || squares[pattern[1]]  === '' || squares[pattern[2]]  === '' )
                {//do nothing 
                }
                else if(squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]])
                {
                    setFinalWinner(squares[pattern[0]]);
                }   
            });
        }
    }

    const handleClick = (value) => {

        if(data[value] !== '')
        {
            return;
        }
        let squares = [...data];
        
        if(player==='X')
        {
            squares[value] = 'X';
            setPlayer('O');
        }
        else
        {
            squares[value] = 'O';
            setPlayer('X');
        }

        winner(squares);
        setData(squares);
    }

    const Box = ({value}) => {
        return <td> <input class="input" onClick={() => handleClick(value)}></input> {data[value]} </td>
    }

    const handleRestart= () => {
        setFinalWinner(null);
        setData(Array(9).fill('')); 
    }
    
return (
    
<div>
    <div class="results"> 
        <h2>TIC TAC TOE</h2>
        <h2> Player : {player} </h2>  
    </div>

    {finalWinner &&(
    <div class="winner">
        <h2>The Winner Is : {finalWinner}</h2>
    </div>)}
    
    <div class="block">
        <br></br>
        <button class="restartbutton" onClick={() => handleRestart()}> Restart </button>
    <table class="center">
	<tr>
		<td class="outer"> <Box value={0} /> </td>
		<td class="vertical"> <Box value={1} /> </td>
		<td class="outer"> <Box value={2} /> </td>
	</tr>

	<tr>
		<td class="horizontal"> <Box value={3} /> </td>
		<td class="vertical horizontal"> <Box value={4} /> </td>
		<td class="horizontal"> <Box value={5} /> </td>
	</tr>

	<tr>
		<td class="outer"> <Box value={6} /> </td>
		<td class="vertical"> <Box value={7} /> </td>
		<td class="outer"> <Box value={8} /> </td>
	</tr>
    </table>
    </div>

</div>)
}
  
export default Play;