<script>
export default {};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="navbar-brand">Home</router-link>
        </li>
        <li class="nav-item">
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

<style lang="scss" scoped></style>
