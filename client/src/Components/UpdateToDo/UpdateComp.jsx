import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { updateToDo } from '../../actions/toDoActions';

class UpdateComp extends Component {
    state = {
        open: false,
        name: ''
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();

        const update = this.props._id;

        //Add toDo via updateToDo action
        this.props.updateToDo(update)

        this.handleClose();
    }

    render() {
        return (
            <div>
            <Button
            variant="contained"
            color ='primary'
            onClick={this.handleClickOpen}> Update... </Button>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title"> Add To Do... </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please provide information on the task you want to update:
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    name= "name"
                    id= {this.props._id}
                    label= {this.props.task}
                    type="text"
                    onChange={this.onChange}
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={this.onSubmit} color="primary">
                   Update
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    toDo: state.toDo
})

export default connect(
    mapStateToProps,
    { updateToDo }
)(UpdateComp);