import {lazy,Suspense} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {AnimatePresence}from 'framer-motion'
import Header from "./Component/Header";
/*import Signup from './Component/Signup/Signup';*/
/*import Signin from './Component/Signin/Signin';*/
import Home from './Component/Home/Home';
import { useEffect } from 'react';
import { useStateValue } from './Context/StateProvider';
import axiosinstance from './Axios/Axios';
const Signin=lazy(()=>import('./Component/Signin/Signin'))
const Signup=lazy(()=>import('./Component/Signup/Signup'))

function App() {
  const [{token,cart,product,catagories},dispatch]=useStateValue()

  useEffect(()=>{
    axiosinstance.get('/getProduct')
    .then((res)=>{
      if(res.status == '200')
      {
         dispatch({
          type:'getProduct',
          product:res.data.message
         })
      
    
      }
    })
    .catch((err)=>{
      console.log(err)
    })
   axiosinstance.get('/getCatagories')
    .then((res)=>{
      if(res.status == '200')
      {
         dispatch({
          type:'getcatagory',
          catagory:res.data.catagories
         })
      }
    })
    .catch((err)=>{
      console.log(err)
    })
   

  },[])

  return (
    <div className="App">
      <AnimatePresence>
      <BrowserRouter>
       <Switch>
        <Route  exact path='/'>
          <Header></Header>
          <Home></Home>
          
        </Route>
       <Suspense fallback={<div>Loading</div>}>
       <Route  exact path='/signup'>
          <Signup></Signup>
        </Route>
       </Suspense>
        <Suspense fallback={<div>Loading</div>}>
        <Route  exact path='/signin'>
          <Signin></Signin>
        </Route>
        </Suspense>

       </Switch>
      
      </BrowserRouter>
      </AnimatePresence>
      
    </div>
      
  );
}

export default App;
