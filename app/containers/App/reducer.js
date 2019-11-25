import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR, SET_USERNAME } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  codeFound: false,
  userData: {
    repositories: false,
  },
};

function appReducer(state = initialState, action) {
   switch (action.type) {
    case LOAD_REPOS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        userData: {
          repositories: false,
        },
      };

      return newState;
    }
    case LOAD_REPOS_SUCCESS: {
      console.log(action.repos);
      const newState = {
        ...state,
        loading: false,
        userData: {
          repositories: action.repos,
        },
        codeFound: action.repos.codeFound,
        currentUser: action.username,
      };
      return newState;
    }
    case SET_USERNAME: {
      const newState = {
        ...state,
        loading: false,
        username: action.username,
      };
      return newState;
    }
    case LOAD_REPOS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
