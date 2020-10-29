import React from "react";
import {Button,TextField,Grid,Paper,AppBar,Typography,Toolbar,Link,} from "@material-ui/core";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password:"",
            authflag:1
        }
    }
    
    handleChange(event,key) {
        this.setState({
            [key] : event.target.value
        })
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.username && this.state.password){
            const email= localStorage.getItem('email')
            const password = localStorage.getItem('password')
            if(this.state.username !== email){
                alert('Invalid Username')
                return
            }
            if(this.state.password !== password){
                alert(`Invalid Password`)
                return
            }
            alert(`Login Successfully`)
        }

    }
    render() {
        return (
        <div>
            <AppBar position="static" alignitems="center" color="primary">
            </AppBar>

            <Grid container  justify="center" direction='row' >
                <Grid item>
                    <Grid container direction="column" justify="center" spacing={2} style={{justifyContent: 'center',minHeight: '90vh'}}>
                        <Paper variant="elevation" elevation={2} style={{justifyContent: 'center',minHeight: '30vh',padding: '50px'}}>
                            <Grid item>
                                <Typography component="h1" variant="h5">
                                    Login Here
                                </Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={(e)=>this.handleSubmit(e)}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <TextField type="email"
                                                       placeholder="Email"
                                                       fullWidth
                                                       name="username"
                                                       variant="outlined"
                                                       value={this.state.username}
                                                       onChange={(event) => this.handleChange(event,'username')}
                                                       required
                                                       autoFocus/>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="password"
                                                placeholder="Password"
                                                fullWidth
                                                name="password"
                                                variant="outlined"
                                                value={this.state.password}
                                                onChange={(event) =>this.handleChange(event,'password')}
                                                required/>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                style={{width:'100%'}}
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        );
    }
}
export default Login;