/* =====================================================================
   PROFILE — your name, bio, links, skills.
   Edit the text between the quotes. Save, commit, push. Done.
   ===================================================================== */
window.PROFILE = {
  name: "Majid Abbasi Sisara",
  title: "Ph.D. Candidate · Computational Neuroscientist",
  affiliation: "Division of Biokinesiology and Physical Therapy, University of Southern California",
  lab: { name: "Brain-Body Dynamics Lab", url: "https://valerolab.org/" },
  advisor: { name: "Prof. Francisco J. Valero-Cuevas", url: "https://valerolab.org/" },
  photo: "assets/img/profile.png",
  cv: "files/Majid_Abbasi_Sisara_CV.pdf",

  // Short line shown under your name in the top banner
  tagline:
    "I study how the brain controls the body — and what changes after injury and neurodegeneration — using diffusion MRI, fMRI, EEG, EMG, and machine learning.",

  // Paragraphs for the "About" section (add or remove entries freely)
  about: [
    "I am a Ph.D. candidate in Biokinesiology at USC, advised by Prof. Francisco J. Valero-Cuevas. My background spans electrical engineering (B.Sc., Tabriz University of Technology), biomedical engineering (M.Sc., Sharif University of Technology), and several years as a data scientist at Iran's National Brain Mapping Lab, where I worked on presurgical planning with task fMRI, resting-state fMRI, and DTI.",
    "My current research focuses on multimodal brain data of traumatic brain injury (TBIs). I applied diffusion-MRI markers of the brain's glymphatic (waste-clearance) system. I extend and validate the CC7T framework in 7 subregions of corpus callosum — and apply it to traumatic brain injury using public datasets such as ADNI, ADNI-DOD, and OpenNeuro.",
    "In parallel, I run multimodal EEG–EMG–fMRI studies of hand and leg dexterity in people with TBI and stroke, and build deep-learning models (GNNs, transformers, variational RNN autoencoders) for classifying harmful brain activity and sizure detection.",
    "I am skilled in the analysis and interpretation of complex brain data from diverse sources, including LFP, ECoG, EEG, fMRI, and DTI, with a particular focus on brain mapping and neuroimaging. Strong expertise in developing and deploying machine learning models, particularly for brain-computer interaction and cognitive neuroscience applications. Throughout my career, I have contributed to interdisciplinary research projects, leveraging big data analytics to improve outcomes in brain health, cognitive function, and mental well-being. Committed to advancing the integration of AI in healthcare and utilizing brain mapping techniques to enhance our understanding of neurological conditions."
  ],

  // Research interests shown as tags
  interests: [
    "Glymphatic system & DTI-ALPS",
    "Traumatic brain injury",
    "Alzheimer's disease",
    "Diffusion & functional MRI",
    "EEG / EMG coherence",
    "Sensorimotor control & dexterity",
    "Graph neural networks",
    "Brain–computer interfaces"
  ],

  education: [
    { degree: "Ph.D. in Biokinesiology", school: "University of Southern California", years: "2022 – 2027 (expected)" },
    { degree: "M.Sc. in Biomedical Engineering", school: "Sharif University of Technology", years: "2013 – 2015" },
    { degree: "B.Sc. in Electrical Engineering", school: "Tabriz University of Technology", years: "2009 – 2012" }
  ],

  // Skill groups for the "Skills" panel
  skills: [
    { group: "Neuroimaging", items: ["FSL", "SPM12", "AFNI", "FreeSurfer", "ANTs", "DSI Studio", "ExploreDTI", "CONN", "EEGLAB"] },
    { group: "Machine learning", items: ["PyTorch", "TensorFlow / Keras", "scikit-learn", "GNNs", "Transformers", "VAEs", "Reinforcement learning"] },
    { group: "Programming", items: ["Python", "MATLAB", "C++", "R", "SQL", "Verilog"] },
    { group: "Experiments", items: ["PsychoPy", "Psychtoolbox", "Eye tracking", "EEG-fMRI", "EMG"] }
  ],

  // Links in the header / contact section. Remove any you don't want.
  links: {
    email: "abbasisi@usc.edu",
    scholar: "https://scholar.google.com/citations?hl=en&user=J40wcIgAAAAJ",
    linkedin: "https://www.linkedin.com/in/majid-abbasi-sisara/",
    github: "https://github.com/MajidSisara",
    orcid: "" // e.g. "https://orcid.org/0000-0000-0000-0000"
  }
};
