import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [token, setToken] = useState("");

	const switchTurn = turn => {
		if (turn == true && token == "") {
			setToken("X");
		} else if (turn == false && token == "") {
			setToken("O");
		}
		props.changeValue();
	};

	return (
		<div
			onClick={() => {
				switchTurn(props.turn);
				props.saveValue(props.turn, props.squarePosition);
			}}
			className="firstSquare">
			{token}
		</div>
	);
};

export default Square;

Square.propTypes = {
	turn: PropTypes.bool,
	changeValue: PropTypes.func,
	saveValue: PropTypes.func,
	checkWinner: PropTypes.func,
	squarePosition: PropTypes.number
};
