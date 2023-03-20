<script lang="ts">
  import MobileFirstBanner from '/mobile-1-banner.webp'
  import MobileSecondBanner from '/mobile-2-banner.webp'
  import MobileThirdBanner from '/mobile-3-banner.webp'

  import DesktopFirstBanner from '/desktop-1-banner.webp'
  import DesktopSecondBanner from '/desktop-2-banner.webp'
  import DesktopThirdBanner from '/desktop-3-banner.webp'
</script>

<section class="banner-wrapper">
  <div class="img-wrapper">
    <picture>
      <source
        media="(min-width: 768px)"
        srcset={DesktopFirstBanner}
        type="image/webp"
      />
      <img src={MobileFirstBanner} alt="1-banner" />
    </picture>

    <picture>
      <source
        media="(min-width: 768px)"
        srcset={DesktopSecondBanner}
        type="image/webp"
      />
      <img src={MobileSecondBanner} alt="2-banner" />
    </picture>

    <picture>
      <source
        media="(min-width: 768px)"
        srcset={DesktopThirdBanner}
        type="image/webp"
      />
      <img src={MobileThirdBanner} alt="3-banner" />
    </picture>
  </div>
</section>

<style lang="scss">
  .banner-wrapper {
    height: 640px;
    display: block;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .img-wrapper {
    height: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;

    picture {
      /* width: 100%; */
      max-width: 100%;
      width: auto;
      flex-shrink: 0;
      scroll-snap-align: start;

      > img {
        object-fit: cover;
        object-position: center;
      }
    }

    /* > img {
      width: 100%;
    } */
  }

  @media (min-width: 768px) {
    .banner-wrapper {
      height: 440px;
    }
  }

  @media (min-width: 992px) {
    .banner-wrapper {
      height: 730px;
    }
  }
</style>
