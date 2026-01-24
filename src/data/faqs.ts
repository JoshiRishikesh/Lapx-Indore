export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  slug: string;
  description: string;
  iconType: 'asus' | 'msi' | 'apple' | 'chip' | 'dell' | 'acer' | 'lenovo' | 'hp' | 'macbook';
  questions: FAQItem[];
}

export const faqData: FAQCategory[] = [
  // ASUS Laptop Repair
  {
    title: "Asus Service Center in Indore Vijay Nagar",
    slug: "asus-service-center-indore",
    description: "Expert Asus Laptop Repair in Vijay Nagar Indore for ROG, TUF, and Zenbook series. Specialized in Asus screen replacement and thermal management.",
    iconType: 'asus',
    questions: [
      {
        question: "How can I fix my Asus laptop overheating at home?",
        answer: "As a home remedy, ensure your laptop is on a hard, flat surface and use a vacuum or compressed air to clear the side vents. You can also lower the 'Processor Power Management' in Windows settings to 99%. If the problem still appears, it likely needs professional thermal paste replacement. Visit our Asus Service Center in Indore Vijay Nagar at Lap-X or call 9111000757."
      },
      {
        question: "What should I do if my Asus ROG or TUF display is flickering?",
        answer: "Try updating your Intel and Nvidia drivers from the official site. Also, try a BIOS reset by holding the power button for 40 seconds. If the flickering persists, it indicates a hardware fault. For genuine Asus screen replacement in Vijay Nagar, visit Lap-X Indore or contact 9111000757."
      },
      {
        question: "My Asus laptop is slow; can I upgrade the SSD in Indore?",
        answer: "Yes, you can improve speed by clearing startup apps and temp files. For a permanent fix, an SSD upgrade is the best solution. We provide same-day SSD upgrade for laptop Indore at our Vijay Nagar center. Visit our Asus Service Center or call 9111000757 for pricing."
      }
    ]
  },

  // MSI Gaming Repair
  {
    title: "MSI Service Center Indore",
    slug: "msi-service-center-indore",
    description: "Professional Gaming Laptop Repair Indore for MSI Alpha, Bravo, and Stealth series. Experts in MSI chip-level repairing and hinge repair.",
    iconType: 'msi',
    questions: [
      {
        question: "How do I fix MSI laptop hinge noise or tightness?",
        answer: "Never lift the screen from one corner; always open it from the middle. If the hinge is tight, avoid forcing it as it can break the LCD panel. As a temporary fix, ensure no debris is stuck in the gap. For professional MSI hinge repair, visit our MSI Service Center Indore at Lap-X, Vijay Nagar. If the problem still appears, call 9111000757."
      },
      {
        question: "My MSI gaming laptop is shutting down during gaming, why?",
        answer: "Check if the fans are spinning. You can use 'MSI Center' to set fans to 'Cooler Boost' mode. If it still shuts down, the GPU might be reaching critical temperatures. For expert MSI chip-level repairing and thermal servicing, visit Lap-X, the best MSI Service Center Indore. Reach us at 9111000757."
      }
    ]
  },

  // Motherboard & Chip-Level Repair
  {
    title: "Laptop Motherboard Repair Indore",
    slug: "laptop-motherboard-repair-indore",
    description: "Advanced Chip-level repairing for Liquid Damage Repair Indore and power issues. The most trusted computer service center in Vijay Nagar near Orbit Mall.",
    iconType: 'chip',
    questions: [
      {
        question: "What is the best home remedy for a laptop liquid spill?",
        answer: "Immediately turn off the laptop and unplug the charger. Flip the laptop into an 'A' shape to let the liquid drain out. Do not use rice or a hairdryer as they can cause more damage. If the laptop does not turn on after 24 hours, you need professional Liquid Damage Repair Indore. Visit Lap-X in Vijay Nagar for expert chip-level repairing or call 9111000757."
      },
      {
        question: "Can a dead laptop motherboard be repaired in Indore?",
        answer: "Often, yes! Most 'dead' laptops have a short circuit on the motherboard. Avoid repeatedly trying to turn it on, as this can burn the CPU. For expert Laptop Motherboard Repair Indore, bring your device to Lap-X at Orbit Mall. We specialize in chip-level component replacement. Call 9111000757."
      }
    ]
  },

  // Dell Laptop Repair
  {
    title: "Dell Service Center Indore Vijay Nagar",
    slug: "dell-service-center-indore",
    description: "Professional Dell Laptop Repair in Vijay Nagar Indore for Inspiron, XPS, and Alienware. Specialists in Dell screen replacement and charging issues.",
    iconType: 'dell',
    questions: [
      {
        question: "My Dell laptop says 'Plugged in, not charging', how to fix?",
        answer: "Check the charging pin for damage and try a different wall socket. You can also try uninstalling the 'Microsoft ACPI-Compliant Control Method Battery' from Device Manager and restarting. If the problem still appears, you may need a Dell laptop battery replacement Indore. Visit our Dell Service Center in Indore Vijay Nagar or call 9111000757."
      },
      {
        question: "Where can I get Dell screen replacement in Vijay Nagar?",
        answer: "If your Dell screen has lines or a crack, a hardware replacement is necessary. Lap-X provides genuine Dell screen replacement in Vijay Nagar with a warranty. Visit us at Orbit Mall or call 9111000757 for a free quote."
      }
    ]
  },

  // Lenovo Laptop Repair
  {
    title: "Lenovo Laptop Repair Indore",
    slug: "lenovo-laptop-repair-indore",
    description: "Expert Lenovo Laptop Repair Indore for ThinkPad, IdeaPad, and Legion series. Specializing in Lenovo screen replacement and keyboard repair.",
    iconType: 'lenovo',
    questions: [
      {
        question: "How to fix a Lenovo laptop stuck on the 'Lenovo' logo?",
        answer: "Perform a 'Static Discharge': Unplug everything, hold the power button for 30 seconds, then try to boot. If it stays stuck, the SSD or RAM might be faulty. For expert Lenovo Laptop Repair Indore, visit our Vijay Nagar center. We offer genuine parts and expert diagnostics. Call 9111000757."
      },
      {
        question: "Does my Lenovo laptop need an SSD upgrade in Indore?",
        answer: "If your Lenovo takes more than 30 seconds to boot, an SSD upgrade is highly recommended. We specialize in SSD upgrade for laptop Indore to make your device 10x faster. Visit our Lenovo Laptop Repair Indore center or call 9111000757."
      }
    ]
  },

  // HP Laptop Repair
  {
    title: "HP Laptop Service Center Indore Vijay Nagar",
    slug: "hp-laptop-repair-indore",
    description: "Professional HP Laptop Repair in Vijay Nagar Indore for Pavilion, EliteBook, and Omen. Best HP screen replacement and battery services.",
    iconType: 'hp',
    questions: [
      {
        question: "How do I fix an HP laptop fan that is always loud?",
        answer: "Try updating your BIOS through the HP Support Assistant. Also, ensure 'Fan Always On' is disabled in the BIOS settings if you prefer quiet operation. If the noise is a grinding sound, the fan motor is failing. Visit our HP Laptop Service Center Indore Vijay Nagar for a genuine fan replacement. Call 9111000757."
      },
      {
        question: "Where can I get a genuine HP laptop battery replacement Indore?",
        answer: "If your HP Pavilion or Omen isn't holding a charge, visit Lap-X at Orbit Mall. We provide original HP laptop battery replacement Indore with a full replacement warranty. Contact our HP Laptop Service Center at 9111000757."
      }
    ]
  },

  // MacBook Repair
  {
    title: "MacBook Repair Indore Vijay Nagar",
    slug: "macbook-repair-indore",
    description: "Specialized MacBook Repair Indore for Air, Pro, and M-series chips. Experts in MacBook screen replacement and Liquid Damage Repair Indore.",
    iconType: 'macbook',
    questions: [
      {
        question: "What to do if my MacBook Air/Pro is not charging?",
        answer: "Try cleaning the MagSafe port with a soft toothpick to remove lint. Reset the SMC (System Management Controller) on Intel Macs. If the problem still appears, it could be a faulty logic board or battery. For professional MacBook Repair Indore, visit Lap-X in Vijay Nagar or call 9111000757."
      },
      {
        question: "Can I fix a MacBook with a black screen at home?",
        answer: "Try a 'Force Restart' (Hold Power button for 10s) or reset the NVRAM/PRAM. If you hear the startup sound but see no image, the backlight or display cable is faulty. For premium MacBook screen replacement in Vijay Nagar, visit Lap-X Indore or call 9111000757."
      }
    ]
  },
  {
  title: "MacBook Repair Indore Vijay Nagar",
  slug: "macbook-logic-board-repair-indore",
  description: "Specialized MacBook Repair Indore for logic board short circuits and power issues. Expert Liquid Damage Repair Indore for M-series and Intel Macs.",
  iconType: 'macbook',
  questions: [
    {
      question: "My MacBook is not turning on and the charger light is dim, what can I do?",
      answer: "First, try a different charging cable or port. For Intel Macs, try an SMC reset; for M1/M2/M3 Macs, ensure you hold the power button for 10 seconds. If the light remains dim, it usually indicates a 'G3 Hot' rail short circuit on the logic board. For professional MacBook Repair Indore, bring your device to Lap-X in Vijay Nagar for expert Chip-level repairing or call 9111000757."
    }
  ]
},
{
  title: "Asus Service Center in Indore Vijay Nagar",
  slug: "asus-laptop-power-repair",
  description: "Advanced Asus Laptop Repair in Vijay Nagar Indore. Experts in BIOS recovery, power IC replacement, and Asus screen replacement.",
  iconType: 'asus',
  questions: [
    {
      question: "How do I fix an Asus laptop stuck on 'Automatic Repair' or BIOS screen?",
      answer: "This often happens after a failed Windows update or if the SSD is not detected. Try 'Load Optimized Defaults' (F9 then F10) in the BIOS menu. If it still loops, your SSD might have a file system error. For a permanent fix or SSD Upgrade for Laptop Indore, visit our Asus Service Center in Indore Vijay Nagar at Lap-X or call 9111000757 for Same-day repair."
    }
  ]
},
{
  title: "MSI Service Center Indore",
  slug: "msi-display-gpu-repair",
  description: "Professional MSI Service Center Indore for gaming laptop display issues and GPU servicing. Experts in Gaming Laptop Repair Indore.",
  iconType: 'msi',
  questions: [
    {
      question: "My MSI laptop screen is showing horizontal lines or artifacts, is it the GPU?",
      answer: "Connect your laptop to an external monitor via HDMI. If the lines don't appear on the external screen, your laptop LCD panel or EDP cable is faulty. If they do appear, the GPU is overheating or failing. For expert Gaming Laptop Repair Indore and genuine MSI screen replacement, visit Lap-X, the leading MSI Service Center Indore, or call 9111000757."
    }
  ]
},
{
  title: "Acer Service Center Indore",
  slug: "acer-battery-charging-repair",
  description: "Reliable Acer Laptop Repair in Vijay Nagar Indore. Specialized in Acer charging port repair and Laptop Battery Replacement Indore.",
  iconType: 'acer',
  questions: [
    {
      question: "Why is my Acer Swift/Aspire laptop battery not charging beyond 80%?",
      answer: "Check the 'Acer Care Center' app; you might have 'Battery Charge Limit' enabled to protect battery health. If it's not charging at all, the DC jack might be loose. For a quick fix or a genuine Laptop Battery Replacement Indore, visit Lap-X, your trusted Acer Service Center Indore near Orbit Mall, or call 9111000757."
    }
  ]
}
];