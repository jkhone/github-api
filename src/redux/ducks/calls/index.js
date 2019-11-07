import Axios from "axios"

// action names
const LIST_USER = "calls/LIST_USER"
const LIST_REPOS = "calls/LIST_REPOS"

// reducer
const initialState = {
  repos: [],
  user: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_USER:
      return { ...state, user: action.payload }
    case LIST_REPOS:
      return { ...state, repos: action.payload }
    default:
      return state
  }
}

// actions

export function showUser() {
  return dispatch => {
    Axios.get("https://api.github.com/users/jkhone").then(resp => {
      dispatch({
        type: LIST_USER,
        payload: resp.data
      })
    })
  }
}

export function showRepos() {
  return dispatch => {
    Axios.get("https://api.github.com/users/jkhone/repos").then(resp => {
      console.log('data', resp.data)
      dispatch({
        type: LIST_REPOS,
        payload: resp.data
      })
    })
  }
}