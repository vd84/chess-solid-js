import { Component } from 'solid-js';

type Props = {
	index: number;
	playingAsColor: string;
	getNumbers: string[];
};

const NumberSquare: Component<Props> = ({ index, playingAsColor, getNumbers }) => {
	return (
		<div class={`number-square ${playingAsColor === "white" ? '' : 'flipped'}`} id={getNumbers[index]}>
			{getNumbers[index]}
		</div>
	);
};

export default NumberSquare;
