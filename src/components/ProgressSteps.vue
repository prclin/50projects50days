<script setup>
  import { onMounted } from 'vue';

  onMounted(( )=>{
    const prev = document.querySelector('#prev')
    const next = document.querySelector('#next')
    const progress = document.querySelector('.progress')
    const circles = document.querySelectorAll('.circle')
    let current=1
    next.addEventListener('click', (e)=>{
      current++
      if(current>circles.length){
        current=circles.length
      }
      updateProgress()
    })

    prev.addEventListener('click', (e)=>{
      current--;
      if(current<1){
        current=1
      }
      updateProgress()
    })

    function updateProgress(){
      circles.forEach((circle,index)=>{
        // 更新步骤
        if(index<current){
          circle.classList.add('active')
        }else{
          circle.classList.remove('active')
        }

        //更新进度条
        const actives = document.querySelectorAll('.active')
        progress.style.width = (actives.length-1) / (circles.length-1)*100 +'%'
        
        //更新按钮
        if(actives.length == 1){
          prev.disabled= true
        }else if(actives.length == circles.length){
          next.disabled= true
        }else{
          prev.disabled= false
          next.disabled= false
        }
      })
    }

  })

</script>

<template>
  <div class="progress-steps">
    <div class="progress-container">
      <div class="progress"></div>
      <div class="circle active">1</div>
      <div class="circle">2</div>
      <div class="circle">3</div>
      <div class="circle">4</div>
    </div>
    <button class="btn" disabled id="prev">Prev</button>
    <button class="btn" id="next">Next</button>
  </div>
</template>

<style lang="less">

  @inactive-color : #e0e0e0;
  @active-color : #3498db;

  .progress-container{
    position: relative;
    display: flex;
    width: 350px;
    justify-content: space-between;
    max-width: 100%;
    margin-bottom: 60px;
    &::before {
      content : '';
      height: 4px;
      width: 100%;
      background: @inactive-color;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: -1;
    }
  }

  .circle{
    background-color: #fff;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid  @inactive-color;
    border-radius: 50%;
    color: #999;
    position: relative;
    z-index: 1;
    transition: all 0.4s ease;
  }

  .progress{
    height: 4px;
    width:0%;
    background-color: @active-color;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -1;
    transition: all 0.3s ease;
  }

  .active{
    border-color: @active-color;
  }

  .btn{
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
    background-color: @active-color;
  }

  .btn:disabled{
    background-color: @inactive-color;
    color: #fff;
  }

</style>