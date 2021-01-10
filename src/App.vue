<template>
  <div id="app">

    <!-- Body Inner -->
    <div class="body-inner">
    
      <!-- Header -->
      <header id="header" data-fullwidth="true">
        <div class="header-inner">
          <div class="container">
            <!--Logo-->
            <div id="logo"> 
              <a href="/">
                <span class="logo-default">Perfect.Playlist</span>
                <span class="logo-dark">Perfect.Playlist</span>
              </a> 
            </div>
            <!--End: Logo-->

            <!-- Search -->
            <div id="search"><a id="btn-search-close" class="btn-search-close" aria-label="Close search form"><i class="icon-x"></i></a>
              <form class="search-form" action="search-results-page.html" method="get">
                <input class="form-control" name="q" type="text" placeholder="Type & Search..." />
                <span class="text-muted">Start typing & press "Enter" or "ESC" to close</span>
              </form>
            </div>
            <!-- end: search -->

            <!--Header Extras-->
            <div class="header-extras">
                <ul>
                  <li>
                      <a id="btn-search" href="#"> <i class="icon-search"></i></a>
                  </li>
                </ul>
            </div>
            <!--end: Header Extras-->
            
            <!--Navigation Resposnive Trigger-->
            <div id="mainMenu-trigger">
              <a class="lines-button x"><span class="lines"></span></a>
            </div>
            <!--end: Navigation Resposnive Trigger-->
            <!--Navigation-->
            <div id="mainMenu">
              <div class="container">
                <nav>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li class="dropdown"><a href="#">Categories</a>
                      <ul class="dropdown-menu">
                        <li><a href="/subjects">Subjects</a></li>
                        <li><a href="/songs">Songs</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a href="#">User</a>
                      <ul class="dropdown-menu">
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/logout">Logout</a></li>
                      </ul>
                    </li>
                    <li><a href="/admin">Admin</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--end: Navigation-->
          </div>
        </div>
      </header>
      <!-- end: Header -->

      <router-view/>

      <!-- Footer -->
      <!-- <footer id="footer">
            <div class="footer-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="widget">
                                <div class="widget-title">Perfect.Playlist</div>
                                <p class="mb-5">Built with love in Chicago, Illinois<br> All rights reserved. Copyright © 2021. INSPIRO.</p>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="widget">
                                        <div class="widget-title">Links</div>
                                        <ul class="list">
                                            <li><a href="/subjects">Subjects</a></li>
                                            <li><a href="/songs">Songs</a></li>
                                            <li><a href="/signup">Sign Up</a></li>
                                            <li><a href="/login">Login</a></li>
                                            <li><a href="/logout">Logout</a></li>
                                            <li><a href="/admin">Admin</a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="col-lg-9">
                                  <form class="widget-contact-form" novalidate action="include/contact-form.php" role="form" method="post">
                                    <div class="input-group mb-2">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
                                      </div>
                                      <input type="text" aria-required="true" name="widget-contact-form-name" class="form-control required name" placeholder="Enter your Name">
                                    </div>
                                    <div class="input-group mb-2">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                                      </div>
                                      <input type="email" aria-required="true" required name="widget-contact-form-email" class="form-control required email" placeholder="Enter your Email">
                                    </div>
                                    <div class="form-group mb-2">
                                      <textarea type="text" name="widget-contact-form-message" rows="5" class="form-control required" placeholder="Enter your Message"></textarea>
                                    </div>
                                    <div class="form-group">
                                      <button class="btn" type="submit" id="form-submit"><i class="fa fa-paper-plane"></i>&nbsp;Send message</button>
                                    </div>
                                  </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-content">
                <div class="container">
                    <div class="copyright-text text-center">&copy; 2019 POLO - Responsive Multi-Purpose HTML5 Template. All Rights Reserved.<a href="//www.inspiro-media.com" target="_blank" rel="noopener"> INSPIRO</a> </div>
                </div>
            </div>
      </footer> -->
      <!-- end: Footer -->

    </div>
        
  </div>
</template>


<script>

export default {
  methods:{},
}
</script>