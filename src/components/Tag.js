import React from 'react';

export function Tag({ title, getTagPosts }) {
    function handleTagPosts() {
        getTagPosts(title);
    }

    return <div className='question-tag' onClick={handleTagPosts}>{ title }</div>
};