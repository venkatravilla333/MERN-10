import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./actionType"



let fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST
  }
}
let fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data
  }
}
let fetchPostFailure = (err) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: err
  }
}

export let fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        dispatch(fetchPostSuccess(data))
      }).catch((err) => {
        console.log(err)
        dispatch(fetchPostFailure(err))
      })
  }
}