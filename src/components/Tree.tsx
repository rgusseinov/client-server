import React from 'react';
import { TreeNavs } from './TreeNavs';

export const Tree: React.FC = () => {
  return (
    <div className="app__column app-gateway">
      <TreeNavs />
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
  );
};
