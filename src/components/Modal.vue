<template>
 <transition>
    <div v-if="$store.state.modalOpen" @click="$store.state.modalOpen = false" class="modal bg-[#2828286e] h-screen w-full fixed top-0 z-[111111]">
        <div v-if="$store.state.userSearchHistory[0] !== undefined" @click.stop class="modal-content !overflow-y-scroll overflow-x-hidden  h-[400px] flex flex-col item-center w-[50%] bg-[#1c1c1c] rounded-xl absolute top-[25%] left-[25%] p-[2%]">
          <div class="flex justify-between pb-2 -mt-2">
           <button @click="$store.dispatch('clearSearchHistory')" class="bg-red-600 py-[6px] px-[18px] rounded-2xl font-medium text-[#e4e4e4] hover:opacity-80 transition-all">Clear all</button>
          </div>
           <div v-for="item in $store.state.userSearchHistory" class="card w-[100%] min-h-[40px] !overlow-y-scroll overflow-x-hidden  h-auto !max-h-[80px] flex items-center w-full justify-between p-[1%] px-[2%] my-2 text-white shadow shadow-gray-500 rounded-[3px]">
             <img class="h-[20px] w-[20px]" src="../assets/images/icon.png" alt="">
             <h1 class="w-[20%] mx-auto text-[16px]">{{item.searchValue}}</h1>
             <p class="opacity-90 text-[14px]">{{item.date}}</p>
           </div>
        </div>
        
        <div v-else @click.stop class="modal-content !overflow-y-scroll overflow-x-hidden  h-[400px] flex flex-col item-center w-[50%] bg-[#1c1c1c] rounded-xl absolute top-[25%] left-[25%] p-[2%]">
          <img class="w-[60%] mx-auto my-3" src="../assets/images/404.png" alt="" />
           <div class="card w-[100%] min-h-[40px] !overlow-y-scroll overflow-x-hidden  h-auto !max-h-[80px] flex items-center w-full justify-between p-[1%] px-[2%] my-2 text-white shadow shadow-gray-500 rounded-[3px]">
             <h1>Your history is empty...</h1>
           </div>
        </div>
    </div>
 </transition>
</template>


<style>
.modal-content::-webkit-scrollbar {
  width: 10px;
}

.card::-webkit-scrollbar{
  width: 0px;
}

.modal-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb {
  background:#4b4b4b;
  color: #e4e4e4;
  border-radius: 3px;
}
</style>