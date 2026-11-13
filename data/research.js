/* =====================================================================
   RESEARCH PROJECTS — each { ... } block is one card.
   To add a project: copy a block, paste it, change the text.
   To use your own figure: put the image in assets/img/research/
   and set  image: "assets/img/research/your-figure.png"
   ===================================================================== */
window.RESEARCH = [
  {
    title: "Glymphatic imaging with DTI-ALPS",
    image: "assets/img/research/dti-alps.svg",
    summary:
      "The DTI-ALPS index estimates perivascular water diffusion — a proxy for glymphatic clearance — from standard diffusion MRI. I extend the framework to new anatomical locations (Pontine-ALPS in the brainstem, corpus callosum ROIs) and test it in Alzheimer's disease and aging using ADNI data.",
    tags: ["Diffusion MRI", "Alzheimer's disease", "ADNI"],
    links: [
      { label: "G-ALPS paper", url: "https://doi.org/10.1002/alz.71118" }
    ]
  },
  {
    title: "Detecting and tracking traumatic brain injury",
    image: "assets/img/research/tbi.svg",
    summary:
      "Which diffusion metrics detect TBI, and which track recovery? Comparing regional FA/MD with DTI-ALPS across injury and follow-up, alongside a monozygotic-twin case study of how TBI reshapes bilateral brain networks for dexterous manipulation.",
    tags: ["TBI", "DTI", "fMRI", "Twins"],
    links: []
  },
  {
    title: "Brain–muscle coupling during dexterous tasks",
    image: "assets/img/research/eeg-emg.svg",
    summary:
      "Multimodal EEG, EMG, and fMRI studies of hand and leg dexterity in people with TBI and stroke. Corticomuscular and intermuscular coherence reveal how common neural drive changes with fatigue, skill learning, and injury.",
    tags: ["EEG", "EMG", "Coherence", "Stroke"],
    links: []
  },
  {
    title: "Graph neural networks for harmful brain activity",
    image: "assets/img/research/gnn.svg",
    summary:
      "How does the choice of functional-connectivity measure change what a GNN can learn from EEG? I benchmark connectivity graphs and deep architectures (GNNs, transformers, variational RNN autoencoders) for classifying seizures and other harmful patterns.",
    tags: ["Deep learning", "EEG", "Epilepsy"],
    links: []
  },
  {
    title: "Sensory transmission in the primate spinal cord & brainstem",
    image: "assets/img/research/sensory.svg",
    summary:
      "Using recordings from non-human primates, I show that skin and muscle afferent signals are transmitted and modulated in distinct, active, and task-dependent ways before they reach somatosensory cortex.",
    tags: ["Neurophysiology", "Sensorimotor"],
    links: []
  }
];
