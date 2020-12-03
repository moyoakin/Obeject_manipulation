/**
 * The code block below is the initialization of an object using the object litral method,
 *  in the object is a method that logs out all properties and values in the object.
 */

 // Number 1 soulution:


const address = {
    street:"Hudson street",
    city:"Coquitlam",
    zipcode:11208,
    showAddress(obj){
      for(const prop of Object.keys(obj)){
        console.log(prop,obj[prop]);
      }
    }
  }
  
  address.showAddress(address);


  /**
   * The function below is a factory function and Constructor function that can be used to get address information from user
   */

   function addressTemplate(address){
       return{
        ApartmentNumber,
        StreetNumber,
        Province,
        PostalCode,
        fullAddress(){
            console.log('full address')
        }
       }
   }

   function addressTemplate(address){
       this.ApartmentNumber = ApartmentNumber;
       this.StreetNumber = StreetNumber;
       this.Province = Province;
       this.fullAddress = function fullAddress(){
           console.log('full address');
       }
   }


   /**
    * The block of code below is to check for a value in an object
    */

  
    const school = {
    id: 'xHsPOla',
    name: 'Myte school',
    address:{
        street: "2nd street burnaby"
    }
}

for(const prop in school){
    checkedObj = school[prop]
    if(Object.prototype.toString.call(cachedValue) === "[object Object]"){
        for(const key in checkedObj){
            if(checkedObj === "2nd street burnaby" ){
                return true;
            }else{
                return false;
            }

        }

    }
}

/**
 * marging of both objects 
 */

const student = {
    name: 'Tai',
    age: 20,
    gender: "male"
}
const studentAddress = {
    street: "2nd street burnaby",
    State: "Vancouver",
    country: "Canada"
}

const margeStudentInfo = Object.assign({}, student, studentAddress);


// Another way to marge object using the spread operator


const student = {
    name: 'Tai',
    age: 20,
    gender: "male"
}
const studentAddress = {
    street: "2nd street burnaby",
    State: "Vancouver",
    country: "Canada"
}

const margeAllStudentInfo = {...student, ...studentAddress}

console.log(margeAllStudentInfo);

   