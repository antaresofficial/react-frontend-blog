import {postsAPI} from '../api/api'
const GET_POSTS = 'GET_POSTS'
const GET_POST_FULL = 'GET_POST_FULL'


let initialState = {
    posts: [],
    postFull: []
}

const reducer = ( state=initialState, action ) => {
    switch(action.type) {
      case GET_POSTS: {
        return { ...state, posts: action.posts }
      }
      case GET_POST_FULL: {
        return { ...state, postFull: action.postFull }
    }
      default: 
            return state
    }
}

export const getPosts = (posts) => ({type: GET_POSTS, posts})
export const getPostFull = (postFull) => ({ type:GET_POST_FULL, postFull})


export const getPostsThunk = () => (dispatch) => {
  postsAPI.getPosts().then(response=> {
    dispatch(getPosts(response))
  })
}

export const getPostFullThunk = (postId) => (dispatch) => {
    postsAPI.getPosts(postId).then(response => {
        dispatch(getPostFull(response))
    })
}

export default reducer




