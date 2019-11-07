import Axios from "axios"
// import React, { useEffect} from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// action names
const LIST_USER = "calls/LIST_USER"
const LIST_REPOS = "calls/LIST_REPOS"

// initial state
const initialState = {
  repos: [],
  user: {}
}

// reducer 
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

// custom hooks

// export function useGithub() {
//   const dispatch = useDispatch()
//   const user = useSelector(appState => appState.repoReducer.user)
//   const repos = useSelector(appState => appState.repoReducer.repos)

//   useEffect(() => {
//     dispatch(showUser())
//     dispatch(showRepos())
//   }, [])

//   return { user, repos }
// }