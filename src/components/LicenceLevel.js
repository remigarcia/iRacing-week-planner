// @flow

import * as React from 'react';
import classnames from 'classnames';
import levelToClass from '../lib/levelToClass';
import './styles/licenceLevel.scss';

type Props = {
  licence: number,
  effective?: boolean,
};

export default function LicenceLevel({ licence, effective }: Props): React.Node {
  return (
    <div
      className={classnames(
        'licence-level-component',
        `licence-${levelToClass(licence, effective).toLowerCase()}`
      )}
    >
      <span className='licence-letter'>{levelToClass(licence, effective)}</span>
      <span className='licence-text'>
      {effective ? null : (((licence - 1) % 4) + 1).toFixed(2)}
      </span>
    </div>
  );
}
