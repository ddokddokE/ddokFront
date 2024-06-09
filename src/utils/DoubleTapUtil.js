import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import speak from './SpeechUtil';

const useDoubleTap = (route, ttsText, delay = 300) => {
    const navigation = useNavigation();
    const [lastPress, setLastPress] = useState(0);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [timer]);

    const handleDoubleTap = () => {
        const currentTime = new Date().getTime();
        const delta = currentTime - lastPress;

        clearTimeout(timer);

        if (delta < delay) {
            navigation.navigate(route);
        } else {
            const newTimer = setTimeout(() => {
                speak(ttsText);
            }, delay);
            setTimer(newTimer);
        }
        setLastPress(currentTime);
    };

    return handleDoubleTap;
};

const useDoubleTapWithData = (navigate, ttsText, delay = 300) => {
    const [lastPress, setLastPress] = useState(0);
    const [timer, setTimer] = useState(null);

    const handleDoubleTap = (data) => {
        const currentTime = new Date().getTime();
        const delta = currentTime - lastPress;

        clearTimeout(timer);

        if (delta < delay) {
            navigate(data);
        } else {
            const newTimer = setTimeout(() => {
                speak(ttsText);
            }, delay);
            setTimer(newTimer);
        }
        setLastPress(currentTime);
    };

    return handleDoubleTap;
};

export { useDoubleTap, useDoubleTapWithData };
