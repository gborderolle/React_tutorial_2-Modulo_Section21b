import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link
              to='/'
              className={({ isActive }) => isActive && classes.active}
              end
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/events'
              className={({ isActive }) => isActive && classes.active}
            >
              Eventos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
