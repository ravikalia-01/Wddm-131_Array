/* map(): The map() method is an iterative method. 
          It calls a provided callbackFn function once 
          for each element in an array and 
          constructs a new array from the results
*/

// Products: Array
const products = ["Product 1", "Product 2", "Product 3"];

/* Core JavaScript
    -- DisplayList is new array */
const DisplayItems = products.map(function (product) {
            return product+"sold";
        });

console.log(DisplayItems);

/* ReactJS */
function DisplayList() {
    /* -- listItems: new array of jsx <li> elements
       -- product: individual item from the array
                   (parameter of callback function)
       -- index: in map() second parameter is an index
                 (position-starts from 0)
    */
    const listItems = products.map((product,index) =>
        <li key={index}>{product}</li>
    );
  return <ul>{listItems}</ul>;
}

export default DisplayList;