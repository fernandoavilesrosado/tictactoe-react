import React, { useState, setState, Fragment } from "react";
import Square from "./square.jsx";

const Home = () => {
	const [turn, setTurn] = useState(true);
	const [boardValue, setBoardValue] = useState(Array(9).fill(null));
	const [playerState, setPlayerState] = useState("Player 1 Starts!");

	const squareValue = (value, squarePosition) => {
		const squares = [...boardValue];

		squares[squarePosition] = value;
		setBoardValue(squares);
		console.log(squares);

		let winner = whoWins(squares);

		if (winner === true) {
			setPlayerState("Winner player 1");
		} else if (winner === false) {
			setPlayerState("Winner player 2");
		} else if (winner === null) {
			setPlayerState("Next player: " + (turn ? "2" : "1"));
		}
	};

	const changeTheValue = () => {
		setTurn(!turn);
	};

	let grid = [];

	for (let i = 0; i < 9; i++) {
		grid.push(
			<Square
				turn={turn}
				changeValue={changeTheValue}
				key={i.toString()}
				checkWinner={whoWins}
				squarePosition={i}
				saveValue={squareValue}
			/>
		);
	}

	const whoWins = squares => {
		const condition = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let i = 0; i < condition.length; i++) {
			const [a, b, c] = condition[i];
			if (
				squares[a] != null &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	};

	return (
		<Fragment>
			<div className="status">{playerState}</div>
			<div className="gridSquares">
				<div className="row justify-content-center">
					{" "}
					{grid[0]} {grid[1]} {grid[2]}{" "}
				</div>
				<div className="row justify-content-center">
					{" "}
					{grid[3]} {grid[4]} {grid[5]}{" "}
				</div>
				<div className="row justify-content-center">
					{" "}
					{grid[6]} {grid[7]} {grid[8]}{" "}
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
