import React, { useState } from 'react';

import { Theme, createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormControlLabel, Switch, CardMedia, Grid, Avatar, Container, Typography, Paper } from '@material-ui/core';
import StudentProfile from './StudentProfile';


const styles = (theme: Theme) => createStyles({
    root: {

        [theme.breakpoints.down("xl")]: {
            paddingRight: 0,
            paddingLeft: 0
        },
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },

    responsiveField: {
        width: '70vw',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    },
    responsiveFieldSide: {
        width: '100%',
        marginTop: 0,
        marginBottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    },
    about: {
        justifyContent: 'center',
        width: '80%',
        marginTop: 0,
        marginBottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    },

    bigAvatar: {
        width: '20vw',
        height: '20vw',
        margin: 'auto',

    },
    initials: {
        width: '20vw',
        height: '20vw',
        margin: 'auto',
        fontSize: '8vw',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
        textAlign: 'center'
    },
    profile: {
        position: 'relative',
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0
        },
    },
    text: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
        }
    },
    avatar: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    title: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(2),
        },

    },
    container: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    }


})


interface Props extends WithStyles<typeof styles> {
    classes: any,
    user: User,
    userType: string
}

const UserProfile: React.FC<Props> = ({ user, userType, classes }) => {





    // const handleChange = (name: keyof Article) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setArticle({ ...article, [name]: event.target.value });
    // };
    // const toggleLayout = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setArticle({ ...article, sideImg: event.target.checked });
    // };

    console.log('user :', user);
    const { name, surname, email, avatar, program, city, id, about, startDate } = user


    const initials: string = name.charAt(0) + surname.charAt(0)

    const [editMode, setEditMode] = useState<boolean>(false)

    const renderEditProfile = (
        <Grid container spacing={4} className={classes.container} >

            <Grid item xs={12} className={classes.avatar}>
                {avatar ?
                    <Avatar alt={`${name} ${surname}`} src={avatar} className={classes.bigAvatar} />
                    :
                    <Avatar alt={`${name} ${surname}`} className={classes.initials}>{initials}</Avatar>}


                {/* 
                    //     id="image-input"
                    //     // className={classes.responsiveField}
                    //     // accept="image/*"
                    //     type="file"
                    // // multiple
                    // // {...input}
                    // // onChange={(e) => {
                    // //     this.setState({ file: e.target.files[0], isUploading: true }, this.handleUpload)
                    // // }} 
                    ///> */}

            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    InputLabelProps={
                        classes.formLabelFocused
                    }
                    // onChange={handleChange('title')}
                    required
                    id="filled-required"
                    label="Name"
                    defaultValue={name}
                    className={classes.responsiveFieldSide}

                    margin="normal"
                    variant="filled"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    InputLabelProps={
                        classes.formLabelFocused
                    }
                    // onChange={handleChange('title')}
                    required
                    id="filled-required"
                    label="Surname"
                    defaultValue={surname}
                    className={classes.responsiveFieldSide}

                    margin="normal"
                    variant="filled"
                />

            </Grid>
            <Grid item xs={12}  >
                <TextField
                    color="secondary"
                    // onChange={handleChange('text')}
                    id="filled-multiline-static"
                    label="About Me"
                    multiline
                    rows="10"
                    defaultValue={about}
                    className={classes.responsiveFieldSide}
                    margin="normal"
                    variant="filled"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={classes.responsiveFieldSide} color="secondary" component="h5" variant="h5">
                    {id}
                </Typography>

            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    InputLabelProps={
                        classes.formLabelFocused
                    }
                    // onChange={handleChange('title')}
                    required
                    id="filled-required"
                    label="email"
                    defaultValue={email}
                    className={classes.responsiveFieldSide}

                    margin="normal"
                    variant="filled"
                />

            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    InputLabelProps={
                        classes.formLabelFocused
                    }
                    // onChange={handleChange('title')}
                    required
                    id="filled-required"
                    label="Program"
                    defaultValue={program}
                    className={classes.responsiveFieldSide}

                    margin="normal"
                    variant="filled"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    InputLabelProps={
                        classes.formLabelFocused
                    }
                    // onChange={handleChange('title')}
                    required
                    id="filled-required"
                    label="City"
                    defaultValue={city}
                    className={classes.responsiveFieldSide}

                    margin="normal"
                    variant="filled"
                />

            </Grid>

        </Grid>
    )
    const renderProfile = (
        <Grid container spacing={4} >

            <Grid item xs={12} className={classes.avatar}>
                {avatar ?
                    <Avatar alt={`${name} ${surname}`} src={avatar} className={classes.bigAvatar} />
                    :
                    <Avatar alt={`${name} ${surname}`} className={classes.initials}>{initials}</Avatar>
                    // <Input

                    //     id="image-input"
                    //     // className={classes.responsiveField}
                    //     // accept="image/*"
                    //     type="file"
                    // // multiple
                    // // {...input}
                    // // onChange={(e) => {
                    // //     this.setState({ file: e.target.files[0], isUploading: true }, this.handleUpload)
                    // // }} 
                    ///>
                }
            </Grid>


            <Grid item xs={12} >
                <Typography className={classes.responsiveFieldSide} color="primary" component="h3" variant="h3">
                    {name} {surname}
                </Typography>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }} >

                    <Typography className={classes.about} color="secondary" component="h6" variant="h6">
                        {about}
                    </Typography>

                </Grid>


            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={classes.responsiveFieldSide} color="secondary" component="h5" variant="h5">
                    {`ID:  ${id}`}
                </Typography>

            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={classes.responsiveFieldSide} color="secondary" component="h5" variant="h5">
                    {email}
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={classes.responsiveFieldSide} color="secondary" component="h5" variant="h5">
                    {program}
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className={classes.responsiveFieldSide} color="secondary" component="h5" variant="h5">
                    {city}
                </Typography>

            </Grid>


        </Grid >
    )



    return (
        <Grid container spacing={4} className={classes.root}>
            <Grid className={classes.gridImg} item xs={12} >
                <FormControlLabel
                    control={
                        <Switch checked={editMode} value={editMode} onChange={() => setEditMode(!editMode)} />
                    }
                    label="Edit Mode"
                />
            </Grid>
            {editMode ? renderEditProfile : renderProfile}
        </Grid>
    )

}
export default withStyles(styles)(UserProfile)

