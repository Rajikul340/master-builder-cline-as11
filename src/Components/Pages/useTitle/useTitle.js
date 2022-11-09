import React, { useEffect } from 'react';

const useTitle = (title) => {

     useEffect(()=>{
  document.title = `${title} + Master Builder`
     },[title])






    return (
        <div>
            
        </div>
    );
};

export default useTitle;

