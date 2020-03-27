import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styles from './InputItem.module.css';



class InputItem extends React.Component{


    static propTypes = {
        onClickAdd: PropTypes.func.isRequired
    };

    state = {
        inputValue: '',
    };



    onButtonClick = () => {
        this.setState({
            inputValue: '',
        });

        const {props} = this.props;

        const value = props.map(item => item.value);

        const check = el => el === this.state.inputValue;

        if(value.some(check)){
           this.setState({
               repeat: true
           })

        }else{
           this.setState({
               repeat: false
           })
        }

        if(this.state.inputValue && !value.some(check) && this.state.inputValue.trim()){
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
        const {repeat} = this.state;
        return(
            <Grid>
                <TextField
                    id="standard-dense"
                    label="Опишите задачу"
                    margin="dense"
                    fullWidth
                    value={this.state.inputValue}
                    onChange={e => this.setState({inputValue: e.target.value.toUpperCase()})}
                    error={this.state.error}
                />
                {!repeat ? '' :
                    <p className={styles.repeat}>Такая задача уже есть. Добавьте другую!</p>
                }
                <Button
                    href=""
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={this.onButtonClick}
                >
                    Добавить
                </Button>
            </Grid>
        );
    }
}


export default InputItem;