import { Jumbotron } from '../.nuxt/components';
<template>
  <div class="wrapper">
    <div class="jumbotron">
      <h1 class="title">TrakerApp</h1>
      <h4 class="subtitle"> <span class="brackets">&#60;   </span>Best way to know what you are doing <span class="brackets">	&#62;</span></h4>
      <p class="para">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et harum beatae
        laudantium eligendi voluptate ab.
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  height: 75vh;
  justify-content: center;
 
  
  /* border: solid red ;
  */
}


.jumbotron{

  margin: auto 0;
  /* line-height: 1.3rem; */
 width: 51rem;
 padding:2rem;
  /* border: solid red ; */
 

  
}

.title{
  font-size: 4.5rem;
  /* margin: 1.5rem 0; */
}
.subtitle{
  font-size: 2.5rem;
  color: rgb(63, 63, 63);

}

.para{
  font-size: 1.5rem;
  color: rgb(63, 63, 63);
}


</style>
