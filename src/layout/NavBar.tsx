import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core'
import SignIn from './SignIn';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AuthToolbar from './AuthToolbar';

const drawerWidth = 300;

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,

    },
    Tbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'center'
    },

})

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    classes: any,
    // container?: Element;
}

const NavBar: React.FC<Props> = ({ classes }) => {

    const {
        user, userType
    } = useContext(AuthContext)


    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div  >
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                    <HomeIcon color="primary" />
                </ListItemIcon>
                <Typography className={classes.toolbar} variant="h5" color="primary">Ubiqum Manager</Typography>
            </ListItem>
            <Divider />

            <List>
                <ListItem button >
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ressources" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <CalendarTodayIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                </ListItem>
                <ListItem button component={Link} to="/appointments"  >
                    <ListItemIcon>
                        <EmojiPeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Appointments" />
                </ListItem>
                {userType !== 'student' && <ListItem button component={Link} to="/students"  >
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Students" />
                </ListItem>}
                <ListItem button component={Link} to="/settings"  >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
                {/* <ListItem button component={Link} to="/signin"  >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sign In" />
                </ListItem> */}

            </List>
            <Divider />
            <SignIn />
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.Tbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Ubiqum Manager
                          </Typography>
                    <AuthToolbar />
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor='left'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>

            </nav>

        </div>
    );
}
export default withStyles(styles)(NavBar)