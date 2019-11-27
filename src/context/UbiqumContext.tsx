import React, { useState, createContext } from 'react'
import { studentsOffline } from '../studentsOffline'



const initStudents: Students = studentsOffline


const initMentors: Mentors = [
    {
        id: 'BE-JA-LU-MEN',
        name: "Lucas",
        avatar: "",
        surname: "Dupias",
        program: "Full-Stack",
        city: "Berlin",
        email: "lucas@ubiqum.com",
        calendly: "https://calendly.com/lucas-ubiqum/berlin",
        startDate: "5/6/2019",
    },
    {
        id: 'BE-JA-OT-MEN',
        name: "Ottavia",
        avatar: "",
        surname: "Feletig",
        program: "Full-Stack",
        city: "Berlin",
        email: "ottavia@ubiqum.com",
        calendly: "https://calendly.com/ottavia-ubiqum/berlin",
        startDate: "3/6/2019",
    }
]

const initAllUsers: Array<User> = []
initMentors.forEach(m => initAllUsers.push(m))
initStudents.forEach(m => initAllUsers.push(m))


const initUbiqum: UbiqumContextInterface = {
    mentors: initMentors,
    students: initStudents,
    allUsers: initAllUsers
}
export const UbiqumContext = createContext<UbiqumContextInterface>(initUbiqum);

const UbiqumContextProvider = (props: { children: React.ReactNode; }) => {
    const [ubiqumContent, setUbiqumContent] = useState(initUbiqum)


    return (
        <UbiqumContext.Provider value={ubiqumContent}>
            {props.children}
        </UbiqumContext.Provider>
    )

}

export default UbiqumContextProvider


