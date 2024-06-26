'use client';
 
 
export default function PrintButton({products}) {


  function handleClick() {
    console.log(JSON.stringify(products, null, 2));
    window.print();
  }
 
  return <button onClick={handleClick}>PDF</button>;
}


