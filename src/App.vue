<template>
<!-- prettier-ignore -->

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
                    <li><a href="/subjects">Subjects</a></li>
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

     

    </div>
        
  </div>
</template>


<script>

export default {
  methods:{},
}
</script>