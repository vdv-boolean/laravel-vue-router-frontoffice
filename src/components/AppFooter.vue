<script>
export default {};
</script>

<template>
  <footer class="py-1 bg-dark text-light">
    <div class="info p-1">
      <div class="description p-2">
        <div class="py-3 border-bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, porro voluptates! Alias odit ipsa
          consequuntur incidunt, optio, atque nesciunt quae aspernatur nulla laborum repellendus veniam enim
          dolorum nemo accusamus error.
        </div>
        <h6 class="pt-2"> LEARN MORE ABOUT US </h6>
        <div class="social">
          <font-awesome-icon icon="fa-brands fa-square-facebook" class="icon_social facebook" />
          <font-awesome-icon icon="fa-brands fa-square-twitter" class="icon_social twitter" />
          <font-awesome-icon icon="fa-brands fa-square-youtube" class="icon_social youtube" />
          <font-awesome-icon icon="fa-brands fa-square-instagram" class="icon_social instagram" />
        </div>
      </div>
      <div class="contact_info p-2 text-end">
        <h5 class="pt-3">Contact infomation</h5>

        <ul class="border-top">
          <li class="pt-1">
            street <font-awesome-icon icon="fa-solid fa-location-dot" class="icon_contact" />
          </li>
          <li>
            +02 3432 45325432 532 <font-awesome-icon icon="fa-solid fa-phone-flip" class="icon_contact" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <div class="copyright py-4">
    © Copyright 2023 | All Rights Reserved | by Vincenzo Di Vita, Andrea Lorenzi, Irene Caiazzo, Pierluca Strianese,
    Daniele Savoia, Gary Smith Alvarez Venturo
  </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;


footer {
  display: flex;
  font-size: .8rem;

  .info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .description {
      width: 40%;
    }

    .contact_info {
      width: 15%;

      ul {
        li {

          margin-top: 1rem;

          .icon_contact {
            color: white;
            margin-left: 1rem;
          }
        }
      }
    }

    .icon_social {
      font-size: 1.8rem;
      padding-right: .5rem;
    }
  }
}

.copyright {
  background-color: $background_color2;
  font-size: .6rem;
  padding-left: 48px;
}
</style>
