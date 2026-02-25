import { useState } from "react"
import type { User } from "../types"
import "./Header.css"
import guestUser from "../util/guestUser"

type HeaderProps = {
	pageTitle: string
	/**
	 * The currently logged-in user. If one is not provided, then it is assumed
	 * that the user is a guest.
	 */
	user?: User
};

function Header({ pageTitle, user }: HeaderProps) {
	const { profilePicture } = user ?? guestUser()

	const [ showProfileMenu, setShowProfileMenu ] = useState(false)

	return (
		<header id="header">
			<div className="headerInner">
				<h1>{pageTitle}</h1>
				<img 
					className="headerProfileIcon"
					src={profilePicture} 
					alt="Profile picture." 
					onClick={() => {

					}}
					/>				
			</div>
		</header>
	)
}

export default Header
