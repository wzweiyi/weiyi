import React from 'react';
import { IRouteComponentProps } from 'umi'
import TeacherLayout from './TeacherLayout';


 const layouts:React.FC<IRouteComponentProps>=(props)=> {
     console.log(props.location);
     
    if (/\/teachers/.test(props.location.pathname )) {
       
     return <TeacherLayout>{props.children}</TeacherLayout>
        
      
    }
  
    return   props.children 
      
  
  }

  export default layouts