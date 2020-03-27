import React from 'react';
import Octokit from '@octokit/rest';
import styles from './User.module.css';

const octokit = new Octokit();
class User extends React.Component {
    state = {
        data: []

    };

    componentDidMount() {
        octokit.users.getByUsername({
            username:'zaLenaa'
        }).then(({data}) =>
            this.setState({
                isLoading: false,
                data: data,
            })
        ).catch( error => {
            this.setState({
                isLoading: false,
                error: error
            })
        })
    }


    render(){
        const{data} = this.state;
        return(
            <div className={styles.user}>
                <div className={styles.imgWrap}>
                    <img src={data.avatar_url} alt="" className={styles.img}/>
                </div>
                <div className={styles.info}>
                    <a href={data.html_url} className={styles.username}>
                        {data.name}
                    </a>
                    <p className={styles.bio}>
                        {data.bio}
                    </p>
                    <div className={styles.location}>
                        <img src="./img/pin.svg" alt="" className={styles.icon} />
                        <p className={styles.locationText}>{data.location}</p>
                    </div>
                    <a href="mailto:zabudskaya.hel@gmail.com"  className={styles.contacts}>
                        <img src="./img/mail.svg" alt="почта" className={styles.icon}/>
                        <p className={styles.contactsText}>zabudskaya.hel@gmail.com</p>
                    </a>
                    <a href="https://t.me/lenzab"  className={styles.contacts}>
                        <img src="./img/telegram-2.svg" alt="телеграм"  className={styles.icon}/>
                        <p className={styles.contactsText}>@lenzab</p>
                    </a>

                </div>
            </div>
        )
    }
}

export default User;