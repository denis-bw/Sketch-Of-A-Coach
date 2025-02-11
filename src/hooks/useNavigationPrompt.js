import { useContext, useEffect, useState, useCallback } from 'react';
import { UNSAFE_NavigationContext as NavigationContext, useNavigate } from 'react-router-dom';

export function useNavigationPrompt(when) {
  const navigate = useNavigate();
  const { navigator } = useContext(NavigationContext);
  const [showPrompt, setShowPrompt] = useState(false);
  const [lastLocation, setLastLocation] = useState(null);

  const cancelNavigation = useCallback(() => {
    setShowPrompt(false);
    setLastLocation(null);
  }, []);

  const handleConfirmNavigation = useCallback(() => {
    if (lastLocation) {
      setShowPrompt(false);
      navigate(lastLocation);
      setLastLocation(null);
    }
  }, [lastLocation, navigate]);

  useEffect(() => {
    if (!when) {
      return;
    }

    const push = navigator.push;

    navigator.push = (...args) => {
      const pathTo = args[0];
      
     
      if (typeof pathTo === 'string') {
        setLastLocation(pathTo);
      } 
     
      else if (pathTo && typeof pathTo === 'object' && pathTo.pathname) {
        setLastLocation(pathTo.pathname);
      }
      
      setShowPrompt(true);
      return;
    };

    return () => {
      navigator.push = push;
    };
  }, [navigator, when]);

  return [showPrompt, handleConfirmNavigation, cancelNavigation];
}