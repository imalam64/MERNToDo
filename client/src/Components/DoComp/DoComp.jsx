import React, { Component } from 'react';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardContent, List} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 500,
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
  state = {
    toDo: [
      { id: uuid(), task: 'Practice Code'},
      { id: uuid(), task: 'Make Money'},
      { id: uuid(), task: 'Apply to Jobs'},
      { id: uuid(), task: 'Laundry'},
    ]
  }

  render() {
    const { toDo } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="contained"
          color ='primary'
          onClick={()=>{
          const task = prompt('Enter To Do');
          if(task){
            this.setState(state => ({
              toDo: [...state.toDo, { id: uuid(), task }]
            }));
          }
        }}> Add a "To Do"!</Button>

        <List>
          {toDo.map(({ id, task}) => (
            <ListItem key={id} timeout={500}>
              <Card className={classes.card}>
                <CardContent>
                  <Button
                    className= {classes.button}
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => {
                      this.setState(state => ({
                        toDo: state.toDo.filter( toDo => toDo.id !== id)
                      }));
                    }}
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

export default withStyles(styles)(DoComp);