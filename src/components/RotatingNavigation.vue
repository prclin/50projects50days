<script setup>
import { onMounted } from 'vue';

    onMounted(()=>{
        const open=document.querySelector("#open")
        const close=document.querySelector("#close")
        const content=document.querySelector(".rotating-navigation")
        open.addEventListener('click',()=>{
            content.classList.add('roll')
        })
        close.addEventListener('click',()=>{
            content.classList.remove('roll')
        })
    })
</script>

<template>
    <div class="rotating-navigation">
        <div class="circle">
            <div id="open">
                <icon-list :size="32" style="color: #fff" />
            </div>
            <div id="close">
                <icon-close :size="32" style="color: #fff" />
            </div>
        </div>
        <div class="content">
            <h1>Amazing Article</h1>
            <small>Florin Pop</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>
            <h3>My Dog</h3>
            <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80" alt="doggy"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
        </div>
    </div>
    
</template>

<style lang='less' scoped>
    .rotating-navigation{
        background-color: #fff;
        height: 100%;
        width: 100%;
        position: relative;
        transition: all 0.5s linear;
        transform-origin:0% 0%;
    }

    .circle{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #ff7979;
        position: absolute;
        top: -100px;
        left: -100px;
        transition: all 0.5s linear;
    }

    .roll{
        transform: rotate(-20deg);
        .circle{
            transform: rotate(-70deg);
        }
    }

    #open{
        position: absolute;
        top: 60%;
        left: 60%;
    }

    #close{
        position: absolute;
        top: 60%;
        left: 20%;
    }

    .content{
        width: 1000px;
        margin: 50px auto;
        text-align: left;
        h1{
            display: block;
            font-size: 2em;
            margin-block-start: 0.67em;
            margin-block-end: 0.67em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
            margin: 0;
            color: #222;
        }
        h3{
            display: block;
            font-size: 1.17em;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
            color: #222;
        }
        img{
            width: inherit;
        }
        p{
            color: #333;
            line-height: 1.5;
            margin: 10px 0;
        }
        small{
            color: #555;
            font-style: italic;
        }
    }
</style>