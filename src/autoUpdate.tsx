import * as LiveUpdates from '@capacitor/live-updates';
import { App } from '@capacitor/app';
import { useEffect } from 'react';


const InitializeApp= ()=> {
 
  useEffect( () =>{
     // Register event to fire each time user resumes the app  
  App.addListener('resume', async () => {
    if (localStorage.shouldReloadApp) {
      await LiveUpdates.reload();
    }
    else {
      const result = await LiveUpdates.sync();
      localStorage.shouldReloadApp = result.activeApplicationPathChanged;
    }
  });
   // First sync on app load
  const result = (async () => await LiveUpdates.sync())();
  localStorage.shouldReloadApp = result.then((res)=>res.activeApplicationPathChanged);
  }
  )

  return null
}

export default InitializeApp