<template>
  <div>
    <div class="card-body">
      <h5 class="card-title">{{ card.title }}</h5>
      <p>(Card No: {{ card._id }})</p>
      <p class="card-text" >
        {{ card.content[0] }}
      </p>
      <a href="#" class="btn btn-primary" v-on:click="redirect()"><img class="arrow" src="https://static.vecteezy.com/system/resources/previews/008/844/878/original/arrow-icon-design-free-png.png"/></a>
      <a href="#" class="btn btn-primary delete-button" v-on:click="deleteId(card._id)" :cardId="card._id"><img class="arrow" src="https://www.freeiconspng.com/uploads/trash-can-icon-24.png"/></a>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";

export default {
  name: "Card",
  props: ["card", "deleteId"],

  data()
  {
    return{
      array: [], //array is empty if no value is found at local storage or set to local storage value
      computedData: [],
    }
  },

  methods: {
    redirect() {
      this.$router.push("/Card/" + this.card._id);
    },
    async deleteCard()
    {
      const requestOptions = {
        method: "DELETE",
      };
      fetch("http://5.135.119.239:3090/notes/" + this.card._id, requestOptions)
        .then(response  => {
          if(response.ok)
          {
            response.json()
            console.log(response);
          }
        }); 
        this.array = this.array.filter(element => element._id != this.card._id);
      }, 
      async computeData()
      {
        try{
          const response = await fetch("http://5.135.119.239:3090/notes")
            .then((response) => response.json())
          this.computedData = response.notes;

          this.array = this.computedData;
          }
          catch(error)
          {
            console.log(error);
          }
        
      },

      async mounted()
      {
        await this.computeData();
      }

  },
};
</script>

<style>
.arrow {
  height: 15px;
  width: 20px;
}

.delete-button{
  background-color: red;
  
}

.btn{
  border: 1px solid black;
  margin: 10px;
}

.btn:hover{
  opacity: 0.7;
}

.delete-button:hover{
  background-color: red;
}
</style>
