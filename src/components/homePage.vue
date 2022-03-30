<template>
    <div id="homepage">
        <h1 style="font-size:3rem;">Smart Restaurant</h1>
    </div>
    
    <div class="flex-table">
        
        <div class="flex-block">
            <img height="300" width="300"  src="../assets/table1.jpg">
            <p>Table 1</p> 
            <p>Status : {{measure.table1}} </p> 
            
        </div>
        <div class="flex-block">
            <img height="300" width="300"  src="../assets/table1.jpg">
            <p>Table 2</p> 
            <p>Status : {{measure.table2}} </p> 

        </div>
        <div class="flex-block">
            <img height="300" width="300"  src="../assets/table1.jpg">
            <p>Table 3</p> 
            <p>Status : {{measure.table3}} </p> 
        </div>
        <div class="flex-block">
            <img height="300" width="300"  src="../assets/table1.jpg" >
            <p>Table 4</p> 
            <p>Status : {{measure.table4}} </p> 
            
            
        </div>
        
    
    </div>
    <div class="wraper">
        <div class="split">
            <div class="split-left" >
                <img style='vertical-align:middle;' height="250" width="300"  src="../assets/thermometer.jpg">
                Temperature : {{measure.temp}} C
            </div>
            <div class="split-right">
                <img style='vertical-align:middle;' height="250" width="250"  src="../assets/humidity.jpg">
                Humidity : {{measure.humid}}
            </div>
        </div>
    </div>



</template>

<script>
import application from "../initfirebase";
import { getDatabase,ref, child, get , onValue,set, } from "firebase/database";
import dataService from '../services/dataService';

const rt = getDatabase(application);

   export default {
       data(){
           return {
               measure:{
                   table1 : "0",
                   table2 : "0",
                   table3 : "0",
                   table4 : "0",
                   temp : "",
                   humid : "",
               }
           }
       },
       create(){
           setInterval(()=>{
            this.readData();
            },1000)
       },
       methods: {

        //    write(){
        //        dataService.writeData(250);
        //    },

           readData(){
               //tables
               const table1Ref = ref(rt, 'tables/1');
               onValue(table1Ref, (snapshot) => {
               this.measure.table1 = "Ready" ; 
               if(snapshot.val() == '1'){
                   this.measure.table1 = "Unready" ; 
               }
               });

               const table2Ref = ref(rt, 'tables/2');
               onValue(table2Ref, (snapshot) => {                
               this.measure.table2 = "Ready" ; 
               if(snapshot.val() == '1'){
                   this.measure.table2 = "Unready" ; 
               }
               });

               const table3Ref = ref(rt, 'tables/3');
               onValue(table3Ref, (snapshot) => {                
               this.measure.table3 = "Ready" ; 
               if(snapshot.val() == '1'){
                   this.measure.table3 = "Unready" ; 
               }
               });

               const table4Ref = ref(rt, 'tables/4');
               onValue(table4Ref, (snapshot) => {                
               this.measure.table4 = "Ready" ; 
               if(snapshot.val() == '1'){
                   this.measure.table4 = "Unready" ; 
               }
               });

               //read temp
               const tempRef = ref(rt, 'temp/');
               onValue(tempRef, (snapshot) => {                
               this.measure.temp = snapshot.val();
               });

               //read humid
               const humidRef = ref(rt, 'humid/');
               onValue(humidRef, (snapshot) => {
               this.measure.humid = snapshot.val();
               });

               
           }

           
       },
       mounted(){
           this.readData();
       }
   }


</script>

<style scoped>
    #homepage{
        position: relative;
        display: flex;
        left: 25%;
        width: 50%;
        border-radius: 1rem;
        background-color:rgb(196, 218, 163);
        justify-content: center;
    }
    .flex-table{
        position: relative;
        display: flex;
        top: 2rem;
        justify-content: center;
        /* border: 1px solid red; */
    }
    .flex-block{

        padding: 3rem;
        /* border: 1px solid rgb(211, 58, 58); */
        font-size: 1.5rem;
        text-align: center;
    }   

    .split{
        position: relative;
        display: flex;
    }
    .split-left{
        margin-top: 1rem;
        width: 50%;
        font-size: 1.5rem;
        /* border: 1px solid green; */
        text-align: center;
    }
    .split-right{
        margin-top: 1rem;
        width: 50%;
        font-size: 1.5rem;
        /* border: 1px solid blue; */
        text-align: center;
    }
    
    #temperature{
        display: flex;
    }

</style>