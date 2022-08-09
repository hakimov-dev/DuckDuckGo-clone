<template>
    <div class="modal bg-[#2828286e] h-screen w-full fixed top-0 z-[111111]">
        <div class="modal-content !overflow-y-scroll overflow-x-hidden  h-[400px] flex flex-col item-center w-[50%] bg-[#1c1c1c] rounded-xl absolute top-[25%] left-[25%] p-[2%]">
           <div v-for="item in 30" class="card w-[80%] h-[40px] flex items-center w-full justify-between p-[1%] px-[2%] my-2 text-white shadow shadow-gray-500 rounded-[3px]">
             <img class="h-[20px] w-[20px]" src="../assets/images/icon.png" alt="">
             <h1>Search item</h1>
             <p>Search time</p>
           </div>
        </div>
    </div>
</template>


<style>
.modal-content::-webkit-scrollbar {
  width: 10px;
}

.modal-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 3px;
}

.modal-content::-webkit-scrollbar-thumb {
  background:#4b4b4b;
  border-radius: 3px;
}
</style>