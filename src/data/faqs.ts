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
      },
      {
        question: "How do I fix the 'Pin-Wheeling' or constant loading cursor on my Asus Zenbook?",
        answer: "This is often a sign of a fragmented Hard Drive or a thermal issue where the CPU is too hot to process data. Try cleaning your temporary files and checking background apps in Task Manager. If the speed doesn't improve, it's time for an SSD Upgrade for Laptop Indore. Visit our Asus Service Center in Indore Vijay Nagar at Lap-X, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Same-day repair."
      },
      {
        question: "My Asus ROG laptop fans are spinning but there is no air coming out. Why?",
        answer: "This is a common issue where dust has formed a 'carpet' or 'lint wall' between the fan and the copper heatsink fins, blocking all airflow. This causes the laptop to reach 90°C+ and shut down. A deep internal cleaning and thermal paste replacement are required. Visit our Asus Service Center in Indore Vijay Nagar at Lap-X, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert thermal management."
      },
      {
        question: "How do I fix my Asus laptop if the Wi-Fi icon has completely disappeared?",
        answer: "This 'Missing Wi-Fi' issue is common in Asus TUF and ROG series due to the Wi-Fi card overheating or getting loose. Try a 'Network Reset' in Windows settings first. If the icon doesn't return, the card may need to be reseated or replaced with a more stable Intel card. Visit our Asus Service Center in Indore Vijay Nagar at Lap-X, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Same-day repair."
      },
      {
        question: "How do I fix an Asus laptop that is stuck in a 'BIOS Loop' and won't boot Windows?",
        answer: "A BIOS loop usually means the motherboard cannot detect a bootable drive, often due to a loose or failed SSD. It can also happen if the 'Launch CSM' or 'Secure Boot' settings were changed after a Windows update. Try resetting BIOS to defaults (F9, then F10). If the SSD is still not listed, visit our Asus Service Center in Indore Vijay Nagar at Lap-X, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for SSD Upgrade for Laptop Indore."
      },
      {
        question: "How do I fix the 'USB Device Over Current Status Detected' error on my Asus motherboard?",
        answer: "This error is a safety shut-off triggered when a USB port has bent pins or a component on the motherboard has shorted out. Unplug all USB devices and check the ports for damage. If the error persists, the 5V power controller chip likely needs replacement. Visit our Asus Service Center in Indore Vijay Nagar at LapX, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for specialized Chip-level repairing."
      },
      {
        question: "My Asus ROG/TUF laptop is dropping FPS suddenly during gaming. Is it a software bug?",
        answer: "This is likely 'Thermal Throttling.' When dust clogs the cooling fins or the thermal paste dries out, the CPU/GPU slows down to prevent overheating, causing frame drops. A professional internal cleaning and high-quality thermal paste application usually solve this. Visit our Asus Service Center in Indore Vijay Nagar at LapX, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert thermal management and Same-day repair."
      },
      {
        question: "My Asus laptop keyboard is typing the wrong characters or multiple letters. How to fix?",
        answer: "This is usually caused by 'matrix failure' due to humidity or a minor liquid spill. Before replacing the keyboard, try uninstalling the 'HID Keyboard Device' from Device Manager and restarting. If it persists, the internal keyboard membrane is damaged. For a genuine replacement, visit our Asus Service Center in Indore Vijay Nagar at LapX, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for same-day repair."
      },
      {
        question: "My Asus ROG laptop is showing 'No Bootable Device' even though my SSD is plugged in. How to fix?",
        answer: "In gaming laptops like Asus ROG, high heat can sometimes cause the SSD to unseat or the controller to fail. First, check if the SSD is visible in the BIOS (F2 key). If it's missing, the SSD or the M.2 slot may be damaged. For a permanent fix or data recovery, visit our Asus Service Center in Indore Vijay Nagar at LapX, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for same-day SSD Upgrade for Laptop Indore."
      },
      {
        question: "My Asus laptop touchpad works in BIOS but stops working in Windows. Is it broken?",
        answer: "If it works in BIOS, your hardware is fine. This is usually a driver conflict or an accidental 'Function Key' (F6 or F9) press that disabled the trackpad. Try pressing the touchpad toggle key or updating the 'ASUS Precision Touchpad' drivers. If the issue persists, visit our Asus Service Center in Indore Vijay Nagar at LapX, LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Same-day repair."
      },
      {
        question: "Why is my Asus ROG/TUF laptop stuck on the 'Automatic Repair' blue screen?",
        answer: "This loop often occurs due to a corrupted boot sector or a failing NVMe SSD caused by excessive gaming heat. Try entering BIOS (F2) to see if the drive is detected. If it isn't, the SSD likely needs replacement. Visit our Asus Service Center in Indore Vijay Nagar at LapX, located in LG-31, Orbit Mall, Opposite to C21 Mall. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert SSD Upgrade for Laptop Indore."
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
      },
      {
        question: "My MSI laptop screen is flickering when I change the brightness. What should I do?",
        answer: "Flickering during brightness adjustment usually points to a failing backlight inverter or a loose display (EDP) cable. In some cases, it can be a driver conflict with the MSI True Color app. For a professional hardware check, visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Gaming Laptop Repair Indore."
      },
      {
        question: "How do I fix the 'Battery LED Blinking Orange' on my MSI laptop?",
        answer: "A blinking orange light typically means the battery has suffered a permanent failure or the charging circuit on the motherboard is malfunctioning. Try an 'EC Reset' by pressing the reset hole on the bottom for 10 seconds. If the blinking continues, the battery needs replacement. Visit LapX Certified MSI Service Center in Indore at LG-31, Orbit Mall, Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Gaming Laptop Repair Indore."
      },
      {
        question: "Why is the paint on my MSI laptop palm rest peeling or bubbling?",
        answer: "This is often caused by 'Palm Sweat Acidity' reacting with the chassis coating, or excessive internal heat transferring to the surface. To prevent further damage, avoid using harsh cleaning chemicals. If you want a fresh look, we offer body part replacements. Visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Gaming Laptop Repair Indore."
      },
      {
        question: "My MSI laptop keyboard is missing keypresses or double-typing. Can this be repaired?",
        answer: "Mechanical or membrane fatigue is common in MSI gaming keyboards due to high-intensity use. While cleaning with isopropyl alcohol might help temporarily, it usually requires a full keyboard replacement. For professional MSI keyboard repair, visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Gaming Laptop Repair Indore."
      },
      {
        question: "My MSI laptop hinge is making a cracking sound. Should I keep using it?",
        answer: "No, stop immediately! MSI gaming laptops often have tight hinges that pull away from the plastic frame. Forcing it will eventually crack the LCD panel or the bezel. We can reinforce the hinge mounts with industrial epoxy to make them stronger than the original. Visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for professional hinge repair and Gaming Laptop Repair Indore."
      },
      {
        question: "How do I fix the 'No Bootable Device' error on my MSI gaming laptop?",
        answer: "This error means your motherboard cannot find the SSD. It can be caused by a failed SSD or a corrupted boot sector. Try reseating the SSD or checking BIOS settings (F2/Del key). If the drive is dead, we can help with data recovery and a new drive installation. Visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for SSD Upgrade for Laptop Indore and Gaming Laptop Repair Indore."
      },
      {
        question: "Why is my MSI laptop stuck in an 'Automatic Repair' loop after a Windows update?",
        answer: "An Automatic Repair loop usually signifies a corrupted boot sector or a failing SSD. In MSI laptops, high heat can sometimes desolder SSD components over time. You can try a 'System Restore' from the advanced options, but if it fails, the SSD likely needs replacement. Visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Gaming Laptop Repair Indore and SSD Upgrade for Laptop Indore."
      },
      {
        question: "How do I fix the 'Scented/Burning' smell coming from my MSI laptop vents during gaming?",
        answer: "A burning smell usually indicates a melting DC Power Jack or a short circuit on the motherboard's power rails due to excessive current draw. Stop using the laptop immediately to prevent a fire hazard or CPU damage. Visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Gaming Laptop Repair Indore and Chip-level repairing."
      },
      {
        question: "How do I fix the 'Static Crackling' sound in my MSI laptop speakers?",
        answer: "Static crackling is often caused by electromagnetic interference from the GPU or a failing audio capacitor on the motherboard. Sometimes, reinstalling the Nahimic Audio drivers can fix it. If it’s a physical speaker pop, the hardware needs replacement. Visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Gaming Laptop Repair Indore."
      },
      {
        question: "How do I fix the 'Grinding Noise' coming from my MSI laptop fans?",
        answer: "A grinding or rattling noise indicates the fan's hydraulic bearing has dried out or the blades are hitting dust buildup. Continuing to use it will lead to 'Thermal Throttling' and potential GPU damage. Visit LapX Certified MSI Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Gaming Laptop Repair Indore and fan replacement."
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
      },
      {
        question: "Why is my MacBook Pro keyboard not responding, or keys are getting stuck?",
        answer: "On older MacBook models with butterfly switches, even a tiny speck of dust can cause keys to fail. For newer M1/M2/M3 Macs, it is usually caused by a software glitch or a faulty trackpad cable which controls the keyboard. Try an external keyboard to confirm. If it's a hardware issue, bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for MacBook Repair Indore."
      },
      {
        question: "Why is my MacBook stuck on the 'Loading Bar' during startup?",
        answer: "A MacBook stuck on the Apple logo with a loading bar usually indicates a corrupted File System or a failing SSD/Logic Board component. You can try booting into 'Recovery Mode' (Command + R or holding the Power button) to run Disk Utility. If First Aid fails, it likely requires professional data recovery or chip-level repair. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for MacBook Repair Indore."
      },
      {
        question: "Why does my MacBook trackpad stop clicking when the laptop gets hot?",
        answer: "This is a major warning sign of battery swelling. As the battery heats up and expands, it puts pressure on the trackpad assembly from below, making it physically impossible to click. Continued use can crack the glass trackpad. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for immediate MacBook Repair Indore."
      },
      {
        question: "Why does my MacBook screen have vertical flickering lines or a 'shutter' effect?",
        answer: "Vertical lines or a 'shutter' flickering effect are often symptoms of a damaged display flex cable or 'Flexgate' issue, where the cable wears down from repeated lid movement. In some cases, it can also be a failing T-CON board. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert MacBook Repair Indore and screen replacement."
      },
      {
        question: "Why does my MacBook Pro screen go black when I open it more than 45 degrees?",
        answer: "This is a classic 'Flexgate' symptom caused by the display flex cable being too short and wearing out over time. When the lid is opened past a certain angle, the connection breaks. Instead of a full screen replacement, we can often perform a micro-solder repair to extend the cable. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert MacBook Repair Indore."
      },
      {
        question: "Why does my MacBook trackpad feel 'mushy' or won't click physically?",
        answer: "A trackpad that loses its 'click' feel is a major warning sign of a swollen battery. As the lithium-ion cells expand, they press against the trackpad from underneath, causing it to jam. Continuing to use it can crack the glass trackpad. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for immediate MacBook Repair Indore and battery replacement."
      },
      {
        question: "Why does my MacBook screen stay black even though I can hear the startup chime?",
        answer: "This often indicates a backlight failure or a faulty hall sensor (the sensor that tells the Mac the lid is closed). You can check by shining a bright light at the screen; if you see a faint image, the backlight circuit on the logic board needs repair. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert MacBook Repair Indore."
      },
      {
        question: "Why does my MacBook Pro charger light stay green but the battery percentage doesn't increase?",
        answer: "This is a common sign of a communication failure between the battery's BMS (Battery Management System) and the logic board. It can be caused by a dirty MagSafe port or a failing charging IC (ISL chip). Try cleaning the port with a soft brush and isopropyl alcohol. If the issue remains, bring your device to LapX Certified Apple Service Center in Indore located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert MacBook Repair Indore."
      },
      {
        question: "Why does my MacBook M1/M2 screen have a thin horizontal line across the middle?",
        answer: "Horizontal lines on Apple Silicon MacBooks are usually caused by 'Dustgate'—small debris getting trapped between the screen and the flex cables—or a hairline crack in the LCD. This is a hardware fault that typically requires a display assembly replacement. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert MacBook Repair Indore."
      },
      {
        question: "My MacBook Pro screen has 'shutter-like' black bars at the bottom. Is the display dying?",
        answer: "This is a typical symptom of 'Flexgate' or a failing T-CON board, where the display flex cable gets damaged from opening and closing the lid. Before opting for a full screen replacement, we can often repair the cable via micro-soldering. Bring your laptop to LapX Certified Apple Service Center in Indore which is located in Vijay nagar LG-31, Orbit Mall Oppsite to C21 Mall, Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for MacBook Repair Indore."
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
      },
      {
        question: "Why is my Dell laptop making a loud beeping sound (3 or 7 times) when I turn it on?",
        answer: "Dell laptops use 'Beep Codes' to signal hardware failure. For example, 3 beeps often indicate a Chipset/Motherboard failure, while 7 beeps usually mean a CPU/Processor error. These require advanced diagnostic tools to locate the short circuit. Visit LapX Certified Dell Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. We specialize in Dell motherboard repair and Chip-level repairing. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "My Dell Inspiron/XPS laptop fan is always at 100% speed even on the desktop. Why?",
        answer: "This is often caused by a failed thermal sensor or 'Thermal Throttling' due to dried-out thermal paste. If the sensors detect 90°C+, the fans will stay at max speed to protect the hardware. A professional thermal repasting and internal cleaning are required. Visit LapX Certified Dell Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Dell laptop repair in Vijay Nagar."
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
      },
      {
        question: "Why does my Lenovo Yoga/Flex laptop screen show 'Ghost Touches' (touching itself)?",
        answer: "Ghost touches are often caused by static buildup or a hairline crack in the digitizer. You can try disabling and re-enabling the 'HID-compliant touch screen' in Device Manager as a temporary fix. For a permanent solution, the touch glass may need replacement. Visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar, the best Lenovo Laptop Repair Indore center. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "Why is my Lenovo ThinkPad/IdeaPad stuck on a 'Black Screen with Cursor' after login?",
        answer: "This is usually caused by a corrupted 'Windows Explorer' process or a failing storage drive. You can try pressing Ctrl+Alt+Del to open Task Manager and manually start 'explorer.exe'. If the issue repeats, your SSD might have bad sectors. For a reliable SSD Upgrade for Laptop Indore, visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Lenovo Laptop Repair Indore."
      },
      {
        question: "My Lenovo Legion keyboard backlight is on, but the keys aren't typing. What's wrong?",
        answer: "This is a common 'Controller Lock' issue in the Lenovo Legion series. Try a 'Static Discharge': Unplug the charger, hold the power button for 60 seconds, then restart. If the keys still don't respond, the internal keyboard connector might be loose or damaged. For expert Lenovo Laptop Repair Indore, visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
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
      },
      {
        question: "Why is my HP laptop screen dim even at 100% brightness?",
        answer: "If your HP screen is very dark, it could be a failing backlight LED, a faulty hall sensor (lid sensor), or a blown backlight fuse on the motherboard. Sometimes, it's caused by the 'Adaptive Brightness' setting in the Intel Graphics Command Center. For a hardware fix, visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar, the leading HP Laptop Service Center Indore Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "Why is my HP Pavilion/Omen laptop fan making a loud grinding or rattling noise?",
        answer: "Loud rattling usually indicates that the fan bearing has worn out or a blade is hitting the fan housing. Cleaning with air might not work if the hardware is physically damaged. A genuine fan replacement is required to avoid CPU damage. Visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar, the best HP Laptop Service Center Indore Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757."
      },
      {
        question: "My HP Pavilion/Omen laptop battery is 100% charged but the laptop shuts off when I unplug it.",
        answer: "This indicates a 'Battery Cell Failure' or a blown MOSFET on the motherboard's power distribution circuit. The battery shows 100% voltage but cannot provide the current needed to run the system. For a genuine HP laptop battery replacement Indore, visit LapX at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for HP Laptop Service Center Indore Vijay Nagar."
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
      },
      {
        question: "Why does my Acer Predator/Nitro laptop shut down as soon as I unplug the charger?",
        answer: "This indicates a 'Battery Communication' failure. High-performance Acer laptops can sometimes blow a MOSFET on the motherboard's charging circuit, or the battery has reached its end-of-life cycle. For a precision motherboard repair or battery swap, visit LapX Certified Acer Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for Chip-level repairing."
      },
      {
        question: "My Acer Nitro 5 is turning on but the screen is completely white. What happened?",
        answer: "A solid white screen is usually a sign of a faulty LCD cable or a blown fuse on the LCD panel itself. It happens when the internal display cable gets pinched in the hinge. For a precision display diagnostic or Acer screen replacement, visit LapX Certified Acer Service Center in Indore at LG-31, Orbit Mall Opposite to C21 Mall, Vijay Nagar. Open Daily 10:00 AM – 9:30 PM. Call 9111000757 for expert Chip-level repairing."
      }
    ]
  }
];