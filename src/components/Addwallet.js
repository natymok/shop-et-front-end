import Breadcrumb from './Breadcrumb.js.js';

import React from 'react';
import { useState } from 'react';
import axiosinstance from '../Axios/axios2'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

const Addwallet = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [amount, setamount] = useState('');
  const [phone_number, setphonenumber] = useState('');



  const withdraw = (e) => {
    e.preventDefault();
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
  };

  return (
    <>
      <Breadcrumb pageName="Money Checkout to chapa" />
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-5.5 p-6.5">
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
