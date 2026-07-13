import p1_concepts_of_matter from "./p1-concepts-of-matter/index.js";
import p1_quantities_units from "./p1-quantities-units/index.js";
import p1_position_distance from "./p1-position-distance/index.js";
import p1_mass_weight from "./p1-mass-weight/index.js";
import p1_time from "./p1-time/index.js";
import p1_fluid_at_rest from "./p1-fluid-at-rest/index.js";
import p1_motion from "./p1-motion/index.js";
import p1_speed_velocity from "./p1-speed-velocity/index.js";
import p1_acceleration from "./p1-acceleration/index.js";
import p1_scalars_vectors from "./p1-scalars-vectors/index.js";
import p1_equilibrium_forces from "./p1-equilibrium-forces/index.js";
import p1_shm from "./p1-shm/index.js";
import p1_newtons_laws from "./p1-newtons-laws/index.js";
import p2_energy from "./p2-energy/index.js";
import p2_work_energy_power from "./p2-work-energy-power/index.js";
import p2_heat_energy from "./p2-heat-energy/index.js";
import p3_production_waves from "./p3-production-waves/index.js";
import p3_types_waves from "./p3-types-waves/index.js";
import p3_properties_waves from "./p3-properties-waves/index.js";
import p3_light_waves from "./p3-light-waves/index.js";
import p3_electromagnetic_waves from "./p3-electromagnetic-waves/index.js";
import p3_sound_waves from "./p3-sound-waves/index.js";
import p4_fields_properties from "./p4-fields-properties/index.js";
import p4_gravitational_field from "./p4-gravitational-field/index.js";
import p4_electric_field from "./p4-electric-field/index.js";
import p4_magnetic_field from "./p4-magnetic-field/index.js";
import p4_electromagnetic_field from "./p4-electromagnetic-field/index.js";
import p5_ac_circuits from "./p5-ac-circuits/index.js";
import p5_structure_atom from "./p5-structure-atom/index.js";
import p5_structure_nucleus from "./p5-structure-nucleus/index.js";
import p5_wave_particle from "./p5-wave-particle/index.js";
import all_derived_dimensions from "./all-derived-dimensions/index.js";
import all_projectile from "./all-projectile/index.js";
import all_satellites_rockets from "./all-satellites-rockets/index.js";
import all_elastic_solids from "./all-elastic-solids/index.js";
import all_fibre_optics from "./all-fibre-optics/index.js";
import all_laser from "./all-laser/index.js";
import all_magnetic_materials from "./all-magnetic-materials/index.js";
import all_conduction_liquids from "./all-conduction-liquids/index.js";
import all_structure_of_matter from "./all-structure-of-matter/index.js";
import all_wave_particle from "./all-wave-particle/index.js";

const topics = [
  { topicId: "p1-concepts-of-matter", topicName: "Concepts of Matter", experiments: p1_concepts_of_matter },
  { topicId: "p1-quantities-units", topicName: "Fundamental & Derived Quantities and Units", experiments: p1_quantities_units },
  { topicId: "p1-position-distance", topicName: "Position, Distance and Displacement", experiments: p1_position_distance },
  { topicId: "p1-mass-weight", topicName: "Mass and Weight", experiments: p1_mass_weight },
  { topicId: "p1-time", topicName: "Time", experiments: p1_time },
  { topicId: "p1-fluid-at-rest", topicName: "Fluids at Rest", experiments: p1_fluid_at_rest },
  { topicId: "p1-motion", topicName: "Motion", experiments: p1_motion },
  { topicId: "p1-speed-velocity", topicName: "Speed and Velocity", experiments: p1_speed_velocity },
  { topicId: "p1-acceleration", topicName: "Rectilinear Acceleration", experiments: p1_acceleration },
  { topicId: "p1-scalars-vectors", topicName: "Scalars and Vectors", experiments: p1_scalars_vectors },
  { topicId: "p1-equilibrium-forces", topicName: "Equilibrium of Forces", experiments: p1_equilibrium_forces },
  { topicId: "p1-shm", topicName: "Simple Harmonic Motion", experiments: p1_shm },
  { topicId: "p1-newtons-laws", topicName: "Newton's Laws of Motion", experiments: p1_newtons_laws },
  { topicId: "p2-energy", topicName: "Energy", experiments: p2_energy },
  { topicId: "p2-work-energy-power", topicName: "Work, Energy and Power", experiments: p2_work_energy_power },
  { topicId: "p2-heat-energy", topicName: "Heat Energy", experiments: p2_heat_energy },
  { topicId: "p3-production-waves", topicName: "Production and Propagation of Waves", experiments: p3_production_waves },
  { topicId: "p3-types-waves", topicName: "Types of Waves", experiments: p3_types_waves },
  { topicId: "p3-properties-waves", topicName: "Properties of Waves", experiments: p3_properties_waves },
  { topicId: "p3-light-waves", topicName: "Light Waves", experiments: p3_light_waves },
  { topicId: "p3-electromagnetic-waves", topicName: "Electromagnetic Waves", experiments: p3_electromagnetic_waves },
  { topicId: "p3-sound-waves", topicName: "Sound Waves", experiments: p3_sound_waves },
  { topicId: "p4-fields-properties", topicName: "Description & Properties of Fields", experiments: p4_fields_properties },
  { topicId: "p4-gravitational-field", topicName: "Gravitational Field", experiments: p4_gravitational_field },
  { topicId: "p4-electric-field", topicName: "Electric Field", experiments: p4_electric_field },
  { topicId: "p4-magnetic-field", topicName: "Magnetic Field", experiments: p4_magnetic_field },
  { topicId: "p4-electromagnetic-field", topicName: "Electromagnetic Field", experiments: p4_electromagnetic_field },
  { topicId: "p5-ac-circuits", topicName: "Simple a.c. Circuits", experiments: p5_ac_circuits },
  { topicId: "p5-structure-atom", topicName: "Structure of the Atom", experiments: p5_structure_atom },
  { topicId: "p5-structure-nucleus", topicName: "Structure of the Nucleus", experiments: p5_structure_nucleus },
  { topicId: "p5-wave-particle", topicName: "Wave-Particle Paradox", experiments: p5_wave_particle },
  { topicId: "all-derived-dimensions", topicName: "Derived Quantities & Dimensional Analysis", experiments: all_derived_dimensions },
  { topicId: "all-projectile", topicName: "Projectile Motion", experiments: all_projectile },
  { topicId: "all-satellites-rockets", topicName: "Satellites and Rockets", experiments: all_satellites_rockets },
  { topicId: "all-elastic-solids", topicName: "Elastic Properties of Solids", experiments: all_elastic_solids },
  { topicId: "all-fibre-optics", topicName: "Fibre Optics", experiments: all_fibre_optics },
  { topicId: "all-laser", topicName: "Introduction to LASER", experiments: all_laser },
  { topicId: "all-magnetic-materials", topicName: "Magnetic Materials", experiments: all_magnetic_materials },
  { topicId: "all-conduction-liquids", topicName: "Electrical Conduction through Liquids", experiments: all_conduction_liquids },
  { topicId: "all-structure-of-matter", topicName: "Structure of Matter", experiments: all_structure_of_matter },
  { topicId: "all-wave-particle", topicName: "Wave-Particle Paradox (Structured)", experiments: all_wave_particle },
];

export default topics;
