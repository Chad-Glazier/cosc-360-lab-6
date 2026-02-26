import { useRef, useState } from "react"
import type { User } from "../types"
import "./Header.css"
import guestUser from "../util/guestUser"
import { Link } from "react-router-dom"
import Modal from "./Modal"

export type HeaderProps = {
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
						<Link to="/account">Manage account</Link>
						<button>Log out</button>						
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
