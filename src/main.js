// BlobMaster Studio Engine Core JS

// Predefined assets & constants
const COLOR_PALETTES = [
  {
    id: 'sunset',
    name: 'Sunset Glow',
    description: 'Vibrant and warm summer tones that blend into peaceful evenings.',
    bgColor: '#0B0F19',
    textColor: '#F8FAFC',
    colors: ['#FF6B6B', '#FF8E53', '#FFAE73', '#FF4E50', '#F9D423']
  },
  {
    id: 'retro',
    name: 'Cosmic Vaporwave',
    description: 'Electric neon tones evoking retro-futuristic arcade horizons.',
    bgColor: '#0F0926',
    textColor: '#F8FAFC',
    colors: ['#F72585', '#7209B7', '#3F37C9', '#4CC9F0', '#B5179E']
  },
  {
    id: 'aurora',
    name: 'Aurora Dreams',
    description: 'Icy Arctic winds meeting high-vibrance ionized atmospheric green glow.',
    bgColor: '#070F15',
    textColor: '#F8FAFC',
    colors: ['#05FFC5', '#10B981', '#06B6D4', '#2563EB', '#3B82F6']
  },
  {
    id: 'cyber',
    name: 'Cyberpunk Neon',
    description: 'Rebellious contrast of fluorescent cyber pink and radioactive lime.',
    bgColor: '#05050A',
    textColor: '#F8FAFC',
    colors: ['#FF007F', '#39FF14', '#00F0FF', '#FFF000', '#7B00FF']
  },
  {
    id: 'midnight',
    name: 'Midnight Lavender',
    description: 'Soft pastel dreams, elegant violets, and dusty rose clouds.',
    bgColor: '#1E1B4B',
    textColor: '#EEF2F6',
    colors: ['#C084FC', '#F472B6', '#818CF8', '#A78BFA', '#FDA4AF']
  },
  {
    id: 'ember',
    name: 'Ember Fire',
    description: 'Deep crackling fires, molten magma, and heavy red ash smoke.',
    bgColor: '#110202',
    textColor: '#FFEDED',
    colors: ['#DC2626', '#EA580C', '#B91C1C', '#7F1D1D', '#F59E0B']
  },
  {
    id: 'mono',
    name: 'Monochrome Luxe',
    description: 'Ultra-modern architectural luxury slate metallic tones with stark contrasts.',
    bgColor: '#090D16',
    textColor: '#F8FAFC',
    colors: ['#E2E8F0', '#94A3B8', '#475569', '#1E293B', '#F1F5F9']
  }
];

const BLEND_MODES = [
  { value: 'normal', label: 'Normal (Layered)' },
  { value: 'screen', label: 'Screen (Glow Fusion - Recommended)' },
  { value: 'overlay', label: 'Overlay (Contrast Blend)' },
  { value: 'multiply', label: 'Multiply (Dark Fusion)' },
  { value: 'color-dodge', label: 'Color Dodge (Electric Glow)' },
  { value: 'color-burn', label: 'Color Burn (Vintage Burn)' },
  { value: 'difference', label: 'Difference (Inversions)' },
  { value: 'exclusion', label: 'Exclusion' },
  { value: 'soft-light', label: 'Soft Light (Ambient)' },
  { value: 'saturation', label: 'Saturation Boost' }
];

const MOVEMENT_TYPES = [
  { value: 'float', label: 'Organic Floating', desc: 'Slight drifting random hover path' },
  { value: 'orbit', label: 'Circular Orbit', desc: 'Rotates around relative central radius' },
  { value: 'linear', label: 'Linear Drifting', desc: 'Back and forth linear sliding' },
  { value: 'pulse', label: 'Breathing Pulse', desc: 'Static position with scaling pulse effect' }
];

const SHAPE_VARIANTS = [
  {
    id: 1,
    name: 'Organic Fluid',
    keyframes: {
      '0%': '42% 58% 70% 30% / 45% 45% 55% 55%',
      '25%': '70% 30% 52% 48% / 60% 40% 60% 40%',
      '50%': '30% 70% 40% 60% / 40% 60% 40% 60%',
      '75%': '60% 40% 60% 40% / 50% 50% 50% 50%',
      '100%': '42% 58% 70% 30% / 45% 45% 55% 55%'
    }
  },
  {
    id: 2,
    name: 'Liquid Blob Splat',
    keyframes: {
      '0%': '50% 50% 30% 70% / 50% 60% 40% 50%',
      '33%': '60% 40% 60% 40% / 40% 30% 70% 60%',
      '66%': '40% 60% 30% 70% / 60% 70% 30% 40%',
      '100%': '50% 50% 30% 70% / 50% 60% 40% 50%'
    }
  },
  {
    id: 3,
    name: 'Droplet Core',
    keyframes: {
      '0%': '70% 30% 50% 50% / 30% 30% 70% 70%',
      '50%': '50% 50% 70% 30% / 70% 70% 30% 30%',
      '100%': '70% 30% 50% 50% / 30% 30% 70% 70%'
    }
  },
  {
    id: 4,
    name: 'Starry Amoeba',
    keyframes: {
      '0%': '35% 65% 50% 50% / 65% 35% 65% 35%',
      '25%': '70% 30% 70% 30% / 30% 70% 30% 70%',
      '50%': '50% 50% 35% 65% / 65% 35% 65% 35%',
      '75%': '30% 70% 65% 35% / 70% 30% 45% 55%',
      '100%': '35% 65% 50% 50% / 65% 35% 65% 35%'
    }
  },
  {
    id: 5,
    name: 'Capsule Soft',
    keyframes: {
      '0%': '40% 40% 40% 40% / 60% 60% 60% 60%',
      '50%': '60% 60% 60% 60% / 40% 40% 40% 40%',
      '100%': '40% 40% 40% 40% / 60% 60% 60% 60%'
    }
  }
];

// Initial default configuration representing Sunset Glow startup state
const DEFAULT_BLOBS = [
  { id: 'b1', color: '#FF6B6B', size: 50, x: 30, y: 40, duration: 16, delay: 0, opacity: 0.85, movementType: 'float', shapeVariant: 1 },
  { id: 'b2', color: '#FF8E53', size: 60, x: 75, y: 35, duration: 22, delay: 1.5, opacity: 0.8, movementType: 'orbit', shapeVariant: 2 },
  { id: 'b3', color: '#FFAE73', size: 55, x: 45, y: 80, duration: 28, delay: 3, opacity: 0.75, movementType: 'float', shapeVariant: 4 },
  { id: 'b4', color: '#FF4E50', size: 40, x: 85, y: 75, duration: 20, delay: 0.5, opacity: 0.8, movementType: 'pulse', shapeVariant: 3 }
];

const DEFAULT_WORKSPACE = {
  bgColor: '#0B0F19',
  blur: 80,
  contrast: 1.25,
  saturation: 1.4,
  blendMode: 'screen',
  hasNoise: true,
  isPlaying: true,
  canvasRatio: 'full'
};

const DEFAULT_GLASSMORPHISM = {
  enabled: false,
  blur: 16,
  opacity: 0.15,
  borderOpacity: 0.25,
  borderRadius: 24,
  color: '#ffffff',
  template: 'dashboard'
};

// System State
let blobs = JSON.parse(JSON.stringify(DEFAULT_BLOBS));
let workspace = { ...DEFAULT_WORKSPACE };
let glassmorphism = { ...DEFAULT_GLASSMORPHISM };
let selectedBlobId = 'b1';
let activeControlTab = 'palettes'; // palettes, blobs, canvas, glass
let activeExportTab = 'html-css'; // html-css, tailwind, react
let copiedTimeout = null;

// Dynamic SVG Asset Repository
const ICONS = {
  play: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  pause: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
  shuffle: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`,
  refresh: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  copy: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  check: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  terminal: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  layers: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/></svg>`,
  code: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  trash: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  plus: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
};

// Injection of dynamic keyfarms & styles for custom animations in runtime
function updateAnimationsStyleTag() {
  let styleTag = document.getElementById('blob-animations-styles');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'blob-animations-styles';
    document.head.appendChild(styleTag);
  }

  let code = '';
  blobs.forEach((b) => {
    const shape = SHAPE_VARIANTS.find(s => s.id === b.shapeVariant) || SHAPE_VARIANTS[0];
    
    // 1. Morph keyframes
    let morphSteps = '';
    Object.entries(shape.keyframes).forEach(([p, radius]) => {
      morphSteps += `    ${p} { border-radius: ${radius}; }\n`;
    });

    // 2. Movement path keyframes
    let pathSteps = '';
    if (b.movementType === 'float') {
      const span = b.size * 0.45;
      pathSteps = `
    0% { transform: translate(-50%, -50%) translate(0px, 0px) rotate(0deg); }
    33% { transform: translate(-50%, -50%) translate(${span * 0.3}px, -${span * 0.4}px) rotate(120deg); }
    66% { transform: translate(-50%, -50%) translate(-${span * 0.4}px, ${span * 0.3}px) rotate(240deg); }
    100% { transform: translate(-50%, -50%) translate(0px, 0px) rotate(360deg); }`;
    } else if (b.movementType === 'orbit') {
      const radiusVal = Math.max(25, b.size * 0.5);
      pathSteps = `
    0% { transform: translate(-50%, -50%) rotate(0deg) translate(${radiusVal}px) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg) translate(${radiusVal}px) rotate(-360deg); }`;
    } else if (b.movementType === 'linear') {
      const distance = Math.max(30, b.size * 0.6);
      pathSteps = `
    0% { transform: translate(-50%, -50%) translateX(-${distance}px) translateY(0px); }
    50% { transform: translate(-50%, -50%) translateX(${distance}px) translateY(-10px); }
    100% { transform: translate(-50%, -50%) translateX(-${distance}px) translateY(0px); }`;
    } else if (b.movementType === 'pulse') {
      pathSteps = `
    0% { transform: translate(-50%, -50%) scale(0.85) rotate(0deg); }
    50% { transform: translate(-50%, -50%) scale(1.15) rotate(180deg); }
    100% { transform: translate(-50%, -50%) scale(0.85) rotate(360deg); }`;
    }

    code += `
    @keyframes morph-b-${b.id} {
  ${morphSteps}  }
    @keyframes run-b-${b.id} {
  ${pathSteps}  }
  
    .rendered-blob-${b.id} {
      position: absolute;
      left: ${b.x}%;
      top: ${b.y}%;
      width: ${b.size}%;
      aspect-ratio: 1;
      opacity: ${b.opacity};
      mix-blend-mode: ${workspace.blendMode};
      background: ${b.color};
      box-shadow: 0 0 ${b.size * 1.5}px ${b.color}90;
      border-radius: 50%;
      pointer-events: none;
      filter: none;
      animation: 
        run-b-${b.id} ${b.duration}s infinite linear,
        morph-b-${b.id} ${b.duration * 0.6}s infinite ease-in-out;
      animation-delay: ${b.delay}s;
      animation-play-state: ${workspace.isPlaying ? 'running' : 'paused'} !important;
    }\n`;
  });

  styleTag.textContent = code;
}

// Render dynamic canvas visual layer
function renderCanvas() {
  const container = document.getElementById('canvas-viewport');
  if (!container) return;

  // Set background color
  container.style.backgroundColor = workspace.bgColor;

  // Update canvas aspect ratio container parent
  const parent = container.parentElement;
  if (workspace.canvasRatio === '4-3') {
    parent.className = 'flex-1 min-h-[500px] w-full max-w-4xl mx-auto aspect-4/3 relative flex items-center justify-center';
  } else if (workspace.canvasRatio === '16-9') {
    parent.className = 'flex-1 min-h-[500px] w-full max-w-5xl mx-auto aspect-16/9 relative flex items-center justify-center';
  } else if (workspace.canvasRatio === '1-1') {
    parent.className = 'flex-1 min-h-[500px] w-full max-w-md mx-auto aspect-square relative flex items-center justify-center';
  } else {
    parent.className = 'flex-1 h-full w-full relative';
  }

  // Set noise texture visibility
  const noiseLayer = document.getElementById('canvas-noise-overlay');
  if (noiseLayer) {
    noiseLayer.style.display = workspace.hasNoise ? 'block' : 'none';
  }

  // Set visual filters on filter layer
  const filtersLayer = document.getElementById('canvas-filters-layer');
  if (filtersLayer) {
    filtersLayer.style.filter = `blur(${workspace.blur}px) contrast(${workspace.contrast}) saturate(${workspace.saturation})`;
    
    // Inject rendered blobs in canvas-filters-layer
    filtersLayer.innerHTML = blobs.map(b => `
      <div class="rendered-blob-${b.id}"></div>
    `).join('');
  }

  // Inject handle dots & tracking anchors overlay
  const handleLayer = document.getElementById('canvas-handles-overlay');
  if (handleLayer) {
    handleLayer.innerHTML = '';
    blobs.forEach((b, index) => {
      const handle = document.createElement('div');
      const isSelected = b.id === selectedBlobId;
      handle.className = `absolute w-9 h-9 rounded-full border-2 flex items-center justify-center font-mono text-[11px] font-black cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 transition-all shadow-lg z-20 ${
        isSelected 
          ? 'bg-indigo-600 text-white border-white scale-115 ring-4 ring-indigo-505/30 z-30' 
          : 'bg-slate-900/90 text-slate-350 border-slate-700 hover:border-slate-500 hover:scale-105'
      }`;
      handle.style.left = `${b.x}%`;
      handle.style.top = `${b.y}%`;
      handle.innerHTML = `<span>#${index + 1}</span>`;
      
      // Handle drag trigger
      handle.addEventListener('mousedown', (e) => startDragging(e, b.id));
      handle.addEventListener('touchstart', (e) => startDragging(e, b.id), { passive: false });
      
      // Blob selection click trigger
      handle.addEventListener('click', (e) => {
        e.stopPropagation();
        selectBlob(b.id);
      });

      handleLayer.appendChild(handle);
    });
  }

  // Render Card Overlay Glassmorphism details
  renderGlassmorphismCard();

  // Highlight active blob index counters in quick state indicators
  const blobCountIndicator = document.getElementById('canvas-active-blob-count');
  if (blobCountIndicator) {
    blobCountIndicator.textContent = `${blobs.length} Blobs`;
  }
}

