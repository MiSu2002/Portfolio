import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark d-none d-lg-block mt-3">
    <ul class="navbar-nav list-group list-group-horizontal d-flex justify-content-xl-end justify-content-center me-xl-3">
      <li class="nav-item active me-5">
        <a class="nav-link active" href="#">Home</a>
      </li>
      <li class="nav-item me-5">
        <a class="nav-link" href="#">About Me</a> 
      </li>
      <li class="nav-item me-5">
        <a class="nav-link" href="#">Education</a> 
      </li>
      <li class="nav-item me-5">
        <a class="nav-link" href="#">Career</a> 
      </li>
      <li class="nav-item me-5">
        <a class="nav-link" href="#">Achievements</a> 
      </li>
      <li class="nav-item me-5">
        <a class="nav-link" href="#">Contact Me</a> 
      </li>
    </ul>
</nav>
    )
}

export default Navbar;