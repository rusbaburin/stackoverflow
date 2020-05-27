import React from 'react';

import '../assets/styles/sort.css';
import { SORT } from '../common/constants';

export function SortComponent({ sortResults, sort }) {
    function sortByCreation() {
        sortResults(SORT.CREATION);
    }

    function sortByRelevance() {
        sortResults(SORT.RELEVANCE);
    }

    return (
        <div className='sort-container'>
            <div className={`sort-item ${ sort == SORT.RELEVANCE ? 'sort-item_active' : null }`} onClick={sortByRelevance}>Relevance</div>
            <div className={`sort-item ${ sort == SORT.CREATION ? 'sort-item_active' : null }`} onClick={sortByCreation}>Creation</div>
        </div>
    );
}