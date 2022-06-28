import React from 'react';
import { TreePanelForm } from './TreePanelForm';
import { TreePanelFormBottom } from './TreePanelFormBottom';
import { TreePanelNavs } from './TreePanelNavs';

export const TreePanel: React.FC = () => {
  return (
    <div className="app__column gateway-info">
      <TreePanelNavs />
      <TreePanelForm />
      <TreePanelFormBottom />
    </div>
  );
};
