import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { send } from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Swal from 'sweetalert2'
import './Contact.css'

const Contact = () => {
   const [userName, setUserName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
   const [emailToSend, setEmailToSend] = useState({})

   const handleName = e => {
      const name = e.target.value
      setUserName(name)
   }

   const handleEmail = e => {
      const email = e.target.value
      setEmail(email)
   }

   const handleMessage = e => {
      const message = e.target.value
      setMessage(message)
   }

   const handSubmit = e => {
      e.preventDefault()
      const emailData = {
         userName,
         email,
         message
      }
      setEmailToSend(emailData)

      if(emailToSend.userName && emailToSend.email && emailToSend.message) {
         send('Fahad@mrf7', 'template_8vgks67', emailToSend, 'user_Py5pe0MDUeOfEcZ7Jdy5k')
         .then(result => {
            if(result.status === 200){
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Your message has been sent!',
                  showConfirmButton: false,
                  timer: 3500
               })
            }
         })
         .catch(error => console.log(error))
      } else {
         
      }
      e.target.reset()
   }


   return (
      <>
      <Header></Header>
      <div id="contact" className="
      container 
      px-4
      lg:px-14
      py-2
      mx-auto 
      pt-16
      pb-24
      text-center md:text-left
      ">
         <div className="flex justify-center pb-16">
            <div className="contact-dash mx-auto inline-block relative">
               <p className="text-lg font-extrabold about-h2 inline-block rounded badge-bg py-1.5 px-4">CONTACT ME</p>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="w-full flex justify-center">
               <form onSubmit={handSubmit} style={{width:"100%"}}>
                  <div className="w-full flex justify-center">
                     <label htmlFor="name"></label>
                     <input onBlur={handleName} name="name" className="input-select w-full lg:w-9/12 mb-5 rounded-lg p-4 text-lg" style={{backgroundColor: "#1d293a"}} type="text" id="name" placeholder="Type your name" required />
                  </div>
                  <div className="flex justify-center">
                     <label htmlFor="email"></label>
                     <input onBlur={handleEmail} className="input-select w-full lg:w-9/12 mb-5 rounded-lg p-4 text-lg" style={{backgroundColor: "#1d293a"}} type="email" id="email" placeholder="Type your email" required />
                  </div>
                  <div className="flex justify-center">
                     <label htmlFor="message"></label>
                     <textarea onBlur={handleMessage} name="message" className="input-select w-full lg:w-9/12 mb-5 rounded-lg p-4 text-lg" rows="5" style={{backgroundColor: "#1d293a"}} type="email" id="message" placeholder="Type your message" required ></textarea>
                  </div>
                  <div className="flex justify-center">
                     <input className="input-select w-full lg:w-9/12 cursor-pointer rounded-lg px-4 py-2 text-lg theme-bg" type="submit" value="Send Message"/>
                  </div>
               </form>
            </div>
            <div className="flex justify-center md:justify-items-end lg:justify-center pt-20 md:pt-0">
               <div className="pl-0 md:pl-7 lg:pl-0">
                  <div className="mb-4">
                     <h2 className="text-3xl theme-color font-bold">Email</h2>
                     <p className="text-lg text-white">m.rahman8213@gmail.com <span className="text-sm" style={{color: "hsl(0deg 0% 100% / 65%)"}}>(Recommended)</span></p>
                  </div>
                  <div className="mb-4">
                     <h2 className="text-3xl theme-color font-bold">LinkedIn</h2>
                     <p className="text-lg text-white">fahadmrf <a className="text-xl icon" href="https://www.linkedin.com/in/fahadmrf/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="ml-2 .icon" icon={faExternalLinkAlt}/></a></p>
                  </div>
                  <div className="mb-4">
                     <h2 className="text-3xl theme-color font-bold">GitHub</h2>
                     <p className="text-lg text-white">FahadCowboy <a className="text-xl icon" href="https://github.com/FahadCowboy" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="ml-2" icon={faExternalLinkAlt}/></a></p>
                  </div>
                  <div className="mb-4">
                     <h2 className="text-3xl theme-color font-bold">Address</h2>
                     <p className="text-lg text-white ">Kadal Gazi Road, Feni-3900, Feni, Bangladesh</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <Footer></Footer>
      </>
   );
};

export default Contact;