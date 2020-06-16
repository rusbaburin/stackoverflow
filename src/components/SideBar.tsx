/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import Loader from './Loader';
import SideQuestion from './SideQuestion';
import SortComponent from './Sort';

import { IQuestionInfo } from '../types/response';
import { SortType } from '../types/constants';

interface ISideBar {
    items: IQuestionInfo[];
    loading: boolean;
    display: boolean;
    closeSideBar: () => void;
    sort: SortType;
    sortSideResults: (sort?: SortType) => void;
}

const SideBar: React.FC<ISideBar> = (props: ISideBar) => {
  const {
    items, loading, display, closeSideBar, sort, sortSideResults,
  } = props;
  const displayClass = display ? 'results-sidebar-container_displayed' : 'results-sidebar-container_faded';

  return (
    <div className={`results-sidebar-container ${displayClass}`}>
      <div className="sidebar-close-container">
        <div className="sidebar-close-icon" onClick={closeSideBar}>&#x2715;</div>
      </div>
      <div className="sidebar-sort-container">
        <SortComponent sort={sort} sortResults={sortSideResults} />
      </div>
      {
          !loading && items.map((item: IQuestionInfo) => <SideQuestion question={item} />)
      }
      { loading && <Loader /> }
      { (items.length == 0 && !loading) && <p>No questions here</p> }
    </div>
  );
};

export default SideBar;