// Render dynamic glass card centered on the preview grid
function renderGlassmorphismCard() {
  const cardContainer = document.getElementById('canvas-glass-card-element');
  if (!cardContainer) return;

  if (!glassmorphism.enabled || glassmorphism.template === 'none') {
    cardContainer.style.display = 'none';
    return;
  }

  cardContainer.style.display = 'block';
  
  // Set inline dynamic styles
  const isWhite = glassmorphism.color === '#ffffff';
  cardContainer.style.backgroundColor = isWhite 
    ? `rgba(255, 255, 255, ${glassmorphism.opacity})` 
    : `rgba(15, 23, 42, ${glassmorphism.opacity})`;
  
  cardContainer.style.backdropFilter = `blur(${glassmorphism.blur}px)`;
  cardContainer.style.webkitBackdropFilter = `blur(${glassmorphism.blur}px)`;
  cardContainer.style.border = `1px solid ${
    isWhite ? `rgba(255, 255, 255, ${glassmorphism.borderOpacity})` : `rgba(255, 255, 255, ${glassmorphism.borderOpacity * 0.3})`
  }`;
  cardContainer.style.borderRadius = `${glassmorphism.borderRadius}px`;

  // Apply templates content inside
  if (glassmorphism.template === 'dashboard') {
    cardContainer.innerHTML = `
      <div class="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
        <div class="flex items-center gap-2">
          <div class="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
        </div>
        <span class="text-[9px] uppercase tracking-widest text-white/50 font-mono">Control Terminal</span>
      </div>
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-white/80">Monthly Production yield</span>
          <span class="text-xs font-mono font-bold text-indigo-300">+42.8%</span>
        </div>
        <div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div class="h-full bg-indigo-400 rounded-full" style="width: 72%"></div>
        </div>
        <div class="grid grid-cols-3 gap-2 pt-1 font-mono text-[9px]">
          <div class="bg-black/15 p-1.5 rounded text-center text-white/70">
            <div class="text-[8px] opacity-60">CPU</div>
            <div class="font-bold">14%</div>
          </div>
          <div class="bg-black/15 p-1.5 rounded text-center text-white/70">
            <div class="text-[8px] opacity-60">MEM</div>
            <div class="font-bold">2.4G</div>
          </div>
          <div class="bg-black/15 p-1.5 rounded text-center text-white/70">
            <div class="text-[8px] opacity-60">NET</div>
            <div class="font-bold">ok</div>
          </div>
        </div>
      </div>
    `;
  } else if (glassmorphism.template === 'login') {
    cardContainer.innerHTML = `
      <div class="text-center space-y-1 mb-3">
        <h4 class="text-xs uppercase tracking-widest text-white/90 font-mono font-black">Authorized Access</h4>
        <p class="text-[9px] text-white/60">Decrypted connection protocol</p>
      </div>
      <div class="space-y-2">
        <div class="h-7 bg-white/5 rounded border border-white/10 flex items-center px-2 text-[10px] text-white/40">
          user@aurora.sh
        </div>
        <div class="h-7 bg-white/5 rounded border border-white/10 flex items-center px-2 text-[10px] text-white/40 justify-between">
          <span>••••••••••••</span>
          <span class="text-[8px] text-indigo-300 font-bold">RECOVER</span>
        </div>
        <button class="w-full h-7 bg-indigo-600 hover:bg-indigo-500 rounded text-[10px] uppercase font-bold text-white shadow-lg shadow-indigo-500/20 cursor-pointer pt-0.5">
          Sign In
        </button>
      </div>
    `;
  } else if (glassmorphism.template === 'credit-card') {
    cardContainer.innerHTML = `
      <div class="flex flex-col h-full justify-between min-h-[110px]">
        <div class="flex justify-between items-start">
          <div class="space-y-0.5">
            <div class="text-[8px] uppercase tracking-wider text-white/60 font-mono">PRO MEMBER CARD</div>
            <div class="text-xs font-black tracking-widest text-white">blobmaster CARD</div>
          </div>
          <div class="w-8 h-6 bg-amber-400/20 rounded border border-amber-450/30 flex items-center justify-center text-[8px] text-amber-300 font-mono font-bold">CHIP</div>
        </div>
        <div class="font-mono text-sm tracking-widest text-white/90 my-2">
          4800 •••• •••• 9210
        </div>
        <div class="flex justify-between items-center text-[8px] font-mono text-white/60">
          <div>
            <div>CARD HOLDER</div>
            <div class="text-white/90 font-bold uppercase text-[9px]">Aesthetic Creator</div>
          </div>
          <div class="text-right">
            <div>EXPIRES</div>
            <div class="text-white/90 font-bold text-[9px]">08/30</div>
          </div>
        </div>
      </div>
    `;
  }
}

// Blob dynamic selection controller
function selectBlob(id) {
  selectedBlobId = id;
  const currentBlob = blobs.find(b => b.id === id);
  if (currentBlob) {
    workspace.isPlaying = true;
    updateWorkspaceControlStates();
  }
  renderCanvas();
  updateCodeExportOutput();
}

