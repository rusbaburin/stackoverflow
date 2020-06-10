import React from 'react';

interface ITag {
    title: string;
    getTagPosts: (tag: string) => void
}

export const Tag: React.FC<ITag> = ({ title, getTagPosts }) => {
    function handleTagPosts() {
        getTagPosts(title);
    }

    return <div className='question-tag' onClick={handleTagPosts}>{ title }</div>
};