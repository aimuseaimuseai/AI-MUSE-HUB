
import React from 'react';

const EyeSite: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white bg-blue-900 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <img 
            src="https://placehold.co/300x100/ffffff/3b82f6?text=EyeSite+Logo" 
            alt="EyeSite Logo" 
            className="mx-auto mb-8 drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">העיניים שלך בשטח</h1>
          <p className="text-xl opacity-90">ראייה ממוחשבת מתקדמת לניטור ובקרה בזמן אמת</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-10">צפו ב-EyeSite בפעולה</h2>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-black">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="https://picsum.photos/1280/720?grayscale"
            >
              <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
              הדפדפן שלך לא תומך בוידאו.
            </video>
          </div>
          <div className="mt-12 text-right bg-white p-8 rounded-2xl shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">מה זה EyeSite?</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              מערכת EyeSite משלבת מצלמות אבטחה קיימות עם אלגוריתמים של Deep Learning כדי לזהות אירועים חריגים,
              לוודא חבישת ציוד בטיחות, ולנתח תנועה במרחבים סגורים ופתוחים. 
              המערכת מתריעה בזמן אמת ומספקת דאשבורד ניהולי לקבלת החלטות מבוססות נתונים.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-bolt', title: 'זמן אמת', text: 'התראות מיידיות על כל חריגה' },
              { icon: 'fa-chart-line', title: 'אנליטיקה', text: 'דוחות מפורטים ומגמות' },
              { icon: 'fa-cogs', title: 'אינטגרציה', text: 'חיבור פשוט למערכות קיימות' },
              { icon: 'fa-user-check', title: 'בטיחות', text: 'מניעת תאונות עבודה וזיהוי סיכונים' }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl">
                <i className={`fas ${item.icon} text-3xl text-blue-600 mb-4`}></i>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EyeSite;
