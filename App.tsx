import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SHAPES } from './constants';
import { ShapeData } from './types';

/**
 * Generates deterministic random values for the scatter effect based on ID.
 */
const getRandomScatter = () => ({
  x: Math.random() * 500 - 250, // Range adapted for the new size
  y: Math.random() * 500 - 250, 
  rotate: Math.random() * 180 - 90, 
});

const ShapeItem: React.FC<{
  shape: ShapeData;
  isScattered: boolean;
  isFlipped: boolean;
  onToggleFlip: (e: React.MouseEvent) => void;
}> = ({ shape, isScattered, isFlipped, onToggleFlip }) => {
  
  const scatterConfig = useMemo(() => getRandomScatter(), []);

  // Determine target rotation:
  // If scattered: random rotation
  // If idle: initialRotation (or 0)
  // If flipped: initialRotation (or 0) - handled by rotateY 
  const targetRotate = isScattered ? scatterConfig.rotate : (shape.initialRotation || 0);

  return (
    <motion.svg
      className="absolute inset-0 pointer-events-none w-full h-full"
      viewBox="0 0 600 850"
      style={{ 
        mixBlendMode: 'multiply',
        transformOrigin: `${shape.originX}px ${shape.originY}px`
      }}
      initial={false}
      animate={{
        x: isScattered ? scatterConfig.x : 0,
        y: isScattered ? scatterConfig.y : 0,
        rotate: targetRotate,
        rotateY: isFlipped ? 180 : 0,
        scale: isFlipped ? 2.5 : 1, // Increased scale for better visibility on this artboard
        zIndex: isFlipped ? 50 : 1
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }}
    >
      <motion.g
        onClick={(e) => {
          e.stopPropagation();
          onToggleFlip(e);
        }}
        className="cursor-pointer pointer-events-auto"
        whileHover={{ scale: 1.05 }}
      >
        <motion.path
          d={shape.d}
          fill={isFlipped ? "#FFD700" : shape.fill}
          fillOpacity={isFlipped ? 1 : shape.opacity}
          transition={{ duration: 0.3 }}
        />
        
        <AnimatePresence>
          {isFlipped && (
            <motion.text
              x={shape.originX}
              y={shape.originY}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FFFFFF"
              fontSize="32" 
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transform={`scale(-1, 1) translate(${-2 * shape.originX}, 0)`}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            >
              Hello!
            </motion.text>
          )}
        </AnimatePresence>
      </motion.g>
    </motion.svg>
  );
};

export default function App() {
  const [isScattered, setIsScattered] = useState(false);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);

  const handleBackgroundClick = () => {
    setIsScattered((prev) => !prev);
  };

  const toggleFlip = (id: number) => {
    setFlippedIds((prev) => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 cursor-pointer"
      onClick={handleBackgroundClick}
    >
      <header className="mb-8 text-center text-gray-700 pointer-events-none select-none">
        <h1 className="text-3xl font-bold mb-2">Geometric Christmas Tree</h1>
        <p className="text-sm opacity-70">
          Click background to <strong>{isScattered ? 'Gather' : 'Scatter'}</strong>. 
          Click shapes to <strong>Flip</strong>.
        </p>
      </header>

      {/* Main Container Wrapper - Kraft Paper Background */}
      <div 
        className="relative w-full max-w-[500px] shadow-2xl border border-gray-100"
        style={{ 
          aspectRatio: '600 / 850',
          backgroundColor: '#D0B486' // Kraft paper color from SVG
        }}
      >
        {/* Paper texture overlay (optional, simulating slight grain) */}
        <div className="absolute inset-0 opacity-10 bg-black pointer-events-none mix-blend-overlay"></div>

        {/* Shapes Render Loop */}
        {SHAPES.map((shape) => (
          <ShapeItem
            key={shape.id}
            shape={shape}
            isScattered={isScattered}
            isFlipped={flippedIds.includes(shape.id)}
            onToggleFlip={() => toggleFlip(shape.id)}
          />
        ))}

        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none opacity-20">
          <span className="text-xs font-mono uppercase tracking-widest text-black/40">
            Composition No. 2
          </span>
        </div>
      </div>
    </div>
  );
}
