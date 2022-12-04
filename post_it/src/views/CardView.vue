<template>
  <div class="card" style="width: 18rem">
    <div class="card-body" v-bind:this_card="card">
      <h5 class="card-title">{{ card.title }}</h5>
      <p>(Card No: {{ card._id }})</p>
      <p class="card-text">
        {{ card.content }}
      </p>
    </div>
    <a href="#" class="button" v-on:click="redirectHome()">
        <img class="home" src="https://www.transparentpng.com/thumb/house/house-transparent-picture-19.png" />
      </a>
      <a href="#" class="button" v-on:click="redirectModifyCard()">
        <img class="modify" src="https://publicdomainvectors.org/tn_img/loop-arrow.webp">
      </a>
  </div>
      
</template>

<script lang="ts">
import { propsToAttrMap } from "@vue/shared";
import Card from "../components/Card.vue";

interface PostIt {
  title: String;
  content: String;
  _id: Number;
}

export default {
  props: ["card", "array"],

  components: {
    Card,
  },

  data() {
    return {
      count: parseInt(localStorage.getItem("count") || "0"), // count is either 0 is not value in local storage or set to value at local storage
      name: "Nathan",
      array: [], //array is empty if no value is found at local storage or set to local storage value
      objectId: this.$router.currentRoute.value.params,
      card: {} as PostIt,
      computedData: [],
    };
  },

  methods: {
    redirectHome() {
      this.$router.push("/");
    },
    redirectModifyCard()
    {
      this.$router.push("/ModifyCard/" + this.card._id);
      this.$toaster.show("Successfully modified card");
    },
    async computeData(id: string | string[])
    {
      try{
        const response = await fetch("http://5.135.119.239:3090/notes/" + id)
          .then((response) => response.json())
        this.card = response.note;
      }
      catch(error)
      {
        console.log(error);
      }
      

    },
  },

  

  async mounted() {
    console.log(this.$router.currentRoute.value.params["id"]);
    await this.computeData(this.$router.currentRoute.value.params["id"]);
  },
};
</script>

<style>
.home {
  height: 40px;
  width: 40px;
}

.modify{
  height:30px;
  width:30px;
}

.button {
  margin:20px;
  border: solid 2px black;
  border-radius: 20%;
  padding: 10px;
}


</style>
