import React from 'react';
import { Link } from 'react-router-dom';
import KitchenIcon from '@material-ui/icons/Kitchen';
import EmojiObjects from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SearchIcon from '@material-ui/icons/Search';
import LogoutBtn from '../../LogoutBtn/LogoutBtn';
import { PANTRY, RECOMMENDED, SETTINGS, HOME, FORM, SEARCH } from '../../../constants/routeConstants';
import useStyles from './styles.js';

const SideBarLink = ({ Icon, To, Name, toggleMenu }) => {
  const classes = useStyles();
  const thisClass = classes[`${Name.toLowerCase()}Icon}`]

  return (
    <Link className={`${classes.sidebarLink} ${thisClass}`}
      to={To}
      onClick={() => toggleMenu(false)}
    >
      <Icon fontSize='large' />
      <p>{Name}</p>
    </Link>)
};

const Sidebar = ({ toggleMenu }) => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <SideBarLink Icon={ListAltIcon} To={HOME} Name='Browse' toggleMenu={toggleMenu} />

      <SideBarLink Icon={AddCircleOutlineIcon} To={FORM} Name='Create' toggleMenu={toggleMenu} />

      <SideBarLink Icon={SearchIcon} To={SEARCH} Name='Find' toggleMenu={toggleMenu} />

      <SideBarLink Icon={EmojiObjects} To={RECOMMENDED} Name='Suggested' toggleMenu={toggleMenu} />

      <SideBarLink Icon={KitchenIcon} To={PANTRY} Name='Pantry' toggleMenu={toggleMenu} />

      <SideBarLink Icon={SettingsIcon} To={SETTINGS} Name='Settings' toggleMenu={toggleMenu} />

      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
