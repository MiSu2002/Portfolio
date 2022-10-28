import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark d-none d-lg-block mt-3">
    <ul class="navbar-nav list-group list-group-horizontal d-flex justify-content-xl-end justify-content-center me-xl-3">
      <li class="nav-item active me-5">
        <p class="nav-link active">Home</p>
      </li>
      <li class="nav-item me-5">
        <p class="nav-link">About Me</p> 
      </li>
      <li class="nav-item me-5">
        <p class="nav-link">Education</p> 
      </li>
      <li class="nav-item me-5">
        <p class="nav-link">Career</p> 
      </li>
      <li class="nav-item me-5">
        <p class="nav-link">Achievements</p> 
      </li>
      <li class="nav-item me-5">
        <p class="nav-link">Contact Me</p> 
      </li>
    </ul>
</nav>
    )
}

export default Navbar;