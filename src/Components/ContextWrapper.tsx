"use client";

import { ThemeProvider } from 'next-themes';
import React from 'react';

const ContextWrapper = ( { props } : { props:any}) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {props} 
    </ThemeProvider>
  )
}

export default ContextWrapper