import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "!التوصيل مجانا لباب المنزل مع امكانيه اختيار وقت التوصيل والاستلام المناسب لك",
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          "امكانيه استرجاع المنتج والحصول على المبلغ المدفوع كاملا خلال 30 يوم من استلام المنتج",
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secured payment",
        text: "!نوفر لك طرق دفع امنه ومختلفه لاختيار الطريقه المناسبه لك",
      },
    ],
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map((item) => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <p className="mt-3 text-capitalize">{item.title}</p>
                  <div className="mt-3" style={{fontFamily:"Cairo"}}>{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: var(--primaryColor);
  .service-icon {
    font-size: 2.5rem;
    color: var(--mainWhite);
  }
  p {
    color: var(--mainWhite);

  }
`;
