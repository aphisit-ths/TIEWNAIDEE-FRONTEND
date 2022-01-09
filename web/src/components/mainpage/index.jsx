import React, { useState } from "react";
import Card from "../card";
import "./mainpage.scss";
import { motion } from "framer-motion/dist/framer-motion";
import Loader from "../loader/index";
import ErrorLoader from "../error-loader/error";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_TRIPS = gql`
  #define GQL Query
  query GET_TRIPS($keyword: String!) {
    trips(keyword: $keyword) {
      eid
      title
      url
      description
      photos
      tags
    }
  }
`;
export default function MainPage({ searchData, setSearchData }) {
  //Query trips
  const { data, loading, error } = useQuery(GET_TRIPS, {
    variables: { keyword: searchData },
  });

  if (error) return <ErrorLoader></ErrorLoader>;
  if (loading) return null;
  const { trips } = data;

  const shortcutKeywords = [
    "คาเฟ่",
    "ร้านกาแฟ",
    "จุดถ่ายรูป",
    "ต่างประเทศ",
    "กรุงเทพมหานคร",
    "ทะเล",
    "เกาะ",
    "ภูเขา",
  ];
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      className="mainpage"
    >
      <div className="content">
        {error && (<>
          <ErrorLoader></ErrorLoader>
        </>)}
        {trips.length === 0 && (
          <>
            <div className="modal-notfound">
              <Loader></Loader>
              <h2>ไม่พบทริปที่ตรงกับข้อความที่กรอกมา! โปรดลองไหม่อีกครั้ง </h2>
              <div className="shortcut-keyword">
                <h4> ค้นหาทันใจ : </h4>
                {shortcutKeywords.map((keyword, i) => (
                  <div className="keyword">
                    <p
                      onClick={(e) => {
                        setSearchData(keyword);
                        console.log(e.target.value);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      {keyword}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {trips.map((trip, idx) => (
          //display card of content
          <div key={idx}>
            <Card key={idx} data={trip} setSearchData={setSearchData}></Card>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
