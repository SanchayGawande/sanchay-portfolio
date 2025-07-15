import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skills';
import SkillTooltip from './SkillTooltip';
import { SkillsData } from '../../types';

interface SkillsRadarChartProps {
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
}

const SkillsRadarChart: React.FC<SkillsRadarChartProps> = ({ 
  selectedCategory, 
  onCategorySelect 
}) => {
  const { theme } = useTheme();
  const [activePoint, setActivePoint] = useState<any>(null);
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <SkillTooltip 
          skill={{
            name: label,
            level: data.score,
            category: label,
            yearsOfExperience: getYearsForCategory(label),
            confidenceLevel: getConfidenceForCategory(label),
            projectExamples: getProjectsForCategory(label),
            description: getDescriptionForCategory(label)
          }}
          theme={theme}
        />
      );
    }
    return null;
  };

  const getYearsForCategory = (category: string) => {
    const categoryData = skillsData.categories.find(cat => 
      cat.name.toLowerCase().includes(category.toLowerCase())
    );
    if (categoryData) {
      const avgYears = categoryData.skills.reduce((sum, skill) => sum + skill.yearsOfExperience, 0) / categoryData.skills.length;
      return Math.round(avgYears);
    }
    return 2;
  };

  const getConfidenceForCategory = (category: string) => {
    const categoryData = skillsData.categories.find(cat => 
      cat.name.toLowerCase().includes(category.toLowerCase())
    );
    if (categoryData) {
      const avgLevel = categoryData.skills.reduce((sum, skill) => sum + skill.level, 0) / categoryData.skills.length;
      if (avgLevel >= 90) return 'Expert';
      if (avgLevel >= 80) return 'Advanced';
      if (avgLevel >= 70) return 'Proficient';
      return 'Learning';
    }
    return 'Proficient';
  };

  const getProjectsForCategory = (category: string) => {
    const categoryData = skillsData.categories.find(cat => 
      cat.name.toLowerCase().includes(category.toLowerCase())
    );
    if (categoryData) {
      const allProjects = categoryData.skills.flatMap(skill => skill.projectExamples);
      return [...new Set(allProjects)].slice(0, 3);
    }
    return [];
  };

  const getDescriptionForCategory = (category: string) => {
    const descriptions = {
      'Frontend': 'Modern user interface development with React ecosystem',
      'Backend': 'Server-side development and API design',
      'AI/ML': 'Machine learning and AI application development',
      'Database': 'Data modeling and database optimization',
      'Cloud': 'Cloud infrastructure and DevOps practices',
      'Security': 'Application security and testing frameworks'
    };
    return descriptions[category] || 'Technical expertise in this domain';
  };

  const handlePointClick = (data: any) => {
    if (onCategorySelect) {
      const categoryName = data.subject;
      const category = skillsData.categories.find(cat => 
        cat.name.toLowerCase().includes(categoryName.toLowerCase())
      );
      if (category) {
        onCategorySelect(category.id);
      }
    }
  };

  return (
    <div className="w-full h-96 relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart 
          data={skillsData.radarData}
          margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
        >
          <PolarGrid 
            stroke={theme === 'dark' ? '#374151' : '#E5E7EB'}
            strokeWidth={1}
          />
          <PolarAngleAxis 
            tick={{ 
              fill: theme === 'dark' ? '#D1D5DB' : '#374151',
              fontSize: 12,
              fontWeight: 500
            }}
            className="text-sm"
          />
          <PolarRadiusAxis 
            domain={[0, 100]}
            tick={{ 
              fill: theme === 'dark' ? '#9CA3AF' : '#6B7280',
              fontSize: 10
            }}
            tickCount={6}
            angle={90}
          />
          <Radar
            name="Skill Level"
            dataKey="score"
            stroke="#3B82F6"
            fill="rgba(59, 130, 246, 0.1)"
            fillOpacity={0.3}
            strokeWidth={2}
            dot={{
              fill: '#3B82F6',
              strokeWidth: 2,
              stroke: '#ffffff',
              r: 4,
              className: 'cursor-pointer'
            }}
            activeDot={{
              r: 6,
              fill: '#1D4ED8',
              stroke: '#ffffff',
              strokeWidth: 2,
              className: 'cursor-pointer'
            }}
            onClick={handlePointClick}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>

      {/* Interactive Legend */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex flex-wrap justify-center gap-2">
          {skillsData.categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => onCategorySelect && onCategorySelect(category.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
              } border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Chart Instructions */}
      <div className="absolute top-4 right-4">
        <div className={`px-3 py-2 rounded-lg text-xs ${
          theme === 'dark' 
            ? 'bg-gray-800 text-gray-300 border border-gray-700' 
            : 'bg-white text-gray-600 border border-gray-200'
        } shadow-lg`}>
          <p className="font-medium mb-1">Interactive Skills Chart</p>
          <p>Click points or categories to explore</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsRadarChart;