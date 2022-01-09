import axios from "axios";
const URI = "http://localhost:9000/trips";
const Query = {
  //ฟั่งชั่นที่จะไปดึงข้อมูลใน DB
  
  trips: async (parent, args, context, info) => {
    const { keyword } = args;
    if (keyword.length >= 50) throw new Error("ไม่ควรใช้คำค้นหาเยอะเกินไป !");

    //get all trips
    const data = await axios
      .get(URI)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    //return all trips ,if keyword == empty string .
    if (keyword.trim().toLowerCase() == "") return data;

    //find trips by keyword
    const searchData = data.filter((trip) => {
      return (
        trip.title
          .toLowerCase()
          .trim()
          .includes(keyword.toLowerCase().trim()) ||
        trip.description
          .toLowerCase()
          .trim()
          .includes(keyword.toLowerCase().trim()) ||
        trip.tags.reduce(
          (prev, cur) => prev || cur.toLowerCase().trim().includes(keyword),
          false
        )
      );
    });
    
    return searchData;
  },
};

export default Query;
