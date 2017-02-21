<template>
    <div class="outer" v-if="show">
        <style type="text/css">html,body{overflow:hidden}</style>
        <div class="inner" v-show="animation" transition="fadein">
            <div class="error-icon">
                <i class="fa fa-exclamation-circle"></i>
            </div>
            <div class="error-title">
                {{header}}
            </div>
            <div class="error-code">
                {{code}} {{status}}
            </div>
            <div class="error-description">
                {{message}}
            </div>
            <div class="error-button">
                <button class="ok" v-on:click="removeFunction()">OK</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    body, html{
        overflow: hidden!important;
    }
    .outer{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100000;
        background: rgba(0,0,0,0.25);
    }
    .inner{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transition: none;
        min-width: 400px;
        background-image: radial-gradient(#F2F2F2,#ffffff);
        z-index: 100001;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px 0 rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        padding: 20px;
        text-align: center;
    }
    .fadein-transition{
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition: ease all 1s;
    }
    .fadein-enter{
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }
    .fadein-leave{
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }
    @media screen and (max-width:400px){
        .inner{
            width: 80% !important;
            min-width: 1px !important;
        }
    }
    .inner .error-icon{
        font-size: 80px;
        color: #F27474;
        margin-bottom: 20px;
    }
    .inner .error-title{
        color: #333;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 10px;
    }
    .inner .error-code{
        color: #8c8c8c;
        font-size: 12px;
        position: absolute;
        top: 20px;
        right: 20px;
    }
    .inner .error-description{
        color: #8c8c8c;
        font-size: 16px;
        margin-bottom: 20px;
    }
    .inner .error-button button{
        padding: 8px 20px;
        color: #fff;
        font-size: 18px;
        border-radius: 4px;
        border: none;
    }
    .inner .error-button button.ok{
        background: #8CD4F5;
    }
    .inner .error-button button:hover {
        background: #7ecff4;
    }
</style>
<script>
    export default{
        data: function() {
            return {
                animation: false,
                show: true
            }
        },
        ready(){
            this.animation = true;
        },
        props:['message', 'header','code', 'status'],
        methods: {
            removeFunction(){
                this.animation = false;
                this.show = false;
            }
        }
    }
</script>
