import Breadcrumb from './Breadcrumb.js.js';

import React from 'react';
import { useState } from 'react';
import axiosinstance from '../Axios/axios2'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

const Addwallet = () => {
  const [{token,TotalSell,customer,transaction,balance},dispatch]=useStateValue()
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [amount, setamount] = useState('');
  const [error, setError] = useState('');

console.log(balance,amount,'nesruuuuuuuu')



  const withdraw = (e) => {
    e.preventDefault();
      if(amount <= balance){
        axiosinstance
      .post('/chapa', {
        amount: amount,
        email: email,
        firstName: firstname,
        lastName: lastname,
      })
      .then((res) => {
        if (res.status == '200') {
            console.log(res.data.chapa.data.checkout_url,'chaaaaapa')
            window.open(res.data.chapa.data.checkout_url,'_blank')
          
        } else {
          console.log(res.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });

      }
      else{
        setError('insufficient balance')
      }
  };

  return (
    <>
      <Breadcrumb pageName="Money Checkout to chapa" />
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-5.5 p-6.5">
        {error && (
                <div className="flex w-full border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
                <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
                      fill="#ffffff"
                      stroke="#ffffff"
                    ></path>
                  </svg>
                </div>
                <div className="w-full">
                  <h5 className="mb-3 font-semibold text-[#B45454]">
                    There were 1 errors with your submission
                  </h5>
                  <ul>
                    <li className="leading-relaxed text-[#CD5D5D]">
                      {error}
                    </li>
                  </ul>
                </div>
              </div>
              )}

          <div>
            <label className="mb-3 block text-black dark:text-white">
              Enter First Name
            </label>
            <input
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
              type="text"
              placeholder="First Name"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
            />
          </div>

          <div>
            <label className="mb-3 block text-black dark:text-white">
              Enter Last Name
            </label>
            <input
              onChange={(e) => {
                setlastname(e.target.value);
              }}
              type="text"
              placeholder="Last Name"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
            />
          </div>

          <div>
            <label className="mb-3 block text-black dark:text-white">
              Enter Email
            </label>
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
            />
          </div>

          {/*           <div>
            <label className="mb-3 block text-black dark:text-white">
              Enter Phone Number
            </label>
            <input
            onChange={(e) => {
              setphonenumber(e.target.value);
            }}
              type="number"
              placeholder="09XXXXXXXX"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
            />
          </div> */}

          <div>
            <label className="mb-3 block text-black dark:text-white">
              Withdraw Amount
            </label>
            <input
              onChange={(e) => {
                setamount(e.target.value);
              }}
              type="number"
              placeholder="amount"
              className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
            />
          </div>

          <div>
            <label className="mb-3 block font-medium text-black dark:text-white">
              Currency
            </label>
            <input
              type="text"
              placeholder="ETB"
              disabled
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
            />
          </div>
          {/* 
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  PUBLIC KEY  
                </label>
                <input
                  type="password"
                  placeholder="public key generate from CHAPA"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div> */}

          <div>
            <div className="mb-5">
              <input
                onClick={(e) => {
                  withdraw(e);
                }}
                type="submit"
                value="withdraw"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              />
            </div>

            



            {/* <Withdraw
              firstname={firstname}
              lastname={lastname}
              email={email}
              amount={amount}
              tx_ref={tx_ref}
              public_key={public_key}
            />  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Addwallet;
