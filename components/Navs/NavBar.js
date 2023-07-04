import * as React from 'react'
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import DehazeIcon from '@material-ui/icons/Dehaze'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import styles from '../../styles/main.module.scss'
import Link from '@material-ui/core/Link'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className={styles.boxNav}
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          {/* <ListItemIcon>
            <HomeIcon />
          </ListItemIcon> */}
          <Link
            href="/"
          >
            HOME
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link
            href="quem-somos"
          >
            A ARTEM
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link
            href="#servicos"
          >
            SERVIÇOS
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link
            href="https://api.whatsapp.com/send?phone=5586995620722&text=Ol%C3%A1!%20Encontrei%20voc%C3%AAs%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7oes"
          >
            CONTATO
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <DehazeIcon className={styles.dehazeButton} sx={{ fontSize: 30 }} onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}