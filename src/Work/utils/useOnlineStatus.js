import { useState, useEffect } from 'react';
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", offlineListener = () => {
            setOnlineStatus(false);
        });
        window.addEventListener("online", onlineListener = () => {
            setOnlineStatus(true);
        });
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;