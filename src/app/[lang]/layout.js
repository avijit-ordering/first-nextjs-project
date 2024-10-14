/* eslint-disable */
"use client";
  import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "../responsive.css";
import React, { useEffect, useState } from "react";

import ThemeProvider from "@/context/ThemeProvider";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer/index";
import { i18n } from '../../../i18n'
import { getDictionary } from "../../../getDictionary"
import CircularProgress from "@mui/material/CircularProgress";
import { useSelectedLayoutSegment  } from 'next/navigation';


export default function RootLayout({ children, params }) {
  
  const [lang, setlang] = useState({});
  const [pageLoading, setPageLoading] = useState(false);

  const startLoading = () => alert(2);
  const stopLoading = () => alert(3);
  const activeSegment = useSelectedLayoutSegment();

  useEffect(() => {
    setPageLoading(false)
  }, [activeSegment]);

  useEffect(() => {
    const fetchData = async () => {
    const lang_set = await getDictionary(params.lang);
    setlang(lang_set)
    
 
    }
   fetchData();
   //alert(params.lang)
  },[])
  
  return (
    <html lang={params.lang}>
      <body>
        {pageLoading && (
          <div className="loading d-flex align-items-center justify-content-center">
          <CircularProgress style={{'color': '#6d4aae'}} />
          </div>
        )}
        {params.lang && (
         <ThemeProvider setPageLoading={setPageLoading}>
          <Header params={params} t={lang} setPageLoading={setPageLoading}/> 
          {children}
           <Footer />
        </ThemeProvider> 
        )}
      </body>
    </html>
  );
}
