/* The filter() method of Array instances creates a 
   copy of a portion of a given array, filtered down 
   to just the elements from the given array that pass 
   the test implemented by the provided function.
*/

/* ages: array of age values*/
const ages = [11, 15, 18, 30, 45];

/* Core JavaScript
   -- Adult: new filetred array
   -- age: to access individual element of an array   
*/
const AdultAge = ages.filter(function (age) {
            return age>18;
        });

console.log(AdultAge);


/* ReactJS */

function Adult() {
    const filteredAge = ages.filter(age => age > 18);   
    return (
        <ol>
            {
                filteredAge.map((age,index) => <li key={index}>{age}</li>)
            }
        </ol>
    )
    
}

export default Adult;