import { Tile } from '../App'
import bdt from '../assets/pieces/bdt45.svg'
import blt from '../assets/pieces/blt45.svg'
import kdt from '../assets/pieces/kdt45.svg'
import klt from '../assets/pieces/klt45.svg'
import ndt from '../assets/pieces/ndt45.svg'
import nlt from '../assets/pieces/nlt45.svg'
import pdt from '../assets/pieces/pdt45.svg'
import plt from '../assets/pieces/plt45.svg'
import qdt from '../assets/pieces/qdt45.svg'
import qlt from '../assets/pieces/qlt45.svg'
import rdt from '../assets/pieces/rdt45.svg'
import rlt from '../assets/pieces/rlt45.svg'

export const STARTING_POS: Tile[][] = [
	[
		{ piece: { svg: rlt, type: "rook" }, x: 0, y: 0 },
		{ piece: { svg: nlt, type: "knight" }, x: 1, y: 0 },
		{ piece: { svg: blt, type: "bishop" }, x: 2, y: 0 },
		{ piece: { svg: qlt, type: "queen" }, x: 3, y: 0 },
		{ piece: { svg: klt, type: "king" }, x: 4, y: 0 },
		{ piece: { svg: blt, type: "bishop" }, x: 5, y: 0 },
		{ piece: { svg: nlt, type: "knight" }, x: 6, y: 0 },
		{ piece: { svg: rlt, type: "rook" }, x: 7, y: 0 }
	],
	[
		{ piece: { svg: plt, type: "pawn" }, x: 0, y: 1 },
		{ piece: { svg: plt, type: "pawn" }, x: 1, y: 1 },
		{ piece: { svg: plt, type: "pawn" }, x: 2, y: 1 },
		{ piece: { svg: plt, type: "pawn" }, x: 3, y: 1 },
		{ piece: { svg: plt, type: "pawn" }, x: 4, y: 1 },
		{ piece: { svg: plt, type: "pawn" }, x: 5, y: 1 },
		{ piece: { svg: plt, type: "pawn" }, x: 6, y: 1 },
		{ piece: { svg: plt, type: "pawn" }, x: 7, y: 1 }
	],
	[
		{ x: 0, y: 2 },
		{ x: 1, y: 2 },
		{ x: 2, y: 2 },
		{ x: 3, y: 2 },
		{ x: 4, y: 2 },
		{ x: 5, y: 2 },
		{ x: 6, y: 2 },
		{ x: 7, y: 2 }
	],
	[
		{ x: 0, y: 3 },
		{ x: 1, y: 3 },
		{ x: 2, y: 3 },
		{ x: 3, y: 3 },
		{ x: 4, y: 3 },
		{ x: 5, y: 3 },
		{ x: 6, y: 3 },
		{ x: 7, y: 3 }
	],
	[
		{ x: 0, y: 4 },
		{ x: 1, y: 4 },
		{ x: 2, y: 4 },
		{ x: 3, y: 4 },
		{ x: 4, y: 4 },
		{ x: 5, y: 4 },
		{ x: 6, y: 4 },
		{ x: 7, y: 4 }
	],
	[
		{ x: 0, y: 5 },
		{ x: 1, y: 5 },
		{ x: 2, y: 5 },
		{ x: 3, y: 5 },
		{ x: 4, y: 5 },
		{ x: 5, y: 5 },
		{ x: 6, y: 5 },
		{ x: 7, y: 5 }
	],
	[
		{ piece: { svg: pdt, type: "pawn" }, x: 0, y: 6 },
		{ piece: { svg: pdt, type: "pawn" }, x: 1, y: 6 },
		{ piece: { svg: pdt, type: "pawn" }, x: 2, y: 6 },
		{ piece: { svg: pdt, type: "pawn" }, x: 3, y: 6 },
		{ piece: { svg: pdt, type: "pawn" }, x: 4, y: 6 },
		{ piece: { svg: pdt, type: "pawn" }, x: 5, y: 6 },
		{ piece: { svg: pdt, type: "pawn" }, x: 6, y: 6 },
		{ piece: { svg: pdt, type: "pawn" }, x: 7, y: 6 }
	],
	[
		{ piece: { svg: rdt, type: "rook" }, x: 0, y: 7 },
		{ piece: { svg: ndt, type: "knight" }, x: 1, y: 7 },
		{ piece: { svg: bdt, type: "bishop" }, x: 2, y: 7 },
		{ piece: { svg: qdt, type: "queen" }, x: 3, y: 7 },
		{ piece: { svg: kdt, type: "king" }, x: 4, y: 7 },
		{ piece: { svg: bdt, type: "bishop" }, x: 5, y: 7 },
		{ piece: { svg: ndt, type: "knight" }, x: 6, y: 7 },
		{ piece: { svg: rdt, type: "rook" }, x: 7, y: 7 }
	]
]
