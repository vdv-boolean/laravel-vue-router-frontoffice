<script>
export default {};
</script>

<template>
  <footer class="py-5 bg-dark text-light">
    <h6 class="pt-2"> LEARN MORE ABOUT US </h6>
    <div class="social">
      <font-awesome-icon icon="fa-brands fa-square-facebook" class="icon_social facebook" />
      <font-awesome-icon icon="fa-brands fa-square-twitter" class="icon_social twitter" />
      <font-awesome-icon icon="fa-brands fa-square-youtube" class="icon_social youtube" />
      <font-awesome-icon icon="fa-brands fa-square-instagram" class="icon_social instagram" />
    </div>
  </footer>
  <div class="copyright py-4">
    © Copyright 2023 | Avada Theme by Theme Fusion | All Rights Reserved | By Vincenzo Di Vita, Andrea Lorenzi, Irene
    Caiazzo, Pierluca Strianese, Gary Smith Alvarez Venturo, Daniele Savoia
  </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

footer {
  display: flex;
  justify-content: space-between;

  .info {
    display: flex;
    flex-wrap: wrap;
    width: 70%;

    .description {
      width: 60%;
    }

    .contact_info {
      width: 40%;

      ul {
        li {

          margin-top: 1rem;

          .icon_contact {
            color: $primary_color;
            margin-right: 1rem;
          }
        }
      }
    }

    .icon_social {
      font-size: 1.8rem;
      padding-right: .5rem;
    }
  }

  .departments {
    width: 30%;
    margin-bottom: 6rem;

    ul {

      li {
        display: flex;
        align-items: center;
        margin-top: .5rem;
        font-size: .9rem;
      }
    }
  }
}

.copyright {
  background-color: $background_color2;
  font-size: .8rem;
  padding-left: 48px;
}
</style>
