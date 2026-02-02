<script setup lang="ts">
import { onMounted } from 'vue';
import { useThemeStore } from '../stores/useTheme';

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});

const stats = [
  { icon: 'fa-users', label: 'Total Users', value: '1,234', trend: '+12%', color: 'primary' },
  { icon: 'fa-chart-line', label: 'Revenue', value: '$45.2K', trend: '+8.3%', color: 'success' },
  { icon: 'fa-shopping-cart', label: 'Orders', value: '892', trend: '+23%', color: 'warning' },
  { icon: 'fa-tasks', label: 'Tasks', value: '156', trend: '-5%', color: 'info' },
];

const features = [
  {
    icon: 'fa-tachometer-alt',
    title: 'Dashboard',
    description: 'Comprehensive overview of your business metrics',
  },
  {
    icon: 'fa-users-cog',
    title: 'User Management',
    description: 'Manage users, roles, and permissions',
  },
  {
    icon: 'fa-file-invoice-dollar',
    title: 'Invoicing',
    description: 'Create and manage invoices efficiently',
  },
  {
    icon: 'fa-chart-bar',
    title: 'Analytics',
    description: 'Detailed reports and insights',
  },
  {
    icon: 'fa-warehouse',
    title: 'Inventory',
    description: 'Track and manage your inventory',
  },
  {
    icon: 'fa-cog',
    title: 'Settings',
    description: 'Customize your ERP experience',
  },
];
</script>

<template>
  <div class="home-page">
    <!-- Header with Theme Toggle -->
    <header class="page-header">
      <div class="container">
        <div class="header-content">
          <div class="brand">
            <i class="fas fa-building"></i>
            <h1>Madol ERP</h1>
          </div>
          <button class="theme-toggle-btn" @click="themeStore.toggleTheme" :title="themeStore.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <i class="fas" :class="themeStore.isDark ? 'fa-sun' : 'fa-moon'"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h2 class="hero-title">Welcome to Your Enterprise Resource Planning System</h2>
          <p class="hero-description">
            Streamline your business operations with our powerful, modern ERP solution. 
            Built with Vue 3, TypeScript, and SCSS for the ultimate user experience.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary">
              <i class="fas fa-rocket"></i>
              Get Started
            </button>
            <button class="btn btn-outline">
              <i class="fas fa-book"></i>
              Documentation
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Grid -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div 
            v-for="stat in stats" 
            :key="stat.label" 
            :class="['stat-card', `stat-card-${stat.color}`]"
          >
            <div class="stat-card-header">
              <div class="icon">
                <i class="fas" :class="stat.icon"></i>
              </div>
            </div>
            <div class="stat-card-label">{{ stat.label }}</div>
            <div class="stat-card-value">{{ stat.value }}</div>
            <div class="stat-card-trend" :class="stat.trend.startsWith('+') ? 'positive' : 'negative'">
              <i class="fas" :class="stat.trend.startsWith('+') ? 'fa-arrow-up' : 'fa-arrow-down'"></i>
              {{ stat.trend }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to manage your business efficiently</p>
        </div>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">
              <i class="fas" :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join thousands of companies already using Madol ERP</p>
          <button class="btn btn-large btn-primary">
            <i class="fas fa-play-circle"></i>
            Start Free Trial
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="page-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <i class="fas fa-building"></i>
            <span>Madol ERP</span>
          </div>
          <div class="footer-links">
            <a href="#"><i class="fas fa-envelope"></i> Contact</a>
            <a href="#"><i class="fas fa-question-circle"></i> Support</a>
            <a href="#"><i class="fas fa-file-alt"></i> Docs</a>
          </div>
          <div class="footer-copyright">
            <p>&copy; 2026 Madol ERP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  min-height: 100vh;
  background-color: var(--bg-body);
}

// Header
.page-header {
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border-light);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    i {
      font-size: 2rem;
      color: var(--primary);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
    }
  }

  .theme-toggle-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid var(--border-light);
    background-color: var(--bg-hover);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    i {
      font-size: 1.25rem;
    }

    &:hover {
      background-color: var(--primary);
      color: white;
      border-color: var(--primary);
      transform: scale(1.05);
    }
  }
}

// Hero Section
.hero {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  text-align: center;

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .hero-description {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
    opacity: 0.95;
    line-height: 1.6;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
}

// Stats Section
.stats-section {
  padding: 4rem 0;
  background-color: var(--bg-body);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

// Features Section
.features-section {
  padding: 5rem 0;
  background-color: var(--bg-surface);

  .section-header {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      color: var(--text-secondary);
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background-color: var(--bg-elevated);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--border-light);
    transition: all 0.3s ease;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border-color: var(--primary);
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        font-size: 2rem;
        color: white;
      }
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.75rem;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  }
}

// CTA Section
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  text-align: center;
  color: white;

  .cta-content {
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.95;
    }
  }
}

// Buttons
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &-primary {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);

    &:hover {
      background-color: transparent;
      border-color: white;
      transform: translateY(-2px);
    }
  }

  &-outline {
    background-color: transparent;
    color: white;
    border-color: white;

    &:hover {
      background-color: white;
      color: var(--primary);
      transform: translateY(-2px);
    }
  }

  &-large {
    padding: 1.125rem 2.5rem;
    font-size: 1.125rem;
  }
}

// Footer
.page-footer {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-light);
  padding: 3rem 0;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);

    i {
      color: var(--primary);
      font-size: 2rem;
    }
  }

  .footer-links {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: var(--primary);
      }
    }
  }

  .footer-copyright {
    text-align: center;
    color: var(--text-tertiary);
    font-size: 0.875rem;
  }
}

// Container
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>
