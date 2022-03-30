import application from "../initfirebase"
// import { getFirestore } from 'firebase/firestore'
import { ref, onValue , set , child , update } from "firebase/database";
import { getDatabase } from "firebase/database";
import { getFirestore ,doc ,addDoc, setDoc ,deleteDoc, collection , documentId ,DocumentReference} from "firebase/firestore"; 


const firebase = getFirestore(application);
const database = getDatabase(application);

const status = 1;

// console.log(firebase)
// console.log(database)

class DataService {

  async create(blog) {

    var data = {
      price : blog.price,
      date : blog.date
    };

    const path = 'table' + blog.table +'/' ;
    const document = addDoc(collection(firebase, path),data)
    const key = await document.then((value)=>value.id)

    console.log("Document Created with key" , key ); 

    this.updateStatus(key, blog.table) ; 

  }

  updateStatus(key,table){
    console.log('Beginning Payment Request...')
    const docRef = 'table' + table +'/' + key + '/';
    this.checkStatus()   
    
    setTimeout(()=>{
        const check = this.status;
        if (!check){
            // console.log('Beginning delete blog at',docRef)
            this.delete(key,table);
            console.log('Blog Deleted.')
        }else{
          console.log('Payment Confirmed.')
        }
    },14000)

    this.status = 1;

  }

  checkStatus(){
    const statusRef = ref(database, 'status/');
    
    this.status = 1;
    const refresh = setInterval(()=>{
      onValue(statusRef, (snapshot) => {      
        // console.log('snap',snapshot.val())
        if(snapshot.val() == 'Insuffucient Balance' || snapshot.val() == 'Error. Please try again.' || snapshot.val() == 'Timeout. Please try again.' ){
          this.status = 0
        } 
      });
    },500);
    
    setTimeout(()=>{
      clearInterval(refresh);
    },12000)

    
  }


  delete(docId , table){
    const path = 'table' + table + '/' ;
    const docRef = doc(firebase , path , docId ) ; 
    deleteDoc(docRef);
    console.log("AutoDelete Unsuccessfully Payment Sucessfully.")
  }

  writeData(price){
    // console.log('price',price);
    const priceRef = ref(database, '/');
    const priceData = {
      price : price,
    }
    // console.log('priceData',priceData);

    update(priceRef,priceData);
    console.log("Price Updated.")
  }
  
}

// console.log('pass dataService')

export default new DataService();