import { pageTitle, type PagePath } from "../App"
import type { User } from "../types"
import "./Header.css"
import Nav from "./Nav"
import ProfileDropDown from "./ProfileDropDown"

type HeaderProps = {
	currentPage: PagePath

	/**
	 * The currently logged-in user. If one is not provided, then it is assumed
	 * that the user is a guest.
	 */
	user?: User
}

function Header({ currentPage, user }: HeaderProps) {
	return (
		<>
			<Nav
				currentPage={currentPage}
			/>
			<header id="header">
				<div className="headerInner">
					<h1>{pageTitle[currentPage]}</h1>
					<ProfileDropDown user={user} />
				</div>
			</header>
		</>
	)
}

export default Header
