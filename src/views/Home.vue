<template>
  <div class="home">
    <div class="hero-container">
      <div class="text-container">
        <img src="../assets/logo.png" alt="" />
        <div class="wrapper">
          <h1>
            Read and share blogpost <br />
            across the globe.
          </h1>
          <h3>Made with Vue.js</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.hero-container {
  background-color: #42b883a2;
  height: auto;
  padding: 8em 0;

  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;

    height: 100%;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    .wrapper {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h3 {
        font-size: 1.5rem;
        font-weight: 400;
        margin-top: 1em;
      }
    }
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 4em 0;

    .text-container {
      img {
        max-width: 50%;
        max-height: 50%;
      }
      .wrapper {
        h1 {
          font-size: 1.6rem;
        }

        h3 {
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
