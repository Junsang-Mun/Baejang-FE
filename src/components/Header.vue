<template>
    <header class="p-3 bg-dark text-white sticky-top" style="border-bottom-color: aliceblue; border-bottom:solid;">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <img src="https://images.velog.io/images/mun_js/post/2dadbc64-a8aa-4939-ab8b-5998c5a6cc48/gschool.svg" style="height: 1.5rem; padding-right: 3rem;">
                    <!-- https://images.velog.io/images/mun_js/post/a17afcd6-dbed-4e4f-9ec1-e4972973fd0f/gschool-black.svg -->
                </a>
            
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" class="nav-link px-2 text-white hover">대문</a></li>
                    <li><a href="/rsvp" class="nav-link px-2 text-white hover">배움장터 예약하기</a></li>
                    <li><a href="/blog/" class="nav-link px-2 text-white hover">블로그</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    module.exports ={
        data: function(){
            return{
            
            }
        }
    }
</script>
<style>
.hover{
    border-radius: 0.3rem;
}
.hover:hover{
    transition: 300ms;
    background-color: #adadad;
    cursor: pointer;
}
</style>