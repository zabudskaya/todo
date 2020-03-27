import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Octokit from '@octokit/rest';
import User from '../User/User';
import styles from './About.module.css';


const octokit = new Octokit();

const color = {
    CSS: styles.purple,
    JavaScript: styles.yellow,
    HTML: styles.red
};

class About extends React.Component{
    state = {
        isLoading: true,
        repoList: [],
        fetchSuccess: false,
        error: '',
        page: 0,
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
            console.log(error);
            this.setState({
                isLoading: false,
                fetchSuccess: false,
                error: error.toString(),
            })
        });

    }

    render() {
        const { isLoading, repoList, fetchSuccess, error } = this.state;

        const totalPage = repoList.length / 5;

        const pages = [];

        for(let i = 0; i < totalPage; i++){
            pages.push(i)
        }


        return (
            <CardContent className={styles.about}>
                {!isLoading &&
                <div>
                    {!fetchSuccess ?
                        <div>
                            <h3 className={styles.error}>Упс! Что-то пошло не так.</h3>
                            <p>{error}</p>
                        </div> :
                        <div>
                            <User/>
                            <div className={styles.repos}>
                                <ul className={styles.list}>
                                    {repoList.filter((repo, key) => this.state.page * 5 <= key && (this.state.page + 1) * 5 > key)
                                        .map(repo => (<li  key={repo.id} className={styles.listItem}>
                                        <a href={repo.html_url} className={styles.link}>
                                            {repo.name}
                                        </a>
                                        {repo.description &&
                                            <p className={styles.description}>
                                                {repo.description}
                                            </p>
                                        }
                                        <div className={styles.bottomBlocks}>
                                            <div className={styles.language}>
                                                <div className={styles.languageColor + ' ' + color[repo.language]}/>
                                                <p className={styles.languageText}>
                                                    {repo.language}
                                                </p>
                                            </div>
                                            <div>
                                                {repo.homepage &&
                                                    <a href={repo.homepage} className={styles.demo}>
                                                        Demo
                                                    </a>
                                                }
                                            </div>
                                        </div>
                                    </li>))}
                                </ul>
                                <div className={styles.pages + ' ' + (pages.length === 1 ? styles.hidden : '')}>
                                    {pages.map(page => (
                                        <button type="button" className={styles.pagesSwitch + ' ' + (this.state.page === page ? styles.active : '')} onClick={() => this.setState({page: page})}>{page + 1}</button>
                                    ))}

                                </div>
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
