# 🚀 Reusable Components Guide

## Overview
I've created several reusable components to eliminate code duplication across pages. Here's how to use them:

## 📦 **New Components Created:**

### 1. **SectionBadge** (`src/components/ui/SectionBadge.tsx`)
**Replaces:** All the duplicated cyan badges with `bg-white/10 backdrop-blur-sm` styling

**Usage:**
```tsx
import { SectionBadge } from "@/components/ui";

// Simple badge
<SectionBadge>About Us</SectionBadge>

// Badge with icon
<SectionBadge icon={<Zap className="w-4 h-4" />}>
  About Us
</SectionBadge>

// Badge with custom className
<SectionBadge className="mb-8">Our Services</SectionBadge>
```

**Before (Duplicated):**
```tsx
<div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 border border-white/20">
  <Zap className="w-4 h-4" />
  <span>About Us</span>
</div>
```

---

### 2. **GlassCard** (`src/components/ui/GlassCard.tsx`)
**Replaces:** All the duplicated glass card containers with `bg-white/10 backdrop-blur-sm` styling

**Usage:**
```tsx
import { GlassCard } from "@/components/ui";

// Basic glass card
<GlassCard>
  <h2>Title</h2>
  <p>Content</p>
</GlassCard>

// With hover effects
<GlassCard hover={true}>
  <p>This card will scale on hover</p>
</GlassCard>

// Custom padding sizes
<GlassCard padding="sm">Small padding</GlassCard>
<GlassCard padding="md">Medium padding (default)</GlassCard>
<GlassCard padding="lg">Large padding</GlassCard>

// Custom border radius
<GlassCard rounded="xl">Rounded corners</GlassCard>
<GlassCard rounded="2xl">More rounded corners</GlassCard>
<GlassCard rounded="3xl">Very rounded corners</GlassCard>

// With custom className
<GlassCard className="mb-8">Custom margin</GlassCard>
```

**Before (Duplicated):**
```tsx
<div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
  Content here
</div>
```

---

### 3. **PageLayout** (`src/components/ui/PageLayout.tsx`)
**Replaces:** All the duplicated page wrapper divs with `min-h-screen bg-black` styling

**Usage:**
```tsx
import { PageLayout } from "@/components/ui";

// Dark theme (default)
<PageLayout theme="dark">
  <Header />
  <main>Content</main>
  <Footer />
</PageLayout>

// Light theme
<PageLayout theme="light">
  Content
</PageLayout>

// Gradient theme
<PageLayout theme="gradient">
  Content
</PageLayout>

// With floating elements
<PageLayout theme="dark" showFloatingElements={true}>
  Content
</PageLayout>

// With custom className
<PageLayout className="custom-class">
  Content
</PageLayout>
```

**Before (Duplicated):**
```tsx
<div className="min-h-screen bg-black text-white overflow-hidden">
  Content
</div>
```

---

### 4. **SectionHeader** (`src/components/ui/SectionHeader.tsx`)
**Replaces:** All the duplicated section title patterns with badges, titles, and descriptions

**Usage:**
```tsx
import { SectionHeader } from "@/components/ui";

// Basic section header
<SectionHeader
  title="Our Services"
  description="Comprehensive digital solutions for your business"
/>

// With badge
<SectionHeader
  badge="Services"
  badgeIcon={<Zap className="w-4 h-4" />}
  title="Our Services"
  description="Comprehensive digital solutions for your business"
/>

// Different sizes
<SectionHeader
  size="sm"
  title="Small Title"
  description="Small description"
/>

<SectionHeader
  size="md"
  title="Medium Title"
  description="Medium description"
/>

<SectionHeader
  size="lg"
  title="Large Title"
  description="Large description"
/>

// Left-aligned
<SectionHeader
  centered={false}
  title="Left Title"
  description="Left description"
/>
```

**Before (Duplicated):**
```tsx
<div className="text-center mb-12 sm:mb-16">
  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 mb-4 sm:mb-6 border border-white/20">
    <span>Our Services</span>
  </div>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
    Title
  </h2>
  <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
    Description
  </p>
</div>
```

---

### 5. **BackgroundPattern** (`src/components/ui/BackgroundPattern.tsx`)
**Replaces:** All the duplicated background patterns with floating orbs and grid patterns

**Usage:**
```tsx
import { BackgroundPattern } from "@/components/ui";

// Basic background with grid and orbs
<BackgroundPattern className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    Content here
  </div>
</BackgroundPattern>

// Without grid pattern
<BackgroundPattern showGrid={false} className="py-20">
  Content
</BackgroundPattern>

// Without floating orbs
<BackgroundPattern showFloatingOrbs={false} className="py-20">
  Content
</BackgroundPattern>

// With custom className
<BackgroundPattern className="py-32 bg-gradient-to-b from-black to-gray-900">
  Content
</BackgroundPattern>
```

**Before (Duplicated):**
```tsx
<section className="py-20 relative overflow-hidden bg-black">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
  
  {/* Minimal Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
  </div>

  {/* Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
    Content here
  </div>
</section>
```

---

## 🔄 **How to Refactor Existing Pages:**

### **Step 1: Import Components**
```tsx
import { 
  PageLayout, 
  SectionBadge, 
  GlassCard, 
  SectionHeader, 
  BackgroundPattern 
} from "@/components/ui";
```

### **Step 2: Replace Page Wrapper**
```tsx
// Before
<div className="min-h-screen bg-black text-white overflow-hidden">

// After
<PageLayout theme="dark">
```

### **Step 3: Replace Section Backgrounds**
```tsx
// Before
<section className="py-20 relative overflow-hidden bg-black">
  {/* All the background code... */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

// After
<BackgroundPattern className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
```

### **Step 4: Replace Section Headers**
```tsx
// Before
<div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/20">
  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 mb-4 sm:mb-6 border border-white/20">
    <span>Our Services</span>
  </div>
  <h2>Title</h2>
  <p>Description</p>
</div>

// After
<GlassCard>
  <SectionBadge className="mb-4 sm:mb-6">
    Our Services
  </SectionBadge>
  <h2>Title</h2>
  <p>Description</p>
</GlassCard>
```

### **Step 5: Replace Individual Cards**
```tsx
// Before
<div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">

// After
<GlassCard hover={true}>
```

---

## 📊 **Benefits of Using These Components:**

1. **DRY Principle**: No more duplicated code
2. **Consistency**: All badges, cards, and backgrounds look the same
3. **Maintainability**: Change styles in one place, affects everywhere
4. **Readability**: Cleaner, more semantic code
5. **Flexibility**: Easy to customize with props
6. **Performance**: Smaller bundle size, better tree-shaking

---

## 🎯 **Next Steps:**

1. **Refactor About Page** ✅ (Completed as example)
2. **Refactor Services Page** 
3. **Refactor Portfolio Page**
4. **Refactor Blog Page**
5. **Refactor Careers Page**
6. **Refactor Contact Page**
7. **Refactor Individual Service Pages**

---

## 💡 **Pro Tips:**

- Use `SectionHeader` for all section titles with badges
- Use `GlassCard` for all content containers
- Use `BackgroundPattern` for all section backgrounds
- Use `PageLayout` for all page wrappers
- Use `SectionBadge` for all cyan badges

This approach will make your codebase much cleaner and easier to maintain! 🚀

