import { useRef, useState } from "react"
import type { User } from "../types"
import "./Header.css"
import guestUser from "../util/guestUser"
import { Link, useNavigate } from "react-router-dom"
import Modal from "./Modal"
import Button from "./Button"
import ProfileDropDown from "./ProfileDropDown"

type HeaderProps = {
	pageTitle: string

	/**
	 * The currently logged-in user. If one is not provided, then it is assumed
	 * that the user is a guest.
	 */
	user?: User
}

function Header({ pageTitle, user }: HeaderProps) {
	return (
		<header id="header">
			<div className="headerInner">
				<h1>{pageTitle}</h1>
				<ProfileDropDown user={user} />
			</div>
		</header>
	)
}

export default Header
