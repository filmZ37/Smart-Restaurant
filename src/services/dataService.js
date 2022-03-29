import application from "../initfirebase"
// import { getFirestore } from 'firebase/firestore'
import { ref, onValue , set , child , update } from "firebase/database";
import { getDatabase } from "firebase/database";
import { getFirestore ,doc ,addDoc, setDoc , collection } from "firebase/firestore"; 


const firebase = getFirestore(application);
const database = getDatabase(application);

// console.log(firebase)
// console.log(database)

class DataService {
  
  create(blog) {

    var data = {
      price : blog.price,
      date : blog.date
    };


    if(blog.table == "1"){
      addDoc(collection(firebase, 'table1/'),data);
    }else if(blog.table == "2"){
      addDoc(collection(firebase, 'table2/'),data);
    }else if(blog.table == "3"){
      addDoc(collection(firebase, 'table3/'),data);
    }else{
      addDoc(collection(firebase, 'table4/'),data);
    }
    console.log("Document Created"); 
  }

  writeData(price){
    console.log('price',price);
    const priceRef = ref(database, '/');
    const priceData = {
      price : price,
    }
    console.log('priceData',priceData);

    update(priceRef,priceData);
    console.log("Update Completed")
  }
  
}

// console.log('pass dataService')

export default new DataService();