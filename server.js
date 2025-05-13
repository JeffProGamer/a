const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const API_KEY = "F5BBcd+Td0qFo42VK52I9z8y+k0igV3P1zL2e/Qzw6y+PLodZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaVlYTmxRWEJwUzJWNUlqb2lSalZDUW1Oa0sxUmtNSEZHYnpReVZrczFNa2s1ZWpoNUsyc3dhV2RXTTFBeGVrd3laUzlSZW5jMmVTdFFURzlrSWl3aWIzZHVaWEpKWkNJNklqRTFNVGs1TXprNE56Y2lMQ0poZFdRaU9pSlNiMkpzYjNoSmJuUmxjbTVoYkNJc0ltbHpjeUk2SWtOc2IzVmtRWFYwYUdWdWRHbGpZWFJwYjI1VFpYSjJhV05sSWl3aVpYaHdJam94TnpRMU16SXlOREUyTENKcFlYUWlPakUzTkRVek1UZzRNVFlzSW01aVppSTZNVGMwTlRNeE9EZ3hObjAuZVMtNGN6VUVwU1NhOUtieFBGd1B0TDhhYVBCckNUcUlMbWRVZnhxRlRfckd6dmpZdmpQV2dLNThNakozUWxOa25hTzk0S1dxLTU3YmxNcEsyUUpHNXB5eC1ldkVZMC1EWGFkLU9LUXU2UHlGaWh5QURtRUg4YzlMTS0tUHdkSUtSWFQwSUFfdzFFUzFrRzFzdTRfWjRpWF9qWGFoSjlMWXVVNlZZbkJYSWF5c1ZtdjkyZHJ1LU5QUW93NkIzSTJtZHROTmhiT0R1WDk4WEViS3JRUkdsaTlPWGxxdnVfN2IwUkdVaUEtd05rZG1nSTF5VzZBbWJOZUlxZElkVERvdk9LU21TUnlnSEVzN28zTkZpMXV1VWR6TkpvYzVMbGVGUnEyZ05WQjV5bzZmMFF4cEplUWE4ZTlJS2NUdHlNeWtLOTRZeVN2eXhvZ0pOQjBaZE90eFV3"; // Keep this secret!
const UNIVERSE_ID = "6742973974";
const TEMPLATE_PLACE_ID = "111761543733836";

app.post("/clone-place", async (req, res) => {
    const playerName = req.body.playerName;

    try {
        const response = await axios.post(
            `https://apis.roblox.com/universes/v1/${UNIVERSE_ID}/places`,
            {
                name: `Unnamed Level By ${playerName}`,
                description: `A personal level for ${playerName}`,
                rootPlaceId: TEMPLATE_PLACE_ID,
                isActive: true
            },
            {
                headers: {
                    "x-api-key": API_KEY,
                    "Content-Type": "application/json"
                }
            }
        );

        return res.json({ success: true, placeId: response.data.placeId });
    } catch (err) {
        console.error("❌ Error cloning place:", err.response?.data || err.message);
        return res.status(500).json({ success: false, error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌐 Server running on port ${PORT}`));
