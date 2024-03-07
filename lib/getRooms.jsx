export const getRooms = async () => {
    try {
        const res = await fetch("http://localhost:5000/api/rooms");
        if (!res.ok) {
            throw new Error("Failed to fetch data!");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};