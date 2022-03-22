<template>
    <div class="container">
        <footer class="row row-cols-5 py-5 my-5 border-top">
          <div class="col">
            <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img src="https://images.velog.io/images/mun_js/post/a17afcd6-dbed-4e4f-9ec1-e4972973fd0f/gschool-black.svg" style="height: 2rem;">
            </a>
            <p class="text-muted small">© 2022. Junsang Mun. All Rights Reserved.</p>
            <p class="text-muted small">Trademarks that contain'거꾸로캠퍼스' or 'G-School' or something similar is a trademark of 거꾸로캠퍼스.</p>
          </div>
      
          <div class="col"></div><div class="col"></div>
      
          <div class="col">
            <h5>Blog</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="/blog" class="nav-link p-0 text-muted hover-block">블로그 홈</a></li>
              <li class="nav-item mb-2"><a href="/blog/1" class="nav-link p-0 text-muted hover-block">Ep 1. 김개똥</a></li>
              <li class="nav-item mb-2"><a href="/blog/2" class="nav-link p-0 text-muted hover-block">Ep 2. 김소똥</a></li>
              <li class="nav-item mb-2"><a href="/blog/3" class="nav-link p-0 text-muted hover-block">Ep 3. 김말똥</a></li>
              <li class="nav-item mb-2"><a href="/blog/4" class="nav-link p-0 text-muted hover-block">Ep 4. 김벌똥</a></li>
            </ul>
          </div>
      
          <div class="col">
            <h5 >Links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="https://거꾸로캠퍼스.kr" class="nav-link p-0 text-muted hover-block">거꾸로캠퍼스</a></li>
              <li class="nav-item mb-2"><a href="https://gschool.kr" class="nav-link p-0 text-muted hover-block">사단법인 교육실험실21</a></li>
              <li class="nav-item mb-2"><a href="https://youtube.com" class="nav-link p-0 text-muted hover-block">거꾸로캠퍼스 YouTube</a></li>
              <li class="nav-item mb-2"><a href="https://google.com" class="nav-link p-0 text-muted hover-block">배움장터 예약 폼</a></li>
            </ul>
          </div>
        </footer>
    </div>
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
.small-text{
    font-size: 4rem;
}
.hover-block:hover{
  transition: 0.3s;
  border-radius: 0.2rem;
  background-color: yellow;
}
</style>