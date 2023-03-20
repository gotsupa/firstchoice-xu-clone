<script lang="ts">
  export let isExpand = false
</script>

<button on:click class="menu-wrapper">
  <div class:isExpand class="icon-line__first" />
  <div class:isExpand class="icon-line__second" />
</button>

<style lang="scss">
  .menu-wrapper {
    background-color: transparent;
    border: none;
    padding: 10px;
    width: 25px;
    aspect-ratio: 1/1;
    cursor: pointer;

    position: relative;
  }

  .icon-line {
    &__first,
    &__second {
      position: absolute;
      left: 0;

      transition: 0.2s;
      width: 25px;
      height: 3px;
      background-color: #fff;
    }
  }

  .icon-line {
    &__first {
      top: 6px;
    }

    &__second {
      bottom: 6px;
    }
  }

  .icon-line__first.isExpand {
    transform: rotate(45deg);
    top: 40%;
  }

  .icon-line__second.isExpand {
    transform: rotate(-45deg);
    bottom: 45%;
  }
</style>
