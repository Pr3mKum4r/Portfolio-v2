import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher({onToggle, checked}) {
	

	return (
		<>
			<DarkModeSwitch
				checked={checked}
				onChange={onToggle}
				size={30}
                sunColor='#FDB813'
			/>
		</>
	);
}
