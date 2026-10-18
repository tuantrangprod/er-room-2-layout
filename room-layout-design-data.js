// Reusable room-layout workflow, terminology and independent draft snapshots.
// HTML renders and edits an in-memory copy; reload restores these source values.
window.roomLayoutDesign = {
  title: "Room layout design",
  eyebrow: "Reusable workflow · measured SVG · independent drafts",
  heading: ["Configure.", "Measure. Compare."],
  intro: "Each draft owns a complete config, calculated geometry and annotation set. No chat history is required.",
  statusLegend: {
    locked: "Locked · approved or required",
    draft: "Draft · not reviewed",
    stable: "Stable · reusable rule, not approval",
    rejected: "Rejected · retained for reference"
  },
  ui: {
    rulesTab: "Rules",
    termsTab: "Terms",
    draftPrefix: "Draft",
    config: "Config snapshot",
    plan: "Measured plan",
    areaReport: "Area report",
    validation: "Validation",
    layers: "Layer visibility",
    tools: "Mark layout",
    reset: "Reset draft",
    undo: "Undo last mark",
    clearTool: "Stop marking",
    activeTool: "Active tool",
    clickHelp: "Choose a tool, then click the plan. Flow tools connect each new point.",
    grossArea: "Internal gross area",
    ratio: "Shell width ÷ height",
    wallThickness: "Partition wall thickness",
    hallwayWidth: "Clear hallway width",
    roomCount: "Central rooms",
    circulation: "Circulation",
    shell: "Calculated shell",
    hall: "Clear hallway",
    rooms: "Clear rooms",
    walls: "Partition walls",
    roomA: "Clear Room A",
    roomB: "Clear Room B",
    total: "Area check",
    difference: "Difference",
    assumptions: "Assumptions",
    metres: "m",
    squareMetres: "m²",
    percent: "%",
    allChecksPass: "Area allocation balances to configured gross area.",
    invalidGeometry: "Config cannot produce two usable rooms. Increase area or reduce hallway/wall values.",
    areaMismatch: "Area allocation does not balance.",
    narrowNotice: "0.80 m is a design input, not a safety approval. Verify egress, accessibility, capacity and operations professionally.",
    zeroWallNotice: "Wall thickness must be greater than zero.",
    draftOnly: "Concept draft—not a construction drawing.",
    internalGrossDefinition: "Measured inside the existing shell boundary; includes all new partition-wall footprints but excludes existing perimeter-wall thickness.",
    noTool: "None",
    directLink: "Direct tab link"
  },
  layers: [
    { id: "measurements", label: "Measurements", toolLabel: "Toggle dimensions", symbol: "↔", color: "#ffd591", mode: "display", visibleByDefault: true, markable: false },
    { id: "player", label: "User flow", toolLabel: "Draw user flow", symbol: "→", color: "#72ddd1", mode: "path", visibleByDefault: true },
    { id: "puzzle", label: "Puzzle location", toolLabel: "Place puzzle", symbol: "◆", color: "#ffd591", mode: "point", visibleByDefault: false },
    { id: "lighting", label: "Lighting", toolLabel: "Place light", symbol: "☀", color: "#fff09a", mode: "point", visibleByDefault: false },
    { id: "vfx", label: "Visual effect / decoration", toolLabel: "Place VFX / decor", symbol: "✦", color: "#d0b5f7", mode: "point", visibleByDefault: false },
    { id: "ghost", label: "Ghost NPC in / out", toolLabel: "Draw Ghost NPC route", symbol: "G", color: "#ff8fcf", mode: "path", visibleByDefault: false },
    { id: "hiddenDoor", label: "Hidden door", toolLabel: "Place hidden door", symbol: "HD", color: "#cda7ff", mode: "point", visibleByDefault: false },
    { id: "acts", label: "Story acts", toolLabel: "Place next story act", symbol: "A", color: "#75bfff", mode: "point", visibleByDefault: false }
  ],
  rules: [
    {
      title: "01 · Session contract",
      colorPreset: "cyan",
      rows: [
        {
          keyword: "Context",
          brief: "Use this HTML, its adjacent data, and only the listed project references.",
          status: "locked",
          details: [
            "Do not rely on chat history. Record every required assumption inside a draft config or its notes.",
            "References: game-design/general.md; game-design/room-layout-design.html; relevant rooms/<room>/room-*-overview-data.js.",
            "Treat archived material as non-authoritative unless a current room file links to it explicitly."
          ]
        },
        {
          keyword: "Content",
          brief: "Keep instructions and draft content in room-layout-design-data.js.",
          status: "stable",
          details: ["HTML owns display, interaction and calculation only. Data JS owns wording, terms, symbols and initial draft snapshots."]
        }
      ]
    },
    {
      title: "02 · Required config",
      colorPreset: "orange",
      rows: [
        {
          keyword: "Area basis",
          brief: "Internal gross area includes partition walls.",
          status: "locked",
          details: ["Measure to the inside face of the existing perimeter shell. Existing perimeter-wall thickness is outside this total; new room walls are inside it."]
        },
        {
          keyword: "Measurements",
          brief: "Store metres; identify clear dimensions versus wall-inclusive dimensions.",
          status: "locked",
          details: ["Required: gross area, shell ratio, clear hallway width, wall thickness, room count and circulation pattern."]
        },
        {
          keyword: "Independence",
          brief: "Every iteration stores a complete config snapshot.",
          status: "locked",
          details: ["Never mutate a shared baseline silently. Copy values into a new draft, record its parent ID, then change that copy."]
        }
      ]
    },
    {
      title: "03 · Calculation and review",
      colorPreset: "mint",
      rows: [
        {
          keyword: "Balance",
          brief: "Hall clear + rooms clear + partition walls must equal internal gross area.",
          status: "locked",
          details: ["Difference must round to 0.00 m². Show unallocated area instead of hiding a mismatch."]
        },
        {
          keyword: "Walls",
          brief: "Use 100 mm by default and include wall footprints in every area report.",
          status: "locked",
          details: ["Current estimate treats room walls as continuous before door openings. Once door dimensions are configured, classify threshold floor area explicitly and recalculate."]
        },
        {
          keyword: "Safety",
          brief: "Dimensions are design inputs, not compliance approval.",
          status: "locked",
          details: ["Qualified review must verify egress, accessibility, occupancy, actor routes, visibility, fire safety and local requirements before construction."]
        }
      ]
    },
    {
      title: "04 · Reusable workflow",
      colorPreset: "cyan",
      rows: [
        { keyword: "1 · Configure", brief: "Create a complete independent config; mark unknown values Draft.", status: "stable" },
        { keyword: "2 · Generate", brief: "Build measured geometry and classify every square metre.", status: "stable" },
        { keyword: "3 · Mark", brief: "Add flow, puzzles, lighting, VFX, Ghost route, hidden doors and acts.", status: "stable" },
        { keyword: "4 · Validate", brief: "Check area balance, usable geometry, route conflicts and unresolved assumptions.", status: "stable" },
        { keyword: "5 · Iterate", brief: "Copy into a new draft; preserve parent and describe changes.", status: "stable" },
        { keyword: "6 · Approve", brief: "Human locks one iteration before CAD or blueprint development.", status: "stable" }
      ]
    }
  ],
  terms: [
    { keyword: "Internal gross", brief: "Area inside the existing shell, including new partition walls.", status: "stable" },
    { keyword: "Clear area", brief: "Usable floor area between finished wall faces.", status: "stable" },
    { keyword: "Clear width", brief: "Unobstructed usable passage width.", status: "stable" },
    { keyword: "Wall footprint", brief: "Floor area occupied by partition walls.", status: "stable" },
    { keyword: "Room outside", brief: "Room dimensions measured to outside partition faces.", status: "stable" },
    { keyword: "Room clear", brief: "Room dimensions inside finished partition faces.", status: "stable" },
    { keyword: "Config", brief: "Complete constraints used to generate one draft.", status: "stable" },
    { keyword: "Iteration", brief: "Independent proposal with its own copied config and markings.", status: "stable" },
    { keyword: "User flow", brief: "Expected player route; arrow direction shows sequence.", status: "stable" },
    { keyword: "Ghost route", brief: "NPC route from outside or GM access, through play space, then out.", status: "stable" },
    { keyword: "Hidden door", brief: "Concealed staff/NPC opening; requires fail-safe and operational review.", status: "stable" },
    { keyword: "Story act", brief: "Spatial marker for an act, reveal or live-scene beat.", status: "stable" }
  ],
  drafts: [
    {
      id: "c01-i01",
      configId: "c01",
      iteration: 1,
      parentId: null,
      keyword: "C01 · I01",
      name: "Balanced figure eight",
      brief: "Equal rooms with a central connector and perimeter loop.",
      status: "draft",
      config: {
        units: "m",
        internalGrossArea: 60,
        shellRatio: 1.6666666667,
        partitionWallThickness: 0.1,
        hallwayClearWidth: 0.8,
        roomCount: 2,
        circulation: "figure-eight"
      },
      assumptions: [
        "Shell remains rectangular and follows the configured width-to-height ratio.",
        "Two equal four-wall rooms sit in the centre.",
        "Hallway runs around both room walls and between them.",
        "Wall area is calculated before player-door and hidden-door openings."
      ],
      marks: {
        player: [{ x:0.50,y:0.50 },{ x:0.46,y:0.06 },{ x:0.08,y:0.06 },{ x:0.04,y:0.50 },{ x:0.08,y:0.94 },{ x:0.46,y:0.94 },{ x:0.50,y:0.50 },{ x:0.54,y:0.06 },{ x:0.92,y:0.06 },{ x:0.96,y:0.50 },{ x:0.92,y:0.94 },{ x:0.54,y:0.94 },{ x:0.50,y:0.50 }],
        puzzle: [{ x:0.28,y:0.34,label:"P1" },{ x:0.72,y:0.66,label:"P2" }],
        lighting: [{ x:0.18,y:0.12,label:"L1" },{ x:0.82,y:0.88,label:"L2" }],
        vfx: [{ x:0.50,y:0.18,label:"V1" }],
        ghost: [{ x:1.04,y:0.18 },{ x:0.92,y:0.18 },{ x:0.92,y:0.50 },{ x:0.54,y:0.50 },{ x:0.54,y:0.88 },{ x:1.04,y:0.88 }],
        hiddenDoor: [{ x:0.92,y:0.18,label:"IN" },{ x:0.92,y:0.88,label:"OUT" }],
        acts: [{ x:0.12,y:0.70,label:"1" },{ x:0.50,y:0.50,label:"2" },{ x:0.84,y:0.30,label:"3" }]
      }
    },
    {
      id: "c01-i02",
      configId: "c01",
      iteration: 2,
      parentId: "c01-i01",
      keyword: "C01 · I02",
      name: "Opposite reveal",
      brief: "Same measured config; altered player, Ghost and story-beat placement.",
      status: "draft",
      config: {
        units: "m",
        internalGrossArea: 60,
        shellRatio: 1.6666666667,
        partitionWallThickness: 0.1,
        hallwayClearWidth: 0.8,
        roomCount: 2,
        circulation: "figure-eight"
      },
      assumptions: [
        "Geometry matches C01-I01 so experience markings can be compared directly.",
        "Ghost enters and exits through separate hidden doors on opposite shell edges.",
        "Final story act occurs inside the right room; actual access door remains unresolved."
      ],
      marks: {
        player: [{ x:0.50,y:0.50 },{ x:0.54,y:0.94 },{ x:0.92,y:0.94 },{ x:0.96,y:0.50 },{ x:0.92,y:0.06 },{ x:0.54,y:0.06 },{ x:0.50,y:0.50 },{ x:0.46,y:0.94 },{ x:0.08,y:0.94 },{ x:0.04,y:0.50 },{ x:0.08,y:0.06 },{ x:0.46,y:0.06 },{ x:0.50,y:0.50 }],
        puzzle: [{ x:0.28,y:0.66,label:"P1" },{ x:0.72,y:0.34,label:"P2" },{ x:0.72,y:0.70,label:"P3" }],
        lighting: [{ x:0.08,y:0.20,label:"L1" },{ x:0.92,y:0.80,label:"L2" }],
        vfx: [{ x:0.50,y:0.82,label:"V1" },{ x:0.72,y:0.50,label:"V2" }],
        ghost: [{ x:-0.04,y:0.18 },{ x:0.08,y:0.18 },{ x:0.46,y:0.18 },{ x:0.46,y:0.50 },{ x:0.92,y:0.50 },{ x:1.04,y:0.50 }],
        hiddenDoor: [{ x:0.08,y:0.18,label:"IN" },{ x:0.92,y:0.50,label:"OUT" }],
        acts: [{ x:0.16,y:0.80,label:"1" },{ x:0.50,y:0.20,label:"2" },{ x:0.72,y:0.50,label:"3" }]
      }
    }
  ]
};
