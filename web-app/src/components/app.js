import React, {Component} from 'react'
import Header from "./header";
import LeftPanel from "./leftPanel";
import RightPanel from "./rightPanel";
import Content from "./content";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {flexGrow: 1,
           marginTop: 20,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.primary,
      background: "#f2f2f2",
    },
  });

class App extends Component {
    render () {
        const { classes } = this.props;
        return ( 
        <>
            <Header />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}><LeftPanel/></Paper>
                    </Grid>
                    <Grid item xs={7}>
                        <Paper className={classes.paper}><Content /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}><RightPanel /></Paper>
                    </Grid>
                </Grid>
            </div>
        </>
        )
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(App);