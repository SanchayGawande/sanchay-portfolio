# Project Rive Files Setup Guide

## 📁 Expected File Structure

Place your project-specific Rive files in the `/public/projects/` folder:

```
/public/projects/
├── healthcare-chatbot.riv     # IConcern Healthcare Chatbot animation
├── churn-prediction.riv       # Churn Prediction Platform animation
├── peer-genius.riv            # PeerGenius AI Discussion Tool animation
└── default-project.riv        # Fallback animation for any project
```

## 🎨 Project Rive File Requirements

### 1. Healthcare Chatbot (`healthcare-chatbot.riv`)
- **Purpose**: Medical/healthcare themed animation
- **Dimensions**: 64x64 recommended
- **State Machine**: "State Machine 1"
- **Autoplay**: On hover
- **Theme**: Green/emerald colors, medical icons

### 2. Churn Prediction (`churn-prediction.riv`)
- **Purpose**: Analytics/chart themed animation
- **Dimensions**: 64x64 recommended
- **State Machine**: "State Machine 1"
- **Autoplay**: On hover
- **Theme**: Blue/indigo colors, chart/graph elements

### 3. PeerGenius AI (`peer-genius.riv`)
- **Purpose**: Education/collaboration themed animation
- **Dimensions**: 64x64 recommended
- **State Machine**: "State Machine 1"
- **Autoplay**: On hover
- **Theme**: Purple/pink colors, people/discussion icons

### 4. Default Project (`default-project.riv`)
- **Purpose**: Fallback animation for any project
- **Dimensions**: 64x64 recommended
- **State Machine**: "State Machine 1"
- **Autoplay**: On hover
- **Theme**: Generic tech/development icons

## 🔧 Implementation Notes

- Files are loaded from `/public/projects/` folder (not imported)
- Components include proper error handling with `onLoad` and `onLoadError`
- Fallback to Hero Icons if Rive files fail to load
- No console errors will appear if files are missing
- Animations trigger on card hover for better performance

## 📝 Current Fallback Behavior

**Without Rive files**: Project cards show beautiful Hero Icons with the same animations and hover effects.

**With Rive files**: Enhanced project cards with custom animations that play on hover.

## 🚀 Quick Start

1. **With Rive files**: Place files in `/public/projects/` with correct names
2. **Without Rive files**: Everything works perfectly with Hero Icons
3. **Testing**: Check browser console for loading status (warnings, not errors)