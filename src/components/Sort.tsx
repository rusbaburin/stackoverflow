/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import '../assets/styles/sort.css';
import { SORT } from '../common/constants';
import { SortType } from '../types/constants';

interface ISortComponent {
    sortResults: (sort: SortType) => void;
    sort: SortType
}

const SortComponent: React.FC<ISortComponent> = ({ sortResults, sort }: ISortComponent) => {
  function sortByCreation() {
    sortResults(SORT.CREATION);
  }

  function sortByActivity() {
    sortResults(SORT.ACTIVITY);
  }

  return (
    <div className="sort-container">
      <div className={`sort-item ${sort == SORT.CREATION ? 'sort-item_active' : null}`} onClick={sortByCreation}>Creation</div>
      <div className={`sort-item ${sort == SORT.ACTIVITY ? 'sort-item_active' : null}`} onClick={sortByActivity}>Activity</div>
    </div>
  );
};

export default SortComponent;
