<script setup>
    import { onMounted } from "vue";
    onMounted(()=>{
        const images = window.document.querySelectorAll('.fold')
            images.forEach((el)=>{
            el.addEventListener('click',function(e){
                if(e.target.classList.value.search('expand')==-1){
                    document.querySelector('.expand').classList.remove('expand')
                    el.classList.add('expand')
                }
            })
        })
    })
    
</script>

<template>
    <div class="expanding-cards">
        <div class="fold expand" style="background-image: url('src/assets/ec-1.jpg');">
            <h3>Explore The World</h3>
        </div>
        <div class="fold" style="background-image: url('src/assets/ec-2.jpg');">
            <h3>Wild Forest</h3>
        </div>
        <div class="fold" style="background-image: url('src/assets/ec-3.jpg');">
            <h3>Sunny Beach</h3>
        </div>
        <div class="fold" style="background-image: url('src/assets/ec-4.jpg');">
            <h3>City on Winter</h3>
        </div>
        <div class="fold" style="background-image: url('src/assets/ec-5.jpg');">
            <h3>Mountains - Clouds</h3>
        </div>
    </div>
    
</template>

<style lang="less">

    .expanding-cards{
        height: 80vh;
        width: 90vw;
        margin: 0 auto;
        display: flex;
    }

    .fold{
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        margin: 0 10px;
        flex: 0.5;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.7s ease-in;
        h3{
            font-size: 24px;
            position: absolute;
            bottom: 20px;
            left: 20px;
            color: #fff;
            opacity: 0;
        }
    }

    .expand{
        flex: 5;
    }

    .expand.fold h3{
        opacity: 1;
        transition: all 0.3s ease-in 0.4s;
    }

</style>