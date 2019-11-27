import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Avatar, Theme, createStyles, withStyles } from '@material-ui/core'

const styles = (theme: Theme) => createStyles({


    bigAvatar: {
        // width: '20vw',
        // height: '20vw',
        // margin: 'auto',

    },
    initials: {
        // width: '20vw',
        // height: '20vw',
        // margin: 'auto',
        // fontSize: '8vw',
        olor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
        textAlign: 'center'
    },

    avatar: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },



})
interface Props {
    user: User,
    classes: any
}

const AvatarLogin: React.FC<Props> = ({ user, classes }) => {
    const { name, surname, avatar } = user
    const initials: string = name.charAt(0) + surname.charAt(0)
    if (avatar) return (<Avatar alt={`${name} ${surname}`} src={avatar} className={classes.bigAvatar} />)
    else return (<Avatar alt={`${name} ${surname}`} className={classes.initials}>{initials}</Avatar>)

}

export default withStyles(styles)(AvatarLogin)
