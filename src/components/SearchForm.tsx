import React, { RefObject } from 'react';

import '../assets/styles/search.css';
import { Loader } from './Loader';
import { Warning } from './Warning';

interface ISearchForm {
  loading: boolean;
  noItems: boolean;
  getPosts: (title: string) => void
}

const SearchFrom: React.FC<ISearchForm> = (props) => {
  const inputRef: RefObject<HTMLInputElement> = React.createRef();

  const getPosts = () => {
    //@ts-ignore
    props.getPosts(inputRef.current.value);
  }

  return (
    <div className="search-container">
      <div>
        <h1 className='search-title'>Search on stackoverflow</h1>
      </div>
      <div className='search-form-container'>
        <div className="search-form">
          <div className='search-item-container'>
            <input className='search-input' type='text' ref={inputRef} />
          </div>
          <div className='search-item-container'>
            <button className='search-button' onClick={getPosts}>Search</button>
          </div>
        </div>
        <div>
          { props.loading && <Loader /> }
          { props.noItems && <Warning title='There are no results for this question' /> }
        </div>
      </div>
    </div>
  );
}

export default SearchFrom;
