import axios from "axios";
const LOGIN_ERROR = "LOGIN_ERROR"
const LOGIN = 'login'
const SIGN_UP='SignUp'
const GET_IMAGE='Image'
const GET_SINGLE_IMAGE='Single_Image'
const GET_COMMENT='GET_COMMENT'
const GET_CATAGORY="CATAGORY"

export const sendDataLogin= data => ({
  type: LOGIN,
  data
})

export const sendDataSignUp = data => ({
  type: SIGN_UP,
  data
})

export const loginError = data => ({
  type: LOGIN_ERROR,
  data
})

export const sendImage = data => ({
  type: GET_IMAGE,
  data
})
export const sendSingleImage = data => ({
  type: GET_SINGLE_IMAGE,
  data
})
export const sendCatagory = data => ({
  type: GET_CATAGORY,
  data
})


export const sendComment = data => ({
  type: GET_COMMENT,
  data
})


export const signUp=data=>{
  return function(dispatch){ 
    // console.log("this data in sign up action",data); 
  axios.post('http://192.168.100.125:3001/signup',data).then(res=> {
      // console.log("this data in signup after action",res.data); 
      dispatch(sendDataSignUp(res.data))
  })
}
}
export const login=data=>{
    return function(dispatch){
    // console.log("this data in login action",data); 
    axios.post('http://192.168.100.125:3001/login',data).then(res=> {
        // console.log("this data in login after post action",res.data); 
        if(res.data instanceof Object){
          dispatch(sendDataLogin(res.data))
        }else{
          dispatch(loginError(res.data))
        }
        
    })
}
}
export const catagory=data=>{
  return function(dispatch){
    data._id=987456123
    // console.log("this data in image action",data); 
  axios.post('http://192.168.100.125:3001/catagory',data).then(res=> {
      // console.log("this data in after post image action",res.data); 
      dispatch(sendCatagory(res.data))
  })
}
}
export const image=data=>{
  return function(dispatch){
    
    // console.log("this data in image action",data); 
  axios.post('http://192.168.100.125:3001/image',data).then(res=> {
      // console.log("this data in after post image action",res.data); 
      dispatch(getImage({id:1}))
  })
}
}
export const getImage=data=>{
  return function(dispatch){
    // console.log("this data in image action",data); 
  axios.post('http://192.168.100.125:3001/getimage',data).then(res=> {
      // console.log("this data in after post image action", typeof res.data); 
      dispatch(sendImage(res.data))
  })
}
}
export const single_Images=data=>{
  return function(dispatch){
    // console.log("this data in image action",data); 
  axios.post('http://192.168.100.125:3001/getimage',data).then(res=> {
      dispatch(sendSingleImage(res.data))
  })
}
}

export const comment=data=>{
  return function(dispatch){
    console.log("this data in image action",data); 
  axios.post('http://192.168.100.125:3001/comment',data).then(res=> {
      console.log("this data in after post image action",res.data); 
      dispatch(getComment({id:data._id}))
  })
}
}
export const getComment=data=>{
  return function(dispatch){
    console.log("this data in image action",data); 
  axios.post('http://192.168.100.125:3001/getcomment',data).then(res=> {
      console.log("this data in after post image action",res.data); 
      dispatch(sendComment(res.data))
  })
}
}
export const reply=data=>{
  return function(dispatch){
    console.log("this data in image action",data); 
  axios.post('http://192.168.100.125:3001/reply',data).then(res=> {
      console.log("this data in after post image action",res.data); 
      dispatch(getComment({id:data._id}))
      // dispatch(sendImage(res.data))
  })
}
}
export const KEYS={
  LOGIN_ERROR,
  LOGIN,
  SIGN_UP,
  GET_IMAGE,
  GET_CATAGORY,GET_SINGLE_IMAGE,
  GET_COMMENT
}