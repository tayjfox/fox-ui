const { exec } = require('child_process');
const path = require('path');

// Path to the clean.sh script
const scriptPath = path.resolve(__dirname, 'clean.sh');

// Ensure the script has executable permissions
exec(`chmod +x ${scriptPath}`, (chmodError) => {
  if (chmodError) {
    console.error(`Error setting permissions: ${chmodError.message}`);
    return;
  }

  // Execute the shell script
  exec(`bash ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
});
