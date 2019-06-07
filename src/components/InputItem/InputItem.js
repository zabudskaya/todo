import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = ({ className }) => (<p className={className}>
    <TextField
        id="standard-dense"
        label="Добавить задание"
        margin="0"
        fullWidth
    />
</p>);

export default InputItem;