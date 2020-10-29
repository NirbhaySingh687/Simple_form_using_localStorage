import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar,Toolbar,Typography,Button} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1
        }
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        left:0,
        justifyContent: "space-evenly"
    }
}));

const Header = props => {
    const { history } = props;
    const classes = useStyles();
    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        HOME
                    </Typography>
                    <div className={classes.headerOptions}>
                        <Button
                            variant="contained"
                            onClick={() => handleButtonClick("/")}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => handleButtonClick("/register")}
                        >
                            Register
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Header);

