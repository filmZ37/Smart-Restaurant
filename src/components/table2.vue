<template>
    <div id="add-table2">
        <form v-if="!submitted">
            <h2> Table 2 </h2>    
            <label> Price </label>:
            <input type="number" min='0' v-model="blog.price"  required> <br>
            <button @click="saveBlog">Submit</button>
        </form>
        <div v-else>
            <h3>Submitted Successfully</h3>
            <button @click="newBlog">Return</button>
        </div>

        <br>
        <div id="preview">
            <h3> Preview Table 2 </h3>
            <p>Price: {{blog.price}} </p>
            <p>Date: {{blog.date}}</p>
        </div>
        <!-- <div>Table 1 <br> Status : { } </div> -->
        <!-- <br><br> -->
        <!-- <div>
            <h2>Payment Status</h2>
            <h3>{{blog.paymentStatus}}</h3>
        </div> -->
    </div>
    
    
</template>

<script>
import dataService from "../services/dataService.js";

export default {
    data() {
        return {
            blog:{
                table : "2",
                price : 0,
                date : Date().slice(0,25),
                paymentStatus : "Ready"
            },
            submitted: false,
        }
    },
    created(){
        setInterval(()=>{
            this.getDate();
        },1000)
    },
    methods: {
        getDate(){
            this.blog.date = Date().slice(0,25)
        },
        
        saveBlog(){

            var blog = {
                table: this.blog.table,
                price : this.blog.price,
                date : this.blog.date,

            };

            if(this.blog.price == 0) return ;
            dataService.create(blog);
            this.submitted = true;
            dataService.writeData(blog.price);
        },

        newBlog(){
            
            this.submitted = false;
            this.blog.price = 0;
            this.blog.date = "";
        },
        
    },
    mounted(){
        this.saveBlog()
    }
}
</script>

<style scoped>
button{
    font-size: 1rem;
    margin: 1rem;
    padding: 0.5rem;
}
    #add-table2{
        width: 25%;
        height: 98vh;

        border: 1px solid white;
        font-size: 1.5rem;
        text-align: center;

        background: wheat;
        overflow: hidden;
    }

    #preview{
        display: inline-block;
        padding: 1rem;

        width: 75%;
        background: white;
        text-align: center;
    }

</style>