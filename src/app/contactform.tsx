
"use client";


import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqkrrwkw");
  if (state.succeeded) {
      return (
      <div className='flex justify-center'>
        <p className='p-3 border-2 border-grey-300 shadow-md mb-6 font-bold'>Thanks I will respond ASAP!</p>
    </div>)
    }
  
  return (


  <div className="max-w-md mx-auto p-8 border-2 border-gray-300 rounded-xl shadow-md mt-4 mb-6">
    <form 
    action="https://formspree.io/f/xqkrrwkw"
    method="POST"
    onSubmit={handleSubmit}>
      <label htmlFor="email" className="block text-gray-700 mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="border border-black rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <label htmlFor="email" className="block text-gray-700 mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="border border-black rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" 
      disabled={state.submitting}
      className="bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600">
        Submit
      </button>
    </form>
</div>  
  );
}

