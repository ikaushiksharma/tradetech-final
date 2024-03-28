import React from 'react'

const FeaturesSection2 = () => {
  return (
    <div className="max-w-screen-2xl relative gap-12 bg-gray-100 p-16 w-full flex flex-col items-center min-h-screen h-full">
      <div className="max-w-xl text-6xl mb-12 font-bold">
        <h1 className="text-center">
          Seamlessly enhance your current sales strategy
        </h1>
        <h2 className="text-center text-[#7E30E1]">Features &gt;</h2>
      </div>
      <div className="flex flex-row items-center w-4/5 gap-6 justify-between">
        <div className="flex-[1] flex flex-col gap-6 h-[80vh] py-12 px-8 rounded-3xl bg-white">
          <h3 className="text-2xl font-bold whitespace-nowrap">
            Comprehensive reporting
          </h3>
          <h6 className="text-xl leading-normal font-bold text-gray-500">
            Detailed reporting and analytics features to track and analyze data.
          </h6>
        </div>
        <div className="flex-[2] h-[80vh] rounded-3xl py-12 px-8 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600">
          <div className="w-3/5 flex flex-col gap-6 ">
            <h3 className="text-2xl font-bold whitespace-nowrap">
              Simultaneous conversations
            </h3>
            <h6 className="text-xl leading-normal font-bold text-gray-500">
              Respond to hundreds of people at the same time with 100% accuracy.
            </h6>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center w-4/5 gap-6 justify-between">
        <div className="flex-[2] h-[70vh] rounded-3xl py-12 px-8 bg-white">
          <div className="w-3/5 flex flex-col gap-6 ">
            <h3 className="text-2xl font-bold whitespace-nowrap">
              Multiple instruction options
            </h3>
            <h6 className="text-xl leading-normal font-bold text-gray-500">
              Supports various instruciones methods for each campaign.
            </h6>
          </div>
        </div>
        <div className="flex-[1] flex flex-col gap-6 h-[70vh] py-12 px-8 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <h3 className="text-2xl text-white font-bold whitespace-nowrap">
            Robust security
          </h3>
          <h6 className="text-xl leading-normal font-bold text-gray-200">
            Secure gateways, SSL encryption, and two-factor authentication.
          </h6>
        </div>
      </div>
      <div className="flex flex-row items-center w-4/5 gap-6 justify-between">
        <div className="flex-[1] flex flex-col gap-6 h-[60vh] py-12 px-8 rounded-3xl bg-gradient-to-b from-white to-teal-100">
          <h3 className="text-2xl font-bold whitespace-nowrap">
            Popular platform integration
          </h3>
          <h6 className="text-xl leading-normal font-bold text-gray-500">
            Integrate with your own website, phone, and social networks.
          </h6>
        </div>
      </div>``
    </div>
  )
}

export default FeaturesSection2
