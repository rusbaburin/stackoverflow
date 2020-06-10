import React from 'react';

interface IServiceMessage {
    title: string;
    type: 'error' | 'warning'
}

export const ServiceMessage: React.FC<IServiceMessage> = ({ title, type }) => {
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