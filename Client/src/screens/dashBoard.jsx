import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppbarComponent from'../components/appBar';
import "../App.css"
export default class dashBoard extends Component{
    constructor(props)
        {
            super(props);
            this.state={
                label:""
            }
        };
        render()
        {
            return(
                <AppbarComponent>
          
                </AppbarComponent>
              

            )
            }
}