// Start visual handle dragging logic
let currDragBlobId = null;
function startDragging(e, blobId) {
  e.preventDefault();
  currDragBlobId = blobId;
  selectBlob(blobId);

  const container = document.getElementById('canvas-viewport');
  const rect = container.getBoundingClientRect();

  const moveHandler = (moveEvent) => {
    if (!currDragBlobId) return;
    
    // Support Touch list or mouse coords
    const clientX = moveEvent.touches ? moveEvent.touches[0].clientX : moveEvent.clientX;
    const clientY = moveEvent.touches ? moveEvent.touches[0].clientY : moveEvent.clientY;

    const relativeX = clientX - rect.left;
    const relativeY = clientY - rect.top;

    let pctX = Math.round((relativeX / rect.width) * 100);
    let pctY = Math.round((relativeY / rect.height) * 100);

    // Lock boundary range
    pctX = Math.max(0, Math.min(100, pctX));
    pctY = Math.max(0, Math.min(100, pctY));

    const target = blobs.find(b => b.id === currDragBlobId);
    if (target) {
      target.x = pctX;
      target.y = pctY;
      
      // Real-time synchronization back to manager panel slider inputs
      updateWorkspaceControlStates();
      updateAnimationsStyleTag();
      renderCanvas();
      updateCodeExportOutput();
    }
  };

  const endDragHandler = () => {
    currDragBlobId = null;
    window.removeEventListener('mousemove', moveHandler);
    window.removeEventListener('mouseup', endDragHandler);
    window.removeEventListener('touchmove', moveHandler);
    window.removeEventListener('touchend', endDragHandler);
  };

  window.addEventListener('mousemove', moveHandler);
  window.addEventListener('mouseup', endDragHandler);
  window.addEventListener('touchmove', moveHandler, { passive: false });
  window.addEventListener('touchend', endDragHandler);
}

// Add random blob logic
function addRandomBlob() {
  const id = `b-${Math.random().toString(36).substring(2, 7)}`;
  // Random color picked organic from preset catalogs
  const colorsList = COLOR_PALETTES.flatMap(p => p.colors);
  const color = colorsList[Math.floor(Math.random() * colorsList.length)];
  const size = Math.floor(Math.random() * 50) + 30; // 30% to 80%
  const x = Math.floor(Math.random() * 80) + 10;
  const y = Math.floor(Math.random() * 80) + 10;
  const duration = Math.floor(Math.random() * 25) + 10; // 10s to 35s
  const delay = Math.round(Math.random() * 5 * 10) / 10;
  const opacity = Math.round((Math.random() * 0.3 + 0.6) * 100) / 100;
  const mTypes = ['float', 'orbit', 'linear', 'pulse'];
  const movementType = mTypes[Math.floor(Math.random() * mTypes.length)];
  const shapeVariant = Math.floor(Math.random() * 5) + 1;

  const newBlob = { id, color, size, x, y, duration, delay, opacity, movementType, shapeVariant };
  blobs.push(newBlob);
  selectedBlobId = id;
  
  updateAnimationsStyleTag();
  renderCanvas();
  updateWorkspaceControlStates();
  updateCodeExportOutput();
}

// Delete current selected blob
function deleteCurrentBlob() {
  if (blobs.length <= 1) return; // Keep at least one blob active
  
  const targetIndex = blobs.findIndex(b => b.id === selectedBlobId);
  blobs = blobs.filter(b => b.id !== selectedBlobId);
  
  const fallbackBlob = blobs[targetIndex] || blobs[blobs.length - 1];
  selectedBlobId = fallbackBlob.id;

  updateAnimationsStyleTag();
  renderCanvas();
  updateWorkspaceControlStates();
  updateCodeExportOutput();
}

// Apply cohesive preset palette detail
function applyPresetPalette(paletteId) {
  const palette = COLOR_PALETTES.find(p => p.id === paletteId);
  if (!palette) return;

  workspace.bgColor = palette.bgColor;
  
  // Distribute color swatches cleanly over registered blobs
  blobs.forEach((b, index) => {
    const sw = palette.colors[index % palette.colors.length];
    b.color = sw;
  });

  // Re-sync UI colors
  const bgColorPicker = document.getElementById('canvas-bg-color-picker');
  if (bgColorPicker) bgColorPicker.value = workspace.bgColor;

  updateAnimationsStyleTag();
  renderCanvas();
  updateWorkspaceControlStates();
  updateCodeExportOutput();
}

// Fully random shuffle positions, sizes and variances
function shuffleBlobs() {
  blobs.forEach(b => {
    b.x = Math.floor(Math.random() * 90) + 5;
    b.y = Math.floor(Math.random() * 90) + 5;
    b.size = Math.floor(Math.random() * 65) + 25;
    b.duration = Math.floor(Math.random() * 30) + 8;
    b.shapeVariant = Math.floor(Math.random() * 5) + 1;
  });

  updateAnimationsStyleTag();
  renderCanvas();
  updateWorkspaceControlStates();
  updateCodeExportOutput();
}

// Reset workspace entirely
function resetWorkspaceToTemplates() {
  blobs = JSON.parse(JSON.stringify(DEFAULT_BLOBS));
  workspace = { ...DEFAULT_WORKSPACE };
  glassmorphism = { ...DEFAULT_GLASSMORPHISM };
  selectedBlobId = 'b1';

  updateAnimationsStyleTag();
  renderCanvas();
  updateWorkspaceControlStates();
  updateCodeExportOutput();
}

