"use client";

import React from 'react'
// import ProgressBar from 'next-progress-bar';
// import NextProgress from "next-progress";


const Providers = ({ children }) => {
  return (
    <div>
      {/* <NextProgress delay={300} options={{ showSpinner: false }} color='red' height={5}/> */}
      {children}
    </div>
  )
}

export default Providers
