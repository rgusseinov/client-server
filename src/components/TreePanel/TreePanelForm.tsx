import React from 'react';

export const TreePanelForm: React.FC = () => {
  return (
    <div className="gateway-info__body">
      <div className="gateway-info__container">
        <form className="app-gateway__form gateway-form">
          <div className="gateway-form__field">
            <span className="gateway-form__label">Имя узла</span>
            <input
              type="text"
              className="gateway-form__input"
              placeholder="Значени 1"
            />
          </div>
          <div className="gateway-form__field">
            <span className="gateway-form__label">IP-адрес</span>
            <input
              type="text"
              className="gateway-form__input"
              placeholder="Значени 2"
            />
          </div>
          <div className="gateway-form__field">
            <span className="gateway-form__label">Web-порт</span>
            <input
              type="text"
              className="gateway-form__input"
              placeholder="Значени 3"
            />
          </div>
        </form>
      </div>
  </div>
  );
};
