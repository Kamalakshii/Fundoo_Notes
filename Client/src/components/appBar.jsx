import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './drawer';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import DrawerMenu from './drawer';
import "../App.css";
import { MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default class appBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: true,
            open: false,

        };
    }
    render() {
        return (
            <div>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <div className="appbar-menu">
                            <div>
                                <IconButton color="inherit" aria-label="Open drawer">
                                <Drawer />

                                </IconButton>
                            </div>
                        </div>
                        <div className="fundoo-font">
                            Fundoo
                                </div>
                        <div className="search">
                           
                            <div className="searchField">
                                <InputBase
                                    id="searchInputBase"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                        <div className="profile">
                            <MenuItem onClick={this.handleProfileMenuOpen}>
                                <IconButton color="inherit">
                                    <AccountCircle />
                                </IconButton>

                            </MenuItem>
                        </div>
                    </Toolbar>
                 

                </AppBar>
            </div>
        )
    }
}