// Master state-to-form inputs syncer
function updateWorkspaceControlStates() {
  // 1. Setup active control panels view
  ['view-palettes', 'view-blobs', 'view-canvas', 'view-glass'].forEach(viewId => {
    const el = document.getElementById(viewId);
    if (el) el.style.display = 'none';
  });

  const activeView = document.getElementById(`view-${activeControlTab}`);
  if (activeView) activeView.style.display = 'block';

  // Toggle highlight buttons inside general controls selector
  ['btn-tab-palettes', 'btn-tab-blobs', 'btn-tab-canvas', 'btn-tab-glass'].forEach(btnId => {
    const el = document.getElementById(btnId);
    if (!el) return;
    const tabName = btnId.replace('btn-tab-', '');
    if (tabName === activeControlTab) {
      el.className = 'flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-[10.5px] font-bold tracking-wider transition-all cursor-pointer bg-[#1E293B] text-indigo-400 font-extrabold shadow-sm border border-slate-700';
    } else {
      el.className = 'flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-[10.5px] font-bold tracking-wider transition-all cursor-pointer text-slate-400 hover:text-slate-200';
    }
  });

  // 2. Play/pause button icons
  const playBtn = document.getElementById('control-btn-play');
  if (playBtn) {
    playBtn.innerHTML = workspace.isPlaying ? ICONS.pause : ICONS.play;
    if (workspace.isPlaying) {
      playBtn.className = 'p-1.5 rounded-md border cursor-pointer transition-all bg-indigo-500/15 text-indigo-400 border-indigo-500/20';
    } else {
      playBtn.className = 'p-1.5 rounded-md border cursor-pointer transition-all bg-[#1E293B] text-slate-400 border-slate-705 hover:text-slate-205';
    }
  }

  // 3. Tab Specifics - Blobs manager tab
  if (activeControlTab === 'blobs') {
    // Populate select dropdown
    const blobSelector = document.getElementById('blob-current-selector');
    if (blobSelector) {
      blobSelector.innerHTML = '';
      blobs.forEach((b, index) => {
        const opt = document.createElement('option');
        opt.value = b.id;
        opt.textContent = `Blob #${index + 1} (${b.color})`;
        if (b.id === selectedBlobId) opt.selected = true;
        blobSelector.appendChild(opt);
      });
    }

    const currentBlob = blobs.find(b => b.id === selectedBlobId);
    if (currentBlob) {
      // Set sliders
      const bindRange = (id, valId, key) => {
        const inp = document.getElementById(id);
        const text = document.getElementById(valId);
        if (inp) inp.value = currentBlob[key];
        if (text) text.textContent = currentBlob[key] + (key === 'opacity' ? '' : '%');
      };

      bindRange('blob-size-slider', 'lbl-blob-size', 'size');
      bindRange('blob-x-slider', 'lbl-blob-x', 'x');
      bindRange('blob-y-slider', 'lbl-blob-y', 'y');
      
      const valDur = document.getElementById('blob-duration-slider');
      if (valDur) valDur.value = currentBlob.duration;
      const lblDur = document.getElementById('lbl-blob-duration');
      if (lblDur) lblDur.textContent = currentBlob.duration + 's';

      const valDel = document.getElementById('blob-delay-slider');
      if (valDel) valDel.value = currentBlob.delay;
      const lblDel = document.getElementById('lbl-blob-delay');
      if (lblDel) lblDel.textContent = currentBlob.delay + 's';

      const valOp = document.getElementById('blob-opacity-slider');
      if (valOp) valOp.value = Math.round(currentBlob.opacity * 100);
      const lblOp = document.getElementById('lbl-blob-opacity');
      if (lblOp) lblOp.textContent = Math.round(currentBlob.opacity * 100) + '%';

      // Set input color
      const colInp = document.getElementById('blob-color-input');
      if (colInp) colInp.value = currentBlob.color;

      // Select shapes & movements
      const moveInp = document.getElementById('blob-movement-selector');
      if (moveInp) moveInp.value = currentBlob.movementType;

      const shapeInp = document.getElementById('blob-shape-selector');
      if (shapeInp) shapeInp.value = currentBlob.shapeVariant;

      // Delete state toggle
      const delBtn = document.getElementById('btn-delete-blob');
      if (delBtn) {
        delBtn.disabled = blobs.length <= 1;
        if (blobs.length <= 1) {
          delBtn.className = 'w-full py-2 bg-slate-800 border border-slate-705 text-slate-500 rounded-lg text-xs font-bold cursor-not-allowed flex items-center justify-center gap-1.5 opacity-40';
        } else {
          delBtn.className = 'w-full py-2 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800 text-rose-300 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5';
        }
      }
    }
  }

  // 4. Canvas Tab controls
  if (activeControlTab === 'canvas') {
    const bgColorInp = document.getElementById('canvas-bg-color-picker');
    if (bgColorInp) bgColorInp.value = workspace.bgColor;

    const blurInp = document.getElementById('canvas-blur-slider');
    if (blurInp) blurInp.value = workspace.blur;
    const lblBlur = document.getElementById('lbl-canvas-blur');
    if (lblBlur) lblBlur.textContent = workspace.blur + 'px';

    const contrastInp = document.getElementById('canvas-contrast-slider');
    if (contrastInp) contrastInp.value = Math.round(workspace.contrast * 100);
    const lblContrast = document.getElementById('lbl-canvas-contrast');
    if (lblContrast) lblContrast.textContent = Math.round(workspace.contrast * 100) + '%';

    const satInp = document.getElementById('canvas-sat-slider');
    if (satInp) satInp.value = Math.round(workspace.saturation * 100);
    const lblSat = document.getElementById('lbl-canvas-sat');
    if (lblSat) lblSat.textContent = Math.round(workspace.saturation * 100) + '%';

    const blendInp = document.getElementById('canvas-blend-selector');
    if (blendInp) blendInp.value = workspace.blendMode;

    const ratioInp = document.getElementById('canvas-ratio-selector');
    if (ratioInp) ratioInp.value = workspace.canvasRatio;

    const noiseInp = document.getElementById('canvas-noise-toggle');
    if (noiseInp) noiseInp.checked = workspace.hasNoise;
  }

  // 5. Glassmorphism Tab controls
  if (activeControlTab === 'glass') {
    const glEnable = document.getElementById('glass-enable-toggle');
    if (glEnable) glEnable.checked = glassmorphism.enabled;

    const glBlur = document.getElementById('glass-blur-slider');
    if (glBlur) glBlur.value = glassmorphism.blur;
    const lblGlBlur = document.getElementById('lbl-glass-blur');
    if (lblGlBlur) lblGlBlur.textContent = glassmorphism.blur + 'px';

    const glOp = document.getElementById('glass-opacity-slider');
    if (glOp) glOp.value = Math.round(glassmorphism.opacity * 100);
    const lblGlOp = document.getElementById('lbl-glass-opacity');
    if (lblGlOp) lblGlOp.textContent = Math.round(glassmorphism.opacity * 100) + '%';

    const glBrd = document.getElementById('glass-border-slider');
    if (glBrd) glBrd.value = Math.round(glassmorphism.borderOpacity * 100);
    const lblGlBrd = document.getElementById('lbl-glass-border');
    if (lblGlBrd) lblGlBrd.textContent = Math.round(glassmorphism.borderOpacity * 100) + '%';

    const glRad = document.getElementById('glass-radius-slider');
    if (glRad) glRad.value = glassmorphism.borderRadius;
    const lblGlRad = document.getElementById('lbl-glass-radius');
    if (lblGlRad) lblGlRad.textContent = glassmorphism.borderRadius + 'px';

    const glCol = document.getElementById('glass-color-selector');
    if (glCol) glCol.value = glassmorphism.color;

    const glTmp = document.getElementById('glass-template-selector');
    if (glTmp) glTmp.value = glassmorphism.template;
  }
}

// Generate code packages for Export dock
function generateHtmlCssEmbedCode() {
  let keyframesHtml = '';
  blobs.forEach((b) => {
    const shape = SHAPE_VARIANTS.find(s => s.id === b.shapeVariant) || SHAPE_VARIANTS[0];
    
    let morphSteps = '';
    Object.entries(shape.keyframes).forEach(([percent, radius]) => {
      morphSteps += `      ${percent} { border-radius: ${radius}; }\n`;
    });

    let pathSteps = '';
    if (b.movementType === 'float') {
      const span = b.size * 0.45;
      pathSteps = `
      0% { transform: translate(-50%, -50%) translate(0px, 0px) rotate(0deg); }
      33% { transform: translate(-50%, -50%) translate(${span * 0.3}px, -${span * 0.4}px) rotate(120deg); }
      66% { transform: translate(-50%, -50%) translate(-${span * 0.4}px, ${span * 0.3}px) rotate(240deg); }
      100% { transform: translate(-50%, -50%) translate(0px, 0px) rotate(360deg); }`;
    } else if (b.movementType === 'orbit') {
      const radiusVal = Math.max(25, b.size * 0.5);
      pathSteps = `
      0% { transform: translate(-50%, -50%) rotate(0deg) translate(${radiusVal}px) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg) translate(${radiusVal}px) rotate(-360deg); }`;
    } else if (b.movementType === 'linear') {
      const distance = Math.max(30, b.size * 0.6);
      pathSteps = `
      0% { transform: translate(-50%, -50%) translateX(-${distance}px) translateY(0px); }
      50% { transform: translate(-50%, -50%) translateX(${distance}px) translateY(-10px); }
      100% { transform: translate(-50%, -50%) translateX(-${distance}px) translateY(0px); }`;
    } else if (b.movementType === 'pulse') {
      pathSteps = `
      0% { transform: translate(-50%, -50%) scale(0.85) rotate(0deg); }
      50% { transform: translate(-50%, -50%) scale(1.15) rotate(180deg); }
      100% { transform: translate(-50%, -50%) scale(0.85) rotate(360deg); }`;
    }

    keyframesHtml += `
    /* Keyframes and rules for Blob ${b.id} */
    @keyframes morph-blob-${b.id} {
\n${morphSteps}    }
    @keyframes move-blob-${b.id} {
${pathSteps}
    }
    .blob-${b.id} {
      position: absolute;
      left: ${b.x}%;
      top: ${b.y}%;
      width: ${b.size}%;
      aspect-ratio: 1;
      opacity: ${b.opacity};
      mix-blend-mode: ${workspace.blendMode};
      background: ${b.color};
      box-shadow: 0 0 ${b.size * 1.5}px ${b.color}80;
      border-radius: 50%;
      animation: 
        move-blob-${b.id} ${b.duration}s infinite linear,
        morph-blob-${b.id} ${b.duration * 0.6}s infinite ease-in-out;
      animation-delay: ${b.delay}s;
    }\n`;
  });

  const glassStyle = glassmorphism.enabled && glassmorphism.template !== 'none' ? `
    .glass-card {
      position: relative;
      background: ${glassmorphism.color === '#ffffff' ? `rgba(255, 255, 255, ${glassmorphism.opacity})` : `rgba(15, 23, 42, ${glassmorphism.opacity})`};
      backdrop-filter: blur(${glassmorphism.blur}px);
      -webkit-backdrop-filter: blur(${glassmorphism.blur}px);
      border: 1px solid ${glassmorphism.color === '#ffffff' ? `rgba(255, 255, 255, ${glassmorphism.borderOpacity})` : `rgba(255, 255, 255, ${glassmorphism.borderOpacity * 0.3})`};
      border-radius: ${glassmorphism.borderRadius}px;
      padding: 32px;
      z-index: 10;
      max-width: 400px;
      box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
    }\n` : '';

  const noiseBgi = workspace.hasNoise ? `\n      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%2523noise)' opacity='0.04'/%3E%3C/svg%3E");` : '';

  return `<!-- Beautiful Animated CSS HTML Ambient Background -->
<div class="blobs-container">
  <!-- Glowing Blobs Layer -->
  <div class="blobs-filter-layer">
${blobs.map((b) => `    <div class="blob-${b.id}"></div>`).join('\n')}
  </div>
${workspace.hasNoise ? '  <!-- Retro Grain Texture Layer -->\n  <div class="noise-texture"></div>\n' : ''}${glassmorphism.enabled && glassmorphism.template !== 'none' ? `
  <!-- Overlaid Mockup Card -->
  <div class="glass-card">
    <h3 style="margin-top:0; color:#fff; font-family:sans-serif;">Aesthetic Mockup</h3>
    <p style="color:rgba(255,255,255,0.7); font-family:sans-serif; font-size:14px; line-height:1.5;">This live mockup card utilizes premium glassmorphic rules generated with the blobmaster designer suite.</p>
  </div>
` : ''}</div>

<style>
  .blobs-container {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 480px;
    background-color: ${workspace.bgColor};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blobs-filter-layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    filter: blur(${workspace.blur}px) contrast(${workspace.contrast}) saturate(${workspace.saturation});
  }
${workspace.hasNoise ? `
  .noise-texture {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    mix-blend-mode: overlay;
    opacity: 0.6;${noiseBgi}
  }
` : ''}
${glassStyle}
${keyframesHtml}</style>`;
}

function generateTailwindConfigCode() {
  let configAnimations = '';
  let configKeyframes = '';

  blobs.forEach((b) => {
    const shape = SHAPE_VARIANTS.find(s => s.id === b.shapeVariant) || SHAPE_VARIANTS[0];
    const nameIdx = b.id.substring(0, 4).replace('-', '');

    configAnimations += `        'move-blob-${nameIdx}': 'move-blob-${nameIdx} ${b.duration}s infinite linear',\n`;
    configAnimations += `        'morph-blob-${nameIdx}': 'morph-blob-${nameIdx} ${b.duration * 0.6}s infinite ease-in-out',\n`;

    let morphStr = '';
    Object.entries(shape.keyframes).forEach(([k, v]) => {
      morphStr += `            '${k}': { borderRadius: '${v}' },\n`;
    });

    configKeyframes += `        'morph-blob-${nameIdx}': {\n${morphStr}        },\n`;
    configKeyframes += `        'move-blob-${nameIdx}': {\n`;
    if (b.movementType === 'float') {
      const span = b.size * 0.45;
      configKeyframes += `          '0%, 100%': { transform: 'translate(-50%, -50%) translate(0px, 0px) rotate(0deg)' },\n`;
      configKeyframes += `          '33%': { transform: 'translate(-50%, -50%) translate(${span * 0.3}px, -${span * 0.4}px) rotate(120deg)' },\n`;
      configKeyframes += `          '66%': { transform: 'translate(-50%, -50%) translate(-${span * 0.4}px, ${span * 0.3}px) rotate(240deg)' },\n`;
    } else {
      configKeyframes += `          '0%, 100%': { transform: 'translate(-50%, -50%) scale(0.9)' },\n`;
      configKeyframes += `          '50%': { transform: 'translate(-50%, -50%) scale(1.1)' },\n`;
    }
    configKeyframes += `        },\n`;
  });

  return `// Append extension details inside tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
${configAnimations}      },
      keyframes: {
${configKeyframes}      }
    }
  }
}

// In your application JSX views, render like this:
// <div className="absolute filter blur-[${workspace.blur}px] ...">
//   <div className="absolute animate-move-blob-${blobs[0]?.id.substring(0, 4).replace('-', '')} animate-morph-blob-${blobs[0]?.id.substring(0, 4).replace('-', '')}"></div>
// </div>`;
}

function generateReactCode() {
  return `import React from 'react';

// Static Setup Configuration values
const BLOBS_CONFIG = ${JSON.stringify(blobs, null, 2)};
const WORKSPACE = ${JSON.stringify(workspace, null, 2)};

export default function BlobBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: WORKSPACE.bgColor }}>
      {/* Dynamic Blur Layer wrapper */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          filter: \`blur(\${WORKSPACE.blur}px) contrast(\${WORKSPACE.contrast}) saturate(\${WORKSPACE.saturation})\` 
        }}
      >
        {BLOBS_CONFIG.map((blob) => (
          <div 
            key={blob.id}
            style={{
              position: 'absolute',
              left: \`\${blob.x}%\`,
              top: \`\${blob.y}%\`,
              width: \`\${blob.size}%\`,
              aspectRatio: 1,
              opacity: blob.opacity,
              mixBlendMode: WORKSPACE.blendMode,
              backgroundColor: blob.color,
              borderRadius: '50%',
              boxShadow: \`0 0 \${blob.size * 1.5}px \${blob.color}60\`,
              // Register standard CSS custom keyframes to trigger morph & travel loops
            }}
          />
        ))}
      </div>

      {/* Embedded canvas noise texture overlay */}
      {WORKSPACE.hasNoise && (
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.04]"
          style={{
            backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%2523noise)'/%3E%3C/svg%3E")\`
          }}
        />
      )}
    </div>
  );
}`;
}

// Update code block render block
function updateCodeExportOutput() {
  const codeBox = document.getElementById('rendered-code-block');
  if (!codeBox) return;

  let out = '';
  if (activeExportTab === 'html-css') out = generateHtmlCssEmbedCode();
  else if (activeExportTab === 'tailwind') out = generateTailwindConfigCode();
  else out = generateReactCode();

  codeBox.textContent = out;
}

// Select code export output tabs
function setExportTab(tabName) {
  activeExportTab = tabName;
  ['btn-export-html-css', 'btn-export-tailwind', 'btn-export-react'].forEach(btnId => {
    const el = document.getElementById(btnId);
    if (!el) return;
    const tab = btnId.replace('btn-export-', '');
    if (tab === activeExportTab) {
      el.className = 'flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all bg-[#1E293B] text-indigo-400 font-bold border border-slate-705';
    } else {
      el.className = 'flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all text-slate-400 hover:text-slate-200';
    }
  });

  updateCodeExportOutput();
}

// Copy Code Package to Clipboard
function copyCodePackage() {
  const codeBox = document.getElementById('rendered-code-block');
  if (!codeBox) return;

  const textToCopy = codeBox.textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    const copyBtn = document.getElementById('btn-copy-dock');
    if (!copyBtn) return;

    copyBtn.innerHTML = `${ICONS.check} <span>Copied to Clipboard!</span>`;
    copyBtn.className = 'flex items-center gap-2 py-1.5 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';

    if (copiedTimeout) clearTimeout(copiedTimeout);
    copiedTimeout = setTimeout(() => {
      copyBtn.innerHTML = `${ICONS.copy} <span>Copy Code Package</span>`;
      copyBtn.className = 'flex items-center gap-2 py-1.5 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20';
    }, 2000);
  });
}

