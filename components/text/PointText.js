import React from 'react';
import Text from './Text';


function PointText({ children}) {
  return (
    <div >
      <Text className='text-stone-500'>{children}</Text>
    </div>
  );
}

export default PointText;
