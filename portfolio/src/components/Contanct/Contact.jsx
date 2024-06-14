import React from 'react'



function Contact() {
  return (
    <>
        <div className="contact py-12 px-48 flex">
    <div className="container mx-auto">
        <div className="row flex flex-wrap">
            <div className="contact-left w-full lg:w-1/3">
                <h1 className="text-4xl text-center mb-6">Contact</h1>
                
            </div>
            <div className="contact-right w-full lg:w-2/3">
                <form action="" className="contact-form">
                    <input type="text" name="Name" id="nameDiv" placeholder="Name" required className="w-full border-2 border-gray-800 p-4 mb-4 text-lg rounded-lg" />
                    <input type="email" name="email" id="emailDiv" placeholder="Email" required className="w-full border-2 border-gray-800 p-4 mb-4 text-lg rounded-lg" />
                    <textarea name="Message" id="messageDiv" rows="6" placeholder="Your Message" className="w-full border-2 border-gray-800 p-4 mb-4 text-lg rounded-lg"></textarea>
                    <button className="btn w-full bg-purple-700 p-4 text-white text-lg rounded-lg hover:bg-green-700 transition-colors" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Contact