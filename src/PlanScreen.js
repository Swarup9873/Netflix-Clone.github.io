import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './PlanScreen.css' 


function PlanScreen() {

   const navigate = useNavigate();
   const [paymentCompleted, setPaymentCompleted] = useState(false);
   const [subscribedButton, setSubscribedButton] = useState(null);

   useEffect(() => {
      if (paymentCompleted && subscribedButton) {
         setSubscribedButton(true);
      }
    }, [paymentCompleted,subscribedButton]);
  

   const loadScript = (src)=>{
      return new Promise((resolve) =>{
         const script = document.createElement('script')
         script.src = src;

         script.onload =() =>{
            resolve(true)
         }
         
         script.onerror = () =>{
            resolve(false)
         }

         document.body.appendChild(script)
      });
   };

const displayRazorpay = async (amount, buttonIndex)=>{
   const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

   if(!res) {
      alert("You are offline... failed to load Razorpay SDK")
      return;
   }

   const options = {
      key: "rzp_test_nIXTdqinucXpWQ",
      currency: "INR",
      amount:amount*100,
      name: "Swarup's payments",
      description:"Thanks for purchasing",
      image:'',

      handler: function(response){

         setPaymentCompleted(true);
         setSubscribedButton(buttonIndex);

         navigate('/');
      },
      prefill: {
         name:"Swarup's payments",
      },
   };

   const paymentObject = new window.Razorpay(options);
   paymentObject.open();
};

  return (
    <div className='planScreen_plan'>
        <div className='planScreen_container'>
           <div className='planScreen_info'>
              <h5>Premium</h5>
              <h6>4K + HDR</h6>
           </div>

           <button className={subscribedButton === 1 ? 'subscribedButton' : ''} disabled={subscribedButton===1} onClick={()=> displayRazorpay(499,1)}>{subscribedButton===1 ? 'Subscribed' : 'Subscribe'}</button>
        </div>
        

        <div className='planScreen_container'>
           <div className='planScreen_info'>
              <h5>Basic</h5>
              <h6>480p</h6>
           </div>

           <button className={subscribedButton === 2 ? 'subscribedButton' : ''} disabled={subscribedButton===2} onClick={()=> displayRazorpay(199,2)}>{subscribedButton===2 ? 'Subscribed' : 'Subscribe'}</button>
        </div>

        <div className='planScreen_container'>
           <div className='planScreen_info'>
              <h5>Standard Plan</h5>
              <h6>1080p</h6>
           </div>

           <button className={subscribedButton === 3 ? 'subscribedButton' : ''} disabled={subscribedButton===3} onClick={()=> displayRazorpay(299,3)}>{subscribedButton===3 ? 'Subscribed' : 'Subscribe'}</button>
        </div>

        <div className='planScreen_container'>
           <div className='planScreen_info'>
              <h5>Premium Plan</h5>
              <h6>4k+HDR</h6>
           </div>

           <button className={subscribedButton === 4 ? 'subscribedButton' : ''} disabled={subscribedButton===4} onClick={()=> displayRazorpay(299,4)}>{subscribedButton===4 ? 'Subscribed' : 'Subscribe'}</button>
        </div>

        <div className='planScreen_container'>
           <div className='planScreen_info'>
              <h5>Standard</h5>
              <h6>480p</h6>
           </div>

           <button
          className={subscribedButton === 5 ? 'subscribedButton' : ''}
          disabled={subscribedButton === 5}
          onClick={() => displayRazorpay(199, 5)}
        >
          {subscribedButton === 5 ? 'Subscribed' : 'Subscribe'}
        </button>
        </div>
    </div>
  );
}

export default PlanScreen;






