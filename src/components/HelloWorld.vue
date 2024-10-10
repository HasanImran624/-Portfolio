<template>
  <div class="topnav">
  <a class="active" href="#home">About</a>
  <a href="#news">Projects</a>
  <a href="#contact">Skills</a>
  <a href="#about">Contact</a>
</div>
<div class="content-wrapper">

  <div class="container" id="repulse-div" >
    <div class="hero-text">
      <!-- WHO'S Text -->
      <transition name="slide-fade-left" appear>
        <span v-if="inView" class="animate__animated animate__fadeInLeft">
          WHO'S
        </span>
      </transition>

      <!-- HASAN? Text -->
      <transition name="slide-fade-right" appear>
        <div v-if="inView" class="char-container">
          <span v-for="(char, index) in nameArray" :key="index" class="animate__animated char">
            {{ char === ' ' ? '\u00A0' : char }}
          </span>
        </div>
      </transition>
    </div>
  </div>
</div>
   <!--About -->

   <div class="about-section">
      <h2>About</h2>
      <p>Hello there, I'm so happy you are here! (: My name is Hasan, I'm 26 and a Senior Software Engineer based in Riyadh. I have a strong passion for the technologies related to software development and AI. Outside of my regular activities, I'm a video gamer, football enthusiast, chess player, and a dog lover. I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated!</p>
    </div>

  <!-- Projects Section -->
  <div class="projects-section">
    <h2>Projects</h2>
    <div class="projects-grid">
      <div class="project">
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
      </div>
      <div class="project">
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
      </div>
      <div class="project">
        <h3>Project 3</h3>
        <p>Description of project 3.</p>
      </div>
    </div>
  </div>

  <!-- Skills Section -->
  <SkillSection/>
</template>


<script>
import SkillSection from './SkillSection.vue';

export default {
  components: { 
  SkillSection
  },
  data() {
    return {
      nameArray: "HASAN ?".split(""),
      inView: false,
    };
  },
  mounted() {
    // Trigger the animation when component mounts
    this.inView = true;
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'SuperMario';
  src: url('@/assets/fonts/Mario/Brugty.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.topnav {
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  background-color: #333;
}
.topnav a {
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input
{
padding: 5px 10px;
}
button
{
margin-left: 10px;
padding: 5px 10px;
cursor: pointer;
background-color: #ff6666;
}

.container {
  user-select: none;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  color: #e5e7eb; /* Equivalent to Tailwind's text-primary-200 */
  border-radius: 50%;
  font-family: "SuperMario";
}

/* Hero Text Styling */
.hero-text {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'SuperMario', sans-serif;
  font-size: 5rem; /* Default font-size, will change in media queries */
  cursor: default;
  opacity: 1;
}

/* Char Container for HASAN */
.char-container {
  display: flex;
}

/* Individual Character Styling with Hover Effect */
.char {
  color: #60a5fa; /* Equivalent to Tailwind's text-primary-400 */
  font-size: 1.2em;
  display: inline-block; /* Needed to apply animation to inline elements */
  transition: transform 0.3s ease-in-out;
}

.char:hover {
  animation: bounce 0.6s;
  transform: translateY(-10px); /* Add a subtle jump on hover */
}

/* Keyframes for Bounce Animation */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

/* Slide from Left Transition */
.slide-fade-left-enter-active, .slide-fade-left-leave-active {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.slide-fade-left-enter, .slide-fade-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

/* Slide from Right Transition */
.slide-fade-right-enter-active, .slide-fade-right-leave-active {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.slide-fade-right-enter, .slide-fade-right-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10%;
}
.about
{
  margin-top: 3%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-left: 4%;
}
.text-primary-400
{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 60px;
}

.about-section {

  margin: 20px;
  padding: 20px;
  background-color: #d3caca;
  color: #333;
  border-radius: 8px;
  max-width: 800px;
  margin-left: 9%;
  margin-top: 11%;
}

.about-section h2 {
  margin-top: 0;
}

.about-section p {
  line-height: 1.6;
}

.projects-section {
  margin: 20px;
  padding: 20px;
  background-color: #e0e0e0;
  color: #333;
  border-radius: 8px;
  max-width: 1000px;
  margin-left: 9%;
  margin-top: 5%;
}

.projects-section h2 {
  margin-top: 0;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.project {
  flex: 1 1 calc(25% - 20px); /* Four items per row with a gap of 20px */
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project h3 {
  margin: 0 0 10px;
}

.project p {
  margin: 0;
}
</style>

