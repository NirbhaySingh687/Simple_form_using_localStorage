import React from "react";
import {Button,TextField,Grid,Paper,AppBar,Typography} from "@material-ui/core";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            nameError: '',
            username: "",
            usernameError : '',
            password:"",
            passwordError: ''
        }
    }
    validation = ()=>{
        let validateFlag = true
        if(!this.state.name){
            validateFlag = false
            this.setState({
                nameError : 'Name is Required'
            })
        }
        if(!this.state.username){
            validateFlag = false
            this.setState({
                usernameError : 'Email is Required'
            })
        }
        if(!this.state.password){
            validateFlag = false
            this.setState({
                passwordError : 'Password is Required'
            })
        }
        return validateFlag
    }
    handleChange(event,key) {
        this.setState({
            [key] : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.validation()){
            localStorage.setItem("name", this.state.name)
            localStorage.setItem("email", this.state.username)
            localStorage.setItem("password", this.state.password)

            this.setState({
                name: '',
                username: '',
                password: ''
            })
            alert(`Successfully Register`)
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
                                        Register Here
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField type="text"
                                                           helperText={this.state.nameError}
                                                           placeholder="Name"
                                                           fullWidth
                                                           name="name"
                                                           variant="outlined"
                                                           value={this.state.name}
                                                           onChange={(event) => this.handleChange(event,'name')}
                                                           autoFocus/>
                                            </Grid>
                                            <Grid item>
                                                <TextField type="email"
                                                           helperText={this.state.usernameError}
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
                                                    helperText={this.state.passwordError}
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
export default Register;