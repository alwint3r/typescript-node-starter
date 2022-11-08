import { config } from 'dotenv';

config();

async function main() {
  console.log("Hello world!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
