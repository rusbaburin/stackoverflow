import React from 'react';

import '../assets/styles/sort.css';
import { SORT } from '../common/constants';
import { SortType } from '../types/constants';

interface ISortComponent {
    sortResults: (sort: SortType) => void;
    sort: SortType
}

export const SortComponent: React.FC<ISortComponent> = ({ sortResults, sort }) => {
    function sortByCreation() {
        sortResults(SORT.CREATION);
    }

    function sortByActivity() {
        sortResults(SORT.ACTIVITY);
    }

    return (
        <div className='sort-container'>
            <div className={`sort-item ${ sort == SORT.CREATION ? 'sort-item_active' : null }`} onClick={sortByCreation}>Creation</div>
            <div className={`sort-item ${ sort == SORT.ACTIVITY ? 'sort-item_active' : null }`} onClick={sortByActivity}>Activity</div>
        </div>
    );
}