import {useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = ( {show}) => {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() =>{
        setShowConfetti(true);
        const confettiTimer = setTimeout(() => {
            setShowConfetti(false);
          }, 7000);
      
        return () => {
            clearTimeout(confettiTimer);

        };
    }, [show]);

    return (
        <>
        {
            showConfetti && 
             <ReactConfetti
             width = {window.innerWidth}
             height = {window.innerHeight}
             
             />
        }
       
        </>
    );
}

export default Confetti;