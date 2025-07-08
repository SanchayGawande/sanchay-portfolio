# Rive Files Setup Guide

## 📁 File Structure

Place your Rive files in the `/public` folder:

```
/public/
├── hero_animation.riv      # Hero section background animation
├── developer.riv           # Profile image animation
└── pin.riv                # Map pin animation (if using map)
```

## 🎨 Rive File Requirements

### 1. Hero Animation (`hero_animation.riv`)
- **Purpose**: Background animation for hero section
- **Dimensions**: 1920x1080 recommended
- **State Machine**: "State Machine 1" (default)
- **Autoplay**: Yes
- **Example Content**: Geometric shapes, particles, or abstract animations

### 2. Developer Profile (`developer.riv`)
- **Purpose**: Profile image animation
- **Dimensions**: 512x512 recommended (square)
- **State Machine**: "State Machine 1" (default)
- **Autoplay**: Yes
- **Example Content**: Avatar animation, coding symbols, or brand logo

### 3. Map Pin (`pin.riv`) - Optional
- **Purpose**: Animated map pin
- **Dimensions**: 64x64 recommended
- **State Machine**: "State Machine 1" (default)
- **Autoplay**: Yes
- **Example Content**: Bouncing pin, pulsing dot, or location marker

## 🔧 Creating Rive Files

### Option 1: Rive Editor (Recommended)
1. Go to [rive.app](https://rive.app/)
2. Create a new file
3. Design your animation
4. Add a State Machine named "State Machine 1"
5. Export as `.riv` file
6. Place in `/public` folder

### Option 2: Use Placeholder Files
If you don't have Rive files yet, the components will automatically show fallback content:
- **Hero**: Animated gradient background
- **Profile**: Profile image or initials
- **Map**: SVG-based map (no pin animation)

## 📝 Implementation Notes

- Files are loaded from `/public` folder (not imported)
- Components include proper error handling
- Fallback content is automatically shown if files fail to load
- No console errors will appear if files are missing
- Performance is optimized with lazy loading

## 🚀 Quick Start

1. **With Rive files**: Place files in `/public` folder with correct names
2. **Without Rive files**: Components work perfectly with fallback content
3. **Testing**: Check browser console for loading status

## 🎬 Example Rive Animation Ideas

### Hero Background
- Floating geometric shapes
- Particle systems
- Code snippets flying by
- Abstract tech patterns

### Profile Avatar
- Typing animation
- Waving hand gesture
- Rotating tech icons
- Blinking/breathing character

### Map Pin
- Bouncing location pin
- Pulsing circle
- Radar-style sweep
- Growing/shrinking dot

## 📊 Performance Tips

- Keep file sizes under 1MB each
- Use simple animations for background elements
- Optimize for 60fps playback
- Test on mobile devices for performance