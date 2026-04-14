import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  variant = 'primary',
  type = 'button',
  onClick,
  className = ''
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}