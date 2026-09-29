/**
 * SOLARIS 3D - Interactive Solar System & Eclipse Simulator
 * High-fidelity WebGL 3D experience powered by Three.js & GSAP
 */

// ==========================================
// 1. DATA DEFINITIONS & PLANETARY TELEMETRY
// ==========================================
const CELESTIAL_BODIES = {
  sun: {
    name: "The Sun",
    category: "STAR",
    latin: "Sol • G2V Yellow Dwarf",
    desc: "The radiant gravitational heart of our system, housing 99.86% of all mass in the Solar System. Its core produces energy via thermonuclear hydrogen fusion at over 15,000,000°C.",
    diameter: "1,392,700 km",
    distance: "0 AU",
    orbitPeriod: "230 Million Years",
    temp: "5,500°C (Surface)",
    fact: "During a Total Solar Eclipse, the Moon perfectly blots out the Sun's photosphere, unveiling the ghostly, superheated solar corona that stretches millions of kilometers into space.",
    radius: 14,
    orbitRadius: 0,
    orbitSpeed: 0,
    rotSpeed: 0.002,
    color: 0xffaa00
  },
  mercury: {
    name: "Mercury",
    category: "TERRESTRIAL PLANET",
    latin: "Mercurius • Swift Planet",
    desc: "The smallest planet in the solar system and closest to the Sun. It experiences extreme temperature swings from scorchingly hot days to freezing cold nights due to having no atmosphere.",
    diameter: "4,879 km",
    distance: "0.39 AU",
    orbitPeriod: "88 Earth Days",
    temp: "-180°C to 430°C",
    fact: "Mercury orbits the Sun so swiftly that a year there is only 88 days long, yet a single solar day lasts roughly 176 Earth days!",
    radius: 1.8,
    orbitRadius: 28,
    orbitSpeed: 0.04,
    rotSpeed: 0.004,
    color: 0x9e9e9e
  },
  venus: {
    name: "Venus",
    category: "TERRESTRIAL PLANET",
    latin: "Venus • Evening Star",
    desc: "Wrapped in thick, toxic clouds of sulfuric acid, Venus undergoes an extreme runaway greenhouse effect, making it the hottest planetary surface in the solar system.",
    diameter: "12,104 km",
    distance: "0.72 AU",
    orbitPeriod: "225 Earth Days",
    temp: "465°C",
    fact: "Venus rotates backwards (retrograde) compared to most planets, meaning the Sun rises in the west and sets in the east.",
    radius: 3.2,
    orbitRadius: 42,
    orbitSpeed: 0.025,
    rotSpeed: -0.002,
    color: 0xe3bb76
  },
  earth: {
    name: "Earth",
    category: "TERRESTRIAL PLANET",
    latin: "Terra • The Blue Marble",
    desc: "Our home oasis in the cosmic ocean. Earth is the only known celestial haven hosting liquid water oceans, dynamic plate tectonics, and a vibrant biosphere.",
    diameter: "12,742 km",
    distance: "1.00 AU",
    orbitPeriod: "365.25 Days",
    temp: "15°C (Average)",
    fact: "Earth's unique Moon-to-Sun size ratio (1:400) matches the distance ratio perfectly, making our world the only known place in the solar system capable of experiencing a perfect Total Solar Eclipse.",
    radius: 3.5,
    orbitRadius: 60,
    orbitSpeed: 0.018,
    rotSpeed: 0.015,
    color: 0x2277ff
  },
  moon: {
    name: "The Moon",
    category: "NATURAL SATELLITE",
    latin: "Luna • Earth's Companion",
    desc: "Earth's only natural satellite. Gravitationally tidally locked, it regulates our planetary tilt, drives oceanic tides, and produces majestic solar and lunar eclipses.",
    diameter: "3,474 km",
    distance: "384,400 km from Earth",
    orbitPeriod: "27.3 Days",
    temp: "-130°C to 120°C",
    fact: "When the Moon casts its umbral shadow across Earth's surface during a Total Eclipse, day turns into night for a few breathtaking minutes, revealing stars in the midday sky.",
    radius: 1.1,
    orbitRadius: 8,
    orbitSpeed: 0.06,
    rotSpeed: 0.01,
    color: 0xcccccc
  },
  mars: {
    name: "Mars",
    category: "TERRESTRIAL PLANET",
    latin: "Mars • The Red Planet",
    desc: "A dusty, cold desert world with a tenuous atmosphere. Home to Olympus Mons, the largest volcano in the Solar System, and vast canyon networks that once flowed with water.",
    diameter: "6,779 km",
    distance: "1.52 AU",
    orbitPeriod: "687 Earth Days",
    temp: "-60°C (Average)",
    fact: "Mars' reddish glow is caused by iron oxide (rust) covering its rocky surface. It has two tiny, captured asteroid moons: Phobos and Deimos.",
    radius: 2.3,
    orbitRadius: 80,
    orbitSpeed: 0.014,
    rotSpeed: 0.014,
    color: 0xd65329
  },
  jupiter: {
    name: "Jupiter",
    category: "GAS GIANT",
    latin: "Iuppiter • King of Planets",
    desc: "The colossal heavyweight of our solar system, with more than twice the mass of all other planets combined. Wrapped in swirling turbulent cloud belts and counter-rotating jet streams.",
    diameter: "139,820 km",
    distance: "5.20 AU",
    orbitPeriod: "11.86 Earth Years",
    temp: "-110°C",
    fact: "Jupiter's iconic Great Red Spot is a monstrous anticyclonic storm larger than Earth that has raged continuously for over 350 years!",
    radius: 7.5,
    orbitRadius: 112,
    orbitSpeed: 0.009,
    rotSpeed: 0.025,
    color: 0xc89e74
  },
  saturn: {
    name: "Saturn",
    category: "GAS GIANT",
    latin: "Saturnus • Ringed Jewel",
    desc: "Adorned with a dazzling, intricate ring system made of billions of chunks of pure water ice, rock, and cosmic dust spanning nearly 300,000 kilometers across.",
    diameter: "116,460 km",
    distance: "9.58 AU",
    orbitPeriod: "29.45 Earth Years",
    temp: "-140°C",
    fact: "Despite its immense scale, Saturn has the lowest density of any planet in the solar system—lower than water. If you found a bathtub big enough, Saturn would float!",
    radius: 6.2,
    orbitRadius: 148,
    orbitSpeed: 0.006,
    rotSpeed: 0.022,
    color: 0xe2c18d
  },
  uranus: {
    name: "Uranus",
    category: "ICE GIANT",
    latin: "Uranus • The Tilted Giant",
    desc: "An ice giant composed of water, ammonia, and methane ices over a rocky core. Its pale aquamarine hue is created by methane gas absorbing red light in its upper atmosphere.",
    diameter: "50,724 km",
    distance: "19.2 AU",
    orbitPeriod: "84 Earth Years",
    temp: "-195°C",
    fact: "Uranus rotates almost completely on its side with an axial tilt of 98 degrees, rolling around the Sun like a cosmic bowling ball.",
    radius: 4.2,
    orbitRadius: 184,
    orbitSpeed: 0.004,
    rotSpeed: -0.016,
    color: 0x7ae582
  },
  neptune: {
    name: "Neptune",
    category: "ICE GIANT",
    latin: "Neptunus • Deep Blue Wonder",
    desc: "The most distant major planet in the solar system. A dark, cold world swept by supersonic winds that can exceed 2,000 km/h, the fastest recorded anywhere in our system.",
    diameter: "49,244 km",
    distance: "30.1 AU",
    orbitPeriod: "164.8 Earth Years",
    temp: "-200°C",
    fact: "Neptune was the first planet located through mathematical predictions rather than empirical observation after irregularities were spotted in Uranus's orbit.",
    radius: 4.0,
    orbitRadius: 218,
    orbitSpeed: 0.003,
    rotSpeed: 0.017,
    color: 0x3d65d8
  }
};

