import { useRef } from 'react';
import Child from './Child';

function Parent() {
  const childRef = useRef(null);

  return (
    <>
      <Child ref={childRef}>Content of Child component</Child>
    </>
  );
}

export default Parent;
