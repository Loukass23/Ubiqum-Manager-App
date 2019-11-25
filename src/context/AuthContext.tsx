import React, { useState, createContext } from 'react'


const initUser: Mentor = {
    name: 'Lucas',
    surname: 'DPS',
    email: '',
    avatar: 'https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349630/MERN/20170409_193026.jpg',
    program: '',
    city: '',
    calendly: ''
}



const initAuth: AuthContextInterface = {
    isAuthenticated: true,
    user: initUser,
    userType: 'mentor'
}
export const AuthContext = createContext<AuthContextInterface>(initAuth);

const AuthContextProvider = (props: { children: React.ReactNode; }) => {

    const [user, setUser] = useState<User>(initUser)

    const [auth, setAuth] = useState(initAuth)

    const setUserAuth = (user: User) => {
        setUser(user)
    }

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider


