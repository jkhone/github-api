import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showUser } from '../redux/ducks/calls'
import Icon from '../lib/Icon'


function Side(props) {
    const user = useSelector(appState => appState.repoReducer.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showUser())
    }, [dispatch])

    
    return (
        <div className='side'>
            <img src={user.avatar_url} alt='' />
            <p><Icon icon='globe'/> Set Status</p>
            <h3>{user.login}</h3>
            <button>Edit Profile</button>
        </div>
    )
}

export default Side 