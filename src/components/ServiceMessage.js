import React from 'react';

export function ServiceMessage({ title, type }) {
    let classMessage = null;

    switch (type) {
        case 'error' :
            classMessage = 'red-serviceWarning';
            break;
        case 'warning' :
            classMessage = 'yellow-serviceWarning';
            break;
    }

    return <div className={`serviceMessage ${ classMessage }`}>{ title }</div>;
}