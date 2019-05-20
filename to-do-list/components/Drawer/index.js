import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAlt';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import { inject, observer } from 'mobx-react'
import { styles } from './Styles';
import Link from 'next/link';

@inject('clickHandleStore')
@observer
class DrawerComponent extends React.Component {
  render() {
    const { classes, theme } = this.props;
      
    return (
        <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.props.clickHandleStore.drawerOpen,
            [classes.drawerClose]: !this.props.clickHandleStore.drawerOpen,
            })}
            classes={{
            paper: classNames({
                [classes.drawerOpen]: this.props.clickHandleStore.drawerOpen,
                [classes.drawerClose]: !this.props.clickHandleStore.drawerOpen,
            }),
            }}
            open={this.props.clickHandleStore.drawerOpen}
        >
            <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </div>
            <List>
            {['About'].map((text, index) => (
                <Link href={{ pathname: '/about' }}>
                <ListItem button key={text}>
                <ListItemIcon>{<SentimentSatisfiedAlt/>}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
                </Link>
            ))}
            </List>
            <Divider />
            <List>
            {['TodoList'].map((text, index) => (
                <Link href={{ pathname: '/' }}>
                <ListItem button key={text}>
                <ListItemIcon>{<PlaylistAddCheck/>}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
                </Link>
            ))}
            </List>
            <Divider />
        </Drawer>
    );
  }
}

DrawerComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
  
export default withStyles(styles, { withTheme: true })(DrawerComponent);