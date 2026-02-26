import { useRef, useState } from "react"
import type { User } from "../types"
import "./Header.css"
import guestUser from "../util/guestUser"
import { Link, useNavigate } from "react-router-dom"
import Modal from "./Modal"
import Button from "./Button"

type HeaderProps = {
	pageTitle: string

	/**
	 * The currently logged-in user. If one is not provided, then it is assumed
	 * that the user is a guest.
	 */
	user?: User
}

function Header({ pageTitle, user }: HeaderProps) {
	const { profilePicture, username } = user ?? guestUser()

	const [showProfileMenu, setShowProfileMenu] = useState(false)

	const profileIcon = useRef<HTMLImageElement | null>(null)

	const navigate = useNavigate()

	return (
		<header id="header">
			<div className="headerInner">
				<h1>{pageTitle}</h1>
				<img 
					className="headerProfileIcon"
					src={profilePicture} 
					alt="Profile picture." 
					onClick={() => setShowProfileMenu(prev => !prev)}
					ref={profileIcon}
				/>
				<Modal
					className="headerProfileMenu"
					show={showProfileMenu}
					onClickAway={e => {
						if (e.target == profileIcon.current) return

						setShowProfileMenu(false)
					}}
				>
				{user ?
					<>	
						<h2>{username}</h2>
						<Button
							text="Manage Account"
							onClick={() => {
								navigate("/account")
							}}
							className="profileMenuButton"
							style="normal"
						/>
						<Button 
							text="Log Out"
							onClick={() => {
								// "logging out" can't be implemented until
								// the authentication system is figured out
								// (on the backend).
								//
								// This is a placeholder.

								navigate(0)
							}}
							className="profileMenuButton"
							style="subtle"
						/>						
					</>
					:
					<>
						<p>
							You aren't currently logged in. 
						</p>
						<p>
							<Link to="/login">Log in</Link>
							&nbsp;or&nbsp; 
							<Link to="/register">create an account.</Link>
						</p>
					</>
				}
				</Modal>
			</div>
		</header>
	)
}

export default Header
