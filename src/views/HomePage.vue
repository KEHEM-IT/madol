<script setup lang="ts">
// Simple home page component
</script>

<template>
  <div class="home-page">
    <div class="container">
      <div class="header">
        <i class="fas fa-home"></i>
        <h1>Welcome to Madol ERP</h1>
      </div>
      
      <div class="content">
        <p>This is a simple home page with Vue, TypeScript, SCSS, and FontAwesome.</p>
        
        <div class="icon-showcase">
          <i class="fas fa-user"></i>
          <i class="fas fa-cog"></i>
          <i class="fas fa-chart-line"></i>
          <i class="fas fa-briefcase"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  .container {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    
    .header {
      margin-bottom: 2rem;
      
      i {
        font-size: 4rem;
        color: #667eea;
        margin-bottom: 1rem;
      }
      
      h1 {
        font-size: 2.5rem;
        color: #333;
        margin: 0;
        font-weight: 700;
      }
    }
    
    .content {
      p {
        font-size: 1.2rem;
        color: #666;
        line-height: 1.6;
        margin-bottom: 2rem;
      }
      
      .icon-showcase {
        display: flex;
        justify-content: center;
        gap: 2rem;
        
        i {
          font-size: 2.5rem;
          color: #764ba2;
          transition: transform 0.3s ease;
          
          &:hover {
            transform: scale(1.2);
            color: #667eea;
          }
        }
      }
    }
  }
}
</style>
