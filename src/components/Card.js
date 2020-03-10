import React from 'react';
const Card = ({name, email, id, username}) => {
	return(
<div className='tc bg-light-green dib br3 ma3 grow bw2 shadow-1'>
 <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
  <div>
    <h2>{name}</h2>
    <p>{email}</p>
  </div> 
</div>	);
}

export default Card;