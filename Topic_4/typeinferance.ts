// type inference in typescript
// inference means typescript will automatically detect the type of the variable

let data='Deepak';
data=30;
// basically for any variable if you assign the type for very first time, it assumes that the name data
// is of type string and then you can assign any other type to it but not the other way around

let data1;
// if data1 has no value assigned than the type could be "any"
data1='Deepak';
data1=30;
data1=true;

// if suppose you declared data1:string, then remaining two values will complain
// because data1 is of type string and you cannot assign any other type to it

//if you want to restrict the value of any variable
let data3:5;
data3=10;
// data3=30; // this will complain because data3 is of type 5 and you cannot assign any other value to it
// data3='Deepak'; // this will also complain because data3 is of type 5 and you cannot assign any other type to it

// if you want to restrict the value of any variable to only 5, 10, 15, 20, 25, 30
let data4:5|10|15|20|25|30;
data4=10;
// data4=30; // this will complain because data4 is of type 5|10|15|20|25|30 and you cannot assign any other value to it
// data4='Deepak'; // this will also complain because data4 is of type 5|10|15|20|25|30 and you cannot assign any other type to it

// if you want to restrict the value of any variable to only 5, 10, 15, 20, 25, 30 and also string
let data5:5|10|15|20|25|30|"Deepak";
data5=10;


let dta=10;
const val=10;
val=30