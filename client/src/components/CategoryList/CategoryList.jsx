import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./categoryList.css";

const categoryList = [
  {
    url: "https://expatguideturkey.com/wp-content/uploads/2022/04/2022-turkey-abroad-concert-calendar.jpeg",
    title: "Müzik",
    events: 20,
  },
  {
    url: "https://i.guim.co.uk/img/media/c308350857416b8537c0a3b5442cffa3ca03ed31/0_0_2000_1334/master/2000.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=e0fe3fee7867364212cda02075d803c6",
    title: "Tiyatro",
    events: 10,
  },
  {
    url: "https://img.fanatik.com.tr/img/75/0x0/619fd86166a97ce2e534769d.jpg",
    title: "Spor",
    events: 14,
  },
  {
    url: "https://i.guim.co.uk/img/media/24b0e2a9f495c9844826afdffe46cafbf2b168f1/0_228_3500_2101/master/3500.jpg?width=700&quality=85&auto=format&fit=max&s=698b616ed07970392754e4032f3d5722",
    title: "Resim",
    events: 7,
  },
];

const CategoryList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("./events.json");
        const filtered = data.filter(
          (item) => item.category.toLowerCase() === "müzik"
        );
        setFilteredData(filtered);
        setLoading(false);
      } catch (error) {
        setError("Bir hata oluştu! Lütfen daha sonra tekrar deneyin");
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="categoryList">
      <h1 className="categoryListTitle">Kategoriler</h1>
      <div className="categoryListContent">
        {categoryList.map((item, index) => (
          <Link
            to={`/${item.title.toLowerCase()}`}
            className="categoryListItem"
            key={index}
          >
            <img src={item.url} alt={item.title} className="categoryListImg" />
            <div className="categoryListTitles">
              <h1>{item.title}</h1>
              <h1>{filteredData.length} etkinlik</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
