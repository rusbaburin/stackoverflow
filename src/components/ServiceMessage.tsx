import React from 'react';

interface IServiceMessage {
    title: string;
    type: 'error' | 'warning'
}

const ServiceMessage: React.FC<IServiceMessage> = ({ title, type }: IServiceMessage) => {
  let classMessage = null;

  switch (type) {
    case 'error':
      classMessage = 'red-serviceWarning';
      break;
    case 'warning':
      classMessage = 'yellow-serviceWarning';
      break;
    default:
      classMessage = '';
  }

  return <div className={`serviceMessage ${classMessage}`}>{ title }</div>;
};

export default ServiceMessage;
