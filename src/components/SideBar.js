import React from 'react';

import { Loader } from './Loader';
import { SideQuestion } from './SideQuestion';

export function SideBar({ items, loading, display, closeSideBar }) {
    const displayClass = display ? 'results-sidebar-container_displayed' : 'results-sidebar-container_faded';

    return (
        <div className={`results-sidebar-container ${ displayClass }`}>
            <div className='sidebar-close-container'>
                <div className='sidebar-close-icon' onClick={closeSideBar}>&#x2715;</div>
            </div>
            {
                !loading && items.map(item => <SideQuestion question={item} />)
            }
            { loading && <Loader /> }
            { (items.length == 0 && !loading ) && <p>No questions here</p> }
        </div>
    );
}