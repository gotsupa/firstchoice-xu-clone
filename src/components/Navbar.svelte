<script lang="ts">
  import { Link, useNavigate } from 'svelte-navigator'
  import { scale, fly } from 'svelte/transition'

  import fsXU from '/logo-xu.svg'
  import CustomButton from './CustomButton.svelte'
  import Hamburger from './Hamburger.svelte'
  import navigationList from '$constants/navigationList'

  const navigate = useNavigate()

  let isExpand = false
  let scrollY = 0
  $: isScroll = scrollY >= 4

  const handleClick = () => {
    console.log('click')
  }

  const handleClickExpand = () => {
    isExpand = !isExpand
  }
</script>

<svelte:window bind:scrollY />

<header class:scroll={isScroll} class:expand={isExpand}>
  <div class:scroll={isScroll} class:expand={isExpand} class="nav-wrapper">
    <nav>
      <button class:scroll={isScroll} on:click={() => navigate('/')}>
        <img src={fsXU} alt="XU-icon" />
      </button>
      <div class="menu-wrapper">
        <ul>
          {#each navigationList.NAVIGATION_LIST as list (list.name)}
            <li><Link to={list.link}>{list.name}</Link></li>
          {/each}
        </ul>

        <CustomButton on:click={handleClick}>สนใจสมัครบัตร</CustomButton>

        <div class="hamburger-wrapper">
          <Hamburger on:click={handleClickExpand} {isExpand} />
        </div>
      </div>
    </nav>
  </div>

  {#if isExpand}
    <ul transition:fly={{ y: -200, duration: 300 }} class="mobile">
      {#each navigationList.NAVIGATION_LIST as list (list.name)}
        <li><Link to={list.link}>{list.name}</Link></li>
      {/each}
    </ul>
  {/if}
</header>

<style lang="scss">
  header {
    position: fixed;
    width: 100%;
    z-index: 1;
    height: 76px;
    background: transparent;
    transition: 0.3s;
  }

  header.scroll,
  header.expand {
    height: 60px;
    background-image: linear-gradient(
      270deg,
      #05f7aa 0%,
      #01aae8 31.92%,
      #150079 70.27%,
      #01002b 100%
    );
  }

  .nav-wrapper {
    height: 100%;
    padding: 18px 25px;
    transition: 0.2s;
  }

  .nav-wrapper.expand {
    padding: 10px 25px;
  }

  .nav-wrapper > nav {
    height: 100%;
    margin: auto;
    width: min(100%, 1140px);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background-color: transparent;
    border: none;
    height: 40px;

    > img {
      cursor: pointer;
      height: 100%;
    }
  }

  .menu-wrapper {
    display: flex;
    gap: 60px;
    align-items: center;

    ul {
      display: none;
    }
  }

  ul.mobile {
    position: absolute;
    width: 100%;
    top: 60px;
    height: calc(100vh - 60px);
    background-color: #0004bf;
    padding-top: 40px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    li > :global(a) {
      font-size: 1.5rem;
      font-weight: 700;

      color: #fff;
    }
  }

  @media (min-width: 768px) {
    .nav-wrapper {
      padding: 18px 25px;
    }

    .nav-wrapper.scroll {
      padding: 10px 15px;
    }
  }

  @media (min-width: 992px) {
    header {
      height: 115px;
    }

    .menu-wrapper {
      ul {
        display: flex;
        gap: 56px;

        li > :global(a) {
          font-size: 0.75rem;
          color: #fff;
          transition: 0.5s;

          &:hover {
            color: #05f5ad;
          }
        }
      }
    }

    .hamburger-wrapper {
      display: none;
    }

    button {
      height: 76px;
      transition: 0.3s;
    }

    button.scroll {
      height: 40px;
    }
  }
</style>
