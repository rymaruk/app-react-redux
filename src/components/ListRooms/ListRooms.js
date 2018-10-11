import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ItemRoom from "../ItemRoom/ItemRoom";
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { DELETE_ITEM_FORM } from "../../actions";

/**
 * Styles fo current component
 *
 * @param theme
 * @returns {{rootList: {flexGrow: number, width: number}, paper: {margin: *}}}
 */
const styles = theme => ({
    rootList: {
        flexGrow: 1,
        width: 400
    },
    paper: {
        margin: theme.spacing.unit,
    },
});

/**
 * Component for outputting a saved list
 *
 */
class ListRooms extends React.Component {
    shouldComponentUpdate(){
        return true;
    }

    render(){

        /**
         * Destructuring of a PROPS
         */
        const { classes, items } = this.props;

        return(
            <div className={classes.rootList}>
                <List>
                    {items.map(item => <ItemRoom key={item.id} item={item} />)}
                    {!items.length &&
                        <Paper className={classes.paper} style={{opacity: 0.5}}>
                            <ListItem>
                                <Typography style={{flex: 1, justifyContent: 'center', color: '#999'}}
                                            align={'center'}
                                            variant={'subtitle2'}
                                >Список пуст</Typography>
                            </ListItem>
                        </Paper>
                    }
                </List>
            </div>
        );
    }
}

/**
 * Typechecking for current props
 *
 * @type {{classes: *, item: *}
 */
ListRooms.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
};

/**
 * State for props
 *
 * @param state
 * @param props
 * @returns {{items: Array}}
 */
const mapStateToProps = (state, props) => ({
    items: state.toggleItemForm.saved
});

/**
 * Dispatch for props
 * @param dispatch
 * @returns {{onDeleteItemForm: onDeleteItemForm}}
 */
const mapDispatchToProps = dispatch => ({
    onDeleteItemForm: (id) => { dispatch({'type': DELETE_ITEM_FORM, 'id': id}) },
});

/**
 * Connect is a `HOC`.
 * State and dispatch to the props of a component
 */
export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(ListRooms) );
