import type { User } from "../types"

/**
 * Creates a default instance of {@link User}.
 */
function guestUser(): User {
	return {
		profilePicture: "/default_profile_picture.jpg",
		username: "Guest",
		id: ""
	}
}

export default guestUser
