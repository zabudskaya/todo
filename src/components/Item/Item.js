import React from 'react';
import classname from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

const Item = ({value, isDone, index, onClickDone, id}) => (
    <label
        htmlFor={`checkbox[${index}]`}
        onClick={() => onClickDone(id)}
        className={
            classname({
                [styles.item]: true,
                [styles.done]: isDone,
            })}>
        {value}
    </label>);

Item.defaultProps = {
    value: 'Тут должно быть задание',
    isDone: false
};

Item.propTypes = {
    onClickDone: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Item;