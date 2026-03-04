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

  // ASUS
  {
    title: "Asus Service Center in Indore Vijay Nagar",
    slug: "asus-service-center-indore",
    description:
      "LapX is a trusted Asus Service Center in Indore Vijay Nagar specializing in ROG, TUF, Zenbook, and Vivobook repair. We provide screen replacement, motherboard repair, SSD upgrades, GPU issues, and thermal servicing near Orbit Mall.",
    iconType: 'asus',
    questions: [
      {
        question: "How can I fix my Asus laptop overheating?",
        answer:
          "Ensure the laptop is placed on a hard surface and clean air vents using compressed air. Overheating is usually caused by dust buildup or dried thermal paste. If temperatures cross 90°C, internal cleaning and thermal repasting are required. Visit LapX in Vijay Nagar, Indore for professional thermal servicing.",
        categoryName: "Overheating"
      },
      {
        question: "Why is my Asus laptop stuck in a BIOS loop or showing 'No Bootable Device'?",
        answer:
          "This usually means the SSD is not detected or has failed. Reset BIOS to default settings (F9 → F10). If the drive is missing from BIOS storage list, the SSD or motherboard slot may be faulty. We provide SSD replacement and data-safe upgrades in Indore.",
        categoryName: "Boot Problems"
      },
      {
        question: "Why is my Asus ROG GPU not detected in Task Manager?",
        answer:
          "Check Armoury Crate and ensure Eco/iGPU mode is disabled. If the Nvidia GPU is still missing, it may indicate a power delivery issue on the motherboard. This requires chip-level diagnostics.",
        categoryName: "GPU Issues"
      },
      {
        question: "Why is my Asus laptop keyboard typing wrong characters or double letters?",
        answer:
          "This is usually caused by keyboard matrix failure due to moisture or dust buildup. Reinstalling keyboard drivers may temporarily fix it, but hardware replacement is often required.",
        categoryName: "Keyboard Issues"
      },
      {
        question: "Why is my Asus laptop screen flickering at 144Hz?",
        answer:
          "Flickering at high refresh rates is commonly caused by a failing EDP cable or LCD timing controller. Lowering refresh rate to 60Hz may temporarily reduce flicker, but screen replacement is the permanent solution.",
        categoryName: "Display Problems"
      },
      {
        question: "Why is my Asus laptop battery stuck at 0% and not charging?",
        answer:
          "This may indicate a failed battery management circuit or charging IC issue. Try a power reset by holding the power button for 40 seconds. If the issue continues, hardware inspection is required.",
        categoryName: "Battery Issues"
      }
    ]
  },

  // MSI
  {
    title: "MSI Service Center in Indore Vijay Nagar",
    slug: "msi-service-center-indore",
    description:
      "Professional MSI Gaming Laptop Repair in Indore for Alpha, Bravo, Stealth and Raider series. Experts in chip-level repairing, hinge reconstruction, thermal servicing and GPU diagnostics.",
    iconType: 'msi',
    questions: [
      {
        question: "Why is my MSI gaming laptop shutting down during gaming?",
        answer:
          "Sudden shutdowns are usually caused by GPU overheating or VRM thermal throttling. Enable Cooler Boost in MSI Center. If shutdown continues, internal cleaning and thermal paste replacement are required.",
        categoryName: "Overheating"
      },
      {
        question: "Why is my MSI laptop fan making a loud grinding noise?",
        answer:
          "Grinding or rattling sounds indicate failed fan bearings or heavy dust blockage. Continuing usage can cause GPU damage. Fan replacement or deep internal cleaning is recommended.",
        categoryName: "Overheating"
      },
      {
        question: "How do I fix MSI hinge cracking or popping out?",
        answer:
          "MSI laptops often suffer hinge separation where metal hinges detach from plastic mounts. Avoid forcing the lid. Professional hinge reconstruction with structural bonding prevents LCD damage.",
        categoryName: "Hinge Problems"
      },
      {
        question: "Why is my MSI laptop stuck in an Automatic Repair loop?",
        answer:
          "This is usually due to a corrupted boot sector or failing SSD. Check BIOS if the drive is detected. If missing, SSD replacement may be required.",
        categoryName: "Boot Problems"
      },
      {
        question: "Why does my MSI laptop have a burning smell from vents?",
        answer:
          "A burning smell indicates DC jack overheating or motherboard short circuit. Stop using the device immediately and get it diagnosed to prevent permanent damage.",
        categoryName: "Motherboard Issues"
      }
    ]
  },

  // MacBook
  {
    title: "MacBook Service Center in Indore Vijay Nagar",
    slug: "macbook-repair-indore",
    description:
      "Specialized MacBook Repair in Indore for Air, Pro and M1/M2/M3 models. Experts in Flexgate repair, liquid damage, backlight issues, battery swelling and chip-level motherboard repairs.",
    iconType: 'macbook',
    questions: [
      {
        question: "Why does my MacBook trackpad feel hard or swollen?",
        answer:
          "A swollen battery pushes against the trackpad from underneath. Stop using the device immediately to prevent trackpad or logic board damage. Battery replacement is required.",
        categoryName: "Battery Issues"
      },
      {
        question: "What is Flexgate in MacBook Pro?",
        answer:
          "Flexgate is a display flex cable failure that causes 'Stage Light' effect or screen blackout at certain angles. Micro-solder repair can often fix this without full display replacement.",
        categoryName: "Display Problems"
      },
      {
        question: "Why is my MacBook screen black but I hear startup sound?",
        answer:
          "This usually indicates backlight circuit failure. Shine a flashlight at the screen; if you see faint images, the backlight IC or fuse needs repair.",
        categoryName: "Display Problems"
      },
      {
        question: "Why is my MacBook not charging even though the charger light is on?",
        answer:
          "This may be a charging IC issue or battery communication failure. Cleaning the MagSafe port may help temporarily, but board-level repair may be required.",
        categoryName: "Charging Issues"
      }
    ]
  },

  // Dell
  {
    title: "Dell Service Center in Indore Vijay Nagar",
    slug: "dell-service-center-indore",
    description:
      "Reliable Dell Laptop Repair in Indore for Inspiron, XPS and Alienware. Specialists in charging pin repair, screen replacement, motherboard diagnostics and battery replacement.",
    iconType: 'dell',
    questions: [
      {
        question: "Why does my Dell laptop say 'AC Adapter Type Cannot Be Determined'?",
        answer:
          "This Dell-specific error happens when the center ID pin in the charger or DC jack is damaged. The laptop will run slowly and not charge properly. DC jack or adapter replacement is required.",
        categoryName: "Charging Issues"
      },
      {
        question: "Why is my Dell laptop making beep sounds on startup?",
        answer:
          "Dell beep codes indicate hardware failure. 3 beeps often mean motherboard issue, while 7 beeps may indicate CPU failure. Professional diagnostics are required.",
        categoryName: "Motherboard Issues"
      }
    ]
  },

  // Lenovo
  {
    title: "Lenovo Service Center in Indore Vijay Nagar",
    slug: "lenovo-laptop-repair-indore",
    description:
      "Expert Lenovo Laptop Repair in Indore for ThinkPad, IdeaPad, Yoga and Legion series. We provide SSD upgrades, keyboard repair, screen replacement and motherboard servicing.",
    iconType: 'lenovo',
    questions: [
      {
        question: "Why is my Lenovo laptop stuck on the Lenovo logo?",
        answer:
          "This is usually caused by corrupted Windows boot files or a failing SSD. Try a static discharge reset. If it persists, storage diagnostics are required.",
        categoryName: "Boot Problems"
      },
      {
        question: "Why is my Lenovo disk usage always 100%?",
        answer:
          "High disk usage is common with failing HDDs. Upgrading to an NVMe SSD significantly improves speed and performance.",
        categoryName: "SSD / Storage"
      }
    ]
  },

  // HP
  {
    title: "HP Service Center in Indore Vijay Nagar",
    slug: "hp-service-center-indore",
    description:
      "Professional HP Laptop Repair in Indore for Pavilion, EliteBook and Omen series. Experts in battery replacement, fan issues, motherboard repair and screen servicing.",
    iconType: 'hp',
    questions: [
      {
        question: "Why is my HP laptop stuck on HP logo?",
        answer:
          "This is often caused by corrupted updates or failing storage drive. BIOS reset may help temporarily, but SSD replacement is often required.",
        categoryName: "Boot Problems"
      },
      {
        question: "Why is my HP laptop fan making loud grinding noise?",
        answer:
          "Grinding noise indicates failed fan bearings. Continuing usage may cause CPU overheating. Fan replacement is recommended.",
        categoryName: "Overheating"
      }
    ]
  },

  // Motherboard
  {
    title: "Laptop Motherboard Repair in Indore Vijay Nagar",
    slug: "laptop-motherboard-repair-indore",
    description:
      "Advanced chip-level repairing and liquid damage repair in Indore near Orbit Mall. Specialists in short-circuit diagnostics, charging IC replacement and motherboard reconstruction.",
    iconType: 'chip',
    questions: [
      {
        question: "What should I do immediately after laptop liquid spill?",
        answer:
          "Turn off the laptop immediately, unplug charger, and flip it in an inverted 'V' position. Do not use rice or heat. Professional internal cleaning is required to prevent motherboard corrosion.",
        categoryName: "Liquid Damage"
      }
    ]
  }

];