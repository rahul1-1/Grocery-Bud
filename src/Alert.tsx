import React, { useEffect } from 'react'
import List from './List';
import {IList} from './App'
interface IProps{
  show:boolean,
  msg:string,
  type:string,
  removeAlert: ()=>void,
  list:IList[]
}
const Alert:React.FC<IProps> = ({msg,type, removeAlert,list}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      removeAlert();
    },3000);
    return ()=> clearTimeout(timeout)
  },[list])
  return <p className={ `alert alert-${type}`}>{msg}</p>
}

export default Alert
