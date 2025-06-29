/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import baseUrl from "../service/baseUrl";

export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [loadingUser, setLoadingUser] = useState(true)
	useEffect(() => {
        // Get user ID from local storage
        const userId = JSON.parse(localStorage.getItem("UID"));
        
        if(userId) {
            // Fetch user data from API
            fetchUserData(userId);
        }else{
			setLoadingUser(false)
		}
    }, []);

    const fetchUserData = async (userId) => {

		setLoadingUser(true);
        try {
            const response = await fetch(`${baseUrl}/api/auth/user/${userId}`);
            if (response.ok) {
                const userData = await response.json();
                setAuthUser(userData);
            } else {
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }finally{
			setLoadingUser(false)
		}
    };
	return <AuthContext.Provider value={{ authUser, setAuthUser,loadingUser }}>{children}</AuthContext.Provider>;
};