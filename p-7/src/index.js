import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Card1.css"
import "./Card2.css"
import "./Card3.css"
import Card4 from "./Card-4/Card4.js"


// CARD-1
const card1 = ReactDOM.createRoot(document.getElementById('root-1'));
card1.render(
  <React.StrictMode>
    <>
      <div className='card-1'>
        <div className='card-1-1'>
          <img src="https://dkstatics-public.digikala.com/digikala-products/909cfdc10ef07d8d541229026525fc60a91df42a_1718703751.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90" alt="" className="imgcard" />
          <h3>ساعت هوشمند ورنا</h3>
          <div className="price">
            <div className="price-1">
              <span>1.500.000</span>
              <span>تومان</span>
            </div>
            <div className="price-2">
              <span>55%</span>
            </div>
          </div>
        </div>
        <div className='card-1-1'>
          <img src="https://dkstatics-public.digikala.com/digikala-products/6ad3d5ffa3bdb0e4901d54a709038402a0dad584_1702367996.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90" alt="" className="imgcard" />
          <h3>ساعت هوشمند میبرو</h3>
          <div className="price">
            <div className="price-1">
              <span>1.350.000</span>
              <span>تومان</span>
            </div>
            <div className="price-2">
              <span>30%</span>
            </div>
          </div>
        </div>
        <div className='card-1-1'>
          <img src="https://dkstatics-public.digikala.com/digikala-products/1b3e627c79389e9f99bd355154bc317d21acc555_1727081471.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" className="imgcard" />
          <h3>ساعت هوشمند گلوریمی</h3>
          <div className="price">
            <div className="price-1">
              <span>1.890.000</span>
              <span>تومان</span>
            </div>
            <div className="price-2">
              <span>68%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  </React.StrictMode>
);

// CARD-2
const card2 = ReactDOM.createRoot(document.getElementById('root-2'));
card2.render(
  <React.StrictMode>
    {
      React.createElement("div", { className: "card-2" },
        React.createElement("img", { className: "imgcard2", src: "https://static.roocket.ir/images/cover/2023/12/1/bfXiSAuUHdHj6jI8sUsQx0j7MdTGRd3zF4O3Lyzc.jpg" }),
        React.createElement("h2", { className: "title" }, "آموزش CSS"),
        React.createElement("p", { className: "parag" }, "آموزش کامل CSS به صورت کامل و البته رایگان هدفی‌ست که ما در این دوره آموزشی دنبال می‌کنیم."),
        React.createElement("div", { className: "price" },
          React.createElement("span", { className: "free" }, "رایگان"),
          React.createElement("div", { className: "view" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon-tabler-heart-02", width: "44px", height: "44px", viewBox: "0 0 24 24", stroke: "#333", fill: "#fefefe" },
              React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              React.createElement("path", { d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" })
            ),
            React.createElement("span", { className: "view" }, "2550")
          )

        ),
        React.createElement("a", { className: "link" }, "افزودن به سبد خرید")
      )
    }
    {
      React.createElement("div", { className: "card-2" },
        React.createElement("img", { className: "imgcard2", src: "https://static.roocket.ir/images/cover/2024/3/14/qmLca1lqtoFe1kwJmBGe5lJ9ET17agVL2D8nQGwb.jpg" }),
        React.createElement("h2", { className: "title" }, "آموزش طراحی سایت"),
        React.createElement("p", { className: "parag" }, "آموزش کامل CSS به صورت کامل و البته رایگان هدفی‌ست که ما در این دوره آموزشی دنبال می‌کنیم."),
        React.createElement("div", { className: "price" },
          React.createElement("span", { className: "free" }, "رایگان"),
          React.createElement("div", { className: "view" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon-tabler-heart-02", width: "44px", height: "44px", viewBox: "0 0 24 24", stroke: "#333", fill: "#fefefe" },
              React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              React.createElement("path", { d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" })
            ),
            React.createElement("span", { className: "view" }, "2550")
          )

        ),
        React.createElement("a", { className: "link" }, "افزودن به سبد خرید")
      )
    }
    {
      React.createElement("div", { className: "card-2" },
        React.createElement("img", { className: "imgcard2", src: "https://static.roocket.ir/images/cover/2024/3/1/aE9nP6wnSnB9ib0M1Q6HelLDM2UZtBf1Bo5LAUhu.jpg" }),
        React.createElement("h2", { className: "title" }, "آموزش پیشرفته REACT"),
        React.createElement("p", { className: "parag" }, "آموزش کامل CSS به صورت کامل و البته رایگان هدفی‌ست که ما در این دوره آموزشی دنبال می‌کنیم."),
        React.createElement("div", { className: "price" },
          React.createElement("span", { className: "free" }, "رایگان"),
          React.createElement("div", { className: "view" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon-tabler-heart-02", width: "44px", height: "44px", viewBox: "0 0 24 24", stroke: "#333", fill: "#fefefe" },
              React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              React.createElement("path", { d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" })
            ),
            React.createElement("span", { className: "view" }, "2550")
          )

        ),
        React.createElement("a", { className: "link" }, "افزودن به سبد خرید")
      )
    }
  </React.StrictMode>
)
// CARD-3
const card3 = ReactDOM.createRoot(document.getElementById('root-3'));
let data = () => {
  return (
    <>
      <div className="card-3">
        <div className="product">
          <img src="https://dkstatics-public.digikala.com/digikala-products/52e08ef916c7fc164d3924a1d5c7726ecc5f7c3b_1711117458.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" />
          <h3>کوله پشتی برزنتی</h3>
          <a href="#">مشاهده مشخصات</a>
        </div>
        <div className="product">
          <img src="https://dkstatics-public.digikala.com/digikala-products/119587516.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" />
          <h3>کوله پشتی برزنتی</h3>
          <a href="#">مشاهده مشخصات</a>
        </div>
        <div className="product">
          <img src="https://dkstatics-public.digikala.com/digikala-products/9c9f1298e4138577ada2497629c014794f5f59d2_1689975219.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80" alt="" />
          <h3>کوله پشتی برزنتی</h3>
          <a href="#">مشاهده مشخصات</a>
        </div>
      </div>
    </>
  )
}
card3.render(
  <React.StrictMode>
    {data()}
  </React.StrictMode>
)

// CARD-4
const card4 = ReactDOM.createRoot(document.getElementById('root-4'));
card4.render(
  <React.StrictMode>
    <Card4 />
  </React.StrictMode>
)

