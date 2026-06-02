import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SectionReveal from '../components/SectionReveal';
import PageHeader from '../components/PageHeader';

// REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyYvfxAZ5dxskNHEinCn4tJxjOk8-92cTn9rS62jZj0PMzoT0wuMbX4yn4Ab6D1Y-vZ/exec";

type JoinFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  message: string;
};

export default function Join() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<JoinFormData>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: JoinFormData) => {
    try {
      setSubmitStatus('idle');
      
      // Sending data to Google Apps Script
      // Apps Script receives GET and POST. An easy way is x-www-form-urlencoded
      const formData = new URLSearchParams();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key as keyof JoinFormData]);
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Used so we don't encounter CORS errors, but means response is opaque
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      // Because 'no-cors' gives an opaque response, we assume success if no crash.
      // If you configure your Apps Script to return correct CORS headers, you can handle actual responses.
      setSubmitStatus('success');
      reset();
    } catch(err: any) {
      setSubmitStatus('error');
      console.error(err);
    }
  };

  return (
    <div className="w-full bg-primary-50 min-h-screen">
      <PageHeader 
        title="Join the Hindu Mahasabha" 
        subtitle="Become a part of our historic movement. Register below to connect with our local and national chapters."
      />

      <section className="py-20">
        <SectionReveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-md border border-gray-300">
            <h2 className="text-3xl font-display font-medium text-navy-900 mb-8 border-b border-gray-200 pb-4">Membership Form</h2>

            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-50 text-green-800 border border-green-200 rounded">
                Thank you for your interest! Your membership inquiry has been submitted successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 text-red-800 border border-red-200 rounded">
                There was an error submitting your form. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-sans">First Name <span className="text-saffron-600">*</span></label>
                  <input 
                    type="text" 
                    {...register("firstName", { required: "First name is required" })} 
                    className={`mt-1 block w-full border ${errors.firstName ? 'border-red-300 shadow-sm focus:border-red-500 focus:ring-red-500' : 'border-gray-300 shadow-sm focus:border-navy-900 focus:ring-navy-900'} p-3 bg-primary-50`} 
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-sans">Last Name <span className="text-saffron-600">*</span></label>
                  <input 
                    type="text" 
                    {...register("lastName", { required: "Last name is required" })} 
                    className={`mt-1 block w-full border ${errors.lastName ? 'border-red-300 shadow-sm focus:border-red-500 focus:ring-red-500' : 'border-gray-300 shadow-sm focus:border-navy-900 focus:ring-navy-900'} p-3 bg-primary-50`} 
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-sans">Email Address <span className="text-saffron-600">*</span></label>
                  <input 
                    type="email" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
                    })} 
                    className={`mt-1 block w-full border ${errors.email ? 'border-red-300 shadow-sm focus:border-red-500 focus:ring-red-500' : 'border-gray-300 shadow-sm focus:border-navy-900 focus:ring-navy-900'} p-3 bg-primary-50`} 
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-sans">Phone Number <span className="text-saffron-600">*</span></label>
                  <input 
                    type="tel" 
                    {...register("phone", { required: "Phone number is required" })} 
                    className={`mt-1 block w-full border ${errors.phone ? 'border-red-300 shadow-sm focus:border-red-500 focus:ring-red-500' : 'border-gray-300 shadow-sm focus:border-navy-900 focus:ring-navy-900'} p-3 bg-primary-50`} 
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 font-sans">City / District <span className="text-saffron-600">*</span></label>
                <input 
                  type="text" 
                  {...register("city", { required: "City is required" })} 
                  className={`mt-1 block w-full border ${errors.city ? 'border-red-300 shadow-sm focus:border-red-500 focus:ring-red-500' : 'border-gray-300 shadow-sm focus:border-navy-900 focus:ring-navy-900'} p-3 bg-primary-50`} 
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 font-sans">Why do you want to join? (Optional)</label>
                <textarea 
                  {...register("message")} 
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 p-3 bg-primary-50 shadow-sm focus:border-navy-900 focus:ring-navy-900" 
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold shadow-sm text-white bg-navy-900 hover:bg-navy-800 transition-colors uppercase tracking-widest disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                <p className="mt-4 text-xs text-gray-500 text-center md:text-left">By submitting this form, you request to authorize the Hindu Mahasabha to contact you regarding membership and related activities.</p>
              </div>
            </form>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
