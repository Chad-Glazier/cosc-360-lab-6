import { useState } from "react"
import type { User } from "../types"
import "./Header.css"
import guestUser from "../util/guestUser"
import { Link } from "react-router-dom"

type HeaderProps = {
	pageTitle: string
	/**
	 * The currently logged-in user. If one is not provided, then it is assumed
	 * that the user is a guest.
	 */
	user?: User
};

function Header({ pageTitle, user }: HeaderProps) {
	const { profilePicture, username } = user ?? guestUser()

	const [ showProfileMenu, setShowProfileMenu ] = useState(false)

	return (
		<header id="header">
			<div className="headerInner">
				<h1>{pageTitle}</h1>
				<div className="headerProfileMenuContainer">
					<img 
						className="headerProfileIcon"
						src={profilePicture} 
						alt="Profile picture." 
						onClick={() => setShowProfileMenu(prev => !prev)}
					/>
					{showProfileMenu && <menu
						className="headerProfileMenu"
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
									<Link to="/login">log in</Link>
									&nbsp;or&nbsp; 
									<Link to="/register">create an account.</Link>
								</p>
							</>
						}
					</menu>}
				</div>
			</div>
		</header>
	)
}

export default Header
