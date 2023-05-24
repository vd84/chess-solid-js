import axios from 'axios';
import { Component, JSX, createSignal, onCleanup } from 'solid-js';
import { v4 as uuidv4 } from 'uuid';


const WebSocketConnection: Component = (): JSX.Element => {
	const [messages, setMessages] = createSignal<string[]>([]);

	let socket: WebSocket | undefined;

	const handleMessage = (event: MessageEvent) => {
		const message = event.data;
		setMessages((prevMessages) => [...prevMessages, message]);
	};

	const connectWebSocket = async (roomId: number) => {
		const availRooms = await checkAvailableRooms()
		const roomToJoin = availRooms?.pop() ?? uuidv4()

		socket = new WebSocket('ws://localhost:8080/ws?room=' + roomToJoin);

		socket.addEventListener('open', () => {
			console.log('WebSocket connection established');
		});

		socket.addEventListener('message', handleMessage);

		socket.addEventListener('close', (event) => {
			console.log('WebSocket connection closed with code:', event.code);
		});

		socket.addEventListener('error', (error) => {
			console.log('WebSocket error:', error);
		});
	};

	const sendMessage = (message: string) => {
		if (socket && socket.readyState === WebSocket.OPEN) {
			socket.send(message);
		}
	};

	// Cleanup WebSocket connection when component unmounts
	onCleanup(() => {
		if (socket && socket.readyState === WebSocket.OPEN) {
			socket.close();
		}
	});

	const checkAvailableRooms: () => Promise<string[] | null> = async () => {
		try {
			const response = await axios.get('http://localhost:8080/rooms');
			const rooms = response.data as string[];
			console.log(rooms)
			return rooms
		} catch (error) {
			console.log('Error retrieving available rooms:', error);
			return []
		}
	};

	return (
		<div>
			<button onClick={connectWebSocket}>Connect WebSocket</button>

			<ul>
				{messages().map((message, index) => (
					<li key={index}>{message}</li>
				))}
			</ul>

			<button onClick={() => sendMessage('Hello WebSocket!')}>
				Send WebSocket Message
			</button>
			<button onClick={checkAvailableRooms}>
				Check available rooms
			</button>
		</div>
	);
};

export default WebSocketConnection;
