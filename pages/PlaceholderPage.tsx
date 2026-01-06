
import React from 'react';
import { useLocation } from 'react-router-dom';

const PlaceholderPage: React.FC = () => {
  const location = useLocation();
  const pageTitle = location.pathname.substring(1).split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 animate-fade-in">
      <div className="text-center px-4 max-w-2xl">
        <div className="mb-8 text-blue-100">
          <i className="fas fa-file-alt text-9xl"></i>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{pageTitle}</h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          דף זה נמצא כעת בתהליך עריכה ועיצוב. בקרוב נוסיף כאן את כל המידע המקצועי אודות פתרון ה-AI המתקדם שלנו.
        </p>
        <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl text-blue-800 font-medium">
          <i className="fas fa-info-circle ml-2"></i>
          למידע נוסף, ניתן ליצור קשר עם מחלקת המכירות שלנו.
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
