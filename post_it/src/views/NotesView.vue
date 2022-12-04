<template>
  <main>
    <button class="add-card" v-on:click="redirect();">
      <img class="plus-sign" src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/53868/plus-emoji-clipart-md.png">
    </button>
    <button class="log-data" v-on:click="computeData()">
      Log Data
    </button>
    <div class="wrapper">
      <div class="card" v-for="(card, index) in array" key="card.name" >
          <Card :card="card" :array="array" :deleteId="deleteId" :style="`background-color: ${'#' + (Math.random()*0xFFFFFF<<0).toString(16)}`"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Card from "../components/Card.vue";

export default {
  props: ["card", "cardId"],
  components: {
    Card,
  },

  data() {
    return {
      count: parseInt(localStorage.getItem("count") || "0"), // count is either 0 is not value in local storage or set to value at local storage
      name: "Nathan",
      array: [], //array is empty if no value is found at local storage or set to local storage value
      computedData: [],
      div: document.getElementsByClassName("card"),
    };
  },

  methods: {
    async deleteId(id: String)
    {
      const requestOptions = {
        method: "DELETE",
      };
      fetch("http://5.135.119.239:3090/notes/" + id, requestOptions)
        .then(response  => {
          if(response.ok)
          {
            response.json()
            console.log(response);
          }
        }); 
        console.log(this.array);
        this.array = this.array.filter(element => element._id != id);
        this.$toast.show("Deletion successful!");
      }, 
    redirect() {
      this.$router.push("/addCard");
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
        console.log(this.array);
        
      },
  },

  async mounted()
  {
    await this.computeData();
    console.log(this.array);
    document.body.style.backgroundColor = "#6f5844";
    
  }
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 2rem;
  grid-row: 2rem;
  font-size: 12px;
  border-radius: 2px;
  width: 100%;
  height: 100%;
}

@media (max-width: 600px){
  .wrapper {
  display: grid;
  grid-template-columns: repeat(1, 95%);
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 2rem;
  grid-row: 2rem;
  font-size: 12px;
  border-radius: 2px;
  width: 100%;
  height: 100%;
}
}

@media (max-width: 700px){
  .wrapper {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 0.5rem;
  grid-row-gap: 2rem;
  grid-row: 2rem;
  font-size: 12px;
  border-radius: 2px;
  width: 100%;
  height: 100%;
}
}

body{
  background-color: #875a31;
}

.card-body {
  border-radius: 2px;
  overflow:auto;
}

.plus-sign{
  width: 20px;
  height:20px;
}

.add-card{
  border-radius:10px;
  margin:5px;
}

.log-data{
  border-radius:10px;
  margin: 5px;
}

.grid-item{
  margin:20px;
}




</style>
