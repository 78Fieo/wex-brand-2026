"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

/**
 * MovingBorderContainer - A wrapper that adds a moving border effect around any content
 * Perfect for cards and containers in the WEX design system
 */
export function MovingBorderContainer({
  borderRadius = "1rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration = 3000,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative p-[2px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-24 w-24 opacity-[0.8] bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative w-full h-full",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

/**
 * AIGlowBorder - An enhanced rotating gradient border specifically for AI features
 * Uses the WEX hero gradient: purple → blue → red
 * Creates a smooth rotating gradient effect with ambient glow that casts light behind the card
 */
export function AIGlowBorder({
  borderRadius = "1rem",
  children,
  as: Component = "div",
  containerClassName,
  duration = 6000, // Slower, more elegant rotation
  glowIntensity = "subtle", // "subtle" | "medium" | "intense"
  showBehindGlow = true, // Toggle the behind-card glow layer
  className,
  ...otherProps
}) {
  const glowConfig = {
    subtle: {
      opacity: 0.6,
      size: "h-48 w-16", // Longer, thinner streak
      blur: "blur-md",
      ambientOpacity: 0.15,
      behindGlowSize: "h-24 w-24",
      behindGlowOpacity: 0.15,
    },
    medium: {
      opacity: 0.75,
      size: "h-64 w-20",
      blur: "blur-lg",
      ambientOpacity: 0.25,
      behindGlowSize: "h-32 w-32",
      behindGlowOpacity: 0.2,
    },
    intense: {
      opacity: 0.9,
      size: "h-80 w-24",
      blur: "blur-xl",
      ambientOpacity: 0.35,
      behindGlowSize: "h-40 w-40",
      behindGlowOpacity: 0.3,
    },
  };

  const config = glowConfig[glowIntensity];

  return (
    <div className={cn("relative", containerClassName)}>
      {/* Behind-card glow layer - follows the moving gradient, extends to affect nearby cards */}
      {showBehindGlow && (
        <div 
          className="absolute pointer-events-none"
          style={{ 
            // Extend well beyond the card to reach behind neighboring elements
            inset: "-40px",
            zIndex: -1,
          }}
        >
          <div 
            className="relative w-full h-full"
            style={{ borderRadius: `calc(${borderRadius} + 40px)` }}
          >
            <MovingBorder duration={duration} rx="25%" ry="25%">
              <div
                className={cn(config.behindGlowSize, "blur-xl")}
                style={{
                  opacity: config.behindGlowOpacity,
                  background: `radial-gradient(
                    circle at center,
                    #1C6EFF 0%,
                    #172DA1 40%,
                    transparent 70%
                  )`,
                  borderRadius: "50%",
                }}
              />
            </MovingBorder>
          </div>
        </div>
      )}

      <Component
        className={cn(
          "bg-transparent relative p-[2px] overflow-hidden group"
        )}
        style={{
          borderRadius: borderRadius,
        }}
        {...otherProps}
      >
        {/* Ambient glow layer - always visible, subtle pulse */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            borderRadius: `calc(${borderRadius} * 0.96)`,
            opacity: config.ambientOpacity,
            background: `linear-gradient(135deg, 
              rgba(46, 0, 85, 0.4) 0%, 
              rgba(23, 45, 161, 0.3) 40%, 
              rgba(28, 110, 255, 0.2) 60%,
              rgba(200, 16, 46, 0.3) 100%
            )`,
            animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />

        {/* Rotating gradient streak - follows the hero gradient */}
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          <MovingBorder duration={duration} rx="30%" ry="30%">
            <div
              className={cn(config.size, config.blur)}
              style={{
                opacity: config.opacity,
                background: `linear-gradient(
                  180deg,
                  transparent 0%,
                  #2E0055 10%,
                  #172DA1 35%,
                  #1C6EFF 50%,
                  #172DA1 65%,
                  #C8102E 90%,
                  transparent 100%
                )`,
                borderRadius: "9999px",
              }}
            />
          </MovingBorder>
        </div>

        {/* Secondary glow trail for depth */}
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          <MovingBorder duration={duration * 1.1} rx="30%" ry="30%">
            <div
              className="h-32 w-12 blur-2xl"
              style={{
                opacity: config.opacity * 0.4,
                background: `linear-gradient(
                  180deg,
                  transparent 0%,
                  #1C6EFF 30%,
                  #FFBC00 70%,
                  transparent 100%
                )`,
                borderRadius: "9999px",
              }}
            />
          </MovingBorder>
        </div>

        {/* Content */}
        <div
          className={cn(
            "relative w-full h-full bg-white",
            className
          )}
          style={{
            borderRadius: `calc(${borderRadius} * 0.96)`,
          }}
        >
          {children}
        </div>
      </Component>
    </div>
  );
}

