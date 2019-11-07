import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showRepos } from '../redux/ducks/calls'
import Icon from '../lib/Icon'

function Repos(props) {
    const repos = useSelector(appState => appState.repoReducer.repos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showRepos())
    }, [dispatch])

    return (
        <div className='repos'>
            <div className='categories'>
                <p>Overview</p>
                <p>Repositories</p>
                <p>Projects</p>
                <p>Packages</p>
                <p>Stars</p>
                <p>Followers</p>
                <p>Following</p>
            </div>
            <div className='search'>
                <input type='text' placeholder='Find your repository...'></input>
                <button>Type</button>
                <button>Language</button>
                <button className='new'><Icon icon='book'/> New</button>
            </div>
            {repos.map((repo, i) => (
                <div key={'repo' + i} className='onerepo'>
                    <div>
                    <a href={repo.html_url}><p>{repo.name}</p></a>
                    <h4>{repo.language}</h4>
                    </div>
                    <button><Icon icon='star'/> Star</button>
                </div>
            ))}

        </div>
    )
}

export default Repos