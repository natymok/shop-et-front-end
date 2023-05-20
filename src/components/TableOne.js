import BrandOne from '../images/brand/brand-02.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-02.svg';
import BrandFour from '../images/brand/brand-02.svg';
import BrandFive from '../images/brand/brand-02.svg';
import {useStateValue} from "../Context/StateProvider"

const TableOne = () => {
  const [{token,TotalSell,amount,customer, topbuy},dispatch]=useStateValue()
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top buyer
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              user
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              bought stock
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
                total purchased
            </h5>
          </div>
          
        </div>


       {topbuy && topbuy.map((item)=>(
             <div className="grid grid-cols-3 sm:grid-cols-5">
             <div className="flex items-center gap-3 p-2.5 xl:p-5">
               <div className="flex-shrink-0">
                 <img src={BrandFive} alt="Brand" />
               </div>
               <p className="hidden text-black dark:text-white sm:block">
                 {item.userName}
               </p>
             </div>
   
             <div className="flex items-center justify-center p-2.5 xl:p-5">
               <p className="text-black dark:text-white">{item.amount}</p>
             </div>
   
             <div className="flex items-center justify-center p-2.5 xl:p-5">
               <p className="text-meta-3">{item.price}</p>
             </div>
   
             
           </div>
       ))}




   
      </div>
    </div>
  );
};

export default TableOne;
