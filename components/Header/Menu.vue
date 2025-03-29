<script setup></script>

<template>
  <BContainer class="navbar-inverse">
    <BNavbar toggleable="lg" variant="faded" type="light" class="navbar-header">
      <BNavbarBrand to="/"
        ><h1><img src="~assets/img/logo_1.png" alt="logo" /></h1>
      </BNavbarBrand>

      <BNavbarToggle target="nav-collapse"></BNavbarToggle>

      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav class="navbar-nav navbar-right ms-auto">
          <li class="nav-item"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/aboutme">About</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/gallery">Gallery</NuxtLink></li>
          <!-- <li class="nav-item"><NuxtLink to="/program">Game</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/web">Web</NuxtLink></li> -->
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
  </BContainer>
</template>

<style scoped></style>
