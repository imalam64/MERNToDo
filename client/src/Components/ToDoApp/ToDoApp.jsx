import React, { Component } from 'react';
import DoComp from '../DoComp/DoComp';
import DoingComp from '../DoingComp/DoingComp';
import DoneComp from '../DoneComp/DoneComp';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
});

class ToDoApp extends Component {
  render() {
    const { classes } = this.props;

    return (
        <Grid container className={classes.root} spacing={32}>
            <Grid item xs>
                <DoComp />
            </Grid>
            <Grid item xs>
                <DoingComp />
            </Grid>
            <Grid item xs>
                <DoneComp />
            </Grid>
        </Grid>
    )
  }
}


export default withStyles(styles)(ToDoApp);