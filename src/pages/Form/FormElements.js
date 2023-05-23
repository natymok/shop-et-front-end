import Breadcrumb from '../../components/Breadcrumb.js';
import CheckboxFive from '../../components/CheckboxFive';
import CheckboxFour from '../../components/CheckboxFour';
import CheckboxOne from '../../components/CheckboxOne';
import CheckboxThree from '../../components/CheckboxThree';
import CheckboxTwo from '../../components/CheckboxTwo';
import SwitcherFour from '../../components/SwitcherFour';
import SwitcherOne from '../../components/SwitcherOne';
import SwitcherThree from '../../components/SwitcherThree';
import SwitcherTwo from '../../components/SwitcherTwo';
import DefaultLayout from '../../layout/DefaultLayout';
import { useState } from 'react';
import axiosinstance from '../../Axios/Axios.js';
import { useStateValue } from '../../Context/StateProvider.js';
const FormElements = () => {
  const [{companyName},dispatch]=useStateValue()
  const [stockName,setStockName]=useState('')
  const [Description,setDescription]=useState('')
  const [amount,setamount]=useState('')
  const [price,setprice]=useState('')
  const info={stockName:stockName,Description:Description,amount:amount,price:price,companyName:companyName}
  const addstock=(e)=>{
    e.preventDefault()
    console.log(info)
    axiosinstance.post('/addStock',{...info})
    .then((res)=>{
      if(res){
        console.log(res)
      }
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  return (
    <DefaultLayout>
      <Breadcrumb pageName="add your stock here" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                add stock
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Stock Name
                </label>
                <input
                  onChange={(e)=>{setStockName(e.target.value)}}
                  type="text"
                  placeholder="stock name"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Description
                </label>
                <input
                  onChange={(e)=>{setDescription(e.target.value)}}
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>

              <div>
                <label className="mb-3 block font-medium text-black dark:text-white">
                  amount
                </label>
                <input
                  onChange={(e)=>{setamount(e.target.value)}}
                  type="text"
                  placeholder="amount"
                
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Price for 1 stock
                </label>
                <input
                  onChange={(e)=>{setprice(e.target.value)}}
                  type="text"
                  placeholder="price"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>
            </div>

            <button onClick={(e)=>{addstock(e)}} className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                  
                   add Stock
                </button>





          </div>

       

      

         
        </div>

       
      </div>
    </DefaultLayout>
  );
};

export default FormElements;
