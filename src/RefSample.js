import { useRef } from 'react';

const RefSample = () => {
  const id = useRef(1)
  const setId = (n) => id.current = n 
  const printId = () => console.log(id.current)
  const onClick = () => {
    setId(234)
    printId()
  }
  return (
    <div>
      <button onClick={onClick}>ID 설정하기</button>
    </div>
  );
};

export default RefSample;