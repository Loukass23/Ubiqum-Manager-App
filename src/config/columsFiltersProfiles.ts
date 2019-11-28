import { MUIDataTableColumn } from "mui-datatables";

export const extractFilterProfiles = (userType: string, user: User) => {
    const { city, program } = user
    let programArr: Array<string>
    if (program === 'Full-Stack') programArr = ['JAVA', 'MERN']
    else programArr = [program]
    let columns: MUIDataTableColumn[] = [

        {
            name: "city",
            label: "City",
            options: {
                filter: true,
                filterList: [city],
                // customFilterListOptions: { render: v => `Title: ${v}` },
                // filterType: 'textField' // set filterType's at the column level
            }
        },
        {
            name: "program",
            label: "Program",
            options: {
                filter: true,
                filterList: programArr,
            }
        },
        {
            name: "cohort",
            label: "Cohort",
            options: {
                filter: true,
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: false,
                // filterList: ['Franky Miles'],
                // customFilterListOptions: { render: v => `Name: ${v}` },
                // filterOptions: {
                //     names: ['a', 'b', 'c', 'Business Analyst']
                // },
            }
        },
        {
            name: "surname",
            label: "Surname",
            options: {
                filter: false,

            }
        },
    ];

    // if (userType === 'mentor') {
    //     columns.push({
    //         name: "progress",
    //         label: "Progress",
    //         options: {
    //             filter: false,

    //         }
    //     })
    // }
    columns.push({
        name: "id",
        label: "ID",
        options: {
            filter: false,
        }
    })

    return columns
}



export const extractAllColumns = (data: Array<Object>) => {
    const dataItem = data[0]

    const keys = Object.keys(dataItem) as (keyof Object)[]
    const columns: MUIDataTableColumn[] = keys.map((key) => {
        console.log(typeof (dataItem[key]));
        if (typeof (dataItem[key]) !== 'object') {

            const upper = key.replace(/^\w/, c => c.toUpperCase());
            const label = upper.replace(/([a-z])([A-Z])/g, '$1 $2');

            const col: MUIDataTableColumn = {
                name: key,
                label: label,
                options: {
                    filter: true,
                    sort: true,
                }
            }
            return col
        }
        else {
            const col: MUIDataTableColumn = {
                name: '',
                label: '',
                options: {
                    filter: true,
                    sort: true,
                }
            }
            return col
        }
    })
        .filter(key => key.name !== '')
    return columns
}