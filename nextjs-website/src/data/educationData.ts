export type EducationData = {
    id: number,
    institution: string,
    course: string,
    startYear: string,
    endYear: string
}

export const educationData: EducationData[] = [
    {
        id: 1,
        institution: 'John Abbott College',
        course: 'Computer Science - DEC',
        startYear: '2020',
        endYear: '2023'
    },
    {
        id: 2,
        institution: 'MacDonald High School',
        course: 'High School Diploma',
        startYear: '2015',
        endYear: '2020'
    }
]