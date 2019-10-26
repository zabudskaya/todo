import React from 'react';
import classname from 'classnames';
import styles from './Item.module.css';

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

export default Item;