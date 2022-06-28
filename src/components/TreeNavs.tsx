import React from 'react';

export const TreeNavs: React.FC = () => {
  return (
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
  );
};
