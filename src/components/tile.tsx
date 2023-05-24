import { Component } from "solid-js";

type Props = Readonly<{
	className: string;
	id: string;
	icon: string;
}>

const Tile = ({ className, id, icon }: Props) => {
	return (
		<div
			class={className}
			id={id}>
			{
				< img src={icon} alt="" />
			}
		</div>
	)
}

export default Tile
