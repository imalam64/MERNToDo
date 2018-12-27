import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardContent, List} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getToDos, deleteToDo } from '../../actions/toDoActions';
import PropTypes from 'prop-types';
import AddToDo from '../AddToDo/AddToDo';

const styles = {
  card: {
    width: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    width: 10,
  }
};

class DoComp extends Component {

  componentDidMount() {
    this.props.getToDos();
  }

  onDeleteClick = (id) => {
    this.props.deleteToDo(id);
  }

  render() {
    const { toDo } = this.props.toDo;
    const { classes } = this.props;

    return (
      <div>
        <AddToDo />
        <List>
          {toDo.map(({ _id, task}) => (
            <ListItem key={_id} timeout={500}>
              <Card className={classes.card}>
                <CardContent>
                  <Button
                    className= {classes.button}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >&times;
                  </Button>
                  <Typography>{task}</Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

DoComp.propTypes = {
  getToDos: PropTypes.func.isRequired,
  toDo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  toDo: state.toDo
});

export default withStyles(styles)(
  connect(mapStateToProps, 
    { getToDos, deleteToDo }
    )(DoComp)
  );