// npm install --save-dev prisma dotenv
import "dotenv/config";

export default {
  schema: "prisma/schema.prisma",
  out: "prisma/generated/client",
};
