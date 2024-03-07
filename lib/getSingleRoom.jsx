
const getSingleRoom = async (id) => {
    try {
        const res = await fetch(`http://localhost:5000/api/rooms/${id}`)
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }

};

export default getSingleRoom;