import React from "react";
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

/**
 * Buttons navigate for modal window
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const DialogFormActions = (props) => {
    const {classes, onClick, onClose} = props;
    return (
        <DialogActions style={{padding: 0}}>
            <Grid className={classes.container}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
            >
                <Button onClick={onClick} color="primary">
                    Сохранить
                </Button>
                <Button onClick={onClose} color="secondary">
                    Отмена
                </Button>
            </Grid>
        </DialogActions>)
};

export default DialogFormActions;