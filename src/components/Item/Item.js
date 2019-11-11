import React from 'react';
import classname from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

class Item extends React.Component{

    componentDidMount() {
        this.timer = setInterval(() => console.log('mount'), 1000);
    };

    componentWillUnmount() {
      clearInterval(this.timer);
    };

    static propTypes = {
        onClickDone: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired
    };

    static defaultProps = {
        value: 'Тут должно быть задание',
        isDone: false
    };

    render(){
        const {value, isDone, index, onClickDone, id} = this.props;
        return (
            <label
                htmlFor={`checkbox[${index}]`}
                onClick={() => onClickDone(id)}
                className={
                    classname({
                        [styles.item]: true,
                        [styles.done]: isDone,
                    })}>
                {value}
            </label>
        );
    }
}

export default Item;