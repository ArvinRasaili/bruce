import React, { Component } from "react";


class Header extends Component
{
    render()
    {
      
        return(
<div>
  <header>
  <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-transparent p-4">
      <span class="text-muted"><div class="col-sm-4 offset-md-1 py-4">
    <h4 class="text-white">Contact</h4>
    <ul class="list-unstyled">
      <li><a href="#" class="text-white">Follow on Social Media Platform</a></li>
      <li><a href="#" class="text-white">Like on Social Media Platform</a></li>
      <li><a href="#" class="text-white">Don't Email me</a></li>
      <li><a href="#" class="text-white">Student ID: 30030910</a></li>
    </ul>
  </div></span>
    </div>
  </div>
 
  <nav class="navbar navbar-dark bg-transparent">
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <a href="#" class="navbar-brand d-flex align-items-center">
  <svg class="svg-icon" viewBox="0 0 20 20">
      <path d="M14.911,1.295H5.09c-0.737,0-1.339,0.603-1.339,1.339v14.733c0,0.736,0.603,1.338,1.339,1.338h9.821c0.737,0,1.339-0.602,1.339-1.338V2.634C16.25,1.898,15.648,1.295,14.911,1.295 M15.357,17.367c0,0.24-0.205,0.445-0.446,0.445H5.09c-0.241,0-0.446-0.205-0.446-0.445v-0.893h10.714V17.367z M15.357,15.58H4.644V4.42h10.714V15.58z M15.357,3.527H4.644V2.634c0-0.241,0.205-0.446,0.446-0.446h9.821c0.241,0,0.446,0.206,0.446,0.446V3.527z"></path>
  </svg>
  <strong>React Sample Application</strong>
</a> <span class="navbar-toggler-icon"> </span>
      
    </button>
  </nav>
</div>
  </header>

<section class="py-5 text-center container">
<div class="row py-lg-5">
<div class="col-lg-auto col-md-auto mx-auto">
  <br>
 
  </br>
  <h1 class="text-bright">Welcome to the SCP Foundation</h1>
  <p1 class="text-bright">SCP Foundation is responsible for locating and containing individuals, entities, locations, and objects that violate natural law.</p1>
</div>
</div>
</section>

</div>
  

        );
    }
}

export default Header;