// import { forwardRef } from 'react';

function Child(props, ref) {
  //   return <div ref={ref}>{props.children}</div>;
  return <div ref={props.childRef}>{props.children}</div>;
}

export default Child;
// export default forwardRef(Ahmad);
