import React, { type ReactNode } from 'react'
import * as MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

interface StackMarqueeProps {
  className?: string,
  children: ReactNode,
  direction?: 'right' | 'left' | 'up' | 'down'
}

export default function StackMarquee({className, children, direction = 'right'}:StackMarqueeProps) {
  return (
    <div className={className}>
      <Marquee
        direction={direction}
        gradient
        pauseOnHover
        gradientColor='#E9E9E9'
        autoFill>
        {children}
      </Marquee>
    </div>
  )
}
