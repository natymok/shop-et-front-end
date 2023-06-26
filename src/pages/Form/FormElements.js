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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axiosinstance from '../../Axios/Axios.js';
import { useStateValue } from '../../Context/StateProvider.js';
const FormElements = () => {
  const [{ companyName }, dispatch] = useStateValue();
  const [stockName, setStockName] = useState('');
  const [Description, setDescription] = useState('');
  const [amount, setamount] = useState('');
  const [price, setprice] = useState('');
  const [message, setmessage] = useState('');
  const [error, seterror] = useState('');
  const navigate = useNavigate();
  const info = {
    stockName: stockName,
    Description: Description,
    amount: amount,
    price: price,
    companyName: companyName,
  };
  const addstock = (e) => {
    e.preventDefault();

    axiosinstance
      .post('/addStock', { ...info })
      .then((res) => {
        if (res.status == '200') {
          console.log(res, 'thisss is response');
          setmessage(res.data.message);
          setTimeout(() => {
            setmessage(false);
            navigate('/dashboard');
          }, 2000);
        }
        if ((res.status = '400')) {
          seterror(res.data.error);
          setTimeout(() => {
            setmessage(false);
          }, 2000);
        }
      })
      .catch((err) => {
        seterror(err.response.data.error);
        setTimeout(() => {
          seterror(false);
        }, 2000);
      });
  };
  const editstock = (e) => {
    e.preventDefault();

    axiosinstance
      .post('/editStock', { ...info })
      .then((res) => {
        if (res.status == '200') {
          console.log(res, 'thisss is response');
          setmessage(res.data.message);
          setTimeout(() => {
            setmessage(false);
            navigate('/dashboard');
          }, 2000);
        }
        if ((res.status = '400')) {
          seterror(res.data.error);
          setTimeout(() => {
            setmessage(false);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err, 'the error');
        seterror('something');
        setTimeout(() => {
          seterror(false);
        }, 2000);
      });
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="add your stock here" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                manage stock
              </h3>
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
              {message && (
                <div className="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
                  <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                        fill="white"
                        stroke="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-full">
                    <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#34D399] ">
                      Message Sent Successfully
                    </h5>
                    <p className="text-base leading-relaxed text-body">
                      {message}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Stock Name
                </label>
                <input
                  onChange={(e) => {
                    setStockName(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setamount(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                  type="text"
                  placeholder="price"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  addstock(e);
                }}
                className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                add Stock
              </button>
              <button
                onClick={(e) => {
                  editstock(e);
                }}
                className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormElements;
