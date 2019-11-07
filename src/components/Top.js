import React from 'react'
import Icon from '../lib/Icon'

function Top(props) {

    return (
        <div className='top'>
            <div className='left'>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/'><Icon icon='github'/></a>
                <input type='text' placeholder='Search or jump to...'/>
                <p>Pull request</p>
                <p>Issues</p>
                <p>Marketplace</p>
                <p>Explore</p>
            </div>
            <div className='right'>
                <Icon icon='bell'/>
                <Icon icon='plus'/>
                <Icon icon='user'/>
            </div>
        </div>
    )
}

export default Top 