<template>
  <div class="container w-full">
      <h1 class="bg-green-200 rounded p-7 w-4/5 mx-auto cursor-pointer
              text-3xl">Shop Your Favorite Item</h1>
      <form class="bg-green-200 rounded p-7 w-4/5 mx-auto flex">

  <div v-bind="isEditing">
    <input type="text" class="rounded-full w-full mt-5 px-2 py-3"  v-model="item">
  <input type="submit" class="rounded-full w-full mt-5 px-2 py-3 cursor-pointer outline-none bg-red-400 
              font-bold text-bold text-white hover:bg-blue-300" value="Add to Cart" @click="storeItem()">
</div>
<div v-bind="updateItem">
    <input type="text" class="rounded-full w-full mt-5 px-2 py-3"  v-model="items">
    <input type="submit" class="rounded-full w-full mt-5 px-2 py-3 cursor-pointer outline-none bg-red-400 
              font-bold text-bold text-white hover:bg-blue-300" value="update" @click="updateItem()">
</div>
      <ol>
          <li v-bind="('item', 'index') in items">
              {{items}}


              <button type="button" class="rounded-full w-full mt-5 px-2 py-3 outline-none bg-red-400 
              font-bold text-bold text-white hover:bg-blue-300" 
              @click="editItem('index', 'item')">Edit</button>
              <button type="button" class="rounded-full w-full mt-5 px-2 py-3 outline-none bg-green-400 
              font-bold text-bold text-white hover:bg-blue-300" @click="deleteItem()">Delete</button>
          </li>
      </ol>
      </form>
  </div>
</template>

<script>
export default {
    name:"shopping-cart",


    data: function() {
        return{
        isEditting: false,
        selectedindex: "",
        item: "",
        items: []
    }

    },
    methods: {
        storeItem() {
            this.items.push(this.item)
            this.item = ""
        },

        editItem(index, item) {
            this.item = item

            this.selectedIndex = index

            this.isEditting = true
        },

        updateItem() {
               this.items.splice(this.selectedIndex, 1, this.item)

               this.isEditting = false
        },

        deleteItem(index) {
            this.items.splice(index, 1)
        }
    }


}
</script>

<style>

</style>