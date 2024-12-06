'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
        $<CountUp end={amount} duration={1}/>
    </div>
    
  );
};

export default AnimatedCounter;