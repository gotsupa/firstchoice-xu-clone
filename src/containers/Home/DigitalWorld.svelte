<script lang="ts">
  import DigitalWorld from '/digital-world.svg'
  import Dot6 from '/dots-6.svg'
  import Dot10 from '/dots-10.svg'
  import Dot20 from '/dots-20.svg'
  import BigX from '/big-x.webp'
  import BigU from '/big-u.webp'
</script>

<section class="digital-world">
  <div class="container">
    <div class="xu-wrapper">
      <img class="x-icon" src={BigX} alt="X icon" />
      <img class="u-icon" src={BigU} alt="U icon" />
    </div>

    <div class="text-wrapper">
      <div class="svg-wrapper">
        <img src={DigitalWorld} alt="digital-world-svg" />
      </div>
      <h1>
        เอ๊กซ์ยู บัตรเครดิต ดิจิทัล <br />Collab กับ U ...
        <br class="br-mobile" /> Beyond ทุก Rule บนโลกดิจิทัล
      </h1>
    </div>

    <img class="dot-6" src={Dot6} alt="dot 6" />
    <img class="dot-10" src={Dot10} alt="dot 10" />
    <img class="dot-20" src={Dot20} alt="dot 20" />

    <p class="p-credit">digital credit card</p>
  </div>
</section>

<style lang="scss">
  .digital-world {
    background-color: #01002b;
    height: 670px;
    padding: 110px 15px;
  }

  .container {
    position: relative;
  }

  .p-credit {
    font-size: 0.75rem;
    font-weight: 700;
    color: #05f5ad;
    text-transform: uppercase;
    letter-spacing: 5px;

    position: absolute;
    top: 70px;
    right: -100px;
    transform: rotate(90deg);
  }

  .dot-6,
  .dot-10,
  .dot-20 {
    position: absolute;
  }

  .dot-6 {
    width: 35px;
    top: 160px;
    left: 50px;
  }

  .dot-10 {
    width: 65px;
    top: -30px;
    right: 60px;
  }

  .dot-20 {
    width: 65px;
    right: 0;
    bottom: 60px;
  }

  .xu-wrapper {
    margin: auto;
    width: 300px;
    aspect-ratio: 1.2;
    margin-bottom: 30px;

    position: relative;

    .x-icon {
      width: 230px;
      aspect-ratio: 1.25;

      top: 30px;
      left: 0;
    }

    .u-icon {
      width: 140px;
      aspect-ratio: 0.9;

      top: 70px;
      right: 0;
    }

    .x-icon,
    .u-icon {
      position: absolute;
    }
  }

  .text-wrapper {
    width: min(340px, 490px);
    margin: auto;

    .svg-wrapper {
      margin-bottom: 20px;

      > img {
        width: 100%;
      }
    }

    h1 {
      color: #00dffc;
      font-size: 1rem;
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    .digital-world {
      height: 770px;
      padding: 120px 0 60px 0;
    }

    .container {
      margin: auto;
      width: min(490px, 930px, 1100px);
    }

    .p-credit {
      top: 40px;
      right: -220px;
    }

    .dot-6 {
      width: 60px;
      top: 220px;
      left: 20px;
    }

    .dot-10 {
      width: 120px;
      top: -63px;
      right: -50px;
    }

    .dot-20 {
      width: 120px;
      right: -50px;
      bottom: 0;
    }

    .xu-wrapper {
      width: 490px;

      .x-icon {
        top: 50px;
        width: 350px;
      }

      .u-icon {
        top: 30px;
        width: 230px;
      }
    }

    .text-wrapper {
      margin-left: 0;

      h1 {
        .br-mobile {
          display: none;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .digital-world {
      height: 730px;
      padding: 120px 15px;
    }
  }
</style>
