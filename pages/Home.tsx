
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white hero-gradient">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">AI Muse Hub</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            מרכז החדשנות של ישראל לפתרונות בינה מלאכותית חכמים
          </p>
          <div className="bg-yellow-400 text-yellow-900 px-8 py-4 rounded-full font-bold text-lg inline-block animate-pulse">
            AI Muse Hub - האתר בבנייה
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">השירותים שלנו</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mx-auto mb-6">
                <i className="fas fa-eye"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">EyeSite</h3>
              <p className="text-gray-600">מערכת ניטור חכמה מבוססת ראייה ממוחשבת לבקרת איכות ובטיחות.</p>
            </div>
            
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mx-auto mb-6">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Sheriff Series</h3>
              <p className="text-gray-600">משפחת מוצרים לאכיפה, בדיקה ושיפור נגישות במרחב הציבורי.</p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mx-auto mb-6">
                <i className="fas fa-city"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">City Platform</h3>
              <p className="text-gray-600">ניהול עיר חכמה המבוסס על נתוני זמן אמת ובינה מלאכותית.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
