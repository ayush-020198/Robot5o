import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
	return (
<div className = 'pa2'>
<input 
 	   className='pa3 ba bg-lightest-blue b--blue'
       type='search' 
       placeholder='Search Friends'
       onChange={searchChange}
       />
</div>
		);
}

export default Searchbox;