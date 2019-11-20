import React, { useState, createContext } from 'react'


const initStudent: Student = {
    name: 'Lucas',
    surname: 'DPS',
    email: '',
    avatar: 'https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349630/MERN/20170409_193026.jpg',
    program: '',
    city: '',
    startDate: new Date(),
    jobCenter: false
}
const initAuth: AuthContextInterface = {
    isAuthenticated: false,
    student: initStudent
}
export const AuthContext = createContext<AuthContextInterface>(initAuth);

const AuthContextProvider = (props: { children: React.ReactNode; }) => {
    const [auth, setAuth] = useState({
        isAuthenticated: true,
        student: initStudent
    })

    const setUserAuth = (student: Student) => {
        setAuth({
            isAuthenticated: true,
            student
        })
    }


    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider


