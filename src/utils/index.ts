export const setBaseFile = async () => {
  if (localStorage.getItem("MISP-string-file")) return;
  const response = await fetch("../src/utils/program.asm");
  const fileContent: string = await response.text();
  localStorage.setItem("MISP-string-file", JSON.stringify(fileContent));
};

export const isAssemblyCodeFormatCorrect = (assemblyCode: string): boolean => {
  // Define regular expressions for different types of instructions
  const instructionRegexes: { [key: string]: RegExp } = {
    comment: /^#.*$/, // Matches comments
    addi: /^\s*addi\s+\$\w+\s*,\s*\$\w+\s*,\s*\-?\d+\s*$/i, // Matches addi instructions
    sw: /^\s*sw\s+\$\w+\s*,\s*\-?\d+\(\$zero\)\s*$/i, // Matches sw instructions
    lw: /^\s*lw\s+\$\w+\s*,\s*\-?\d+\(\$zero\)\s*$/i, // Matches lw instructions
    add: /^\s*add\s+\$\w+\s*,\s*\$\w+\s*,\s*\$\w+\s*$/i, // Matches add instructions
    mult: /^\s*mult\s+\$\w+\s*,\s*\$\w+\s*,\s*\$\w+\s*$/i, // Matches mult instructions
    beq: /^\s*beq\s+\$\w+\s*,\s*\$\w+\s*,\s*\-?\d+\s*$/i, // Matches beq instructions
    "addi,": /^\s*addi\s+\$\w+\s*,\s*\$\w+\s*,\s*\-?\d+\s*$/i, // Matches addi, instructions
  };

  // Split code into lines and check each line
  const lines = assemblyCode.split("\n");
  for (const line of lines) {
    // Trim leading and trailing whitespace
    const trimmedLine = line.trim();
    let matchFound = false;
    // Check against each instruction regex
    for (const instructionType in instructionRegexes) {
      if (instructionRegexes.hasOwnProperty(instructionType)) {
        if (instructionRegexes[instructionType].test(trimmedLine)) {
          matchFound = true;
          break;
        }
      }
    }
    if (!matchFound) {
      return false; // No matching instruction found, syntax error
    }
  }
  return true; // All lines match the instruction format
};

export const loadSettings = () => {
  let settings = {
    dataHazard: {
      control: true,
      data: true,
    },
    memorySize: 16,
  };
  if (localStorage.getItem("MIPS-Settings")) {
    settings = JSON.parse(localStorage.getItem("MIPS-Settings")!);
  } else {
    localStorage.setItem("MIPS-Settings", JSON.stringify(settings));
  }

  return settings;
};
