import CardFour from '../../components/CardFour.js';
import CardOne from '../../components/CardOne.js';
import CardThree from '../../components/CardThree.js';
import CardTwo from '../../components/CardTwo.js';
import ChartOne from '../../components/ChartOne.js';
import ChartTwo from '../../components/ChartTwo.js';
import TableOne from '../../components/TableOne.js';
import DefaultLayout from '../../layout/DefaultLayout.js';
import { useEffect } from 'react';
import axiosinstance from '../../Axios/Axios.js';
import { useStateValue } from '../../Context/StateProvider.js';
import { Link } from 'react-router-dom';
const ECommerce = () => {
  let topBuy=[]
  const [{token,TotalSell,amount,customer},dispatch]=useStateValue()
  useEffect(()=>{
    const tokken=localStorage.getItem('user')
    const CompanyName=localStorage.getItem('companyName')
    const amount=localStorage.getItem('amount')
    if(tokken){
      dispatch({
        type:'signin',
        token:tokken
  })
  dispatch({
    type:'companyName',
    companyName:CompanyName
  })
  dispatch({
    type:'amount',
    amount:amount
  })
  axiosinstance.post('/getTotalstock',{CompanyName:CompanyName})
  .then((res)=>{
    console.log(res,'thiss res')
    dispatch({
      type:'TotalSell',
      TotalSell:res.data.message
})
dispatch({
    type:'customer',
    customer:res.data.customers
})
dispatch({
  type:'amount',
  amount:amount - res.data.amount
})
    
  })
  .catch((err)=>{
    console.log(err)
  })
     

  axiosinstance.post('/topbuy',{CompanyName:CompanyName})
  .then((res)=>{
     if(res.status=='200'){
      dispatch({
        type:'topbuy',
        topbuy:res.data.message
    })
   
      console.log(res.data.message,"newwwwww")
      console.log(topBuy,"looooooooo")
     }
  })
  .catch((err)=>{
    console.log(err)
  })


    }


  },[])
  return (
    
   token && (
    <DefaultLayout>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </div>

    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <ChartOne />
      <ChartTwo />
     
      
      <div className="col-span-12 xl:col-span-8">
        <TableOne />
      </div>
     
    </div>
  </DefaultLayout>
   )

   
  );
};

export default ECommerce;
