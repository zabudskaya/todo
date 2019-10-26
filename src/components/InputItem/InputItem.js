import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classname from 'classnames';
import styles from './InputItem.module.css';


class InputItem extends React.Component{

    state = {
        inputValue: ''
    };

    onButtonClick = () => {
        this.setState({
            inputValue: ''
        });

        if(this.state.inputValue !== ''){
            this.props.onClickAdd(this.state.inputValue);
            this.setState({
                error: false
            })

        }else {
            this.setState({
                error: true
            })
        }
    };

    render() {
        return(
            <Grid>
                <TextField
                    id="standard-dense"
                    label="Добавить задание"
                    margin="dense"
                    fullWidth
                    value={this.state.inputValue}
                    onChange={e => this.setState({inputValue: e.target.value.toUpperCase()})}
                    error={this.state.error}
                />
                <Button
                    href=""
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={this.onButtonClick}
                >
                    Добавить задание
                </Button>
            </Grid>
        );
    }
}

export default InputItem;