import React from 'react'
import PostFull from './PostFull'
import {getPostFullThunk} from './../../redux/reducer.js'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

class PostFullContainer extends React.Component {
    componentDidMount() {
        let postId = this.props.match.params.postId
        this.props.getPostFullThunk(postId)
    }

    render() {
        return <PostFull post={this.props.post}/>
    }
}
let mapStateToProps = (state) => ({
    post: state.reducer.postFull
})


let mapDispatchToProps = (dispatch) => ({
    getPostFullThunk: (postId) => {
        dispatch(getPostFullThunk(postId))
    }
})
export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(PostFullContainer)