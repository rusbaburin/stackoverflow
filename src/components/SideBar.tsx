import React from 'react';

import { Loader } from './Loader';
import { SideQuestion } from './SideQuestion';
import { SortComponent } from './Sort';

import { ISideResult } from '../types/state';
import { SortType } from '../types/constants';

interface ISideBar {
    items: ISideResult;
    loading: boolean;
    display: boolean;
    closeSideBar: () => void;
    sort: SortType;
    sortSideResults: (sort?: SortType) => void;
}

export const SideBar: React.FC<ISideBar> = ({ items, loading, display, closeSideBar, sort, sortSideResults }) => {
    const displayClass = display ? 'results-sidebar-container_displayed' : 'results-sidebar-container_faded';

    return (
        <div className={`results-sidebar-container ${ displayClass }`}>
            <div className='sidebar-close-container'>
                <div className='sidebar-close-icon' onClick={closeSideBar}>&#x2715;</div>
            </div>
            <div className='sidebar-sort-container'>
                <SortComponent sort={sort} sortResults={sortSideResults} />
            </div>
            {
                !loading && items.map((item: ISideResult) => <SideQuestion question={item} />)
            }
            { loading && <Loader /> }
            { (items.length == 0 && !loading ) && <p>No questions here</p> }
        </div>
    );
}