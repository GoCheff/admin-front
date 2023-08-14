import { execSync } from "child_process";
import dotenv from "dotenv";

const nodeEnv = process.env.NODE_ENV;

dotenv.config({
  path: `.env.${nodeEnv}`,
});

const username = process.env.DROPLET_USERNAME;
const ip = process.env.DROPLET_IP;
const sshKeyPath = process.env.SSH_KEY_PATH;

try {
  execSync("rm -r dist", { stdio: "inherit" });
} catch (error) {
  console.error("Erro ao remover a pasta dist");
}

const deployCommand = `npm run build && mv dist/index.html dist/index-admin.html && ssh -i ${sshKeyPath} ${username}@${ip} "sudo rm -r /var/www/html/assets-admin" && scp -i ${sshKeyPath} -r dist/* ${username}@${ip}:/var/www/html && ssh -i ${sshKeyPath} ${username}@${ip} "sudo service nginx restart"`;

try {
  execSync(deployCommand, { stdio: "inherit" });
  console.log("Deploy concluído com sucesso!");
} catch (error) {
  console.error("Erro ao executar o deploy:", error.message);
  process.exit(1);
}
