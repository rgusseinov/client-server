import React from 'react';

export const TreePanelNavs: React.FC = () => {
  return (
    <div className="gateway-info__top">
      <div className="gateway-info__container top-container">
        <h2 className="gateway-info__title">Узел</h2>
        <div className="gateway-info__controls">
          <div className="gateway-info__prev">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div className="gateway-info__next">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
