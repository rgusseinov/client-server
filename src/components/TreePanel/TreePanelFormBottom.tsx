import React from 'react';

export const TreePanelFormBottom: React.FC = () => {
  return (
    <div className="gateway-info__bottom">
      <div className="gateway-info__container">
        <div className="gateway-form__controls form-control">
          <input
            type="button"
            className="form-control__save btn btn-primary"
            value="Сохранить"
          />
          <input
            type="button"
            className="form-control__cancel btn"
            value="Отмена"
          />
        </div>
      </div>
  </div>
  );
};
