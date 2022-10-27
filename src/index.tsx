import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from './config/theme-config';
import { NotificationProvider } from './context/Notification.context';
import { URLSProvider } from './context/URLs.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <ThemeConfig>
      <NotificationProvider>
        <URLSProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </URLSProvider>
      </NotificationProvider>
    </ThemeConfig>
      
  </React.StrictMode>
);
