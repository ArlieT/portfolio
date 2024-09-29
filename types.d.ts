type colorthief = any;

export type Transition = {
  type?: 'tween' | 'spring' | 'keyframes' | 'inertia';
  ease?:
    | 'linear'
    | 'easeIn'
    | 'easeOut'
    | 'easeInOut'
    | EasingFunction
    | EasingFunction[]
    | string;
  duration?: number; // duration in seconds
  delay?: number; // delay in seconds
  repeat?: number; // how many times to repeat the animation
  repeatType?: 'loop' | 'reverse' | 'mirror';
  stiffness?: number; // spring stiffness (only for 'spring' type)
  damping?: number; // spring damping (only for 'spring' type)
  mass?: number; // spring mass (only for 'spring' type)
  velocity?: number; // spring velocity (only for 'spring' type)
  restSpeed?: number; // spring rest speed (only for 'spring' type)
  restDelta?: number; // spring rest delta (only for 'spring' type)
  from?: number | string; // initial value
  to?: number | string; // final value
};
