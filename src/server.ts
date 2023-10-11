import { app } from "./app";

export const server = app.listen(3000, async () => {
    console.log("Server running on port 3000...");
});
