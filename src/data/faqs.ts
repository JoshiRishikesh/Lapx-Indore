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
      },
      {
        question: "My Asus Vivobook/Zenbook keyboard is typing multiple letters or wrong characters. Is it a virus?",
        answer: "It is rarely a virus; usually, it is caused by moisture or 'carbon buildup' inside the keyboard membrane. Try uninstalling the keyboard driver from Device Manager and restarting. If it persists, the internal keyboard matrix is damaged and needs replacement. For genuine Asus keyboard or Asus screen replacement in Vijay Nagar, visit LapX Certified Asus Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "My Asus laptop screen stays black even though the power light is on. What should I do?",
        answer: "This often indicates a static charge buildup. Try a 'Static Discharge' by unplugging the charger and holding the power button for 60 seconds. If it still won't boot, the RAM or internal display cable may be faulty. For a professional diagnosis, visit our Asus Service Center in Indore Vijay Nagar at LapX, LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "How can I fix the 'USB Device Over Current Status Detected' error on my Asus laptop?",
        answer: "This error is a protective measure when a USB port is shorted or a component on the motherboard is drawing too much power. Inspect your USB ports for bent pins. If the ports look clean, the 5V power IC on the motherboard is likely damaged. Visit our Asus Service Center in Indore Vijay Nagar at Lap-X, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for professional Chip-level repairing."
      },
      {
        question: "My Asus laptop battery is stuck at 0% and says 'Plugged in, not charging.' Is the battery dead?",
        answer: "Not necessarily. This can be caused by a 'frozen' battery management controller or a failed charging IC on the motherboard. Try a BIOS reset by holding the power button for 40 seconds. If that fails, it requires a hardware check. Visit our Asus Service Center in Indore Vijay Nagar at Lap-X, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Genuine parts and Same-day repair."
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
      },
      {
        question: "My MSI laptop won't turn on unless the charger is plugged in, even though the battery shows 100%.",
        answer: "This indicates a 'Battery Circuit' failure on the motherboard or a dead battery cell that can no longer provide the 'peak current' required to boot. Try a battery calibration via the MSI Center app. If the laptop still cuts off the moment you unplug it, you need a hardware check. Visit LapX Certified MSI Service Center in Indore at LG-31, Orbit Mall, Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Genuine parts and expert repair."
      },
      {
        question: "Why does my MSI laptop make a loud grinding noise from the fans?",
        answer: "Grinding noises usually mean the fan bearings have failed or are clogged with heavy dust, which is common in high-performance gaming laptops. To prevent the GPU from overheating, the fans should be replaced or serviced. Visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Gaming Laptop Repair Indore."
      },
      {
        question: "Why is my MSI laptop stuck in 'Dragon Center' or 'MSI Center' and won't switch power modes?",
        answer: "This is often a software conflict with the 'EC' (Embedded Controller). You can perform an EC Reset by shuting down the laptop and holding the power button for 30 seconds (or using the reset pinhole on the bottom). If software resets don't work, the EC chip might need reprogramming. Visit LapX Certified MSI Service Center in Indore at LG-31, Orbit Mall, Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "How do I fix an MSI laptop that suddenly stopped detecting Wi-Fi networks?",
        answer: "First, try a 'Network Reset' in Windows settings or toggle the 'Airplane Mode' key. If the Wi-Fi option is missing from the taskbar, the internal Wi-Fi card may have loosened due to gaming vibrations or has failed. For a quick card reseating or replacement, visit LapX Certified MSI Service Center in Indore at LG-31, Orbit Mall, Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Gaming Laptop Repair Indore."
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
      },
      {
        question: "Why does my MacBook screen show a 'faint image' but the backlight is completely off?",
        answer: "This is usually a 'No Backlight' issue caused by a blown backlight fuse or a failed IC on the logic board, often due to a minor liquid spill or a shorted display cable. You can verify this by shining a flashlight through the Apple logo or at the screen; if you see your files, the logic board needs chip-level repair. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "Why is my MacBook trackpad physically hard to click or feeling 'swollen'?",
        answer: "This is a critical sign of a swollen battery pushing against the trackpad from underneath. Stop using the laptop immediately to avoid cracking the trackpad or causing a fire hazard. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for immediate MacBook Repair Indore."
      },
      {
        question: "Why does my MacBook restart unexpectedly with a 'Kernel Panic' error message?",
        answer: "Kernel panics are often caused by faulty RAM, incompatible peripherals, or deep-seated logic board issues. Try disconnecting all accessories and booting in Safe Mode. If the issue persists, it usually indicates a hardware fault in the power rails or CPU. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert MacBook Repair Indore."
      },
      {
        question: "Why is my MacBook screen showing 'Stage Light' or vertical bars at the bottom?",
        answer: "This 'Stage Light' effect is a sign of 'Flexgate,' where the thin display flex cables wear out from opening and closing the lid. Instead of a full screen replacement, we can often repair the existing cable. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for specialized MacBook Repair Indore."
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
      },
      {
        question: "Why does my Dell laptop keep saying 'AC Power Adapter Type Cannot Be Determined'?",
        answer: "This is a common Dell issue where the center 'ID Pin' in the charger or the charging port (DC Jack) is damaged, causing the laptop to run slowly and not charge the battery. To fix this, the DC Jack or the adapter needs replacement. Visit LapX Certified Dell Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. We are open Daily 10:00 AM – 9:30 PM. Call 9111000757 for genuine Dell parts."
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
      },
      {
        question: "My Lenovo Legion/IdeaPad is very slow and the disk usage is always at 100% in Task Manager.",
        answer: "If you are using a traditional HDD, it is likely failing or cannot keep up with Windows 11 updates. The best solution is to migrate to an NVMe SSD. We specialize in SSD Upgrade for Laptop Indore to make your device 10x faster. For expert Lenovo Laptop Repair Indore, visit LapX at LG-31, Orbit Mall, Opposite to C21 Mall, Vijay Nagar. We provide Same-day repair and are open Daily 10:00 AM – 9:30 PM. Call 9111000757."
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
      },
      {
        question: "How do I fix an HP laptop that is stuck on the 'HP' logo and won't load Windows?",
        answer: "This is often a 'Boot Loop' caused by a corrupted Windows update or a failing hard drive/SSD. You can try a BIOS reset by tapping F10 during startup. If the hardware is failing, an SSD upgrade is the best solution. Visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar, the best HP Laptop Service Center Indore Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
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
      },
      {
        question: "My Acer Nitro 5 is turning on, but the keyboard backlight flashes and it immediately shuts off. Why?",
        answer: "This sequence usually indicates a 'short to ground' on the main power rail or a failure in the RAM power circuit. It prevents the laptop from booting to protect the CPU. For a precision diagnostic and motherboard fix, visit LapX Certified Acer Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. We specialize in Acer charging port repair and Chip-level repairing. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      }
    ]
  }
];