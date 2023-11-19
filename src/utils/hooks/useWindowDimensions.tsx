import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const hasWindow = typeof window !== 'undefined' && window;
    const { innerWidth: width, innerHeight: height } = hasWindow as any;
    return {
        width,
        height
    };

}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
