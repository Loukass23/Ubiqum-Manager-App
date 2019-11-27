import React, { useState, createContext } from 'react'


const initUserMentor: Mentor = {
    id: 'BE-JA-LU-MEN',
    name: 'Lucas',
    surname: 'DPS',
    email: 'lucas@ubiqum.com',
    avatar: '',
    program: 'Full-Stack',
    city: 'Berlin',
    startDate: "5/6/2019",
    cohort: "NA",
    calendly: 'https://calendly.com/lucas-ubiqum/berlin',
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus odit rerum accusamus ducimus, earum quam perspiciatis exercitationem doloremque pariatur nobis! Modi, eos facilis. Suscipit vero quam hic reprehenderit repellendus laborum.'
}
const initUserStudent: Student = {
    id: 'BE-JA-LU-11/2018',
    name: 'Lucas',
    surname: 'DPS',
    email: 'lucas@ubiqum.com',
    avatar: 'https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349630/MERN/20170409_193026.jpg',
    program: 'Full-Stack',
    city: 'Berlin',
    cohort: "106",
    startDate: "9/9/2019",
    progress: {
        module: "3",
        sprint: "3",
        day: "2",
        refDay: "42"
    },
    about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus odit rerum accusamus ducimus, earum quam perspiciatis exercitationem doloremque pariatur nobis! Modi, eos facilis. Suscipit vero quam hic reprehenderit repellendus laborum.'
}



const initAuthStudent: AuthContextInterface = {
    isAuthenticated: true,
    user: initUserStudent,
    userType: 'student'
}

const initAuthMentor: AuthContextInterface = {
    isAuthenticated: true,
    user: initUserMentor,
    userType: 'mentor'
}
export const AuthContext = createContext<AuthContextInterface>(initAuthMentor);

const AuthContextProvider = (props: { children: React.ReactNode; }) => {

    const [user, setUser] = useState<User>(initUserMentor)

    const [auth, setAuth] = useState(initAuthMentor)

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


