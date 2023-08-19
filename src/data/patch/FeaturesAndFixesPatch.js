export const featuresAndFixesPatch1 = 
{
  priority: 3,
  type: "overwrite",
  filename: "ff-23m.8h",
  byteFormat: "hex",
  data:
  {
    // Bring back Holly Wood / El Gado immortal bug code.
    // Necessary step to use the alternative way to fix this bug.
    "224592": ["06", "6A", "7C", "1D", "01", "00", "9D", "00"],

    // Instruction that redirects the execution to where 
    // the new code that handles Holly Wood / El Gado
    // posture ID after being knocked out.
    "220510": ["F9", "4E", "07", "00", "00", "5A"],

    // Code that checks if Holly Wood / El Gado is dead 
    // before setting his posture ID after being knocked 
    // out. It fixes the immortal bug.
    "481792":
    [
      "6E", "4A", "18", "00", "0A", "6C", "7C", "3D",
      "02", "04", "02", "00", "6E", "42", "04", "00",
      "6E", "2D", "0E", "00", "0A", "00", "F9", "4E",
      "03", "00", "64", "5D" 
    ],



    // Bring back Rolento immortal bug code.
    // Necessary step to use the alternative way to fix this bug.
    "307100": ["06", "6A", "7C", "1D", "01", "00", "8D", "00"],

    // Instruction that redirects the execution to where 
    // the new code that handles Rolento's posture ID 
    // after being knocked out.
    "301858": ["F9", "4E", "07", "00", "20", "5A"],

    // Code that checks if Rolento is dead before setting 
    // his posture ID after being knocked out. It fixes 
    // the immortal bug.
    "481824":
    [
      "6E", "4A", "18", "00", "0A", "6C", "7C", "3D",
      "02", "04", "02", "00", "6E", "42", "04", "00",
      "6E", "2D", "0E", "00", "0A", "00", "F9", "4E",
      "04", "00", "28", "9B"
    ]
  }
}