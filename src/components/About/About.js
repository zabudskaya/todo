import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import Octokit from '@octokit/rest';
import styles from './About.module.css';


const octokit = new Octokit();
class About extends React.Component{
    state = {
        isLoading: true,
        repoList: [],
        fetchSuccess: false,
        error: '',

    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'zaLenaa'
        }).then(({ data }) =>
            this.setState({
                isLoading: false,
                repoList: data,
                fetchSuccess: true,
            })
        ).catch(error => {
            this.setState({
                isLoading: false,
                fetchSuccess: false,
                error: error,
            })
        })

    }


    render() {
        const { isLoading, repoList, fetchSuccess, error } = this.state;
        return (
            <CardContent>
                <h1> { isLoading ? <LinearProgress/> : 'Обо мне' }</h1>
                {!isLoading &&
                <div>
                    {!fetchSuccess ? 'Упс! Что-то пошло не так.' + error :
                        <div>
                            <div className={styles.user}>
                                <img src={repoList[0].owner.avatar_url} alt="photo" className={styles.img}/>
                                <a href={repoList[0].owner.html_url} className={styles.username}>
                                    {repoList[0].owner.login}
                                </a>
                            </div>
                            <div>
                                <h2>Мои репозитории</h2>
                                <ol>
                                    {repoList.map(repo => (<li key={repo.id}>
                                        <a href={repo.html_url} className={styles.link}>
                                            {repo.name}
                                        </a>
                                    </li>))}
                                </ol>
                            </div>
                        </div>
                    }
                </div>
                }
            </CardContent>
        )
    }
}

export default About;
