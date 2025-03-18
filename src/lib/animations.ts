
// Animation utility functions

// Stagger children animation delay
export const staggerDelay = (index: number, baseDelay = 100): string => {
  return `${baseDelay * index}ms`;
};

// Parallax effect on scroll
export const parallaxEffect = (
  element: HTMLElement, 
  scrollY: number, 
  speed = 0.2
): void => {
  const offset = window.scrollY * speed;
  element.style.transform = `translateY(${offset}px)`;
};

// Scroll reveal animation values
export const scrollRevealConfig = {
  origin: 'bottom',
  distance: '20px',
  duration: 800,
  delay: 0,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  reset: false
};

// Animation variants for framer-motion (if added later)
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Element appears on scroll helper
export interface ScrollOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const createScrollObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: ScrollOptions = {}
): IntersectionObserver => {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback([entry]);
          if (once) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { threshold, rootMargin }
  );
};

const observer = createScrollObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.add('animate-fade-up');
  });
});

export const registerScrollAnimations = (): void => {
  document.querySelectorAll('.scroll-animate').forEach((el) => {
    observer.observe(el);
  });
};
