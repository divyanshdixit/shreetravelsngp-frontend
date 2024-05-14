import React from 'react' 
import img_exprience from '../images/wall-dark.jpg'
import { useSelector, useDispatch } from 'react-redux';

const Demo = () => {
  return (
    <div className='ex-demo' style={{backgroundImage:`url(${img_exprience})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", height: '350px'}}>
        <h1 className='demo-txt'> Experience it yourself </h1> 
        <p className='demo-txt'>Schedule a customized demo to understand how we can help you optimize</p>
              <p className='demo-txt'>your office transportation.</p>
              <br/>
              <br/>
              <br/>
              <br/>
              <hr/> 
              <br/> 
              <h1 className='demo-txt'>Request a demo</h1>
      
    </div>
  )
}

export default Demo
