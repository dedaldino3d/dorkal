import { connect } from 'react-redux'
import Post from './container'
import * as actionsPost from '../../actions/posts'



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleReactLoveClick: () => {
            const type_react = "love";
            if(ownProps.is_reacted_type){
                dispatch(actionsPost.unReactPost(ownProps.id, type_react));
            }else{
                dispatch(actionsPost.reactPost(ownProps.id, type_react));
            }
        },
        handleReactJokeClick: () => {
            const type_react = "joke";
            if(ownProps.is_reacted_type){
                dispatch(actionsPost.unReactPost(ownProps.id, type_react));
            }else{
                dispatch(actionsPost.reactPost(ownProps.id, type_react));
            }
        },
    }
}


export default connect(null, mapDispatchToProps)(Post)
