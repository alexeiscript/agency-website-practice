import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FaceIcon from '@material-ui/icons/Face';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

function ListItemLink(props) {
    return <ListItem button component={RouterLink} {...props} />;
}

class Sidebar extends Component {
    render() {
        return(
            <List>
                <ListItemLink to="/admin">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItemLink>
                <ListItemLink to="/admin/posts">
                    <ListItemIcon>
                        <ChromeReaderModeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Posts"/>
                </ListItemLink>
                <ListItemLink to="/admin/users">
                    <ListItemIcon>
                        <FaceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users"/>
                </ListItemLink>
            </List>
        );
    }
}

export default Sidebar;