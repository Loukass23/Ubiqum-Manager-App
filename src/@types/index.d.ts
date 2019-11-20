interface Student {
    name: string,
    surname: string,
    email: string,
    avatar: string,
    program: string,
    city: string,
    startDate: date,
    jobCenter: boolean
}





/**
 * CONTEXT
 */

interface AuthContextInterface {
    isAuthenticated: Boolean,
    student: Student
}

interface ThemeContextInterface {
    theme: any,
    setColors: any
}
