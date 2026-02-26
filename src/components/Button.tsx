import "./Button.css"

type ButtonProps = {
	/**
	 * The `Button` component has built-in styles, but if you want to set 
	 * additional ones you can set this property, which will be passed down
	 * to the underlying `button` element.
	 */
	className?: string

	/**
	 * Will be invoked when the user clicks on the button.
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

	/**
	 * The text that will be displayed in the button.
	 */
	text: string

	/**
	 * Optionally, this can be used to help determine the style of the button. 
	 * - "normal" is the default style.
	 * - "subtle" is a more subtle style, suitable for buttons that are less
	 * important or likely to be used.
	 * - "important" is a loud style, suitable for buttons that represent
	 * important actions such as deletions.
	 */
	style?: "normal" | "subtle" | "important"
}

function Button({ className, onClick, text, style }: ButtonProps) {
	style ??= "normal"

	return (
		<button
			className={
				"buttonComponent" + 
				" " + (className ?? "") +
				" " + style
			}
			onClick={e => {
				if (onClick) onClick(e)
			}}
		>{text}</button>
	)
}

export default Button
