/*Example Ternary Operator*/
/* Core JavaScript */
const age = 20;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result);


/* ReactJS */
function AgeStatus() {
   const age =20;
   return (
      <div>
         {age >= 18 ? <p>You are an adult.</p> : <p>You are a minor.</p>}
      </div>
   );
}

export default AgeStatus;