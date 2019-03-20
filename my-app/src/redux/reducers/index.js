import {KEYS} from '../actions'
const initialState={
  signup:"",
  login:"",
  previous_image:'',
  single_image:'',
  previous_catagory:'',
  previous_comments:''
}

const abc = (state = initialState, action) => {
  switch (action.type) {
    case KEYS.SIGN_UP:
          return {
            ...state,
            signup:action.data,
            error:null
          }
    case KEYS.LOGIN:
          return {
            ...state,
            login:action.data,
            error:null
          }
    case KEYS.LOGIN_ERROR:
          return {
            ...state,
            error:action.data
          }
    case 'Login':
      // console.log("data in reduce",action.data);
      return action.data;
    
    
    
    case KEYS.GET_IMAGE:
      // console.log("data in reduce",action.data);
      return {
        ...state,
        previous_image:action.data,
        error:null
      }
    case KEYS.GET_SINGLE_IMAGE:
      // console.log("data in reduce",action.data);
      return {
        ...state,
        single_image:action.data,
        error:null
      }

    case KEYS.GET_CATAGORY:
      // console.log("data in reduce",action.data);
      return {
        ...state,
        previous_catagory:action.data,
        error:null
      }

    case KEYS.GET_COMMENT:
      // console.log("data in reduce",action.data);
      return {
        ...state,
        previous_comments:action.data,
        error:null
      }
    default:
      return state
  }
}

export default abc