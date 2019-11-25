import React, { useState, createContext } from 'react'
import { studentsOffline } from '../studentsOffline'



const initStudents: Students = studentsOffline

const initMentors: Mentors = [
    {
        name: "Lucas",
        avatar: "",
        surname: "Dupias",
        program: "Full-Stack",
        city: "Berlin",
        email: "lucas@ubiqum.com",
        calendly: "https://calendly.com/lucas-ubiqum/berlin"
    },
    {
        name: "Ottavia",
        avatar: "",
        surname: "Feletig",
        program: "Full-Stack",
        city: "Berlin",
        email: "ottavia@ubiqum.com",
        calendly: "https://calendly.com/ottavia-ubiqum/berlin"
    }
]

const initUbiqum: UbiqumContextInterface = {
    mentors: initMentors,
    students: initStudents
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


