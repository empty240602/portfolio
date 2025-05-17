import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

function StarBackground() {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteor] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteor();

        const handleResize = () => {
            generateStars();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            return window.removeEventListener('resize', handleResize);
        }
    }, []);

    const generateStars = () => {
        const numberOfStar = Math.floor(window.innerWidth * window.innerHeight / 10000)

        const newStars = [];

        for (let i = 0; i < numberOfStar; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars);
    }

    const generateMeteor = () => {
        const numberOfMeteor = 4
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteor; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }

        setMeteor(newMeteors);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 ">
            {stars.map(star => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    top: `${star.y}%`,
                    left: `${star.x}%`,
                    animationDuration: `${star.animationDuration}s`,
                    opacity: `${star.opacity}`,
                }}></div>
            ))}

            {meteors.map(meteor => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: `${meteor.size * 50}px`,
                    height: `${meteor.size * 2}px`,
                    top: `${meteor.y}%`,
                    left: `${meteor.x}%`,
                    delay: `${meteor.delay}s`,
                    animationDuration: `${meteor.animationDuration}s`,
                }}></div>
            ))}
        </ div>
    );
}

export default StarBackground;