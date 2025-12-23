import { useState, useEffect } from "react";

// This custom hook just show the 'status'( online/offline ) of a user's Internet connection?
const useOnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(true); // Hold status of user's Internet connection(T/F)

	useEffect(() => {
		// If User is Offline
		window.addEventListener("offline", () => {
			setOnlineStatus(false);
		});
		// If User is Online
		window.addEventListener("online", () => {
			setOnlineStatus(true);
		});
	}, []);

	return onlineStatus;
};

export default useOnlineStatus;
