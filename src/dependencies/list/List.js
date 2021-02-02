import react from 'react';
import ListElement from './ListElement';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }

    
}));

function List(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <ul>
            <Paper className={classes.paper}>
                <ListElement />
            </Paper>
                <ListElement className={classes.paper}/>
                <ListElement className={classes.paper}/>
                <ListElement className={classes.paper}/>
                <ListElement className={classes.paper}/>
                <ListElement className={classes.paper}/>
                <ListElement className={classes.paper}/>
                <ListElement className={classes.paper}/>
                <ListElement className={classes.paper}/>
        </ul>
        </div>
    );
}

export default List;