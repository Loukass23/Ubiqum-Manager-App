/**
 * User Management
 */
interface Student {
    name: string,
    surname?: string,
    email: string,
    avatar?: string,
    program: string,
    cohort: string,
    city: string,
    startDate: date,
    endDate?: Date,
    jobCenter?: any,
    progress: Progress
    gitHub?: string
}
interface Progress {
    module: any,
    sprint: any,
    day: any,
    refDay: any
}
type Students = Array<Student>

interface Mentor {
    name: string,
    surname: string,
    avatar: string,
    program: string,
    city: string,
    email: string,
    calendly: string
}

type Mentors = Array<Mentor>

type User = Student | Mentor


/**
 * CONTEXT
 */

interface AuthContextInterface {
    user: User,
    isAuthenticated: Boolean,
    userType: string

}
interface UbiqumContextInterface {
    mentors: Mentors,
    students: Students
}

interface ThemeContextInterface {
    theme: any,
    setColors: any
}
