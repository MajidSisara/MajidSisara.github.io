/* =====================================================================
   RESEARCH PROJECTS — each { ... } block is one card.
   To add a project: copy a block, paste it, change the text.
   To use your own figure: put the image in assets/img/research/
   and set  image: "assets/img/research/your-figure.png"
   ===================================================================== */
window.RESEARCH = [
  {
    title: "Glymphatic system evaluation with DTI-ALPS",
    image: "assets/img/research/dti-alps.jpg",
    summary:
      "The DTI-ALPS index estimates perivascular water diffusion — a proxy for glymphatic clearance — from standard diffusion MRI. I extend the framework to new anatomical locations (Pontine-ALPS in the brainstem, corpus callosum ROIs) and test it in Alzheimer's disease and aging using ADNI data.",
    tags: ["Diffusion MRI", "Alzheimer's disease", "ADNI", "Glymphatic system"],
    links: [
      { label: "G-ALPS paper", url: "https://doi.org/10.1002/alz.71118" }
    ]
  },
    {
    title: "Hybrid EEG brain–computer interface for wheelchair control",
    image: "assets/img/research/eeg-bci-wheelchair.png",
    summary:
      "My M.Sc. thesis: an EEG-based BCI that lets a user drive an electric wheelchair with brain signals alone. Steady-state visual evoked potentials (SSVEP) handle start/stop and speed, and left- vs. right-hand motor imagery (the two most separable of three imagery classes) steers. The decoded commands feed a fuzzy-logic controller that sets the speed of each rear motor.",
    tags: ["BCI", "EEG", "SSVEP", "Motor imagery", "Fuzzy control", "Assistive technology"],
    links: []
  },
  {
    title: "Detecting and tracking traumatic brain injury",
    image: "assets/img/research/tbi.jpg",
    summary:
      "Which diffusion metrics detect TBI, and which track recovery? Comparing regional FA/MD with DTI-ALPS across injury and follow-up, alongside a monozygotic-twin case study of how TBI reshapes bilateral brain networks for dexterous manipulation.",
    tags: ["TBI", "DTI", "fMRI", "rs-fMRI", "EEG"],
    links: []
  },
  {
    title: "Brain–muscle coupling during dexterous tasks",
    image: "assets/img/research/eeg-emg.jpg",
    summary:
      "Multimodal EEG, EMG, and fMRI studies of hand and leg dexterity in people with TBI and stroke. Corticomuscular and intermuscular coherence reveal how common neural drive changes with fatigue, skill learning, and injury.",
    tags: ["EEG", "EMG", "Coherence", "Stroke"],
    links: []
  },
  {
    title: "Graph neural networks for harmful brain activity",
    image: "assets/img/research/gnn.jpg",
    summary:
      "How does the choice of functional-connectivity measure change what a GNN can learn from EEG? I benchmark connectivity graphs and deep architectures (GNNs, transformers, variational RNN autoencoders) for classifying seizures and other harmful patterns.",
    tags: ["Deep learning", "EEG", "Epilepsy", "GNN", "GIN", "GAT"],
    links: []
  },
  {
    title: "Sensory transmission in the primate spinal cord & brainstem",
    image: "assets/img/research/sensory.jpg",
    summary:
      "Using recordings from non-human primates, I show that skin and muscle afferent signals are transmitted and modulated in distinct, active, and task-dependent ways before they reach somatosensory cortex.",
    tags: ["Neurophysiology", "Sensorimotor", "LFP"],
    links: []
  },
   {
    title: "Simultaneous EEG-fMRI at Ultra-Low Field (0.55T)",
    image: "assets/img/research/EEG-fMRI-0.55T.png",
    summary:
      "Exploring simultaneous EEG-fMRI at 0.55T, with a focus on artifact reduction, signal denoising, and EEG-informed functional brain mapping.",
    tags: ["Brain Mapping", "Signal Processing", "Neuroimaging", "Low-Field MRI", "EEG-fMRI"],
    links: [
      { label: "EEG-fMRI 0.55T paper", url: "https://arxiv.org/abs/2602.13489" }
    ]
  },
    {
    title: "Neural signatures of future thinking after a suicide attempt",
    image: "assets/img/research/suicide-imagination-fmri.png",
    summary:
      "Task-fMRI study of how recent suicide attempters with MDD imagine positive and negative futures, compared with MDD patients and healthy controls (n = 62). During negative imagination, attempters show heightened orbitofrontal, insula, cingulate and inferior frontal activity and reduced parahippocampal engagement, which points to more threat sensitivity and weaker access to episodic memory when planning for the future.",
    tags: ["Major depressive disorder (MDD)", "Suicide", "Future imagination",, "fMRI" ],
    links: [
      { label: "Depression-Suicide paper", url: "https://doi.org/10.1016/j.pscychresns.2025.112049" }
    ]
  },
   {
    title: "Temperament traits and the neural cost of choice",
    image: "assets/img/research/temperament-choice-fmri.png",
    summary:
      "How do Cloninger's temperament traits (Novelty Seeking, Harm Avoidance, Reward Dependence, Persistence) shape the conflict we feel when choosing? Using a modified free-choice paradigm with fMRI, I compare people with the highest and lowest score on each trait during easy and difficult decisions. Each trait shows its own activation pattern, mostly centered on the cingulate cortex.",
    tags: ["fMRI", "Decision-making", "Personality", "Temperament (TCI)", "Cognitive conflict", "Free-choice paradigm"],
    links: [
      { label: "Temperament-fMRI preprint", url: "https://doi.org/10.1101/2024.11.26.625354" }
    ]
  }
];
