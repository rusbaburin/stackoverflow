/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

interface ITag {
    title: string;
    getTagPosts: (tag: string) => void
}

const Tag: React.FC<ITag> = ({ title, getTagPosts }: ITag) => {
  function handleTagPosts() {
    getTagPosts(title);
  }

  return <div className="question-tag" onClick={handleTagPosts}>{ title }</div>;
};

export default Tag;
