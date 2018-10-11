import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

/**
 * Button for adding a new item with fields into a form
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const DialogFormAdd = (props) => {
    const {classes, onClick} = props;
    return (
        <Grid className={classes.container}
              container
              direction="column"
              justify="center"
              alignItems="center">
            <Button onClick={onClick}
                    variant="fab"
                    disabled={false}
                    mini
                    color="secondary"
                    aria-label="Add"
                    className={classes.button}>
                <AddIcon />
            </Button>
        </Grid>
    )
};

export default DialogFormAdd;