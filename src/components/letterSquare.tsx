import { Component } from 'solid-js';

type Props = {
	index: number;
	playingAsColor: string;
	getLetters: string[];
};

const LetterSquare: Component<Props> = ({ index, playingAsColor, getLetters }) => {
	return (
		<div class={`letter-square ${playingAsColor === "white" ? '' : 'flipped'}`} id={getLetters[index]}>
			{getLetters[index]}
		</div>
	);
};

export default LetterSquare;
