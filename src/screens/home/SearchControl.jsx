import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import artists from './../../common/artists';
import genres from './../../common/genre';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';





 class ResetPasswordForm extends React.Component {

    state = {
        user: {
            MovieName:'',
            password: '',
            repeatPassword: '',
        },
    };

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }

    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isPasswordMatch');
    }

    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    handleSubmit = () => {
        // your submit logic
    }

    render() {
        const { user } = this.state;

        return (
            <Card>
            <Typography 
                color = "theme.palette.primary.light">
                FIND MOVIES BY:
                    </Typography>

            <ValidatorForm
                onSubmit={this.handleSubmit}>
                <TextValidator
                     label="Movie Name"
                    onChange={this.handleChange}
                    name="Movie Name"
                    type="text"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={user.MovieName}
                />
                 

                 {/* <FormControl >
                <InputLabel htmlFor = "select-multiple-checkbox"> Genres </InputLabel> 
                <Select
                multiple
                input = { < Input id = "select-multiple-checkbox-genre" /> }
                renderValue = { selected => selected.join(',') }
                value = { genres } > 
                {genres.map(genre => ( <
                        MenuItem key = { genre.id }
                        value = { genre.genre } >
                        <
                        Checkbox checked = { this.state.genres.indexOf(genre.genre) > -1 }
                        /> <
                        ListItemText primary = { genre.genre }
                        /> < /
                        MenuItem >
                    ))
                } 
                </Select> 
                </FormControl>



                <FormControl  >
                <InputLabel htmlFor = "select-multiple-checkbox"> Artists </InputLabel>
                <Select
                multiple
                input = { < Input id = "select-multiple-checkbox" /> }
                renderValue = { selected => selected.join(',') }
                value = { artists }
                onChange = { this.artistSelectHandler } > 
                { artists.map(artist => ( <
                        MenuItem key = { artist.id }
                        value = { artist.first_name + " " + artist.last_name } >
                        <
                        Checkbox checked = { this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1 }
                        /> <
                        ListItemText primary = { artist.first_name + " " + artist.last_name }
                        /> < /
                        MenuItem >
                    ))
                } </Select> 
                </FormControl>


 */}

                <TextValidator
                     label="Release Sate Start"
                    onChange={this.handleChange}
                    name=""
                    type="date"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={user.password}
                />
                 <TextValidator
                     label="Release Sate End"
                    onChange={this.handleChange}
                    name=""
                    type="date"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={user.password}
                />
                <TextValidator
                    label="Repeat password"
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={['password mismatch', 'this field is required']}
                    value={user.repeatPassword}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>

            </Card>
        );
    }
}

export default ResetPasswordForm;