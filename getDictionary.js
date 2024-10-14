// import test from './dictionaries/test.csv';


import en from './dictionaries/en.csv';
import de from './dictionaries/de.csv';
import sv from './dictionaries/sv.csv';

// const dictionaries = {
//     en: () => import("./dictionaries/en.json").then(r => r.default),
//     sv: () => import("./dictionaries/sv.json").then(r => r.default),
//     de: () => import("./dictionaries/de.json").then(r => r.default)
//   }
  

  export const getDictionary = (lang) => {

    if(lang == 'en'){
      return en;
    }else if(lang == 'sv'){
      return sv;
    }else if(lang == 'de'){
      return de;
    }else{
      return en;
    }
    
    //console.log(test[0].key)

    // const csvFilePath= dictionaries['en1']
    // console.log(csvFilePath)

    // Papa.parse(test, {
    //   complete: function(results) {
 
    //     console.log("Finished:", results.data);
    //   }
    // });
      
      // const reader = response.body.getReader();
      
      // const result = await reader.read();
   
      // const decoder = new TextDecoder("utf-8");
      // const csvData = decoder.decode(result.value);
      // console.log(decoder)
      // const parsedData = Papa.parse(csvData, { 
      //   header: false, 
      //   skipEmptyLines: true 
      // });

      // console.log(parsedData);
   // return dictionaries[lang]();
  }