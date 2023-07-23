"use client";

import React from 'react'
import ProgressBar from 'next-nprogress-bar';


const Providers = ({ children }) => {
  return (
    <><ProgressBar
        height="4px"
        color="#e2a42c"
        options={{ showSpinner: true, easing: 'ease', speed: 1000 }}
        shallowRouting
        appDirectory
      />
      {children}
    </>
  )
}

export default Providers