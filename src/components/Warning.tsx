import React from 'react';

interface IWarning {
    title: string
}

const Warning: React.FC<IWarning> = ({ title }: IWarning) => (
  <div className="warning-container">
    <p className="warning red-warning">{ title }</p>
  </div>
);

export default Warning;
