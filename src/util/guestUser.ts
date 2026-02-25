import type { User } from "../types";

/**
 * Creates a default instance of {@link User}.
 */
function guestUser(): User {
	return {
		profilePicture: "public/default_profile_picture.jpg",
	};
}

export default guestUser;
