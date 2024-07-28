import React from 'react' ;
import cab from '../images/night.webp' ;
import Button from '../containers/Button';
import { useNavigate } from 'react-router-dom';
import data from '../mocks/data.json';

const Wallppr = () => {
  const navigate = useNavigate();
  return (
     
    <div className="wallpaper" style={{backgroundImage:`url(${cab})`}}>
      <h1 className='wall-txt'>Your Comfort
      <br/>
      Our Priority</h1>
      <Button text={data.button.request} onclick={() =>  navigate('/contact')}/>
    </div>
    
  )
}

export default Wallppr