// Master init loader attaching direct events to all inputs and sliders
function initAppletCore() {
  // 1. Initial presets rendering
  const paletteContainer = document.getElementById('preset-palette-grid');
  if (paletteContainer) {
    paletteContainer.innerHTML = '';
    COLOR_PALETTES.forEach(p => {
      const card = document.createElement('div');
      card.className = 'bg-[#0B1120]/60 hover:bg-[#0B1120]/90 border border-slate-705 rounded-xl p-4 cursor-pointer transition-all duration-250 active:scale-[0.98] group';
      
      // Render color swatches row
      const swatches = p.colors.map(col => `
        <span class="w-6 h-6 rounded-full border border-white/10 shadow-sm block translate-x-0" style="background-color: ${col}; margin-right: -4px;"></span>
      `).join('');

      card.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="font-display font-black text-xs text-white uppercase tracking-wider group-hover:text-indigo-300 transition-colors">${p.name}</span>
          <div class="flex items-center">
            ${swatches}
          </div>
        </div>
        <p class="text-[10px] text-slate-400 leading-normal pl-0.5">${p.description}</p>
      `;

      card.addEventListener('click', () => applyPresetPalette(p.id));
      paletteContainer.appendChild(card);
    });
  }

  // 2. Setup general Tab selector bindings
  document.getElementById('btn-tab-palettes').addEventListener('click', () => { activeControlTab = 'palettes'; updateWorkspaceControlStates(); });
  document.getElementById('btn-tab-blobs').addEventListener('click', () => { activeControlTab = 'blobs'; updateWorkspaceControlStates(); });
  document.getElementById('btn-tab-canvas').addEventListener('click', () => { activeControlTab = 'canvas'; updateWorkspaceControlStates(); });
  document.getElementById('btn-tab-glass').addEventListener('click', () => { activeControlTab = 'glass'; updateWorkspaceControlStates(); });

  // 3. Quick Bar setup
  document.getElementById('control-btn-play').addEventListener('click', () => {
    workspace.isPlaying = !workspace.isPlaying;
    updateWorkspaceControlStates();
    updateAnimationsStyleTag();
  });
  document.getElementById('control-btn-shuffle').addEventListener('click', shuffleBlobs);
  document.getElementById('control-btn-refresh').addEventListener('click', resetWorkspaceToTemplates);
  document.getElementById('control-btn-shuffle-header').addEventListener('click', shuffleBlobs);
  document.getElementById('control-btn-reset-overlay').addEventListener('click', resetWorkspaceToTemplates);

  // 4. Blobs manager tab inputs
  const currentBlobSelect = document.getElementById('blob-current-selector');
  if (currentBlobSelect) {
    currentBlobSelect.addEventListener('change', (e) => {
      selectBlob(e.target.value);
    });
  }

  const bindBlobSlider = (inputId, key, factor = 1) => {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener('input', (e) => {
      const currentBlob = blobs.find(b => b.id === selectedBlobId);
      if (currentBlob) {
        currentBlob[key] = Number(e.target.value) / factor;
        updateAnimationsStyleTag();
        renderCanvas();
        updateWorkspaceControlStates();
        updateCodeExportOutput();
      }
    });
  };

  bindBlobSlider('blob-size-slider', 'size');
  bindBlobSlider('blob-x-slider', 'x');
  bindBlobSlider('blob-y-slider', 'y');
  bindBlobSlider('blob-duration-slider', 'duration');
  bindBlobSlider('blob-delay-slider', 'delay');
  bindBlobSlider('blob-opacity-slider', 'opacity', 100);

  const colInput = document.getElementById('blob-color-input');
  if (colInput) {
    colInput.addEventListener('input', (e) => {
      const currentBlob = blobs.find(b => b.id === selectedBlobId);
      if (currentBlob) {
        currentBlob.color = e.target.value;
        renderCanvas();
        updateWorkspaceControlStates();
        updateCodeExportOutput();
      }
    });
  }

  const movementInput = document.getElementById('blob-movement-selector');
  if (movementInput) {
    movementInput.addEventListener('change', (e) => {
      const currentBlob = blobs.find(b => b.id === selectedBlobId);
      if (currentBlob) {
        currentBlob.movementType = e.target.value;
        updateAnimationsStyleTag();
        renderCanvas();
        updateCodeExportOutput();
      }
    });
  }

  const shapeInput = document.getElementById('blob-shape-selector');
  if (shapeInput) {
    shapeInput.addEventListener('change', (e) => {
      const currentBlob = blobs.find(b => b.id === selectedBlobId);
      if (currentBlob) {
        currentBlob.shapeVariant = Number(e.target.value);
        updateAnimationsStyleTag();
        renderCanvas();
        updateCodeExportOutput();
      }
    });
  }

  document.getElementById('btn-add-blob').addEventListener('click', addRandomBlob);
  document.getElementById('btn-delete-blob').addEventListener('click', deleteCurrentBlob);

  // 5. Canvas setup controls
  const bgColPick = document.getElementById('canvas-bg-color-picker');
  if (bgColPick) {
    bgColPick.addEventListener('input', (e) => {
      workspace.bgColor = e.target.value;
      renderCanvas();
      updateCodeExportOutput();
    });
  }

  const canvasBlurSl = document.getElementById('canvas-blur-slider');
  if (canvasBlurSl) {
    canvasBlurSl.addEventListener('input', (e) => {
      workspace.blur = Number(e.target.value);
      renderCanvas();
      updateWorkspaceControlStates();
      updateCodeExportOutput();
    });
  }

  const canvasContrastSl = document.getElementById('canvas-contrast-slider');
  if (canvasContrastSl) {
    canvasContrastSl.addEventListener('input', (e) => {
      workspace.contrast = Number(e.target.value) / 100;
      renderCanvas();
      updateWorkspaceControlStates();
      updateCodeExportOutput();
    });
  }

  const canvasSatSl = document.getElementById('canvas-sat-slider');
  if (canvasSatSl) {
    canvasSatSl.addEventListener('input', (e) => {
      workspace.saturation = Number(e.target.value) / 100;
      renderCanvas();
      updateWorkspaceControlStates();
      updateCodeExportOutput();
    });
  }

  const canvasBlendInp = document.getElementById('canvas-blend-selector');
  if (canvasBlendInp) {
    canvasBlendInp.addEventListener('change', (e) => {
      workspace.blendMode = e.target.value;
      updateAnimationsStyleTag();
      renderCanvas();
      updateCodeExportOutput();
    });
  }

  const canvasRatioInp = document.getElementById('canvas-ratio-selector');
  if (canvasRatioInp) {
    canvasRatioInp.addEventListener('change', (e) => {
      workspace.canvasRatio = e.target.value;
      renderCanvas();
      updateWorkspaceControlStates();
    });
  }

  const canvasNoiseCh = document.getElementById('canvas-noise-toggle');
  if (canvasNoiseCh) {
    canvasNoiseCh.addEventListener('change', (e) => {
      workspace.hasNoise = e.target.checked;
      renderCanvas();
      updateWorkspaceControlStates();
      updateCodeExportOutput();
    });
  }

  // 6. Glassmorphism controls
  const glEnableToggle = document.getElementById('glass-enable-toggle');
  if (glEnableToggle) {
    glEnableToggle.addEventListener('change', (e) => {
      glassmorphism.enabled = e.target.checked;
      renderCanvas();
      updateCodeExportOutput();
    });
  }

  const glBlurSl = document.getElementById('glass-blur-slider');
  if (glBlurSl) {
    glBlurSl.addEventListener('input', (e) => {
      glassmorphism.blur = Number(e.target.value);
      renderCanvas();
      updateWorkspaceControlStates();
      updateCodeExportOutput();
    });
  }

  const glOpSl = document.getElementById('glass-opacity-slider');
  if (glOpSl) {
    glOpSl.addEventListener('input', (e) => {
      glassmorphism.opacity = Number(e.target.value) / 100;
      renderCanvas();
      updateWorkspaceControlStates();
      updateCodeExportOutput();
    });
  }

  const glBrdSl = document.getElementById('glass-border-slider');
  if (glBrdSl) {
    glBrdSl.addEventListener('input', (e) => {
      glassmorphism.borderOpacity = Number(e.target.value) / 100;
      renderCanvas();
      updateWorkspaceControlStates();
      updateCodeExportOutput();
    });
  }

  const glRadSl = document.getElementById('glass-radius-slider');
  if (glRadSl) {
    glRadSl.addEventListener('input', (e) => {
      glassmorphism.borderRadius = Number(e.target.value);
      renderCanvas();
      updateWorkspaceControlStates();
      updateCodeExportOutput();
    });
  }

  const glColSel = document.getElementById('glass-color-selector');
  if (glColSel) {
    glColSel.addEventListener('change', (e) => {
      glassmorphism.color = e.target.value;
      renderCanvas();
      updateCodeExportOutput();
    });
  }

  const glTmpSel = document.getElementById('glass-template-selector');
  if (glTmpSel) {
    glTmpSel.addEventListener('change', (e) => {
      glassmorphism.template = e.target.value;
      renderCanvas();
      updateCodeExportOutput();
    });
  }

  // 7. Developer export tab click listeners
  document.getElementById('btn-export-html-css').addEventListener('click', () => setExportTab('html-css'));
  document.getElementById('btn-export-tailwind').addEventListener('click', () => setExportTab('tailwind'));
  document.getElementById('btn-export-react').addEventListener('click', () => setExportTab('react'));
  document.getElementById('btn-copy-dock').addEventListener('click', copyCodePackage);

  // Initialize viewports
  updateAnimationsStyleTag();
  renderCanvas();
  updateWorkspaceControlStates();
  updateCodeExportOutput();
}

// Kick off engine when dynamic script is initialized fully
window.addEventListener('DOMContentLoaded', initAppletCore);
