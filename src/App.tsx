import React, { useState, useEffect } from 'react';

import { Router } from './Router';

function App() { 
  
    return (
      <div className="App">   

        
        <div style={{
                background: 'linear-gradient(90deg, rgba(48,129,0,1) 0%, rgba(255,255,255,1) 50%, rgba(255,250,10,1) 100%)',
                height: '56px',
          }}
        >
        </div> 

        <Router />
          
        
      </div>
    );
}

export default App;