// ==========================================
// 2. PROCEDURAL TEXTURE GENERATOR ENGINE
// ==========================================
const TextureGenerator = {
  createSunTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#ff4800');
    grad.addColorStop(0.5, '#ffa200');
    grad.addColorStop(1, '#ff3b00');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Solar granulization & sunspots
    for (let i = 0; i < 3000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 8 + 2;
      ctx.fillStyle = Math.random() > 0.3 ? 'rgba(255, 235, 120, 0.4)' : 'rgba(180, 40, 0, 0.35)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  },

  createPlanetTexture(baseColor, accentColor, stripeCount = 0, isEarth = false) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (isEarth) {
      // Continents
      ctx.fillStyle = '#2d884d';
      for (let i = 0; i < 24; i++) {
        const cx = Math.random() * canvas.width;
        const cy = Math.random() * (canvas.height - 60) + 30;
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.random() * 45 + 15, Math.random() * 30 + 10, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
      // Polar Ice Caps
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, 22);
      ctx.fillRect(0, canvas.height - 22, canvas.width, 22);
      // Swirling Clouds
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.beginPath();
        ctx.ellipse(x, y, Math.random() * 60 + 20, Math.random() * 8 + 3, Math.PI / 10, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (stripeCount > 0) {
      // Gas giant atmospheric bands
      for (let i = 0; i < stripeCount; i++) {
        const y = (canvas.height / stripeCount) * i;
        ctx.fillStyle = i % 2 === 0 ? accentColor : 'rgba(255, 255, 255, 0.15)';
        ctx.fillRect(0, y, canvas.width, canvas.height / stripeCount);
      }
      // Add subtle noise swirls
      for (let i = 0; i < 800; i++) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 15 + 2, 2);
      }
    } else {
      // General craters / surface variations
      for (let i = 0; i < 600; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 6 + 1;
        ctx.fillStyle = Math.random() > 0.5 ? accentColor : 'rgba(0,0,0,0.15)';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    return new THREE.CanvasTexture(canvas);
  },

  createSaturnRingsTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(0.15, 'rgba(215, 185, 140, 0.8)');
    grad.addColorStop(0.35, 'rgba(180, 150, 110, 0.9)');
    grad.addColorStop(0.5, 'rgba(40, 30, 20, 0.1)'); // Cassini Division
    grad.addColorStop(0.65, 'rgba(230, 200, 160, 0.85)');
    grad.addColorStop(0.9, 'rgba(170, 140, 100, 0.4)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return new THREE.CanvasTexture(canvas);
  }
};

// ==========================================
// 3. MAIN WEBGL APPLICATION CORE
// ==========================================
class SolarisApp {
  constructor() {
    this.container = document.getElementById('webgl-container');
    this.planets = {};
    this.orbitMeshes = [];
    this.isPaused = false;
    this.orbitSpeedFactor = 1.0;
    this.currentTarget = 'sun';
    this.isEclipseMode = false;
    this.showOrbits = true;

    this.initThree();
    this.initSpaceStarfield();
    this.initSunAndLights();
    this.initPlanetarySystem();
    this.initAsteroidBelt();
    this.initUI();
    this.initAudioEngine();
    this.animate();

    window.addEventListener('resize', () => this.onWindowResize());
  }

  initThree() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x020308, 0.0008);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );
    this.camera.position.set(0, 130, 220);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxDistance = 650;
    this.controls.minDistance = 5;
    this.controls.target.set(0, 0, 0);

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.renderer.domElement.addEventListener('click', (e) => this.onSceneClick(e));
  }

  initSpaceStarfield() {
    // 3D Procedural Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 3500;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0x9bd0ff),
      new THREE.Color(0xffdf99),
      new THREE.Color(0xffaaaa)
    ];

    for (let i = 0; i < starCount * 3; i += 3) {
      const radius = 600 + Math.random() * 900;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i + 2] = radius * Math.cos(phi);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i] = color.r;
      starColors[i + 1] = color.g;
      starColors[i + 2] = color.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    this.starPoints = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(this.starPoints);
  }

  initSunAndLights() {
    // Central PointLight casting light outward across entire system
    this.sunLight = new THREE.PointLight(0xfff6dd, 2.4, 1500, 0.4);
    this.sunLight.position.set(0, 0, 0);
    this.scene.add(this.sunLight);

    // Deep space soft ambient light for shadow readability
    this.ambientLight = new THREE.AmbientLight(0x1a243a, 0.35);
    this.scene.add(this.ambientLight);

    // Sun Sphere
    const sunGeo = new THREE.SphereGeometry(CELESTIAL_BODIES.sun.radius, 48, 48);
    const sunTex = TextureGenerator.createSunTexture();
    const sunMat = new THREE.MeshBasicMaterial({
      map: sunTex
    });
    this.sunMesh = new THREE.Mesh(sunGeo, sunMat);
    this.sunMesh.userData = { id: 'sun' };
    this.scene.add(this.sunMesh);

    // Sun Solar Corona / Atmospheric Glow Halo
    const coronaGeo = new THREE.SphereGeometry(CELESTIAL_BODIES.sun.radius * 1.25, 32, 32);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.22,
      side: THREE.BackSide
    });
    this.coronaMesh = new THREE.Mesh(coronaGeo, coronaMat);
    this.scene.add(this.coronaMesh);

    // Dynamic Solar Flare Sprite
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(255, 190, 50, 0.8)');
    grad.addColorStop(0.6, 'rgba(255, 100, 0, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    const flareTex = new THREE.CanvasTexture(canvas);
    const flareMat = new THREE.SpriteMaterial({
      map: flareTex,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    this.sunFlare = new THREE.Sprite(flareMat);
    this.sunFlare.scale.set(60, 60, 1);
    this.scene.add(this.sunFlare);

    this.planets['sun'] = {
      mesh: this.sunMesh,
      pivot: null,
      data: CELESTIAL_BODIES.sun,
      angle: 0
    };
  }

  initPlanetarySystem() {
    const planetConfigs = [
      { id: 'mercury', base: '#888888', accent: '#444444', stripes: 0 },
      { id: 'venus', base: '#e0b48c', accent: '#a87241', stripes: 0 },
      { id: 'earth', base: '#1e488f', accent: '#2d884d', stripes: 0, isEarth: true },
      { id: 'mars', base: '#d14924', accent: '#6e2010', stripes: 0 },
      { id: 'jupiter', base: '#d4b595', accent: '#855b40', stripes: 8 },
      { id: 'saturn', base: '#f4d9b4', accent: '#b48a5a', stripes: 6, hasRings: true },
      { id: 'uranus', base: '#7ae582', accent: '#489fb5', stripes: 2 },
      { id: 'neptune', base: '#3d65d8', accent: '#1b3b8c', stripes: 3 }
    ];

    planetConfigs.forEach((cfg) => {
      const pData = CELESTIAL_BODIES[cfg.id];

      // Orbit container pivot
      const pivot = new THREE.Group();
      this.scene.add(pivot);

      // Planet Mesh
      const geometry = new THREE.SphereGeometry(pData.radius, 32, 32);
      const texture = TextureGenerator.createPlanetTexture(
        cfg.base,
        cfg.accent,
        cfg.stripes,
        cfg.isEarth
      );

      const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.8,
        metalness: 0.1
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = pData.orbitRadius;
      mesh.userData = { id: cfg.id };
      pivot.add(mesh);

      // Special additions
      if (cfg.hasRings) {
        this.addSaturnRings(mesh, pData.radius);
      }

      if (cfg.id === 'earth') {
        this.initEarthMoonSystem(mesh);
      }

      // Draw glowing orbit path line
      const orbitLine = this.createOrbitLine(pData.orbitRadius);
      this.scene.add(orbitLine);
      this.orbitMeshes.push(orbitLine);

      this.planets[cfg.id] = {
        mesh: mesh,
        pivot: pivot,
        data: pData,
        angle: Math.random() * Math.PI * 2
      };
    });
  }

  addSaturnRings(saturnMesh, planetRadius) {
    const ringGeo = new THREE.RingGeometry(planetRadius * 1.4, planetRadius * 2.5, 64);
    const ringTex = TextureGenerator.createSaturnRingsTexture();

    // Map ring texture radially
    const pos = ringGeo.attributes.position;
    const v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      ringGeo.attributes.uv.setXY(i, (v3.length() - planetRadius * 1.4) / (planetRadius * 1.1), 0);
    }

    const ringMat = new THREE.MeshStandardMaterial({
      map: ringTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      roughness: 0.7
    });

    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2 + 0.35; // Ring axial tilt
    saturnMesh.add(ringMesh);
  }

  initEarthMoonSystem(earthMesh) {
    const moonData = CELESTIAL_BODIES.moon;

    // Moon pivot attached to Earth
    this.moonPivot = new THREE.Group();
    earthMesh.add(this.moonPivot);

    const moonGeo = new THREE.SphereGeometry(moonData.radius, 24, 24);
    const moonTex = TextureGenerator.createPlanetTexture('#aaaaaa', '#555555', 0);
    const moonMat = new THREE.MeshStandardMaterial({
      map: moonTex,
      roughness: 0.9,
      metalness: 0.05
    });

    this.moonMesh = new THREE.Mesh(moonGeo, moonMat);
    this.moonMesh.position.x = moonData.orbitRadius;
    this.moonMesh.userData = { id: 'moon' };
    this.moonPivot.add(this.moonMesh);

    // Moon orbit line
    const moonOrbitLine = this.createOrbitLine(moonData.orbitRadius, 0x5588aa, 0.25);
    this.moonPivot.add(moonOrbitLine);

    this.planets['moon'] = {
      mesh: this.moonMesh,
      pivot: this.moonPivot,
      data: moonData,
      angle: 0
    };
  }

  createOrbitLine(radius, color = 0x00d2ff, opacity = 0.15) {
    const points = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: opacity
    });
    return new THREE.Line(geometry, material);
  }

  initAsteroidBelt() {
    const asteroidCount = 450;
    const asteroidGeo = new THREE.DodecahedronGeometry(0.35, 1);
    const asteroidMat = new THREE.MeshStandardMaterial({
      color: 0x887766,
      roughness: 0.9
    });

    this.asteroidBelt = new THREE.InstancedMesh(asteroidGeo, asteroidMat, asteroidCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < asteroidCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 92 + (Math.random() - 0.5) * 16; // Between Mars (80) & Jupiter (112)
      const y = (Math.random() - 0.5) * 5;

      dummy.position.set(Math.cos(angle) * dist, y, Math.sin(angle) * dist);
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      const scale = Math.random() * 0.8 + 0.3;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();

      this.asteroidBelt.setMatrixAt(i, dummy.matrix);
    }
    this.scene.add(this.asteroidBelt);
  }

  // ==========================================
  // 4. SOLAR ECLIPSE SIMULATION SUITE
  // ==========================================
  enterEclipseMode() {
    this.isEclipseMode = true;
    document.getElementById('eclipse-overlay').classList.remove('hidden');
    document.getElementById('eclipse-status-pill').innerHTML = `
      <span class="status-dot" style="background:#ffbe26; box-shadow:0 0 10px #ffbe26"></span>
      <span class="status-label" style="color:#ffbe26">Total Solar Eclipse Active</span>
    `;

    // Position Earth & Moon in perfect line-of-sight with the Sun
    const earthObj = this.planets['earth'];
    const moonObj = this.planets['moon'];

    // Freeze Earth on positive X axis
    earthObj.angle = 0;
    earthObj.mesh.position.set(earthObj.data.orbitRadius, 0, 0);

    // Set Moon between Earth and Sun
    this.setEclipseAlignment(100);

    // Position Camera directly behind Earth facing toward Sun and Moon
    const earthWorldPos = new THREE.Vector3();
    earthObj.mesh.getWorldPosition(earthWorldPos);

    // Earth's surface perspective looking toward the Sun
    const viewPos = new THREE.Vector3(
      earthWorldPos.x + 8.5,
      earthWorldPos.y + 0.8,
      earthWorldPos.z + 1.2
    );

    gsap.to(this.camera.position, {
      x: viewPos.x,
      y: viewPos.y,
      z: viewPos.z,
      duration: 2.2,
      ease: 'power3.inOut',
      onUpdate: () => {
        this.controls.target.copy(new THREE.Vector3(0, 0, 0));
      }
    });

    this.playTone(180, 'sine', 1.5);
    this.updateTelemetryCard('moon');
  }

  setEclipseAlignment(pct) {
    // 100% = Totality (Moon is directly on the axis between Sun and Earth)
    // 0% = Moon offset to the side
    const factor = (pct - 100) / 100; // 0 at totality
    const moonData = CELESTIAL_BODIES.moon;

    // Angle offset
    const angle = Math.PI + factor * 0.45;
    this.moonMesh.position.x = Math.cos(angle) * moonData.orbitRadius;
    this.moonMesh.position.z = Math.sin(angle) * moonData.orbitRadius;

    // Adjust Corona and Sun light according to totality
    const totalityWeight = 1 - Math.min(Math.abs(pct - 100) / 25, 1);
    this.sunLight.intensity = THREE.MathUtils.lerp(2.4, 0.15, totalityWeight);
    this.coronaMesh.material.opacity = THREE.MathUtils.lerp(0.2, 0.95, totalityWeight);
    this.coronaMesh.scale.setScalar(THREE.MathUtils.lerp(1.0, 1.4, totalityWeight));

    // Update label
    const label = document.getElementById('eclipse-pct-label');
    if (pct === 100) {
      label.innerText = '100% (Totality)';
      label.style.color = '#ffbe26';
    } else if (pct < 100) {
      label.innerText = `${pct}% (Ingress)`;
      label.style.color = '#00d2ff';
    } else {
      label.innerText = `${pct}% (Egress)`;
      label.style.color = '#00d2ff';
    }
  }

  animateEclipseSequence() {
    const slider = document.getElementById('eclipse-slider');
    slider.value = 0;
    this.setEclipseAlignment(0);

    const animObj = { val: 0 };
    gsap.to(animObj, {
      val: 100,
      duration: 6,
      ease: 'power2.inOut',
      onUpdate: () => {
        slider.value = Math.round(animObj.val);
        this.setEclipseAlignment(Math.round(animObj.val));
      },
      onComplete: () => {
        this.playTone(320, 'triangle', 1.2);
      }
    });
  }

  exitEclipseMode() {
    this.isEclipseMode = false;
    document.getElementById('eclipse-overlay').classList.add('hidden');
    document.getElementById('eclipse-status-pill').innerHTML = `
      <span class="status-dot"></span>
      <span class="status-label">Solar Eclipse Mode Ready</span>
    `;
    this.sunLight.intensity = 2.4;
    this.coronaMesh.material.opacity = 0.22;
    this.coronaMesh.scale.setScalar(1.0);

    this.focusOnTarget('earth');
  }

  // ==========================================
  // 5. CAMERA NAVIGATION & FOCUS SYSTEM
  // ==========================================
  focusOnTarget(targetId) {
    if (!this.planets[targetId]) return;
    this.currentTarget = targetId;

    // Update Pill Active Status
    document.querySelectorAll('.planet-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === targetId);
    });

    const targetObj = this.planets[targetId];
    const targetWorldPos = new THREE.Vector3();
    targetObj.mesh.getWorldPosition(targetWorldPos);

    const radius = targetObj.data.radius;
    const camOffset = Math.max(radius * 3.8, 14);

    const destPos = new THREE.Vector3(
      targetWorldPos.x + camOffset,
      targetWorldPos.y + camOffset * 0.6,
      targetWorldPos.z + camOffset
    );

    gsap.to(this.camera.position, {
      x: destPos.x,
      y: destPos.y,
      z: destPos.z,
      duration: 1.8,
      ease: 'power3.out'
    });

    gsap.to(this.controls.target, {
      x: targetWorldPos.x,
      y: targetWorldPos.y,
      z: targetWorldPos.z,
      duration: 1.8,
      ease: 'power3.out'
    });

    this.updateTelemetryCard(targetId);
    this.playTone(440, 'sine', 0.2);
  }

  updateTelemetryCard(id) {
    const data = CELESTIAL_BODIES[id];
    if (!data) return;

    document.getElementById('planet-name').innerText = data.name;
    document.getElementById('planet-category').innerText = data.category;
    document.getElementById('planet-latin').innerText = data.latin;
    document.getElementById('planet-desc').innerText = data.desc;

    document.getElementById('val-diameter').innerText = data.diameter;
    document.getElementById('val-distance').innerText = data.distance;
    document.getElementById('val-orbit').innerText = data.orbitPeriod;
    document.getElementById('val-temp').innerText = data.temp;

    document.getElementById('planet-fact').innerText = data.fact;

    const panel = document.getElementById('planet-panel');
    panel.classList.remove('hidden');
  }

  onSceneClick(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const meshes = Object.values(this.planets).map(p => p.mesh);
    const intersects = this.raycaster.intersectObjects(meshes, true);

    if (intersects.length > 0) {
      let hit = intersects[0].object;
      while (hit && !hit.userData.id) {
        hit = hit.parent;
      }
      if (hit && hit.userData.id) {
        this.focusOnTarget(hit.userData.id);
      }
    }
  }

  // ==========================================
  // 6. AUDIO SYNTHESIZER ENGINE (Web Audio API)
  // ==========================================
  initAudioEngine() {
    this.audioEnabled = false;
    this.audioCtx = null;
  }

  toggleAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.startCosmicDrone();
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    this.audioEnabled = !this.audioEnabled;
    const btn = document.getElementById('btn-audio');
    const icon = document.getElementById('audio-icon');

    if (this.audioEnabled) {
      btn.classList.add('primary-glow');
      icon.innerHTML = '&#128266;';
      btn.querySelector('.label').innerText = 'Sound On';
      if (this.droneGain) this.droneGain.gain.setTargetAtTime(0.08, this.audioCtx.currentTime, 0.2);
    } else {
      btn.classList.remove('primary-glow');
      icon.innerHTML = '&#128263;';
      btn.querySelector('.label').innerText = 'Sound Off';
      if (this.droneGain) this.droneGain.gain.setTargetAtTime(0, this.audioCtx.currentTime, 0.2);
    }
  }

  startCosmicDrone() {
    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    this.droneGain = this.audioCtx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(55, this.audioCtx.currentTime); // Deep A1
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(110, this.audioCtx.currentTime);

    // Lowpass filter for deep space warmth
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, this.audioCtx.currentTime);

    this.droneGain.gain.setValueAtTime(0, this.audioCtx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(this.droneGain);
    this.droneGain.connect(this.audioCtx.destination);

    osc1.start();
    osc2.start();
  }

  playTone(freq, type = 'sine', duration = 0.3) {
    if (!this.audioEnabled || !this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

    gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + duration);
  }

  // ==========================================
  // 7. USER INTERFACE BINDINGS
  // ==========================================
  initUI() {
    // Planet navigation pill bar
    document.querySelectorAll('.planet-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        if (target === 'moon') {
          this.enterEclipseMode();
        } else {
          if (this.isEclipseMode) this.exitEclipseMode();
          this.focusOnTarget(target);
        }
      });
    });

    // Telemetry Focus & Eclipse buttons
    document.getElementById('btn-focus-target').addEventListener('click', () => {
      this.focusOnTarget(this.currentTarget);
    });

    document.getElementById('btn-trigger-eclipse').addEventListener('click', () => {
      this.enterEclipseMode();
    });

    document.getElementById('panel-close-btn').addEventListener('click', () => {
      document.getElementById('planet-panel').classList.add('hidden');
    });

    // Simulation playback & speed slider
    const playPauseBtn = document.getElementById('btn-play-pause');
    const playPauseIcon = document.getElementById('play-pause-icon');
    playPauseBtn.addEventListener('click', () => {
      this.isPaused = !this.isPaused;
      playPauseIcon.innerHTML = this.isPaused ? '&#9658;' : '&#10074;&#10074;';
      playPauseBtn.classList.toggle('active', this.isPaused);
    });

    const speedSlider = document.getElementById('speed-slider');
    const speedVal = document.getElementById('speed-val');
    speedSlider.addEventListener('input', (e) => {
      this.orbitSpeedFactor = parseFloat(e.target.value);
      speedVal.innerText = `${this.orbitSpeedFactor.toFixed(1)}x`;
    });

    // Reset view
    document.getElementById('btn-reset-view').addEventListener('click', () => {
      if (this.isEclipseMode) this.exitEclipseMode();
      this.currentTarget = 'sun';
      gsap.to(this.camera.position, { x: 0, y: 160, z: 240, duration: 1.8, ease: 'power3.out' });
      gsap.to(this.controls.target, { x: 0, y: 0, z: 0, duration: 1.8, ease: 'power3.out' });
      this.updateTelemetryCard('sun');
    });

    // Orbit paths toggle
    const toggleOrbitBtn = document.getElementById('btn-toggle-orbits');
    toggleOrbitBtn.addEventListener('click', () => {
      this.showOrbits = !this.showOrbits;
      this.orbitMeshes.forEach(line => line.visible = this.showOrbits);
      toggleOrbitBtn.classList.toggle('active', this.showOrbits);
    });

    // Eclipse HUD slider & buttons
    const eclipseSlider = document.getElementById('eclipse-slider');
    eclipseSlider.addEventListener('input', (e) => {
      this.setEclipseAlignment(parseInt(e.target.value, 10));
    });

    document.getElementById('btn-play-eclipse').addEventListener('click', () => {
      this.animateEclipseSequence();
    });

    document.getElementById('btn-exit-eclipse').addEventListener('click', () => {
      this.exitEclipseMode();
    });

    // Audio button
    document.getElementById('btn-audio').addEventListener('click', () => {
      this.toggleAudio();
    });

    // Cosmic Cinematic Tour button
    document.getElementById('btn-cinematic').addEventListener('click', () => {
      this.startCosmicTour();
    });
  }

  startCosmicTour() {
    const sequence = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
    let step = 0;

    const tourInterval = setInterval(() => {
      if (step >= sequence.length) {
        clearInterval(tourInterval);
        return;
      }
      const target = sequence[step];
      if (target === 'moon') {
        this.enterEclipseMode();
      } else {
        if (this.isEclipseMode) this.exitEclipseMode();
        this.focusOnTarget(target);
      }
      step++;
    }, 4500);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // ==========================================
  // 8. ANIMATION LOOP & ORBITAL PHYSICS
  // ==========================================
  animate() {
    requestAnimationFrame(() => this.animate());

    // Update Celestial Orbits & Rotations
    if (!this.isPaused && !this.isEclipseMode) {
      Object.keys(this.planets).forEach(key => {
        const item = this.planets[key];

        // Self rotation on axis
        item.mesh.rotation.y += item.data.rotSpeed;

        // Revolution around Sun
        if (item.pivot && item.data.orbitSpeed > 0) {
          item.angle += item.data.orbitSpeed * 0.4 * this.orbitSpeedFactor;
          item.mesh.position.x = Math.cos(item.angle) * item.data.orbitRadius;
          item.mesh.position.z = Math.sin(item.angle) * item.data.orbitRadius;
        }
      });

      // Moon orbits Earth
      if (this.moonMesh && this.planets['moon']) {
        const moon = this.planets['moon'];
        moon.angle += moon.data.orbitSpeed * 0.5 * this.orbitSpeedFactor;
        this.moonMesh.position.x = Math.cos(moon.angle) * moon.data.orbitRadius;
        this.moonMesh.position.z = Math.sin(moon.angle) * moon.data.orbitRadius;
      }

      // Rotate Asteroid Belt
      if (this.asteroidBelt) {
        this.asteroidBelt.rotation.y += 0.0008 * this.orbitSpeedFactor;
      }
    }

    // Dynamic Pulsating Sun Flare
    const time = Date.now() * 0.002;
    const flareScale = 58 + Math.sin(time) * 4;
    this.sunFlare.scale.set(flareScale, flareScale, 1);
    this.coronaMesh.rotation.y += 0.001;

    // Follow target smoothly if not orbiting sun
    if (this.currentTarget !== 'sun' && !this.isEclipseMode) {
      const activeObj = this.planets[this.currentTarget];
      if (activeObj) {
        const worldPos = new THREE.Vector3();
        activeObj.mesh.getWorldPosition(worldPos);
        this.controls.target.lerp(worldPos, 0.04);
      }
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new SolarisApp();
});
