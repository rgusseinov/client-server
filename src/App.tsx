import React from 'react';
import './scss/App.scss';

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <h1 className="app__title">Иерархия узлов</h1>
      </div>

      <div className="app__content">
        <div className="app__column app-gateway">
          <div className="app__controls app-controls">
            <input
              type="button"
              className="app-controls__plus btn"
              value="Добавить узел"
            />
            <input
              type="button"
              className="app-controls__minus btn"
              value="Удалить узел"
            />
          </div>
          <div className="app-gateway__body">
            <div className="gateway-nodes">
              <div className="app-gateway__parent-node head">Option Set</div>
              <ul className="gateway-nodes__tree-list tree-list">
                <li>
                  <span className="tree-list__caret caret">Main node</span>
                  <ul className="tree-list tree-list__nested nested">
                    <li>Sub node 1</li>
                    <li>Sub node 2</li>
                    <li>
                      <span className="tree-list__caret caret">Sub node 3</span>
                      <ul className="tree-list tree-list__nested nested">
                        <li>Sub node 4</li>
                        <li>Sub node 5</li>
                        <li>
                          <span className="tree-list__caret caret">
                            Sub node 6
                          </span>
                          <ul className="tree-list tree-list__nested nested">
                            <li>Sub 1</li>
                            <li>Sub 2</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <span className="tree-list__caret caret">Main node 2</span>
                  <ul className="tree-list tree-list__nested nested">
                    <li>Sub node 1</li>
                    <li>Sub node 2</li>
                    <li>
                      <span className="tree-list__caret caret">Sub node 3</span>
                      <ul className="tree-list tree-list__nested nested">
                        <li>Sub node 4</li>
                        <li>Sub node 5</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="app__column gateway-info">
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
        </div>
      </div>

export default App;
