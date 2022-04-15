import clsx from 'clsx';
import { FunctionComponent } from 'react';

interface Props {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: FunctionComponent<Props> = ({ children, onClick, variant = 'primary' }) => (
  <button
    className={clsx(
      variant === 'primary' && 'bg-red-600',
      variant === 'secondary' && 'bg-green-600',
      'py-2 px-3 text-sm font-semibold text-white rounded shadow hover:shadow-md active:shadow-inner',
    )}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export { Button };
