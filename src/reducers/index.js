import { ADD_SMURFS_START, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAIL, FETCH_SMURFS_START, FETCH_SMURFS_FAIL, FETCH_SMURFS_SUCCESS} from '../actions';


const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
}

const reducer = (state = initialState, action )=>{
  switch (action.type) {
    case(ADD_SMURFS_START):
      console.log('Add smurf is starting');
      return({
        ...state,
        error: '',
        isLoading: true,
      });
    case(ADD_SMURFS_SUCCESS):
      return({
        ...state,
        smurfs: action.payload,
        isLoading: false,
      })
    case(ADD_SMURFS_FAIL):
      return({
        ...state,
        error: action.payload,
        isLoading: false,
      })
    case(FETCH_SMURFS_START):
      return({
        ...state,
        smurfs: [],
        isLoading: true,
        error: '',
      })
    case(FETCH_SMURFS_SUCCESS):
      return({
        ...state,
        isLoading: false,
        smurfs: action.payload,
      })
    case(FETCH_SMURFS_FAIL):
      return({
        ...state,
        error: action.payload,
        isLoading: false,
      })

    default:
      return(state);
  }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary