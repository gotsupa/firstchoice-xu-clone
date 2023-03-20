<button on:click><slot /></button>

<style lang="scss">
  button {
    font-family: 'Noto Sans Thai', sans-serif;
    line-height: 1.5;

    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    padding: 4px 30px;
    transition: 0.5s;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
</style>
