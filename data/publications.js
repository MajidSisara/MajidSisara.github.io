/* =====================================================================
   PUBLICATIONS
   type must be one of: "journal", "submitted", "preprint", "conference"
   Your name is bolded automatically.
   Optional fields:
     links:    [{ label: "PDF", url: "..." }, { label: "Code", url: "..." }]
     image:    "assets/img/pubs/figure.png"   (small thumbnail beside the entry)
     selected: true                           (shows a ★ and puts it in "Selected")
   Newest first is nicest — the list is sorted by year automatically.
   ===================================================================== */
window.PUBLICATIONS = [
  // ---------------------------- Journal papers ----------------------------
  {
    type: "journal", year: 2026, selected: true,
    title: "G-ALPS: An index for evaluating cognitive decline and aging using diffusion tensor imaging",
    authors: "Jamali, A., Abbasi Sisara, M., Nasab, E. K., Van Dam, D., & Amiri, M.",
    venue: "Alzheimer's & Dementia, 22(3), e71118",
    links: [{ label: "DOI", url: "https://doi.org/10.1002/alz.71118" }]
  },
  {
    type: "journal", year: 2025,
    title: "fMRI features in recent suicide attempters performing the future imagination task",
    authors: "Esmaeil-Zadeh, M., Fattahi, M., Rasouli, N., Soltanian-Zadeh, H., Abbasi Sisara, M., Rajab, E., … & Malakouti, S. K.",
    venue: "Psychiatry Research: Neuroimaging, 112049",
    links: []
  },
  {
    type: "journal", year: 2023, selected: true,
    title: "Quantitative assessment of resting-state functional connectivity MRI to differentiate amnestic mild cognitive impairment, late-onset Alzheimer's disease from normal subjects",
    authors: "Mohammadian, F., Zare Sadeghi, A., Noroozian, M., Malekian, V., Abbasi Sisara, M., Hashemi, H., … & Saligheh Rad, H.",
    venue: "Journal of Magnetic Resonance Imaging, 57(6), 1702–1712",
    links: []
  },
  {
    type: "journal", year: 2022,
    title: "Effectively and efficiently supporting visual big data analytics over big sequential data: An innovative data science approach",
    authors: "Cuzzocrea, A., Abbasi Sisara, M., Leung, C. K., Wen, Y., & Jiang, F.",
    venue: "International Conference on Computational Science and Its Applications (ICCSA), Springer, pp. 113–125",
    links: []
  },
  {
    type: "journal", year: 2022,
    title: "Experimental analysis and verification of a multi-modal-biometrics identity verification framework based on the Dempster-Shafer theory",
    authors: "Cuzzocrea, A., Abbasi Sisara, M., & Gallo, C.",
    venue: "Computational Intelligence in Security for Information Systems (CISIS), Springer, pp. 118–129",
    links: []
  },
  {
    type: "journal", year: 2022,
    title: "Supporting big moving objects tracking and analysis: An innovative scan-matching algorithm",
    authors: "Cuzzocrea, A., Abbasi Sisara, M., Lenac, K., & Mumolo, E.",
    venue: "SEBD, pp. 404–414",
    links: []
  },
  {
    type: "journal", year: 2021,
    title: "Task-fMRI group and functional connectivity analysis of the brain during Faradarmani consciousness field connection",
    authors: "Taheri, M. A., Torabi, S., Nabavi, N., Modarresi-Asem, F., Abbasi Sisara, M., Rezaei, A., … & Semsarha, F.",
    venue: "",
    links: []
  },

  // ---------------------------- Under review ----------------------------
  {
    type: "submitted", year: 2026, selected: true,
    title: "Skin and muscle sensory signals in primates are transmitted and modulated in distinct, active, and task-dependent ways",
    authors: "Abbasi Sisara, M., Kubota, S., Azadjou, H., Kikuta, S., Seki, K., & Valero-Cuevas, F. J.",
    venue: "Under review — Science Advances",
    links: []
  },
  {
    type: "submitted", year: 2026, selected: true,
    title: "Dexterity-dependent bilateral brain networks in monozygotic twins discordant for traumatic brain injury: An fMRI case report",
    authors: "Abbasi Sisara, M., Azadjou, H., Cohen, S., Liu, C. Y., Diaz-Arrastia, R., Duncan, D., & Valero-Cuevas, F. J.",
    venue: "Under review",
    links: []
  },
  {
    type: "submitted", year: 2026, selected: true,
    title: "Structure versus dynamics: Regional diffusion metrics detect traumatic brain injury while DTI-ALPS tracks recovery",
    authors: "Abbasi Sisara, M., Liu, C. Y., Diaz-Arrastia, R., & Valero-Cuevas, F. J.",
    venue: "Under review — Neurology",
    links: []
  },
  {
    type: "submitted", year: 2026,
    title: "The impact of different functional connectivity measures on classification of harmful brain activity using various graph neural networks",
    authors: "Abbasi Sisara, M., & Salaway, M.",
    venue: "Under review — IEEE",
    links: []
  },
  {
    type: "submitted", year: 2026,
    title: "Dexterous skill acquisition under neuromuscular fatigability leaves a lasting frequency-specific signature in the common neural drive to hand muscles",
    authors: "Bertucco, M., Abbasi Sisara, M., Benamati, A., Trinchi, M., Cesari, P., & Valero-Cuevas, F. J.",
    venue: "Under review — Frontiers in Systems Neuroscience",
    links: []
  },

  // ---------------------------- Preprints ----------------------------
  {
    type: "preprint", year: 2026,
    title: "Feasibility of simultaneous EEG-fMRI at 0.55 T: Recording, denoising, and functional mapping",
    authors: "Razmara, P., Medani, T., Abbasi Sisara, M., Joshi, A. A., Chen, R., Jeong, W., … & Leahy, R. M.",
    venue: "arXiv:2602.13489",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2602.13489" }]
  },
  {
    type: "preprint", year: 2025,
    title: "A feasibility study of task-based fMRI at 0.55 T",
    authors: "Razmara, P., Medani, T., Joshi, A. A., Abbasi Sisara, M., Tian, Y., Cui, S. X., … & Leahy, R. M.",
    venue: "arXiv:2505.20568",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2505.20568" }]
  },
  {
    type: "preprint", year: 2024,
    title: "Behavioral and neural correlates of temperament traits: Insights from temperament and character inventory and fMRI-based choice tasks",
    authors: "Abbasi Sisara, M., Hosseini, S. H. K., Mahjoub, H., Kordnaeij, A., & Esmaeilinasab, M.",
    venue: "bioRxiv 2024-11",
    links: []
  },

  // ---------------------------- Conference abstracts ----------------------------
  {
    type: "conference", year: 2025,
    title: "The bilateral brain networks for dexterous manipulation are severely compromised by TBI: An identical-twins study",
    authors: "Abbasi Sisara, M., Cohen, S., Azadjou, H., Duncan, D., Liu, C., & Valero-Cuevas, F. J.",
    venue: "Society for Neuroscience (SfN) Annual Meeting, San Diego, CA",
    links: []
  },
  {
    type: "conference", year: 2025,
    title: "The impact of different functional connectivity measures on the classification of harmful brain activity using various graph neural networks",
    authors: "Abbasi Sisara, M., Salaway, M., Hajian Berenjestanaki, M., & Valero-Cuevas, F. J.",
    venue: "Society for the Neural Control of Movement (NCM), Panama City, Panama",
    links: []
  },
  {
    type: "conference", year: 2025,
    title: "Neural dynamics during reach-to-precision-grasp behavior emerge from nonlinear recurrent cortical activity",
    authors: "Azadjou, H., Philip, R., Abbasi Sisara, M., Seki, K., & Valero-Cuevas, F. J.",
    venue: "Society for Neuroscience (SfN) Annual Meeting, San Diego, CA",
    links: []
  },
  {
    type: "conference", year: 2025,
    title: "The brainstem modulates sensory transmission to S1 in task-dependent ways",
    authors: "Abbasi Sisara, M., Azadjou, H., Kikuta, S., Kubota, S., Seki, K., & Valero-Cuevas, F. J.",
    venue: "Society for the Neural Control of Movement (NCM), Panama City, Panama",
    links: []
  }
];

// The name that gets bolded in author lists
window.MY_NAME_PATTERN = /Abbasi Sisara,? M\.?/g;
