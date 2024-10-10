<template>
    <div class="skills-section">
      <h2>Skills</h2>
      <div class="skills-container">
        <!-- First row of skill cards -->
        <transition-group name="slide-fade" tag="div" class="skills-row" :class="slideClass1">
          <div v-for="(skill, index) in firstRowSkills" :key="index" class="skill-card">
            <font-awesome-icon :icon="skill.icon" class="skill-icon" />
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </transition-group>
        
        <!-- Second row of skill cards -->
        <transition-group name="slide-fade" tag="div" class="skills-row reverse" :class="slideClass2">
          <div v-for="(skill, index) in secondRowSkills" :key="index" class="skill-card">
            <font-awesome-icon :icon="skill.icon" class="skill-icon" />
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </transition-group>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: [
          { name: "C# .NET", description: "Expert in C# for building robust applications.", icon: ['fab', 'microsoft'] },
          { name: ".NET MVC", description: "Experienced in building scalable MVC applications.", icon: ['fas', 'layer-group'] },
          { name: ".NET Core", description: "Skilled in modern .NET Core frameworks for cross-platform solutions.", icon: ['fas', 'cloud'] },
          { name: "Web APIs", description: "Developed numerous RESTful APIs with secure endpoints.", icon: ['fas', 'exchange-alt'] },
          { name: "SQL Server & MySQL", description: "Proficient in managing and optimizing relational databases.", icon: ['fas', 'database'] },
          { name: "LINQ & Entity Framework", description: "Strong experience with LINQ and ORM using Entity Framework.", icon: ['fas', 'project-diagram'] },
          { name: "CI/CD & Docker", description: "Experienced in CI/CD pipelines using Docker and GitHub Actions.", icon: ['fab', 'docker'] },
          { name: "Azure/AWS", description: "Deployed solutions on Azure and AWS cloud platforms.", icon: ['fab', 'aws'] },
          { name: "Scrum/Kanban", description: "Familiar with Agile methodologies like Scrum, Kanban, and Scrumban.", icon: ['fas', 'tasks'] },
          { name: "Vue.js", description: "Experienced in building single-page applications with Vue.js.", icon: ['fab', 'vuejs'] },
          { name: "Angular", description: "Skilled in developing scalable applications using Angular.", icon: ['fab', 'angular'] },
          { name: "JavaScript", description: "Proficient in ES6+, JavaScript, and modern frameworks.", icon: ['fab', 'js'] },
          { name: "HTML", description: "Experienced in creating semantic, accessible HTML.", icon: ['fab', 'html5'] },
          { name: "CSS", description: "Skilled in CSS3, SASS, and responsive design.", icon: ['fab', 'css3'] },
          { name: "Microservices & RabbitMQ", description: "Built microservices with asynchronous communication via RabbitMQ.", icon: ['fas', 'microchip'] },
        
        ],
      };
    },
    computed: {
    firstRowSkills() {
      return this.skills.slice(0, (Math.ceil(this.skills.length / 2)-1));
    },
    secondRowSkills() {
      return this.skills.slice(Math.ceil(this.skills.length / 2));
    },
    slideClass1() {
      return 'slide-row-1';  // This class will be applied to the first row
    },
    slideClass2() {
      return 'slide-row-2';  // This class will be applied to the second row
    }
  }
};
</script>

<style scoped>
.skills-section {
  margin: 20px;
  padding: 20px;
  background-color: #181313;
  color: #333;
  border-radius: 8px;
  max-width: 100%;
  overflow: hidden;
}
.skills-section h2
{
  color: #fff;
}
.skills-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skills-row {
  display: flex;
  gap: 20px;
  white-space: nowrap;
  overflow: hidden;
}

.skill-card {
  min-width: 200px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}


  
  .skill-card h3 {
    margin: 0 0 10px;
    text-wrap: wrap;
  }
  
  .skill-card p {
    margin: 0;
    text-wrap: wrap;
  }


.skill-card:hover {
  transform: translateY(-10px);
}

.skill-icon {
  font-size: 40px;
  margin-bottom: 10px;
  color: #ffcc00;
}

/* Keyframes for sliding animation */
@keyframes slide1 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slide2 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* CSS classes for animation */
.slide-row-1 {
  animation: slide1 10s linear infinite;
}

.slide-row-2 {
  animation: slide2 10s linear infinite;
}

/* Slide from Left Transition */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>