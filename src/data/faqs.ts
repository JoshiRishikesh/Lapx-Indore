export interface FAQItem {
  question: string;
  answer: string;
  categoryName?: string;
}

export interface FAQCategory {
  title: string;
  slug: string;
  description: string;
  iconType: 'asus' | 'msi' | 'apple' | 'chip' | 'dell' | 'acer' | 'lenovo' | 'hp' | 'macbook';
  questions: FAQItem[];
}

export const faqData: FAQCategory[] = [

  // ASUS Focus
  {
    title: "Asus Service Center in Indore Vijay Nagar",
    slug: "asus-service-center-indore",
    description: "Expert Asus Laptop Repair in Vijay Nagar Indore for ROG, TUF, and Zenbook series. Specialized in Asus screen replacement and thermal management.",
    iconType: 'asus',
    questions: [
      {
        question: "How can I fix my Asus laptop overheating at home?",
        answer: "Ensure your laptop is on a hard, flat surface and use compressed air to clear the side vents. You can also lower the 'Processor Power Management' in Windows settings to 99%. If the problem persists, it likely needs professional thermal paste replacement. Visit LapX Certified Asus Service Center in Indore located in Vijay Nagar LG-31, Orbit Mall Opposite to C21 Mall, Open Daily 10:00 AM – 9:30 PM or call 9111000757."
      },
      {
        question: "How do I fix an Asus laptop stuck on 'Automatic Repair' or BIOS screen?",
        answer: "This often happens after a failed update or if the SSD is not detected. Try 'Load Optimized Defaults' (F9 then F10) in the BIOS menu. If it still loops, your SSD might have a file system error. For a permanent fix or SSD Upgrade for Laptop Indore, visit LapX Certified Asus Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "My Asus ROG laptop is not detecting the Nvidia GPU, only the Intel graphics are showing. How to fix?",
        answer: "Check 'Armoury Crate' to ensure you aren't in 'Eco Mode,' which disables the GPU. If the GPU is missing from Device Manager entirely, it may have a power delivery issue on the motherboard. For specialized Gaming Laptop Repair Indore and Chip-level repairing, visit our Asus Service Center in Indore Vijay Nagar at LapX, LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      }
    ]
  },

  // MSI Focus
  {
    title: "MSI Service Center in Indore Vijay Nagar",
    slug: "msi-service-center-indore",
    description: "Professional Gaming Laptop Repair Indore for MSI Alpha, Bravo, and Stealth series. Experts in MSI chip-level repairing and hinge repair.",
    iconType: 'msi',
    questions: [
      {
        question: "My MSI gaming laptop is shutting down during gaming, why?",
        answer: "Check if the fans are spinning using 'MSI Center' and set them to 'Cooler Boost'. If it still shuts down, the GPU might be reaching critical temperatures. For expert MSI chip-level repairing and thermal servicing, visit LapX Certified MSI Service Center in Indore located in Vijay Nagar LG-31, Orbit Mall Opposite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Reach us at 9111000757."
      },
      {
        question: "My MSI laptop screen is showing horizontal lines or artifacts, is it the GPU?",
        answer: "Connect to an external monitor via HDMI. If lines don't appear there, your laptop LCD panel is faulty. If they do appear, the GPU is failing. For expert Gaming Laptop Repair Indore and genuine MSI screen replacement, visit LapX Certified MSI Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "How do I fix the 'Scented/Burning' smell coming from my MSI gaming laptop vents?",
        answer: "Turn off the laptop immediately. This smell usually indicates a short circuit or a melting DC power jack due to high current draw during gaming. Continuing to use it can cause permanent Laptop Motherboard Repair Indore issues. Bring your device to LapX Certified MSI Service Center in Indore at LG-31, Orbit Mall, Opposite to C21 Mall, Vijay Nagar. We are open Daily 10:00 AM – 9:30 PM. Call 9111000757 for an emergency diagnostic."
      }
    ]
  },

  // MacBook Focus
  {
    title: "MacBook Service Center in Indore Vijay Nagar",
    slug: "macbook-repair-indore",
    description: "Specialized MacBook Repair Indore for Air, Pro, and M-series chips. Experts in MacBook screen replacement and Liquid Damage Repair Indore.",
    iconType: 'macbook',
    questions: [
      {
        question: "What to do if my MacBook Air/Pro is not charging?",
        answer: "Clean the MagSafe port with a soft toothpick to remove lint. Reset the SMC on Intel Macs; for M-series, hold the power button for 10 seconds. If it still won't charge, it could be a faulty logic board. For professional MacBook Repair Indore, visit LapX Certified Apple Service Center in Indore located in Vijay Nagar LG-31, Orbit Mall Opposite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "My MacBook is not turning on and the charger light is dim, what can I do?",
        answer: "Try a different charging cable or port. If the light remains dim, it usually indicates a 'G3 Hot' rail short circuit on the logic board. Bring your laptop to LapX Certified Apple Service Center in Indore located in Vijay Nagar LG-31, Orbit Mall Opposite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Chip-level repairing."
      },
      {
        question: "Why is my MacBook Pro fan running at full speed even when I’m not doing anything?",
        answer: "This is often caused by a failing thermal sensor or an 'SMC' error. On Intel Macs, try an SMC reset; on M-series Macs, check 'Activity Monitor' for a process called 'kernel_task' using high CPU. If the fans stay at max speed, there is likely a hardware sensor fault on the logic board. For expert MacBook Repair Indore, bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      }
    ]
  },

  // Chip-Level/Motherboard Focus
  {
    title: "Laptop Motherboard Repair in Indore Vijay Nagar",
    slug: "laptop-motherboard-repair-indore",
    description: "Advanced Chip-level repairing for Liquid Damage Repair Indore and power issues. The most trusted computer service center in Vijay Nagar near Orbit Mall.",
    iconType: 'chip',
    questions: [
      {
        question: "What is the best home remedy for a laptop liquid spill?",
        answer: "Immediately turn off the laptop, unplug the charger, and flip it into an 'A' shape to drain. Do not use rice or a hairdryer. If it doesn't turn on after 24 hours, you need professional Liquid Damage Repair Indore. Visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. We specialize in expert chip-level repairing. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      }
    ]
  },

  // Dell Focus
  {
    title: "Dell Service Center in Indore Vijay Nagar",
    slug: "dell-service-center-indore",
    description: "Professional Dell Laptop Repair in Vijay Nagar Indore for Inspiron, XPS, and Alienware. Specialists in Dell screen replacement and charging issues.",
    iconType: 'dell',
    questions: [
      {
        question: "My Dell laptop says 'Plugged in, not charging', how to fix?",
        answer: "Check the charging pin and try a different socket. Uninstall 'Microsoft ACPI-Compliant Control Method Battery' from Device Manager and restart. If it persists, you likely need a Dell laptop battery replacement Indore. Visit LapX Certified Dell Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "My Dell laptop screen has vertical colored lines that move when I touch the lid. Is it a software issue?",
        answer: "No, colored lines that change when the lid moves indicate a faulty EDP (display) cable or a failing LCD panel. It is a hardware fault. For genuine Dell screen replacement in Vijay Nagar, visit LapX at LG-31, Orbit Mall, Opposite to C21 Mall, Vijay Nagar. Our Expert technicians provide Same-day repair with Genuine parts. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      }
    ]
  },

  // Lenovo Focus
  {
    title: "Lenovo Service Center in Indore Vijay Nagar",
    slug: "lenovo-laptop-repair-indore",
    description: "Expert Lenovo Laptop Repair Indore for ThinkPad, IdeaPad, and Legion series. Specializing in Lenovo screen replacement and keyboard repair.",
    iconType: 'lenovo',
    questions: [
      {
        question: "How to fix a Lenovo laptop stuck on the 'Lenovo' logo?",
        answer: "Perform a 'Static Discharge': Unplug everything, hold the power button for 30 seconds, then try to boot. If it stays stuck, the SSD or RAM might be faulty. For expert Lenovo Laptop Repair Indore, visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      }
    ]
  },

  // HP Focus
  {
    title: "HP Service Center in Indore Vijay Nagar",
    slug: "hp-laptop-repair-indore",
    description: "Professional HP Laptop Repair in Vijay Nagar Indore for Pavilion, EliteBook, and Omen. Best HP screen replacement and battery services.",
    iconType: 'hp',
    questions: [
      {
        question: "Where can I get a genuine HP laptop battery replacement Indore?",
        answer: "If your HP Pavilion or Omen isn't holding a charge, visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. We provide original HP laptop battery replacement Indore with a full replacement warranty. Our HP Laptop Service Center is open Daily 10:00 AM – 9:30 PM. Contact us at 9111000757."
      }
    ]
  },

  // Acer Focus
  {
    title: "Acer Service Center in Indore Vijay Nagar",
    slug: "acer-battery-charging-repair",
    description: "Reliable Acer Laptop Repair in Vijay Nagar Indore. Specialized in Acer charging port repair and Laptop Battery Replacement Indore.",
    iconType: 'acer',
    questions: [
      {
        question: "Why is my Acer Swift/Aspire laptop battery not charging beyond 80%?",
        answer: "Check the 'Acer Care Center' app for a 'Battery Charge Limit' setting. If it's not charging at all, the DC jack may be loose. For a genuine Laptop Battery Replacement Indore or port repair, visit LapX Certified Acer Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      }
    ]
  }
];