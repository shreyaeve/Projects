import React, { useState, useEffect } from 'react';
import './App.css';
import { BookOpen, Trophy, Target, PenTool, Star, Calendar, TrendingUp, Award, CheckCircle, Circle, Plus, Search, Filter, BarChart3, Flame, Brain, Heart, Users, Lightbulb, MessageSquare, Clock, Zap } from 'lucide-react';


console.log("WORKING");
const UHVPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userStats, setUserStats] = useState({
    totalPoints: 2450,
    level: 8,
    streak: 12,
    completedLessons: 24,
    badges: 7
  });

  const [habits, setHabits] = useState([
    { id: 1, name: 'Daily Reflection', completed: true, streak: 12, category: 'self-awareness' },
    { id: 2, name: 'Gratitude Practice', completed: true, streak: 8, category: 'happiness' },
    { id: 3, name: 'Value Alignment Check', completed: false, streak: 3, category: 'values' },
    { id: 4, name: 'Mindful Decision Making', completed: false, streak: 5, category: 'understanding' },
  ]);

  const [journalEntries, setJournalEntries] = useState([
    { id: 1, date: '2024-09-19', prompt: 'What value guided your most important decision today?', entry: 'Honesty guided me when I had to give difficult feedback to a colleague...', mood: 'reflective' },
    { id: 2, date: '2024-09-18', prompt: 'How did you show compassion today?', entry: 'I listened without judgment when my friend was struggling...', mood: 'grateful' }
  ]);

  const [lessons, setLessons] = useState([
    { id: 1, title: 'Understanding Human Values', progress: 100, category: 'foundation', points: 150 },
    { id: 2, title: 'Right Understanding vs Imagination', progress: 100, category: 'understanding', points: 200 },
    { id: 3, title: 'Harmony in Relationships', progress: 75, category: 'relationships', points: 120 },
    { id: 4, title: 'Natural Acceptance', progress: 45, category: 'self', points: 80 },
    { id: 5, title: 'Prosperity in Right Perspective', progress: 0, category: 'society', points: 0 }
  ]);

  const badges = [
    { name: 'Consistent Learner', icon: '📚', earned: true, description: '7-day learning streak' },
    { name: 'Deep Thinker', icon: '🧠', earned: true, description: 'Complete 20 reflections' },
    { name: 'Value Champion', icon: '⭐', earned: true, description: 'Apply values in daily life' },
    { name: 'Relationship Builder', icon: '🤝', earned: false, description: 'Complete relationship module' },
    { name: 'Self Explorer', icon: '🔍', earned: true, description: 'Journal for 30 days' }
  ];

  const toggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id 
        ? { ...habit, completed: !habit.completed, streak: habit.completed ? habit.streak : habit.streak + 1 }
        : habit
    ));
  };

  const Dashboard = () => (
    <div className="space-y-6">  
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Points</p>
              <p className="text-2xl font-bold">{userStats.totalPoints}</p>
            </div>
            <Trophy className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Level</p>
              <p className="text-2xl font-bold">{userStats.level}</p>
            </div>
            <Star className="h-8 w-8 text-purple-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Streak</p>
              <p className="text-2xl font-bold">{userStats.streak}</p>
            </div>
            <Flame className="h-8 w-8 text-orange-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Completed</p>
              <p className="text-2xl font-bold">{userStats.completedLessons}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Badges</p>
              <p className="text-2xl font-bold">{userStats.badges}</p>
            </div>
            <Award className="h-8 w-8 text-yellow-200" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Today's Focus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-blue-900">Continue Lesson</p>
            <p className="text-xs text-blue-600">Natural Acceptance</p>
          </button>
          
          <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Target className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-green-900">Track Habits</p>
            <p className="text-xs text-green-600">2 pending today</p>
          </button>
          
          <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <PenTool className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-purple-900">Journal Entry</p>
            <p className="text-xs text-purple-600">Reflect on values</p>
          </button>
          
          <button className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-orange-900">Progress</p>
            <p className="text-xs text-orange-600">View insights</p>
          </button>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
            <div className="text-2xl">🏆</div>
            <div>
              <p className="font-medium text-yellow-900">Level Up!</p>
              <p className="text-sm text-yellow-700">You've reached Level 8</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl">📚</div>
            <div>
              <p className="font-medium text-blue-900">Lesson Completed</p>
              <p className="text-sm text-blue-700">Finished "Right Understanding vs Imagination"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LessonsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">UHV Learning Path</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Search className="h-4 w-4 inline mr-2" />
            Search
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="h-4 w-4 inline mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{lesson.title}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {lesson.category}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Zap className="h-3 w-3 mr-1" />
                    {lesson.points} pts
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{lesson.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                  style={{width: `${lesson.progress}%`}}
                ></div>
              </div>
            </div>
            
            <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              {lesson.progress === 0 ? 'Start Lesson' : lesson.progress === 100 ? 'Review' : 'Continue'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const HabitsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Daily Habits & Values Practice</h2>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
          <Plus className="h-4 w-4 inline mr-2" />
          Add Habit
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {habits.map((habit) => (
          <div key={habit.id} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => toggleHabit(habit.id)}
                  className={`p-2 rounded-full transition-colors ${
                    habit.completed 
                      ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  {habit.completed ? <CheckCircle className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                </button>
                <div>
                  <h3 className="font-semibold">{habit.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {habit.category}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center text-orange-600">
                  <Flame className="h-4 w-4 mr-1" />
                  <span className="font-semibold">{habit.streak}</span>
                </div>
                <p className="text-xs text-gray-500">day streak</p>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-orange-500 h-1 rounded-full" 
                style={{width: `${Math.min(habit.streak * 10, 100)}%`}}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Habit Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="font-semibold text-green-900">85%</p>
            <p className="text-sm text-green-700">Completion Rate</p>
          </div>
          
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <Flame className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="font-semibold text-orange-900">12 Days</p>
            <p className="text-sm text-orange-700">Best Streak</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="font-semibold text-purple-900">4 Active</p>
            <p className="text-sm text-purple-700">Total Habits</p>
          </div>
        </div>
      </div>
    </div>
  );

  const JournalTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Self-Exploration Journal</h2>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          <Plus className="h-4 w-4 inline mr-2" />
          New Entry
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Today's Reflection Prompt</h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4">
          <div className="flex items-start space-x-3">
            <Lightbulb className="h-5 w-5 text-purple-600 mt-1" />
            <div>
              <p className="font-medium text-purple-900">Which of your core values felt most challenged today, and how did you respond?</p>
              <p className="text-sm text-purple-700 mt-1">Reflect on moments of value conflict and your decision-making process.</p>
            </div>
          </div>
        </div>
        
        <textarea 
          className="w-full p-4 border rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows="4"
          placeholder="Begin writing your reflection..."
        ></textarea>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">😊 Grateful</button>
            <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">🤔 Reflective</button>
            <button className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">💪 Motivated</button>
          </div>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Save Entry
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Previous Entries</h3>
        {journalEntries.map((entry) => (
          <div key={entry.id} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{entry.date}</span>
                <div className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {entry.mood}
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MessageSquare className="h-4 w-4" />
              </button>
            </div>
            
            <p className="font-medium text-gray-900 mb-2">{entry.prompt}</p>
            <p className="text-gray-700 text-sm">{entry.entry}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ProgressTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Progress & Insights</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Earned Badges</h3>
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge, index) => (
              <div key={index} className={`p-4 rounded-lg text-center ${badge.earned ? 'bg-yellow-50 border-2 border-yellow-200' : 'bg-gray-50 border-2 border-gray-200 opacity-50'}`}>
                <div className="text-3xl mb-2">{badge.earned ? badge.icon : '🔒'}</div>
                <p className="font-semibold text-sm">{badge.name}</p>
                <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Learning Analytics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Understanding & Values</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Relationships & Harmony</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Self & Society</span>
                <span>40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Value Integration Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="font-semibold text-blue-900">Understanding</p>
            <p className="text-sm text-blue-700">Strong foundation</p>
          </div>
          
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <p className="font-semibold text-red-900">Happiness</p>
            <p className="text-sm text-red-700">Growing awareness</p>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="font-semibold text-green-900">Relationships</p>
            <p className="text-sm text-green-700">Developing skills</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="font-semibold text-purple-900">Prosperity</p>
            <p className="text-sm text-purple-700">Needs focus</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">UHV Learning Platform</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-full">
                <Flame className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">{userStats.streak} day streak</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {userStats.level}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Level {userStats.level}</p>
                  <p className="text-xs text-gray-600">{userStats.totalPoints} points</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
              { id: 'lessons', name: 'Lessons', icon: BookOpen },
              { id: 'habits', name: 'Habits', icon: Target },
              { id: 'journal', name: 'Journal', icon: PenTool },
              { id: 'progress', name: 'Progress', icon: TrendingUp },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'lessons' && <LessonsTab />}
        {activeTab === 'habits' && <HabitsTab />}
        {activeTab === 'journal' && <JournalTab />}
        {activeTab === 'progress' && <ProgressTab />}
      </main>
    </div>
  );
};

export default UHVPlatform;