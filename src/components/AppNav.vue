<script>
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary ">
    <div class="container">
      <div class="collapse navbar-collapse d-flex" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto my-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link :to="{ name: 'home' }" class="navbar-brand">Home</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link :to="{ name: 'cocktails' }" class="navbar-brand">Cocktails</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link :to="{ name: 'about' }" class="navbar-brand">About Us</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contacts
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">-</a></li>
              <li><a class="dropdown-item" href="#">-</a></li>
              <li><a class="dropdown-item" href="#">-</a></li>
              <li><a class="dropdown-item" href="#">-</a></li>
              <li><a class="dropdown-item" href="#">-</a></li>
              <li><a class="dropdown-item" href="#">-</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  font-weight: 300;
}
</style>
