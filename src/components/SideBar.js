import React from 'react';

import { Loader } from './Loader';
import { SideQuestion } from './SideQuestion';

export function SideBar({ items, loading, display }) {
    const displayClass = display ? 'results-sidebar-container_displayed' : 'results-sidebar-container_faded';

    return (
        <div className={`results-sidebar-container ${ displayClass }`}>
            {
                !loading && items.map(item => <SideQuestion question={item} />)
            }
            { loading && <Loader /> }
            { (items.length == 0 && !loading ) && <p>No questions here</p> }
        </div>
    );
}