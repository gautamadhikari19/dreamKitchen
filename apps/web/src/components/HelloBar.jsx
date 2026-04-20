import { useEffect } from 'react';

const HELLO_BAR_SCRIPT_ID = 'hello-bar-script';
const HELLO_BAR_SITE_ID_PATTERN = /^[a-f0-9]{40}$/i;

function HelloBar() {
  useEffect(() => {
    const siteId = import.meta.env.VITE_HELLO_BAR_SITE_ID;

    if (!siteId) {
      return;
    }

    if (!HELLO_BAR_SITE_ID_PATTERN.test(siteId)) {
      console.warn('VITE_HELLO_BAR_SITE_ID should be the 40-character Hello Bar site ID.');
      return;
    }

    if (document.getElementById(HELLO_BAR_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement('script');
    script.id = HELLO_BAR_SCRIPT_ID;
    script.src = `https://my.hellobar.com/${siteId}.js`;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return null;
}

export default HelloBar;
